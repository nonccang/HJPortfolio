
import { WorkItem, GalleryItem } from './types';

export const GRAPHIC_WORKS: WorkItem[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `graphic-${i + 1}`,
  title: [
    "Vogue Reimagined", "Aura Branding", "Minimalist Type", "Heritage Studio",
    "Digital Nomad", "Urban Flow", "Velvet Identity", "Nordic Design",
    "Pixel Perfect", "Symmetry Series", "Bold Editorial", "Craft & Soul"
  ][i],
  category: "Graphic Design",
  year: "2024",
  thumbnail: `https://picsum.photos/seed/graphic${i}/800/1000`,
  description: "This project explores the intersection of classic typography and modern visual hierarchies. The goal was to create a timeless identity that resonates across both print and digital platforms while maintaining a high level of sophistication.",
  images: [
    `https://picsum.photos/seed/detail${i}a/1200/800`,
    `https://picsum.photos/seed/detail${i}b/1200/800`,
    `https://picsum.photos/seed/detail${i}c/1200/800`,
    `https://picsum.photos/seed/detail${i}d/1200/800`,
    `https://picsum.photos/seed/detail${i}e/1200/800`,
    `https://picsum.photos/seed/detail${i}f/1200/800`,
  ]
}));

export const MOTION_WORKS: WorkItem[] = Array.from({ length: 5 }).map((_, i) => ({
  id: `motion-${i + 1}`,
  title: ["Fluid Dynamics", "Neon Pulse", "Glitch Theory", "Abstract Motion", "Kinetic Branding"][i],
  category: "Motion/Animation",
  year: "2023",
  thumbnail: `https://picsum.photos/seed/motion${i}/800/600`,
  description: "Dynamic motion studies focusing on rhythmic transitions and emotional storytelling through movement. These animations were developed for high-end luxury brands seeking a modern digital presence.",
  images: [
    `https://picsum.photos/seed/mdetail${i}a/1200/800`,
    `https://picsum.photos/seed/mdetail${i}b/1200/800`,
    `https://picsum.photos/seed/mdetail${i}c/1200/800`,
    `https://picsum.photos/seed/mdetail${i}d/1200/800`,
    `https://picsum.photos/seed/mdetail${i}e/1200/800`,
  ]
}));

export const ILLUSTRATIONS: GalleryItem[] = Array.from({ length: 15 }).map((_, i) => ({
  id: `illu-${i}`,
  url: `https://picsum.photos/seed/illu${i}/${i % 2 === 0 ? '600/800' : '800/600'}`,
  title: `Illustration Piece #${i + 1}`
}));

export const PHOTOGRAPHY: GalleryItem[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `photo-${i}`,
  url: `https://picsum.photos/seed/photo${i}/${i % 3 === 0 ? '1000/600' : '600/900'}`,
  title: `Photo Moment #${i + 1}`
}));
