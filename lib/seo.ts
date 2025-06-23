import { Metadata } from 'next'

export const siteConfig = {
  name: "Evans Wanga",
  title: "Evans Wanga - Full-Stack Developer",
  description: "Full-Stack Developer crafting exceptional digital experiences with innovative frontend designs and robust backend architectures. Based in Nairobi, Kenya.",
  url: "https://evanswanga.dev",
  ogImage: "https://evanswanga.dev/og-image.jpg",
  links: {
    twitter: "https://twitter.com/wangaonly",
    github: "https://github.com/wangaevans",
    linkedin: "https://linkedin.com/in/evans-wanga",
    whatsapp: "https://wa.me/+254706344456",
  },
  creator: "Evans Wanga",
  keywords: [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Nairobi",
    "Software Engineer Kenya",
    "Portfolio Website",
    "Evans Wanga",
  ],
}

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  ...props
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} & Metadata = {}): Metadata {
  return {
    title,
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@ItsWangaKE",
      site: "@ItsWangaKE",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Add your verification tokens here
      // google: "your-google-verification-token",
      // yandex: "your-yandex-verification-token",
      // yahoo: "your-yahoo-verification-token",
    },
    ...props,
  }
}

// Page-specific metadata generators
export const pageMetadata = {
  home: () => constructMetadata({
    title: "Evans Wanga - Full-Stack Developer | Portfolio",
    description: "Welcome to my digital portfolio. I'm Evans Wanga, a Full-Stack Developer from Nairobi, Kenya, specializing in React, Next.js, and modern web technologies.",
  }),
  
  about: () => constructMetadata({
    title: "About Evans Wanga - Full-Stack Developer",
    description: "Learn about Evans Wanga, a passionate Full-Stack Developer from Nairobi, Kenya. Discover my journey, skills, and expertise in modern web development.",
  }),
  
  projects: () => constructMetadata({
    title: "Projects - Evans Wanga Portfolio",
    description: "Explore my portfolio of web development projects including React applications, Next.js websites, and full-stack solutions. See my work in action.",
  }),
  
  skills: () => constructMetadata({
    title: "Skills & Technologies - Evans Wanga",
    description: "Discover my technical skills and expertise in frontend and backend development, including React, Next.js, Node.js, TypeScript, and more.",
  }),
  
  contact: () => constructMetadata({
    title: "Contact Evans Wanga - Let's Build Something Amazing",
    description: "Get in touch with Evans Wanga for web development projects, collaborations, or consultations. Based in Nairobi, Kenya, available worldwide.",
  }),
  
  blog: () => constructMetadata({
    title: "Blog - Evans Wanga | Web Development Insights",
    description: "Read about web development, programming tips, and technology insights from Evans Wanga. Stay updated with the latest in full-stack development.",
  }),
}

// JSON-LD structured data generators
export const generatePersonJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Evans Wanga",
  jobTitle: "Full-Stack Developer",
  description: "Full-Stack Developer specializing in React, Next.js, and modern web technologies",
  url: siteConfig.url,
  image: siteConfig.ogImage,
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.github,
    siteConfig.links.linkedin,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "Kenya",
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Full-Stack Development",
    "Frontend Development",
    "Backend Development",
  ],
})

export const generateWebsiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  author: {
    "@type": "Person",
    name: "Evans Wanga",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
})