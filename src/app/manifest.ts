import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://martinadams.dev";
  
  return {
    name: 'Martin Wang - Senior Software Engineer | Full Stack Developer Portfolio',
    short_name: 'Martin Wang',
    description: 'Martin Wang is a senior software engineer with 7+ years of experience specializing in React, Next.js, TypeScript, and full-stack web development. Explore portfolio projects, technical blog posts, and professional expertise.',
    start_url: '/',
    id: '/',
    display: 'standalone',
    display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
    background_color: '#000000',
    theme_color: '#000000',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-US',
    dir: 'ltr',
    prefer_related_applications: false,
    categories: [
      'business',
      'productivity',
      'technology',
      'developer',
      'education',
      'utilities'
    ],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
        purpose: 'any'
      },
      {
        src: '/icon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-120x120.png',
        sizes: '120x120',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-maskable-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    screenshots: [
      {
        src: '/screenshot-desktop.png',
        sizes: '1920x1080',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Martin Wang Portfolio - Desktop View'
      },
      {
        src: '/screenshot-mobile.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Martin Wang Portfolio - Mobile View'
      }
    ],
    shortcuts: [
      {
        name: 'Blog',
        short_name: 'Blog',
        description: 'Read technical blog posts',
        url: '/blog',
        icons: [
          {
            src: '/icon-blog-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      },
      {
        name: 'Projects',
        short_name: 'Projects',
        description: 'View portfolio projects',
        url: '/projects',
        icons: [
          {
            src: '/icon-projects-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      },
      {
        name: 'About',
        short_name: 'About',
        description: 'Learn about Martin Wang',
        url: '/about',
        icons: [
          {
            src: '/icon-about-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      }
    ],
    related_applications: [
      {
        platform: 'web',
        url: siteUrl,
        id: 'com.martinwang.portfolio'
      }
    ],
    // Advanced PWA features - uncomment when Next.js adds support
    // protocol_handlers: [{ protocol: 'web+portfolio', url: '/?project=%s' }],
    // file_handlers: [{ action: '/blog/new', accept: { 'text/markdown': ['.md', '.mdx'] } }],
    // share_target: { action: '/share', method: 'POST', enctype: 'multipart/form-data' },
    // launch_handler: { client_mode: ['navigate-existing', 'auto'] },
    // edge_side_panel: { preferred_width: 496 },
    // handle_links: 'preferred',
    // scope_extensions: [{ origin: siteUrl }]
  }
}