import "./upbar.css"
import { Link } from "react-router-dom"
function Topbar() {
  return (
    <div className='top'>
      <div className="social-links">
        <a href="https://www.facebook.com"><i class="topIcon fab fa-facebook-square"></i></a>
        <a href="https://www.twitter.com"><i class="topIcon fab fa-twitter-square"></i></a>
        <a href="https://www.instagram.com"><i class="topIcon fab fa-instagram-square"></i></a>
        <a href="https://www.pinterest.com"><i class="topIcon fab fa-pinterest-square"></i></a>
      </div>
       <div className="nav-links">
       {/* <Link to="/">HOME</Link>
       <Link to="/write">WRITE</Link>
       <Link to="/logout">LOGOUT</Link> */}
      </div>
      <div className="top-right">
      <img src="./ai-image.jpg" alt="profile" id="profile-pic"/>
       <i class="fa-solid fa-search"></i>
      </div>
    </div>
  )
}


export default Topbar
