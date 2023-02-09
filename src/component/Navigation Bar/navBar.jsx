import React from "react";

function NavigationBar(){
    return(
        <div className="nav-bar flex justify-between p-5 bg-transparent">
            <div className="logo">
                <h1>Algo Trading Wala</h1>
            </div>
            <div className="menu-list">
                <ul className="flex max-lg:hidden">
                    <li className="m-2">HOME</li>
                    <li className="m-2">HOME</li>
                    <li className="m-2">HOME</li>
                    <li className="m-2">HOME</li>
                    <li className="m-2">HOME</li>
                </ul>
            </div>
            <div className="auth-btn max-lg:hidden">
                <div className="signUp-btn">Sign Up</div>
                <div className="login-btn">Login</div>
            </div>
        </div>
    );
}

export default NavigationBar;