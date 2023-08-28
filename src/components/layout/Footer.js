import './Footer.css'
const Footer=()=> {
    return (
      <footer>
        <div className="footer-title">
          The Generics
        </div>
        <div className="footer-icons">
          <ul>
            <li><a href="https://www.youtube.com"><img src="src/components/img/youtube.jpg.jpg" alt="" /></a></li>
            <li><a href="https://spotify.com"><img src="src/components/img/Spotifylogo.png" alt="" /></a></li>
            <li><a href="https://facebook.com"><img src="src/components/img/Facebook Logo.png" alt="" /></a></li>
          </ul>
        </div>
      </footer>
    );
  }
  export default Footer;