import { useContext } from "react"
import { Outlet } from "react-router-dom";
import { AppStateContext } from "../../state/context"
import Header from "../../components/container/Header/Header"
import Footer from "../../components/components/Footer/Footer"

function LayoutPage() {
    const { appState } = useContext(AppStateContext);

    return (
        <div className="App">
            <Header theme={appState.colorScheme.name} />
            <Outlet />
            <Footer theme={appState.colorScheme.name} />
        </div>
    )
}

export default LayoutPage