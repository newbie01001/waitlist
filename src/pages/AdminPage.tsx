import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const navigate = useNavigate();

  const fetchData = async () => {
    if (!token) return;
    
    try {
      const config = {
        headers: { 'x-admin-token': token }
      };
      
      const [usersRes, businessesRes] = await Promise.all([
        axios.get('/api/admin/waitlist/users', config),
        axios.get('/api/admin/waitlist/businesses', config)
      ]);
      
      setUsers(usersRes.data);
      setBusinesses(businessesRes.data);
    } catch (error: any) {
      console.error('Failed to fetch data:', error);
      if (error?.response?.status === 401) {
        localStorage.removeItem('adminToken');
        setToken(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const password = (e.target as any).password.value;
    localStorage.setItem('adminToken', password);
    setToken(password);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Add fetchData to dependency array

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl mb-4">Admin Login</h2>
          <input
            type="password"
            name="password"
            placeholder="Enter admin password"
            className="w-full p-2 border rounded mb-4"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    );
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl mb-2">Total Shoppers</h2>
          <p className="text-3xl font-bold">{users.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl mb-2">Total Businesses</h2>
          <p className="text-3xl font-bold">{businesses.length}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl mb-4">Shoppers</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Location</th>
                <th className="p-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => (
                <tr key={user._id}>
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.location}</td>
                  <td className="p-4">{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl mb-4">Businesses</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr>
                <th className="p-4 text-left">Business Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Location</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {businesses.map((business: any) => (
                <tr key={business._id}>
                  <td className="p-4">{business.businessName}</td>
                  <td className="p-4">{business.email}</td>
                  <td className="p-4">{business.location}</td>
                  <td className="p-4">{business.businessType}</td>
                  <td className="p-4">{new Date(business.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;