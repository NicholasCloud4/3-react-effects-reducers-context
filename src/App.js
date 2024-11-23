import React, { useContext } from 'react';

import Login from './Components/Login/Login';
import Home from './Components/Home/Home.js';
import MainHeader from './Components/MainHeader/MainHeader.js';
import Demo from './Components/ReducerDemo/Demo.js';
import AuthContext from './Components/Context/AuthContext';

function App() {
    let ctx = useContext(AuthContext)
    return (
        <>
            <MainHeader />
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
        </>
    );
}

export default App;