import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="https://content.osgnetworks.tv/photopacks/pennsylvania_natives_469878/469927_panatives4_hero_1200x800.jpg" className="sb-image"alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATAGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Match the Hatch</li>
                <li className="sidebarListItem">Seasonal Patterns</li>
                <li className="sidebarListItem">Fly-Tying Tips</li>
                <li className="sidebarListItem">Gear Review</li>
                <li className="sidebarListItem">Hot Locations</li>
                <li className="sidebarListItem">Fishing Techniques</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square fa-bounce"></i>
                <i className="sidebarIcon fab fa-twitter-square fa-shake"></i>
                <i className="sidebarIcon fab fa-instagram-square fa-bounce"></i>
            </div>
        </div>
    </div>
  )
}