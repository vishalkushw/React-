import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
          <>
          <div id="nav">
          <Link to="home">Home</Link>
          <Link to="about"> About</Link>
          <Link to="services">Services</Link>
          <Link to="blog">Blog</Link>
           </div>
          <Outlet/>
          </>
    )
}
export default Layout;