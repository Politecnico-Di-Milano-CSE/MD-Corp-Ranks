import React, { ChangeEvent } from 'react';

interface SelectPreferenceProps {
  label: string;
  options: string[];
  onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectPreference: React.FC<SelectPreferenceProps> = ({ label, options, onSelect }) => {
    return (
      <div>
        <span>
          {label}:
          <select onChange={onSelect}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </span>
      </div>
    );
  };
  
  export default SelectPreference;
  