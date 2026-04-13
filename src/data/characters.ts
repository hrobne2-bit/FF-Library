import { Character } from '../types';

export const characters: Character[] = [
  {
    id: '12',
    name: 'Sonia',
    skillName: 'Nano Lifeshield',
    skillDescription: 'After taking fatal damage, enters an invulnerable and immobile state for 0.5s.',
    lore: 'Sonia is a brilliant scientist who has dedicated her life to the study of nanotechnology. She has developed a powerful lifeshield that can protect her from even the most devastating attacks.',
    imageUrl: 'https://picsum.photos/seed/sonia/600/800',
    skillIconUrl: 'https://picsum.photos/seed/sonia-skill/100/100',
    accentColor: 'cyan',
    gender: 'Female',
    skillType: 'Passive',
    age: 25,
    skillStyle: 'Defense',
    releaseDate: '2023-06-01',
    assets: {
      wallpaperUrl: 'https://picsum.photos/seed/sonia-wall/1920/1080',
      iconUrl: 'https://picsum.photos/seed/sonia-icon/512/512'
    }
  },
  {
    id: '11',
    name: 'Orion',
    skillName: 'Crimson Crush',
    skillDescription: 'Replaces EP with 300 Crimson Energy. Consumes 150 Crimson Energy to activate protection.',
    lore: 'Orion is a man who was consumed by his own anger and hatred. He has the power to manipulate crimson energy, allowing him to protect himself.',
    imageUrl: 'https://picsum.photos/seed/orion/600/800',
    skillIconUrl: 'https://picsum.photos/seed/orion-skill/100/100',
    accentColor: 'orange',
    gender: 'Male',
    skillType: 'Active',
    age: 28,
    skillStyle: 'Defense',
    releaseDate: '2023-04-01',
    assets: {
      wallpaperUrl: 'https://picsum.photos/seed/orion-wall/1920/1080',
      iconUrl: 'https://picsum.photos/seed/orion-icon/512/512'
    }
  },
  {
    id: '10',
    name: 'Tatsuya',
    skillName: 'Rebel Rush',
    skillDescription: 'Dashes forward at a rapid speed for 0.3s. This skill can be accumulated for up to 2 uses.',
    lore: 'Tatsuya was a shy and quiet boy, but after a tragic accident, he became a rebel.',
    imageUrl: 'https://picsum.photos/seed/tatsuya/600/800',
    skillIconUrl: 'https://picsum.photos/seed/tatsuya-skill/100/100',
    accentColor: 'cyan',
    gender: 'Male',
    skillType: 'Active',
    age: 18,
    skillStyle: 'Speed',
    releaseDate: '2022-09-01',
    assets: {
      wallpaperUrl: 'https://picsum.photos/seed/tatsuya-wall/1920/1080',
      iconUrl: 'https://picsum.photos/seed/tatsuya-icon/512/512'
    }
  },
  {
    id: '9',
    name: 'Dimitri',
    skillName: 'Healing Heartbeat',
    skillDescription: 'Creates a 3.5m-diameter healing zone. Inside, users and allies recover 3HP/s.',
    lore: 'Dimitri is a world-renowned sound engineer and DJ. He has a deep passion for music and technology.',
    imageUrl: 'https://picsum.photos/seed/dimitri/600/800',
    skillIconUrl: 'https://picsum.photos/seed/dimitri-skill/100/100',
    accentColor: 'cyan',
    gender: 'Male',
    skillType: 'Active',
    age: 26,
    skillStyle: 'Healing',
    releaseDate: '2021-08-01',
    assets: {
      wallpaperUrl: 'https://picsum.photos/seed/dimitri-wall/1920/1080',
      iconUrl: 'https://picsum.photos/seed/dimitri-icon/512/512'
    }
  },
  {
    id: '8',
    name: 'Wukong',
    skillName: 'Camouflage',
    skillDescription: 'Turns into a bush, reducing movement speed by 20%, lasting for 15s. Cooldown resets on kill.',
    lore: 'Wukong is a monkey who looks like a human. He has the power to transform himself into anything he wants.',
    imageUrl: 'https://picsum.photos/seed/wukong/600/800',
    skillIconUrl: 'https://picsum.photos/seed/wukong-skill/100/100',
    accentColor: 'orange',
    gender: 'Male',
    skillType: 'Active',
    age: 30,
    skillStyle: 'Defense',
    releaseDate: '2019-01-01',
    assets: {
      wallpaperUrl: 'https://picsum.photos/seed/wukong-wall/1920/1080',
      iconUrl: 'https://picsum.photos/seed/wukong-icon/512/512'
    }
  },
  {
    id: '7',
    name: 'Skyler',
    skillName: 'Riptide Rhythm',
    skillDescription: 'Unleashes a sonic wave forward that damages Gloo Walls. Each Gloo Wall deployed will result in HP recovery.',
    lore: 'Skyler is a CEO of the largest entertainment company in Vietnam.',
    imageUrl: 'https://picsum.photos/seed/skyler/600/800',
    skillIconUrl: 'https://picsum.photos/seed/skyler-skill/100/100',
    accentColor: 'cyan',
    gender: 'Male',
    skillType: 'Active',
    age: 26,
    skillStyle: 'Offense',
    releaseDate: '2021-03-01',
    assets: {
      wallpaperUrl: 'https://picsum.photos/seed/skyler-wall/1920/1080',
      iconUrl: 'https://picsum.photos/seed/skyler-icon/512/512'
    }
  },
  {
    id: '6',
    name: 'K',
    skillName: 'Master of All',
    skillDescription: 'Max EP increases by 50. Jiu-jitsu Mode: Allies within 6m get 500% increase in EP conversion rate.',
    lore: 'K was a professor of psychology and a jiu-jitsu master.',
    imageUrl: 'https://picsum.photos/seed/k-character/600/800',
    skillIconUrl: 'https://picsum.photos/seed/k-skill/100/100',
    accentColor: 'orange',
    gender: 'Male',
    skillType: 'Active',
    age: 31,
    skillStyle: 'Healing',
    releaseDate: '2020-10-01',
    assets: {
      wallpaperUrl: 'https://picsum.photos/seed/k-wall/1920/1080',
      iconUrl: 'https://picsum.photos/seed/k-icon/512/512'
    }
  },
  {
    id: '5',
    name: 'Hayato',
    skillName: 'Bushido',
    skillDescription: 'With every 10% decrease in maximum HP, armor penetration increases by 10%.',
    lore: 'Hayato is a kid from a legendary Samurai family.',
    imageUrl: 'https://picsum.photos/seed/hayato/600/800',
    skillIconUrl: 'https://picsum.photos/seed/hayato-skill/100/100',
    accentColor: 'orange',
    gender: 'Male',
    skillType: 'Passive',
    age: 20,
    skillStyle: 'Offense',
    releaseDate: '2019-03-01',
    assets: {
      wallpaperUrl: 'https://picsum.photos/seed/hayato-wall/1920/1080',
      iconUrl: 'https://picsum.photos/seed/hayato-icon/512/512'
    }
  },
  {
    id: '4',
    name: 'Moco',
    skillName: 'Hacker\'s Eye',
    skillDescription: 'Tags enemies that Moco shot for 5s. Info will be shared with teammates.',
    lore: 'Moco, the legend of the Cyber World.',
    imageUrl: 'https://picsum.photos/seed/moco/600/800',
    skillIconUrl: 'https://picsum.photos/seed/moco-skill/100/100',
    accentColor: 'cyan',
    gender: 'Female',
    skillType: 'Passive',
    age: 20,
    skillStyle: 'Information',
    releaseDate: '2019-01-01',
    assets: {
      wallpaperUrl: 'https://picsum.photos/seed/moco-wall/1920/1080',
      iconUrl: 'https://picsum.photos/seed/moco-icon/512/512'
    }
  },
  {
    id: '3',
    name: 'Chrono',
    skillName: 'Time Turner',
    skillDescription: 'Creates an impenetrable force field that blocks 800 damage. Movement speed increases by 10%.',
    lore: 'Chrono is a bounty hunter from another dimension.',
    imageUrl: 'https://picsum.photos/seed/chrono/600/800',
    skillIconUrl: 'https://picsum.photos/seed/chrono-skill/100/100',
    accentColor: 'cyan',
    gender: 'Male',
    skillType: 'Active',
    age: 35,
    skillStyle: 'Defense',
    releaseDate: '2020-12-01',
    assets: {
      wallpaperUrl: 'https://picsum.photos/seed/chrono-wall/1920/1080',
      iconUrl: 'https://picsum.photos/seed/chrono-icon/512/512'
    }
  },
  {
    id: '2',
    name: 'Kelly',
    skillName: 'Dash',
    skillDescription: 'Sprinting speed increased by 6%. Awakening: Increases damage of the first shot after sprinting.',
    lore: 'Kelly is a high-school sprinter.',
    imageUrl: 'https://picsum.photos/seed/kelly/600/800',
    skillIconUrl: 'https://picsum.photos/seed/kelly-skill/100/100',
    accentColor: 'orange',
    gender: 'Female',
    skillType: 'Passive',
    age: 17,
    skillStyle: 'Speed',
    releaseDate: '2018-01-01',
    assets: {
      wallpaperUrl: 'https://picsum.photos/seed/kelly-wall/1920/1080',
      iconUrl: 'https://picsum.photos/seed/kelly-icon/512/512'
    }
  },
  {
    id: '1',
    name: 'Alok',
    skillName: 'Drop the Beat',
    skillDescription: 'Creates a 5m aura that increases moving and sprinting speed by 15% and restores 5 HP/s for 10s.',
    lore: 'Alok is a world famous DJ, ready to drop a beat.',
    imageUrl: 'https://picsum.photos/seed/alok/600/800',
    skillIconUrl: 'https://picsum.photos/seed/alok-skill/100/100',
    accentColor: 'cyan',
    gender: 'Male',
    skillType: 'Active',
    age: 28,
    skillStyle: 'Healing',
    releaseDate: '2019-11-01',
    assets: {
      wallpaperUrl: 'https://picsum.photos/seed/alok-wall/1920/1080',
      iconUrl: 'https://picsum.photos/seed/alok-icon/512/512'
    }
  }
];
