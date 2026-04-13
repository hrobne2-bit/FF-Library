export interface Character {
  id: string;
  name: string;
  skillName: string;
  skillDescription: string;
  lore: string;
  imageUrl: string;
  skillIconUrl: string;
  accentColor: 'cyan' | 'orange';
  gender: 'Male' | 'Female';
  skillType: 'Active' | 'Passive';
  age: number;
  skillStyle: 'Healing' | 'Speed' | 'Defense' | 'Information' | 'Offense';
  releaseDate: string; // ISO format for sorting
  assets: {
    wallpaperUrl: string;
    iconUrl: string;
  };
}
