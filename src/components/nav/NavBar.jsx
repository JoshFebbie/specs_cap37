import "./nav.css";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="topLeft">
        <i className="navIcon fa-brands fa-square-facebook"></i>
        <i className="navIcon fa-brands fa-square-twitter"></i>
        <i className="navIcon fa-brands fa-square-instagram"></i>
        <i className="navIcon fa-brands fa-square-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="navList">
          <li className="navListItem">HOME</li>
          <li className="navListItem">ABOUT</li>
          <li className="navListItem">CONTACT</li>
          <li className="navListItem">WRITE</li>
          <li className="navListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img 
          src="https://www.grunge.com/img/gallery/sloths-tragic-real-life-story/intro-1529941807.jpg"
          alt="" className="topImg"
        />
       <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
