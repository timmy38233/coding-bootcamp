import { useState } from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Blog from './Blog/Blog';

import './App.css';

function App() {

  const [loginState, setLoginState] = useState(() => {
    const loginState = JSON.parse(localStorage.getItem('loginState'));

    if (!loginState || !loginState.isLoggedIn) {
      return { isLoggedIn: false }
    }
    return loginState;
  });

  return (
    <div className="App">
      <Header mainAuthor="Tim" loginState={loginState} setLoginState={setLoginState} />
      <main className="App__Content">
        <Blog loginState={loginState} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
