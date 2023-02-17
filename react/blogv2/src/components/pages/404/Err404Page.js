import { Link } from "react-router-dom"
import './Err404Page.scss';

function Err404Page() {
    return (<div className="ErrorPage">
        <h1>Not found</h1>
        <p>The page you requestet could not be found.</p>
        <Link to='/'>Return to home page</Link>
    </div>)
}

export default Err404Page