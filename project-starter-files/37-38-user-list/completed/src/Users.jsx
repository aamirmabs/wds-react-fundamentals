import { useEffect, useState } from 'react';

export const Users = () => {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Mounted");

    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const url = `https://jsonplaceholder.typicode.com/users`;
        const response = await fetch(url, { signal: abortController.signal });

        if (!response.ok) {
          throw new Error('Network error');
        }

        const data = await response.json();
        setUserList(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Fetch error:', error);
          setError(error.message);
        }
      }
    };

    fetchData();

    return () => {
      console.log("Unmounted");
      abortController.abort();
    };
  }, []);

  return (
    <>
      <h1>Users</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : userList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {userList.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};
