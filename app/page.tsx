export default function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h1>Hi, It's <span>Rendy Denny</span></h1>
          
          <h3 className="text-animation">I am <span></span></h3>
          
          <p>Seorang profesional keamanan siber yang berdedikasi untuk melindungi aset digital dari ancaman. Dengan keahlian dalam analisis ancaman, pengujian penetrasi, dan respons insiden, saya membangun pertahanan yang kuat untuk menjaga integritas dan kerahasiaan data.</p>
          
          <div className="social-icons">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-github"></i></a>
          </div>
          
          <div className="btn-group">
            <a href="#" className="btn">My CV</a>
            <a href="#" className="btn">Hire Me</a>
            <a href="#" className="btn">Contact Me</a>
          </div>
        </div>
        
        <div className="home-img">
          <video autoPlay loop muted playsInline src="/Profile.mp4"></video>
        </div>
      </section>
    </>
  );
}