import './Footer.css'


const Footer=()=> {
    return (
      <footer>
        <div className="footer-title">
          The Generics
        </div>
        <div className="footer-icons">
          <ul>
            <li><a href="https://www.youtube.com"><img src="src/components/img/youtube.jpg.jpg" alt="./img/youtube.jpg.jpg" /></a></li>
            <li><a href="https://spotify.com"><img src="./img/Spotify Logo.png" alt="./img/Spotifylogo.png" /></a></li>
            <li><a href="https://facebook.com"><img src="./img/Facebook Logo.png" alt="./img/Facebook Logo.png" /></a></li>
          </ul>
        </div>
      </footer>
    );
  }
  export default Footer;