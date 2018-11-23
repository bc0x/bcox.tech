import Link from 'next/link'
import './../styles.scss'

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

      <section className="hero is-primary is-medium">
        <div className="hero-head">

          <nav className="navbar" role="navigation" aria-label="main navigation">
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

            <div id="main-nav" className={this.state.active ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-end">
                <Link href="/about">
                  <a onClick={this.toggleNav} className="navbar-item">about</a>
                </Link>
                <Link href="/blog">
                  <a onClick={this.toggleNav} className="navbar-item">blog</a>
                </Link>
                <a
                  className="navbar-item"
                  href="https://drive.google.com/file/d/1U4hC75pOoNTB1OG6f7knFa_HzYD5XVvi/view?usp=sharing"
                  target="_blank"
                  onClick={this.toggleNav}
                  rel="noopener noreferrer">
                  resume
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">bcox.tech</h1>
            <h2 className="subtitle">techie shit</h2>
          </div>
        </div>


      </section>
    )
  }
}

export default Menu