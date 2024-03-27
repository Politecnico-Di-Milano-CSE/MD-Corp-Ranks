import React, { useState } from 'react';
import SelectPreference from './selectPreference';
import ProceedButton from './proceedButton';
import './App.css';

//  Function to handle the form submission and display results on
interface PreferencesProps {
  savePreferences: (identityPreference: string, reviewPreference: string) => void;
}

//   Main component for handling user preferences input
const Preferences: React.FC<PreferencesProps> = ({ savePreferences }) => {
  const [identityPreference, setIdentityPreference] = useState<string>('');
  const [reviewPreference, setReviewPreference] = useState<string>('');

  // Check if both preferences are selected to enable the button
  const canProceed = identityPreference !== '' && reviewPreference !== '';

  // Event handlers that update state with user's current selection
  const handleIdentitySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newIdentityPreference = event.target.value;
    setIdentityPreference(newIdentityPreference);
    savePreferences(newIdentityPreference, reviewPreference);
  };

  // Event handlers that update state with user's current selection
  const handleReviewSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newReviewPreference = event.target.value;
    setReviewPreference(newReviewPreference);
    savePreferences(identityPreference, newReviewPreference);
  };

  const handleProceedClick = () => {
    savePreferences(identityPreference, reviewPreference);
  };

  return (
    <div className="preferences-container">
      <div className="header">
        <h1>JobSecrets.com</h1>
      </div>
      <div className="main-content">
        <h2>Welcome!</h2>
        <p>This website aims at....</p>
        {/* ...other content... */}
        <a href="/Certificazione Polimi.pdf" target="_blank" className="certification-link">
          Want to know more about our certification?
        </a>

        <SelectPreference
          label="Identity preference"
          options={[
            { value: 'Anonymous', description: 'Yes, I wanna stay ANONYMOUS' },
            { value: 'Public', description: 'Yes, I want my reviews to be CERTIFIED' }
          ]}
          onSelect={handleIdentitySelect}
        />
        <SelectPreference
          label="Review preference"
          options={[
            { value: 'Verified', description: 'Verified' },
            { value: 'NotVerified', description: 'Not verified' }
          ]}
          onSelect={handleReviewSelect}
        />
        <ProceedButton onClick={handleProceedClick} disabled={!canProceed} />
      </div>
    </div>
  );
};

export default Preferences;
