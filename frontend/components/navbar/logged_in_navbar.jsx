import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

const LoggedInNavbar = (props) => {
    return (
        <ul className="navbar-ul">

            <li className="logo-nav">
                <div id="logo"></div>
            </li>

            <li className="search-nav">Search
                <span className="search-icon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </span>
            </li>

            <li className="notification-nav">
                <div className="bell-icon">
                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                </div>
                Notifications
                <span className="down-icon">
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                </span>
            </li>

            <li className="shop-nav">
                <div id="store-icon"></div>
                Shop Manager
            </li>
            <li className="greeting-nav"><GreetingContainer/></li>
            <li className="cart-nav">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                Cart
            </li>

        </ul>
    );
};

export default LoggedInNavbar;