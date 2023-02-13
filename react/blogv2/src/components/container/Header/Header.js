import ColorSchemeCycler from "../ColorSchemeCycler/ColorSchemeCycler";
import Login from "../Login/Login";

function Header() {
    return (
        <header className="Header">
            <div className="Header__Container">
                <ColorSchemeCycler />
                <h1 className="Header__Greeting">Tim's Blog</h1>
                <Login />
            </div>
        </header>
    )
}

export default Header