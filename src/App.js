import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {
const ctx = useContext(AuthContext);
    return (
        <div>
            <MainHeader  />
            <main>
                {!ctx.isLoggedIn && <Login  />}
                {ctx.isLoggedIn && <Home />}
            </main>
        </div>
    );
}

export default App;
