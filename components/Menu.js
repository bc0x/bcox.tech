import Link from 'next/link'
import 'bulma/css/bulma.css'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false };
  }

  toggleNav = () => {
    this.setState(state => {
      return { active: !state.active }
    })
  }

  render() {
    return (
      <nav className="navbar is-white" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
              <div>bcox.tech</div>
            </a>
          </Link>

          <a 
            role="button" 
            className="navbar-burger burger" 
            aria-label="menu" 
            aria-expanded="false" 
            data-target="main-nav"
            onClick={this.toggleNav}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="main-nav" className={ this.state.active ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <Link href="/about">
              <a className="navbar-item">about</a>
            </Link>
            <a 
              className="navbar-item"
              href="https://drive.google.com/file/d/1U4hC75pOoNTB1OG6f7knFa_HzYD5XVvi/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer">
              resume
            </a>
            <Link href="/sandboxes">
              <a className="navbar-item">sandbox</a>
            </Link>
          </div>
        </div>
      </nav>)
  }
}

export default Menu