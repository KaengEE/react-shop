import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <a href="https://react.dev" className="navbar-brand ms-1">
          <img src={logo} className="App-logo" alt="logo" />
          <img src="/vite.svg" className="App-logo" alt="logo" />
        </a>
        <div className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink to="/admin" className="nav-link">
              관리자
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              홈페이지
            </NavLink>
          </li>
        </div>
        <div className="navbar-nav ms-auto me-5">
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              로그인
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">
              가입하기
            </NavLink>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
