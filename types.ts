
export type ThemeMode = 'light' | 'dark';

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  description: string;
  images: string[];
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
}
