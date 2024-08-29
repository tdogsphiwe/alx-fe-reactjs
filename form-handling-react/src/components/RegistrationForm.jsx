import React, { usestate } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState ('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const handleSUbmit = (e) => {
        e.preventDefault();

        let validationErrors = {};

        if (!username) {
            validationErrors.username = 'Username is required';
          }
      
          if (!email) {
            validationErrors.email = 'Email is required';
          }
      
          if (!password) {
            validationErrors.password = 'Password is required';
          }
      
          setErrors(validationErrors);
      
          if (Object.keys(validationErrors).length === 0) {

            console.log({ username, email, password });
          }

    };

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>} 
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
               {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
          </div>
          <button type="submit">Register</button>
        </form>
      );
    };
    
    export default RegistrationForm;
