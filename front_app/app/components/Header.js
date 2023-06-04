// import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" to="/">NEWS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a to="/posts?page=1" className="nav-link">Post List</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/create">Create Post</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Header;