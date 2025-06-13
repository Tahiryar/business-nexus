import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend call here (optional)
    alert('Registration successful!');
    navigate('/'); // Redirect to login page
  };

  const styles = {
    container: {
      margin: 0,
      padding: 0,
      fontFamily: 'Segoe UI, sans-serif',
      background: 'linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    registerBox: {
      width: '380px',
      padding: '40px',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      backdropFilter: 'blur(15px)',
      boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)',
      color: 'white',
      textAlign: 'center',
    },
    profileImg: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      marginBottom: '30px',
      border: '2px solid rgba(255,255,255,0.2)',
      objectFit: 'cover',
    },
    inputGroup: {
      position: 'relative',
      marginBottom: '20px',
      textAlign: 'left',
    },
    input: {
      width: '100%',
      padding: '10px 10px 10px 40px',
      background: 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      outline: 'none',
      borderRadius: '10px',
      color: 'white',
    },
    icon: {
      position: 'absolute',
      top: '50%',
      left: '10px',
      color: 'white',
      transform: 'translateY(-50%)',
    },
    registerBtn: {
      width: '100%',
      padding: '10px',
      background: 'linear-gradient(to right, #0072ff, #00c6ff)',
      border: 'none',
      borderRadius: '10px',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '10px',
    },
    loginText: {
      marginTop: '15px',
      color: '#00d4ff',
      fontSize: '0.9rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.registerBox}>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" style={styles.profileImg} />
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <i className="fa fa-user" style={styles.icon}></i>
            <input type="text" placeholder="Full Name" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <i className="fa fa-envelope" style={styles.icon}></i>
            <input type="email" placeholder="Email" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <i className="fa fa-lock" style={styles.icon}></i>
            <input type="password" placeholder="Password" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <i className="fa fa-lock" style={styles.icon}></i>
            <input type="password" placeholder="Confirm Password" required style={styles.input} />
          </div>
          <button type="submit" style={styles.registerBtn}>REGISTER</button>
        </form>
        <div style={styles.loginText}>
          Already have an account? <Link to="/" style={{ color: '#00c6ff' }}>Login</Link>
        </div>
      </div>
    </div>
  );
}

export default register;
