import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    obtainToken(username: $username, password: $password) {
      token
      user {
        id
        email
        username
      }
    }
  }
`;

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate(); // Hook dùng để chuyển hướng

  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ variables: formData });
      if (response.data) {
        alert('Đăng nhập thành công! Token: ' + response.data.obtainToken.token);
        localStorage.setItem('token', response.data.obtainToken.token);
      }
    } catch (e) {
      console.error('Đăng nhập thất bại!', e);
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Chuyển hướng sang trang đăng ký
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
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <button type="button" onClick={handleRegisterRedirect}>
          Register
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>Đăng nhập thất bại!</p>}
      {data && <p style={{ color: 'green' }}>Đăng nhập thành công!</p>}
    </form>
  );
}

export default Login;