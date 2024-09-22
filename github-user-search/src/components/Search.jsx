import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const query = {
        username,
        location,
        minRepos,
      };
      const data = await fetchUserData(query);
      setUsers(data.items); 
    } catch (err) {
      setError('Looks like we cant find the user.');
    }
    setLoading(false);
  };

  return (
    <div className="search-container p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Location (e.g., 'San Francisco')"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {users.length > 0 && (
        <div className="results mt-4">
          {users.map((user) => (
            <div key={user.id} className="user-card p-4 border border-gray-300 rounded mb-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <h3 className="font-semibold">{user.login}</h3>
              <p>{user.location || 'Location not available'}</p>
              <p>Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
