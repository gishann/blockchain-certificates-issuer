import styles from './Login.module.css';
import React from 'react';
import { useComponentState } from './state';

export default function Login() {
  const { handleLoginFormSubmit } = useComponentState();

  return (
    <div>
      <div className={styles['form-logo']}>
        <img src={'/bg.png'} alt="" className={styles['logo']} />
      </div>

      <h1 className={styles['form-heading']}>Log In</h1>

      <form onSubmit={handleLoginFormSubmit}>
        <input
          placeholder="Enter your email"
          type="email"
          name="email"
          style={{
            padding: '7px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '15px',
            boxShadow: '0px 1px 0px #34eb64',
            outline: 'none',
          }}
        />
        <input
          placeholder="Enter your password"
          type="password"
          name="password"
          style={{
            padding: '7px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '15px',
            boxShadow: '0px 1px 0px #34eb64',
            outline: 'none',
          }}
        />
        <div style={{ textAlign: 'center' }}>
          <button className={styles['btn-signin']} type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
