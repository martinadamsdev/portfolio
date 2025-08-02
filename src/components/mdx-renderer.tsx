"use client";

import { useState, useEffect, ReactElement } from "react";
import { useMDXComponents } from "./mdx-components";

interface MDXRendererProps {
  source: string;
}

export default function MDXRenderer({ source }: MDXRendererProps): ReactElement {
  const [renderedContent, setRenderedContent] = useState<ReactElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!source?.trim()) {
      setRenderedContent(<div>No content available</div>);
      return;
    }
    
    // For now, render as formatted text until we can properly fix MDX
    const formattedContent = source
      .split('\n')
      .map((line, index) => {
        // Handle headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-4xl font-bold mb-6 mt-8">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-3xl font-semibold mb-4 mt-6">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-2xl font-semibold mb-3 mt-5">{line.slice(4)}</h3>;
        }
        if (line.startsWith('#### ')) {
          return <h4 key={index} className="text-xl font-semibold mb-2 mt-4">{line.slice(5)}</h4>;
        }
        
        // Handle bold text
        if (line.includes('**')) {
          const parts = line.split('**');
          return (
            <p key={index} className="mb-4 leading-relaxed">
              {parts.map((part, i) => 
                i % 2 === 1 ? <strong key={i} className="font-semibold">{part}</strong> : part
              )}
            </p>
          );
        }
        
        // Handle bullet points
        if (line.startsWith('- ')) {
          return <li key={index} className="mb-2">{line.slice(2)}</li>;
        }
        
        // Handle empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }
        
        // Regular paragraphs
        return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
      });
    
    setRenderedContent(<div>{formattedContent}</div>);
  }, [source]);
  
  if (error) {
    return (
      <div className="text-muted-foreground">
        <p>Error rendering content: {error}</p>
        <pre className="whitespace-pre-wrap mt-4 p-4 bg-muted rounded">{source}</pre>
      </div>
    );
  }
  
  return renderedContent || <div>Loading...</div>;
}