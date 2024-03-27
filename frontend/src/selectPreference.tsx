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
    <div className="select-container">
      <label className="select-label">
        {label}:
        <select className="select-box" onChange={onSelect}>
          <option value="">Select...</option> {/* Added for default selection */}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.description}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectPreference;
