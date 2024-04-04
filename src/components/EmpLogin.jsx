import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './EmpLogin.css';

const EmpLogin = () => {
    return ( 
        <div className="wrapper">
    <form action="">
      <h1>Employee Login</h1>
      <div className="input-box">
        <input type="text" placeholder='username' required/>
        <FaUser className="icon"/>

      </div>
      <div className="input-box">
        <input type="password" placeholder='password' required/>
        <FaLock className="icon"/>
      </div>
      <div className="remember-forgot">
          <label><input type="checkbox"/>remember me</label>
          <a href="#">Forgot password?</a>
      </div>
      <button type="submit">Login</button>
    </form>
   </div>
     );
}
 
export default EmpLogin;