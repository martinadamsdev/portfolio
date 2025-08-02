import { ComponentType } from 'react';

type MDXComponents = {
  [key: string]: ComponentType<any>;
};
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}