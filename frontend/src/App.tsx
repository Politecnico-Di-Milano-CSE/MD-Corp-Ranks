import React, { useState, useEffect } from 'react';
import Preferences from './Preferences';

const backendUrlAndPort = "http://localhost:8080";

const App: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [reviewAlreadyGiven, setReviewAlreadyGiven] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const response = await fetch(`${backendUrlAndPort}/api/register`, {
          method: 'GET',
          credentials: 'include', // For sending cookies with the request
        });

        if (response.ok) {
          const data = await response.json();
          setUserId(data.userId);
          setReviewAlreadyGiven(data.reviewAlreadyGiven);
        } else {
          // Handle HTTP error responses
          console.error("Error while checking user status: ", response.status);
        }
      } catch (error) {
        // Handle exceptions for network errors, etc.
        console.error('Error during user status check:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUserStatus();
  }, []);

  const savePreferences = async (identityPreference: string, reviewPreference: string) => {
    if (!userId) {
      console.error("No user ID found. Unable to save preferences.");
      return;
    }

    try {
      const response = await fetch(`${backendUrlAndPort}/api/preferences`, {
        method: 'POST',
        credentials: 'include', // For sending cookies with the request
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          identityPreference,
          reviewPreference,
        }),
      });

      if (response.ok) {
        alert('Your preferences were successfully saved!');
      } else {
        // Handle HTTP error responses
        console.error('Error while saving preferences: ', response.status);
      }
    } catch (error) {
      // Handle exceptions for network errors, etc.
      console.error('Error making API call:', error);
    }
  };

  // Loading state display
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display if the review has already been given
  if (reviewAlreadyGiven) {
    return <div>You have already given a review.</div>;
  }

  // Display Preferences if loading is done and review not given
  return (
    <Preferences savePreferences={savePreferences} />
  );
}

export default App;
