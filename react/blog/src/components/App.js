import React, { useEffect, useRef, useState } from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Blog from './Blog/Blog';

import './App.css';

function App() {

  const appRef = useRef();

  const colorSchemes = ['colorful', 'light', 'dark', 'random'];
  const [colorScheme, setColorScheme] = useState(() => {
    const colorScheme = localStorage.getItem('colorScheme');

    if (!colorScheme) {
      return colorSchemes[0];
    }
    return colorScheme;
  });

  const cycleColorScheme = (e) => {
    setColorScheme(colorSchemes[(colorSchemes.indexOf(colorScheme) + 1) % colorSchemes.length]);
  }

  useEffect(() => {
    localStorage.setItem('colorScheme', colorScheme);
    const randomColor = (colorScheme === 'random') ? { r: Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256) } : {};
    appRef.current.style = (colorScheme === 'random') ? `--random-background-color: rgb(${randomColor.r}, ${randomColor.g}, ${randomColor.b}); --random-color: rgb(${255 - randomColor.r}, ${255 - randomColor.g}, ${255 - randomColor.b})` : '';
  }, [colorScheme])


  const [loginState, setLoginState] = useState(() => {
    const loginState = JSON.parse(localStorage.getItem('loginState'));

    if (!loginState || !loginState.isLoggedIn) {
      return { isLoggedIn: false }
    }
    return loginState;
  });

  return (
    <div className="App" ref={appRef}>
      <Header mainAuthor="Tim" loginState={loginState} setLoginState={setLoginState} colorScheme={colorScheme} cycleColorScheme={cycleColorScheme} />
      <main className="App__Content">
        <Blog loginState={loginState} colorScheme={colorScheme} />
      </main>
      <Footer colorScheme={colorScheme} />
    </div>
  );
}

export default App;
