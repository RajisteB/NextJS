import Link from 'next/link'
import Layout from './Layout.js';

const style = {
  nav: {
    backgroundColor: '#050818',
    color: '#FFFFFF'
  },
  links: {
    textDecoration: 'none',
    color: 'white',
    marginRight: '40px'
  },
  navLogin: {
    background: '#333333',
    color: '#FFFFFF',
    borderRadius: '4px',
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  hamburger: {
    color: '#FFFFFF'
  }
}

const Header = () => (
  <Layout>
    <nav className="navbar navbar-expand-lg" style={style.nav}>
      <Link href="/"><a className="navbar-brand" style={style.links}>Spireworks</a></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" style={style.hamburger}></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto my-2 my-lg-0">
          <li className="nav-item active">
            <Link href="/about">
              <a className="nav-link" style={style.links}>About</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/past">
              <a className="nav-link" style={style.links}>Past Events</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/installations">
              <a className="nav-link" style={style.links}>Installations</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/history">
              <a className="nav-link" style={style.links}>History</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/contact">
              <a className="nav-link" style={style.links}>Contact</a>
            </Link>
          </li>
          <li className="nav-item active">            
            <Link href="#">
              <a className="nav-link" style={style.navLogin}>Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </Layout>
)

export default Header