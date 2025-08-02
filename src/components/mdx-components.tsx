import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps, ComponentType } from 'react';

type MDXComponents = {
  [key: string]: ComponentType<any>;
};

// Define custom components for MDX
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom heading with anchor links
    h1: ({ children, ...props }) => (
      <h1 className="text-4xl font-bold mb-6 mt-8 text-foreground" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-3xl font-semibold mb-4 mt-6 text-foreground" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-5 text-foreground" {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4 className="text-xl font-semibold mb-2 mt-4 text-foreground" {...props}>
        {children}
      </h4>
    ),
    
    // Custom paragraph styling
    p: ({ children, ...props }) => (
      <p className="mb-4 leading-relaxed text-muted-foreground" {...props}>
        {children}
      </p>
    ),
    
    // Custom link styling
    a: ({ href, children, ...props }) => {
      // External links
      if (href?.startsWith('http')) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
            {...props}
          >
            {children}
          </a>
        );
      }
      
      // Internal links
      return (
        <Link
          href={href || ''}
          className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
          {...props}
        >
          {children}
        </Link>
      );
    },
    
    // Custom list styling
    ul: ({ children, ...props }) => (
      <ul className="mb-4 list-disc list-inside space-y-2 text-muted-foreground" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="mb-4 list-decimal list-inside space-y-2 text-muted-foreground" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="ml-4" {...props}>
        {children}
      </li>
    ),
    
    // Custom blockquote styling
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-primary pl-4 py-2 mb-4 italic text-muted-foreground bg-muted/50 rounded-r"
        {...props}
      >
        {children}
      </blockquote>
    ),
    
    // Custom code styling
    code: ({ children, ...props }) => (
      <code
        className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground"
        {...props}
      >
        {children}
      </code>
    ),
    
    // Custom pre (code block) styling
    pre: ({ children, ...props }) => (
      <pre
        className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm"
        {...props}
      >
        {children}
      </pre>
    ),
    
    // Custom image component
    img: ({ src, alt, ...props }: ComponentProps<'img'>) => (
      <div className="my-6">
        <Image
          src={src as string || ''}
          alt={alt || ''}
          width={800}
          height={400}
          className="rounded-lg"
        />
        {alt && (
          <p className="text-sm text-muted-foreground text-center mt-2 italic">
            {alt}
          </p>
        )}
      </div>
    ),
    
    // Custom table styling
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-border rounded-lg" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="border border-border px-4 py-2 bg-muted text-left font-semibold text-foreground"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="border border-border px-4 py-2 text-muted-foreground" {...props}>
        {children}
      </td>
    ),
    
    // Custom horizontal rule
    hr: ({ ...props }) => (
      <hr className="my-8 border-border" {...props} />
    ),
    
    // Custom strong/bold text
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-foreground" {...props}>
        {children}
      </strong>
    ),
    
    // Custom emphasis/italic text
    em: ({ children, ...props }) => (
      <em className="italic text-muted-foreground" {...props}>
        {children}
      </em>
    ),
    
    // Allow custom components to be overridden
    ...components,
  };
}