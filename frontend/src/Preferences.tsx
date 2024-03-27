import React, { useState, ChangeEvent } from 'react';
import './App.css';
import SelectPreference from './selectPreference';
import ProceedButton from './proceedButton';

interface PreferencesProps {
    savePreferences: (identityPreference: string, reviewPreference: string) => void;
}

const Preferences: React.FC<PreferencesProps> = ({ savePreferences }) => {
    const [identityPreference, setIdentityPreference] = useState<string>('Selection');
    const [reviewPreference, setReviewPreference] = useState<string>('Selection');

    // Check if both preferences are selected to enable the button
    const canProceed = identityPreference !== '' && reviewPreference !== '';

    // Event handlers
    const handleIdentitySelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const newIdentityPreference = event.target.value;
        setIdentityPreference(newIdentityPreference);
        savePreferences('identityPreference', newIdentityPreference); // Call savePreferences here
    };

    const handleReviewSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const newReviewPreference = event.target.value;
        setReviewPreference(newReviewPreference);
        savePreferences('reviewPreference', newReviewPreference); // Call savePreferences here
    };

    const handleProceedClick = () => {
        // Now we use the savePreferences function passed via props
        savePreferences(identityPreference, reviewPreference);
    };

    return (
        <div className="container">
            <div className="stuff">
                <h1 className="welcome-text">
                    Welcome to Multidisciplinary Project.....!
                </h1>
                The customer is very important, the customer will be followed by the customer. Let it be a very soft salad. Don't tell anyone who is going to decorate it. But a sad libero quis felis ultricies, the mouth of the quiver of the lake molestie. Complete as a sad pain. Some drink should be eu mauris and laoreet. Until the end of my life, it's a great lacinia, a wise young man. Curabitur is a price or not a laoreet, whether it is a regular course or a truck. Tomorrow the course becomes an element. The ship is not the biggest ship, but it is a lot of pregnant women.
                <div>
                    <h3>
                        Please select your preferences before you can proceed
                    </h3>
                    <SelectPreference
                        label="Identity preference"
                        options={[
                            { value: '', description: 'Selection' },
                            { value: 'Anonymous', description: 'Anonymous' },
                            { value: 'Publicly visible', description: 'Publicly visible' }
                        ]}
                        onSelect={handleIdentitySelect}
                    />
                    <SelectPreference
                        label="Review preference"
                        options={[
                            { value: '', description: 'Selection' },
                            { value: 'Verified', description: 'Verified' },
                            { value: 'Not verified', description: 'Not verified' }
                        ]}
                        onSelect={handleReviewSelect}
                    />
                    <ProceedButton onClick={handleProceedClick} disabled={!canProceed} />
                </div>
            </div>
        </div>
    );
};

export default Preferences;