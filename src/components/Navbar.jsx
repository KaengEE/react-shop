import logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="https://react.dev" className="navbar-brand ms-1">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="/vite.svg" className="App-logo" alt="logo" />
        React
      </a>
    </nav>
  );
};

export default Navbar;
