import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (props) => (
  <footer className="footer">
    <div className="container content has-text-centered">
      <p>
        <FontAwesomeIcon icon={['far', 'hand-peace']} color="#00d1b2" size="2x" />
        <span className="am10">Built by <a href="/">Brandon Cox</a></span>
        <FontAwesomeIcon icon={['far', 'heart']} color="#00d1b2" size="2x" />
      </p>
      <p>
        <a className="am10" href="https://github.com/bc0x" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} color="#00d1b2" size="2x" />
        </a>
        <a className="am10" href="https://stackoverflow.com/story/brandon.cox" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'stack-overflow']} color="#00d1b2" size="2x" />
        </a>
        <a className="am10" href="https://www.linkedin.com/in/brandon-cox-1039116a/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} color="#00d1b2" size="2x" />
        </a>
      </p>
    </div>
  </footer>
)

export default Footer