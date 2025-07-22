import { useEffect } from 'react';
import { TextureLoader } from 'three';
import  ProjectData  from '../Data/projects.json'; // Adjust path if needed

export function PreloadProjectTextures() {
  useEffect(() => {
    const loader = new TextureLoader();

    // Collect all unique images from your project data
    const imageList: string[] = [
      ...Object.values(ProjectData.webdev).map(p => p.image),
      ...Object.values(ProjectData.MLnResearch).map(p => p.image),
      ...Object.values(ProjectData.blackScreen).map(p => p.image),
      // Add other project types if any
    ];

    // Deduplicate just in case
    const uniqueImages = Array.from(new Set(imageList));

    // Preload each image
// const uniqueImages = Array.from(new Set(imageList));

  uniqueImages.forEach((src) => {
    // Ensure absolute path for loader
    const url = src.startsWith('/') ? `${window.location.origin}${src}` : src;

    loader.load(
      url,
      () => {
        // Success
        console.log(`Preloaded: ${url}`);
      },
      undefined,
      (err) => {
        console.warn(`Could not preload ${url}`, err);
      }
    );
  });
  }, []);

  return null; // This is just a headless preload component
}
