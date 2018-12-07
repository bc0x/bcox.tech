import Link from "next/link";
import "./../styles.scss";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  toggleNav = () => {
    this.setState(state => {
      return { active: !state.active };
    });
  };

  render() {
    const { route } = this.props;
    const heroClass =
      route === "/"
        ? "hero is-primary is-medium has-text-centered"
        : "hero is-primary is-small has-text-centered";
    return (
      <section className={heroClass}>
        <div className="hero-head">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
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
                onClick={this.toggleNav}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>

            <div
              id="main-nav"
              className={
                this.state.active ? "navbar-menu is-active" : "navbar-menu"
              }
            >
              <div className="navbar-end">
                <Link href="/blog">
                  <a onClick={this.toggleNav} className="navbar-item">
                    blog
                  </a>
                </Link>
                <Link href="/static/brandoncox_resume_201808.pdf">
                  <a
                    className="navbar-item"
                    target="_blank"
                    onClick={this.toggleNav}
                    rel="noopener noreferrer"
                  >
                    resume
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                  Engineer, Traveler, &amp; Techie
                </h1>
                <h2 className="subtitle is-size-4-desktop">
                  Writing code and stuff.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
