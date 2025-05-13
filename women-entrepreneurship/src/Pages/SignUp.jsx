import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({ email: '', name: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    console.log('Submitting signup with data:', formData);
    try {
      const response = await axios.post('http://localhost:8000/api/auth/signup', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Signup response:', response.data);
      if (!response.data.token) {
        throw new Error('No token received from the server');
      }
      localStorage.setItem('token', response.data.token);
      navigate('/shop');
    } catch (err) {
      console.error('Signup error:', err);
      console.error('Error details:', {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      });
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        'Signup failed due to an unknown error. Please check the console for details.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="welcome-banner">
          <h1>Join Our Fabulous Community!</h1>
          <p>Create your account and start your shop journey today.</p>
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
          <h3>Sign Up</h3>
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              aria-label="Name"
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              aria-label="Email"
            />
          </div>
          <div className="input-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Your Password"
              required
              aria-label="Password"
            />
            <i
              className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
              onClick={togglePasswordVisibility}
              title={showPassword ? 'Hide Password' : 'Show Password'}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && togglePasswordVisibility()}
            ></i>
          </div>
          <button type="submit" disabled={loading}>
            <i className="fas fa-user-plus"></i> Sign Up
          </button>
        </form>
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        <p className="login-link">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;