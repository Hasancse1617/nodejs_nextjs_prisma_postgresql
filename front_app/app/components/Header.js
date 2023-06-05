import Link from 'next/link';

const Header = () =>{
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" href="/">NEWS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/posts?page=1" className="nav-link">Post List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/create">Create Post</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Header;