import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get('/admin/users').then(res => setUsers(res.data)).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {users.map(u => (
          <li key={u._id}>{u.email} – {u.role}</li>
        ))}
      </ul>
    </div>
  );
}
