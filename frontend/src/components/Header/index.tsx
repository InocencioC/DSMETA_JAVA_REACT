import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta"/>
            <h1>DSMeta</h1>
            <p>
                Developed by
                <a href="https://github.com/InocencioC">@inocêncio.cordeiro</a>
            </p>
        </div>
    </header>
  
        )
  }
  
  export default Header
  