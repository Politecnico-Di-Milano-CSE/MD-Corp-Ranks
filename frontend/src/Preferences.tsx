import { useState, ChangeEvent } from 'react';
import './App.css';
import SelectPreference from './selectPreference';
import ProceedButton from './proceedButton';

const Preferences = () => {
    const [identityPreference, setIdentityPreference] = useState('');
    const [reviewPreference, setReviewPreference] = useState('');

    // Check if both preferences are selected to enable the button
    const canProceed = identityPreference !== 'Selection' && reviewPreference !== 'Selection';

    // Event handlers
    const handleIdentitySelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setIdentityPreference(event.target.value);
    };

    const handleReviewSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setReviewPreference(event.target.value);
    };

    const handleProceedClick = () => {
        console.log('Proceed clicked with preferences:', identityPreference, reviewPreference);
    };

    return (
        <div className="container">
            <div className="stuff">
                <h1 className="welcome-text">
                    Welcome to Multidisciplinary Project.....!
                </h1>
                <p>
                The customer is very important, the customer will be followed by the customer. Let it be a very soft salad. Don't tell anyone who is going to decorate it. But a sad libero quis felis ultricies, the mouth of the quiver of the lake molestie. Complete as a sad pain. Some drink should be eu mauris and laoreet. Until the end of my life, it's a great lacinia, a wise young man. Curabitur is a price or not a laoreet, whether it is a regular course or a truck. Tomorrow the course becomes an element. The ship is not the biggest ship, but it is a lot of pregnant women.
                </p>
                <div>
                    <h3>
                        Please select your preferences before you can proceed
                    </h3>
                    <SelectPreference
                        label="Identity preference"
                        options={['Selection', 'Anonymous', 'Publicly visible']}
                        onSelect={handleIdentitySelect}
                    />
                    <SelectPreference
                        label="Review preference"
                        options={['Selection', 'Verified', 'Not verified']}
                        onSelect={handleReviewSelect}
                    />
                    <ProceedButton onClick={handleProceedClick} disabled={!canProceed} />
                </div>
            </div>
        </div>
    );
};

export default Preferences;
