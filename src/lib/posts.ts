import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { SITE } from '@/config/site';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string | null;
  tags: string[];
  image: string | null;
  published: boolean;
}

export interface PostData extends PostMeta {
  contentHtml: string;
}

function postFileNames(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));
}

function parseFile(fileName: string): { meta: PostMeta; content: string } {
  const slug = fileName.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const meta: PostMeta = {
    slug,
    title: typeof data.title === 'string' ? data.title : slug,
    date: typeof data.date === 'string' ? data.date : '',
    excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
    author: typeof data.author === 'string' ? data.author : SITE.name,
    category: typeof data.category === 'string' ? data.category : null,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    image: typeof data.image === 'string' ? data.image : null,
    published: data.published !== false,
  };
  return { meta, content };
}

/** All published posts, newest first. */
export function getAllPosts(): PostMeta[] {
  return postFileNames()
    .map((f) => parseFile(f).meta)
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Slugs of all published posts (for getStaticPaths). */
export function getAllPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

/** A single post with rendered HTML body. */
export async function getPostData(slug: string): Promise<PostData> {
  const { meta, content } = parseFile(`${slug}.md`);
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);
  return { ...meta, contentHtml: processed.toString() };
}
