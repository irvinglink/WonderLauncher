import login_background from "./../assets/img/backgrounds/login.jpg";
import LoginContainer from "./../components/login/LoginContainer";

function LoginPage() {
  return <div>
    <img
      src={login_background}
      className="w-full h-full absolute object-cover -z-10"
      alt="Login Background "
    ></img>
    
    <LoginContainer />
  </div>;
}

export default LoginPage;
