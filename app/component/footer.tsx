const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a href="#"><i className="bi bi-facebook"></i></a>
        <a href="#"><i className="bi bi-twitter-x"></i></a>
        <a href="#"><i className="bi bi-instagram"></i></a>
        <a href="#"><i className="bi bi-linkedin"></i></a>
        <a href="#"><i className="bi bi-github"></i></a>
      </div>
      
      <ul className="list">
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Portfolio</a></li>
      </ul>
      
      <p className="copyright">Copyright &copy; 2024 Rendy</p>
    </footer>
  );
};

export default Footer;