// import {useState} from 'react';
import useInput from "../hooks/useInput";

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const usernameInput = useInput('alice');
  const passwordInput = useInput('');

  const submitHandler = (event) => {
    event.preventDefault();

    // console.log('the form submitted');
    alert(`you are trying to sign in as ${usernameInput.value} with password ${passwordInput.value}`);
  };

  return (
    <div>
      <h2>Login Below</h2>

      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input 
          value={usernameInput.value}
          onChange={usernameInput.onChange}
          onMouseOver={usernameInput.onMouseOver}
        />
        <br/>
        <label>Password</label>
        <input 
          // value={password}
          // onChange={(event) => setPassword(event.target.value)}
          { ...passwordInput }
          // onMouseOver={passwordInput.onMouseOver}
          // clear={passwordInput.clear}
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default Login;
