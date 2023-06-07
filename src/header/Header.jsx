import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">FLY-FISHING</span>
        <span className="headerTitleLg">BLOG</span> */}
      <img src="/assets/re-logo2.png" alt="" className="logo" /> 
      </div>
      <img
        src="https://www.tu.org/wp-content/uploads/2021/03/streamerbrown.jpg"
        alt="" className="headerImg"
      />
    </div>
  );
}
