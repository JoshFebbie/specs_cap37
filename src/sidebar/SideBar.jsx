import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="https://www.fishhabitat.org/images/uploads/_medium/shutterstock_30046834.jpg" className="sb-image"alt="" />
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
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}