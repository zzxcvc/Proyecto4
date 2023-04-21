import Navbarra from "./Navbar"

const Layout = (props) => {

return(
    <main>
        <Navbarra />
        {props.children}

    </main>
)

}

export default Layout