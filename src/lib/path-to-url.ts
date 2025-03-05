import { compile } from 'path-to-regexp';

export const pathToUrl = (path: string, params: Record<string, string>) => {
  try {
    const toPath = compile(path);
    
    return toPath(params);
  } catch (error) {
    console.error(error);

    return path;
  }
};
