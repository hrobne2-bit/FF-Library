import { useState, useEffect } from 'react';
import { Character } from '../types';

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCharacters() {
      try {
        const response = await fetch('/chars/characters.json');
        if (!response.ok) {
          throw new Error(`Failed to load character list: ${response.status} ${response.statusText}`);
        }
        
        const text = await response.text();
        let ids: string[] = [];
        try {
          ids = JSON.parse(text);
        } catch (e) {
          throw new Error('Invalid JSON in characters.json');
        }
        
        if (!Array.isArray(ids)) {
          throw new Error('characters.json must be an array of strings');
        }

        const characterData = await Promise.all(
          ids.map(async (folderName) => {
            try {
              const infoRes = await fetch(`/chars/${folderName}/info.json`);
              if (!infoRes.ok) return null;
              const info = await infoRes.json();
              
              // Use folder name as the ID for routing
              const id = folderName;

              const ext = info.imageExt || 'png';
              const skillExt = info.skillExt || 'png';
              const wallExt = info.wallExt || 'png';
              const iconExt = info.iconExt || 'png';

              return {
                ...info,
                id,
                imageUrl: `/chars/${folderName}/character.${ext}`,
                skillIconUrl: `/chars/${folderName}/skill.${skillExt}`,
                assets: {
                  wallpaperUrl: `/chars/${folderName}/wallpaper.${wallExt}`,
                  iconUrl: `/chars/${folderName}/icon.${iconExt}`
                }
              } as Character;
            } catch (e) {
              console.error(`Error loading character ${folderName}:`, e);
              return null;
            }
          })
        );

        const validCharacters = characterData.filter((c): c is Character => c !== null);
        setCharacters(validCharacters);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();
  }, []);

  return { characters, loading, error };
}
