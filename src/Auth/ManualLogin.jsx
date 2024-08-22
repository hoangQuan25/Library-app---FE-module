// ManualLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the context

export const ManualLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function from context

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple authentication logic (replace this with real logic)
    const validUsername = 'nguyen.hoang.quan@sun-asterisk.com';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
      login(); // Set authentication state
      navigate('/home'); // Redirect to the home page on successful login
    } else {
      setError('Tên người dùng hoặc mật khẩu không đúng.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Đăng nhập</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="username">Tên người dùng</label>
                  <input
                    id="username"
                    type="email"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="password">Mật khẩu</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Ghi nhớ thông tin của tôi</label>
                </div>

                {error && <div className="alert alert-danger">{error}</div>}

                <button type="submit" className="btn btn-primary w-100">Đăng Nhập</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualLogin;
