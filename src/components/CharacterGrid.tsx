import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Filter, ChevronDown } from 'lucide-react';
import CharacterCard from './CharacterCard';
import { characters } from '../data/characters';

export default function CharacterGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    gender: 'All',
    skillType: 'All',
    skillStyle: 'All',
    ageRange: 'All'
  });
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredCharacters = useMemo(() => {
    return characters.filter(char => {
      const matchesSearch = char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          char.skillName.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesGender = filters.gender === 'All' || char.gender === filters.gender;
      const matchesSkillType = filters.skillType === 'All' || char.skillType === filters.skillType;
      const matchesSkillStyle = filters.skillStyle === 'All' || char.skillStyle === filters.skillStyle;
      
      let matchesAge = true;
      if (filters.ageRange === 'Under 20') matchesAge = char.age < 20;
      else if (filters.ageRange === '20-30') matchesAge = char.age >= 20 && char.age <= 30;
      else if (filters.ageRange === 'Over 30') matchesAge = char.age > 30;

      return matchesSearch && matchesGender && matchesSkillType && matchesSkillStyle && matchesAge;
    });
  }, [searchQuery, filters]);

  const loadMore = () => {
    if (visibleCount >= filteredCharacters.length) return;
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 4, filteredCharacters.length));
      setIsLoading(false);
    }, 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
        if (!isLoading && visibleCount < filteredCharacters.length) {
          loadMore();
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, visibleCount, filteredCharacters.length]);

  return (
    <section className="py-8">
      {/* Search & Filter Bar */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          {/* Google-Style Search Bar */}
          <div className="relative flex-1 w-full group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/20 group-focus-within:text-neon-yellow transition-colors">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search characters or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-base font-medium focus:outline-none focus:ring-4 focus:ring-neon-yellow/10 focus:border-neon-yellow/50 transition-all placeholder:text-white/10"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 right-4 flex items-center text-white/20 hover:text-white">
                <X size={18} />
              </button>
            )}
          </div>

          {/* Filter Toggle */}
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all font-black uppercase tracking-widest text-[10px] ${isFilterOpen ? 'bg-neon-yellow text-black border-neon-yellow' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
          >
            <Filter size={16} />
            FILTERS
            <ChevronDown size={16} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filter Options Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl"
            >
              <FilterGroup 
                label="Gender" 
                options={['All', 'Male', 'Female']} 
                value={filters.gender} 
                onChange={(v) => setFilters(f => ({ ...f, gender: v }))} 
              />
              <FilterGroup 
                label="Skill Type" 
                options={['All', 'Active', 'Passive']} 
                value={filters.skillType} 
                onChange={(v) => setFilters(f => ({ ...f, skillType: v }))} 
              />
              <FilterGroup 
                label="Age Range" 
                options={['All', 'Under 20', '20-30', 'Over 30']} 
                value={filters.ageRange} 
                onChange={(v) => setFilters(f => ({ ...f, ageRange: v }))} 
              />
              <FilterGroup 
                label="Skill Style" 
                options={['All', 'Healing', 'Speed', 'Defense', 'Information', 'Offense']} 
                value={filters.skillStyle} 
                onChange={(v) => setFilters(f => ({ ...f, skillStyle: v }))} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredCharacters.slice(0, visibleCount).map((char, index) => (
            <CharacterCard key={char.id} character={char} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {filteredCharacters.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-white/20 text-xl font-gaming uppercase tracking-widest">No characters found matching your criteria</p>
        </div>
      )}

      {isLoading && (
        <div className="mt-12 flex justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 border-4 border-neon-yellow/10 border-t-neon-yellow rounded-full"
          />
        </div>
      )}
    </section>
  );
}

function FilterGroup({ label, options, value, onChange }: { label: string, options: string[], value: string, onChange: (v: any) => void }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${value === opt ? 'bg-neon-yellow text-black' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
