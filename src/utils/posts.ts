import { parseFrontmatter } from './parse-frontmatter'
import { extractExcerpt } from './extract-excerpt'

export interface Post {
  slug: string
  title: string
  date: string
  category: string
  description: string
  content: string
}

export async function loadPosts(): Promise<Post[]> {
  const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' })

  const postPromises = Object.entries(modules).map(async ([path, loadModule]) => {
    const rawContent = await loadModule() as string
    const { data, content } = parseFrontmatter(rawContent)
    const slug = path.split('/').pop()?.replace('.md', '') || ''

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      category: data.category || 'General',
      description: data.description || extractExcerpt(content),
      content,
    }
  })

  const posts = await Promise.all(postPromises)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function loadPost(slug: string): Promise<Post | null> {
  try {
    const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' })
    const path = `../posts/${slug}.md`

    if (modules[path]) {
      const rawContent = await modules[path]() as string
      const { data, content } = parseFrontmatter(rawContent)

      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        category: data.category || 'General',
        description: data.description || extractExcerpt(content),
        content,
      }
    }

    return null
  } catch (error) {
    console.error('Error loading post:', error)
    return null
  }
}