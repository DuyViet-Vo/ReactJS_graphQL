// src/components/Register.js
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const REGISTER_MUTATION = gql`
  mutation Register($email: String!, $password: String!, $username: String!, $address: String!) {
    register(email: $email, password: $password, username: $username, address: $address) {
      token
    }
  }
`;

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    address: ''
  });
  const navigate = useNavigate();
  const [register, { data, loading, error }] = useMutation(REGISTER_MUTATION);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ variables: formData });
      if (response.data) {
        alert('Đăng ký thành công! Token: ' + response.data.register.token);
      }
    } catch (e) {
      console.error('Đăng ký thất bại!', e);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/'); // Chuyển hướng sang trang đăng ký
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          autoComplete="username"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          autoComplete="current-password"
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          autoComplete="address"
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
      <button type="button" onClick={handleLoginRedirect}>Login</button>
      {error && <p style={{ color: 'red' }}>Đăng ký thất bại!</p>}
      {data && <p style={{ color: 'green' }}>Đăng ký thành công!</p>}
    </form>
  );
}

export default Register;
