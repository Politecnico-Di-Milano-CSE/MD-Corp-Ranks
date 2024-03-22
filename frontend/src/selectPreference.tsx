import React, { ChangeEvent } from 'react';

interface Option {
  value: string;
  description: string;
}

interface SelectPreferenceProps {
  label: string;
  options: Option[];
  onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectPreference: React.FC<SelectPreferenceProps> = ({ label, options, onSelect }) => {
  return (
    <div>
      <label>
        {label}:
        <select onChange={onSelect}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.description}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectPreference;