import { useContext } from "react"
import { Outlet } from "react-router-dom";
import { AppStateContext } from '../../../state/context';
import Header from "../../container/Header/Header";
import Footer from "../../components/Footer/Footer";

function LayoutPage() {
    const { appState } = useContext(AppStateContext);

    return (
        <div className="App">
            <Header theme={appState.colorScheme.name} />
            <main className={`App__Content App__Content--${appState.colorScheme.name}`}>
                <Outlet />
            </main>
            <Footer theme={appState.colorScheme.name} />
        </div>
    )
}

export default LayoutPage