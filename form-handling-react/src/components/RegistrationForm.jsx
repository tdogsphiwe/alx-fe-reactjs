import React, { usestate } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState ('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const handleSUbmit = (e) => {
        e.preventDefault();
        if(usename && email && password){
            console.log('Form SUbmitted' ,{ username, email, password});
        }else{
            console.log('Please fill in all fields');
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
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      );
    };
    
    export default RegistrationForm;
