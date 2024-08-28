import React from 'react';
import Button from '../atoms/Buttons';

interface FilterButtonsProps {
  languages: string[];
  filterByLanguage: (language: string | null) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ languages, filterByLanguage }) => (
  <div style={{ marginBottom: '20px' }}>
    <Button onClick={() => filterByLanguage(null)}>All</Button>
    {languages.map((language) => (
      <Button
        key={language}
        onClick={() => filterByLanguage(language)}
        style={{ marginLeft: '10px' }}
      >
        {language}
      </Button>
    ))}
  </div>
);

export default FilterButtons;
