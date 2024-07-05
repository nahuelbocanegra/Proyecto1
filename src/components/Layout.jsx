
import NavMenu from "./NavMenu"
import AppFooter from "./AppFooter"

function Layout({children}){
  

    return (
      <div>
        <NavMenu></NavMenu>
        {children}
        <AppFooter></AppFooter>
      </div>
    );

}

export default Layout;