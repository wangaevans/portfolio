// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://evanswanga.dev' // Replace with your domain
  const currentDate = new Date()

  // Static routes - update these based on your actual routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  return staticRoutes
}

// Alternative dynamic sitemap if you have dynamic routes
// app/sitemap-dynamic.ts (rename to sitemap.ts to use)
/*
import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Function to get all route files from app directory
function getRoutes(dir: string, baseDir: string = ''): string[] {
  const routes: string[] = []
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory() && !file.startsWith('_') && !file.startsWith('.')) {
      // Check if directory has page.tsx or page.ts
      const pagePath = path.join(filePath, 'page.tsx')
      const pagePathTs = path.join(filePath, 'page.ts')
      
      if (fs.existsSync(pagePath) || fs.existsSync(pagePathTs)) {
        const route = path.join(baseDir, file).replace(/\\/g, '/')
        routes.push(route === '' ? '/' : `/${route}`)
      }

      // Recursively check subdirectories
      routes.push(...getRoutes(filePath, path.join(baseDir, file)))
    }
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://evanswanga.dev' // Replace with your domain
  const currentDate = new Date()
  
  // Get all routes from app directory
  const appDir = path.join(process.cwd(), 'app')
  const routes = getRoutes(appDir)

  // Define priority and change frequency for different route types
  const getRouteConfig = (route: string) => {
    if (route === '/') {
      return { priority: 1, changeFrequency: 'monthly' as const }
    } else if (route.includes('/projects')) {
      return { priority: 0.9, changeFrequency: 'weekly' as const }
    } else if (route.includes('/blog')) {
      return { priority: 0.8, changeFrequency: 'weekly' as const }
    } else if (route.includes('/about') || route.includes('/contact')) {
      return { priority: 0.8, changeFrequency: 'monthly' as const }
    } else if (route.includes('/privacy') || route.includes('/terms')) {
      return { priority: 0.3, changeFrequency: 'yearly' as const }
    } else {
      return { priority: 0.5, changeFrequency: 'monthly' as const }
    }
  }

  return routes.map(route => {
    const config = getRouteConfig(route)
    return {
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    }
  })
}
*/

// Enhanced sitemap with project and blog post URLs
// app/sitemap-enhanced.ts (rename to sitemap.ts to use)
/*
import { MetadataRoute } from 'next'

// If you have dynamic content (projects, blog posts), fetch them here
async function getProjects() {
  // Replace with your actual data fetching logic
  // This could be from a CMS, database, or static files
  const projects = [
    { slug: 'afch-church-website', lastModified: '2024-01-15' },
    { slug: 'my-blog', lastModified: '2024-02-01' },
    { slug: 'ecommerce-platform', lastModified: '2024-01-20' },
    { slug: 'portfolio-dashboard', lastModified: '2024-01-10' },
  ]
  
  return projects
}

async function getBlogPosts() {
  // Replace with your actual blog posts fetching logic
  const posts = [
    { slug: 'getting-started-with-nextjs', lastModified: '2024-02-15' },
    { slug: 'modern-react-patterns', lastModified: '2024-02-10' },
    { slug: 'full-stack-development-tips', lastModified: '2024-02-05' },
  ]
  
  return posts
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://evanswanga.dev' // Replace with your domain
  const currentDate = new Date()

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Dynamic project routes
  const projects = await getProjects()
  const projectRoutes: MetadataRoute.Sitemap = projects.map(project => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.lastModified),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Dynamic blog post routes
  const blogPosts = await getBlogPosts()
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
*/