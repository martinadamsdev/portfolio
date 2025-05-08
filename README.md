# Personal Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and MDX. This portfolio showcases your projects and blog posts, which you can easily write locally in Markdown.

## Features

- 🎨 Modern and clean design with dark/light mode
- 📱 Fully responsive layout
- 📝 Blog support with MDX
- 🚀 Built with Next.js 14 and React 18
- 💻 TypeScript for type safety
- 🎯 SEO optimized
- ⚡ Fast page loads with static generation
- 🎨 Styled with Tailwind CSS
- 🔍 Syntax highlighting for code blocks
- 📦 Easy to customize and extend

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

1. Update the metadata in `src/app/layout.tsx`
2. Modify the content in `src/app/page.tsx`
3. Update the about page in `src/app/about/page.tsx`

### Projects

1. Add your projects in `src/content/projects/`
2. Each project should be a markdown file with frontmatter:
   ```markdown
   ---
   title: Project Name
   description: Project description
   date: 2024-03-20
   tags: [react, nextjs, typescript]
   image: /images/projects/project-name.png
   ---
   ```

### Blog Posts

1. Add your blog posts in `src/content/blog/`
2. Each post should be a markdown file with frontmatter:
   ```markdown
   ---
   title: Blog Post Title
   description: Blog post description
   date: 2024-03-20
   tags: [react, nextjs, typescript]
   ---
   ```

### Styling

The portfolio uses Tailwind CSS for styling. You can customize the theme in:

- `tailwind.config.ts` - Theme configuration
- `src/app/globals.css` - Global styles and CSS variables

## Deployment

The portfolio is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
