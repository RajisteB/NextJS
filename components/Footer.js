import Link from 'next/link'

const Footer = () => (
  <div className="footer">
    <nav className="navbar">
      <div className="brand">
        <Link href="/">
          <a>Durst</a>
        </Link>
      </div>
      <div className="terms">
        <Link href="/">
          <a>Terms</a>
        </Link>
        <Link href="/">
          <a>Privacy</a>
        </Link>
        <Link href="/">
          <a>FAQ</a>
        </Link>
      </div>
      <div className="copyright">
        <i className="fab fa-twitter fa-lg"></i>&nbsp;&nbsp;&copy;&nbsp;2019&nbsp;Spireworks
      </div>
    </nav>
  </div>
)

export default Footer;