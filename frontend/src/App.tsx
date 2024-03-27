import { useState, useEffect } from 'react';
import Preferences from './Preferences';

const backendUrlAndPort = "http://localhost:8080";

const App = () => {
  const [userId, setUserId] = useState<string>('');
  const [reviewAlreadyGiven, setReviewAlreadyGiven] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const response = await fetch(`${backendUrlAndPort}/api/register`, {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setUserId(data.userId);
          setReviewAlreadyGiven(data.reviewAlreadyGiven);
        } else {
          console.log("Error while checking user status");
        }
      } catch (error) {
        console.error('Error during user status check:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUserStatus();
  }, []);

  const savePreferences = async (preferenceType: string, preferenceValue: string) => {
    if (!userId) return;

    try {
      const response = await fetch(`${backendUrlAndPort}/api/preferences`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          preferenceType,
          preferenceValue
        }),
      });

      if (response.ok) {
        alert('Your preferences were successfully saved!');
      } else {
        console.log('Error while saving preferences');
      }
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (reviewAlreadyGiven) {
    return <div>You have already given a review.</div>;
  }

  return (
    <Preferences savePreferences={savePreferences} />
  );
}

export default App;
