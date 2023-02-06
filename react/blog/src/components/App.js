import Header from './Header/Header';
import Footer from './Footer/Footer';
import Blog from './Blog/Blog';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header mainAuthor="Tim" />
            <main className="App__Content">
                <Blog />
            </main>
            <Footer />
        </div>
    );
}

export default App;
