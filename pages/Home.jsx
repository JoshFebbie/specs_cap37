import Header from "../src/components/header/Header"
import Posts from "../src/components/posts/Posts"
import Sidebar from "../src/components/sidebar/SideBar"
import "./home.css"

export default function Home() {
  return (
    <>
      <Header />
    <div className="home">
      <Posts />
      <Sidebar/>
    </div>
    </>
  )
}