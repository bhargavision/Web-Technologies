import React, { useState, useEffect } from 'react';
import './ApiDataFetcher.css';

const ApiDataFetcher = () => {
  // State management
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data on component mount (runs only once - empty dependency array)
  useEffect(() => {
    fetchUsers();
  }, []); // Empty dependency array = runs once on mount

  // API call with async/await and proper error handling
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      if (!response.ok) {
        throw new Error(HTTP error! status: ${response.status});
      }

      const data = await response.json();
      
      // Simulate network delay for demo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  // Refresh data handler
  const handleRefresh = () => {
    fetchUsers();
  };

  // User Item Component (Separation of concerns)
  const UserCard = ({ user }) => (
    <div className="user-card">
      <div className="user-avatar">
        {user.name.charAt(0).toUpperCase()}
      </div>
      <div className="user-info">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-username">@{user.username}</p>
        <p className="user-email">{user.email}</p>
        <p className="user-company">{user.company.name}</p>
      </div>
    </div>
  );

  return (
    <div className="api-fetcher">
      <div className="header">
        <h1>Users Directory</h1>
        <p>Fetched from JSONPlaceholder API ({users.length} users)</p>
        <button 
          onClick={handleRefresh}
          className="refresh-btn"
          disabled={loading}
        >
          {loading ? 'Loading...' : '🔄 Refresh'}
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading users data...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="error-container">
          <h3>❌ Error</h3>
          <p>{error}</p>
          <button onClick={handleRefresh} className="retry-btn">
            Try Again
          </button>
        </div>
      )}

      {/* Success State - List Rendering */}
      {!loading && !error && (
        <div className="users-grid">
          {users.map(user => (
            <UserCard 
              key={user.id}  // Unique key for list reconciliation
              user={user}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ApiDataFetcher;