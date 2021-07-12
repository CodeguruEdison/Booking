import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { IApp } from './interfaces/IApp';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import BookablesPage from './features/Bookables/BookablePage'
import BookingsPage from './features/Bookings/BookingsPage';
import UsersPage from './features/Users/UsersPage';
import { IMenu, Menus } from './interfaces/IMenu';
import { IconType } from 'react-icons';
const App: FC<IApp> = (props) => {
  const menus: Menus = [
    {
      linkTo: '/bookings',
      className: 'btn btn-header',
      iconType: 'FaCalendarAlt',
      linkText: 'Bookings'
    },
    {
      linkTo: '/bookables',
      className: 'btn btn-header',
      iconType: 'FaDoorOpen',
      linkText: 'Bookables'
    },
    {
      linkTo: '/users',
      className: 'btn btn-header',
      iconType: 'FaUsers',
      linkText: 'Users'
    }
  ]
  const getIcons = (iconType: string) => {
    switch (iconType) {
      case 'FaCalendarAlt':
        return <FaCalendarAlt />
      case 'FaDoorOpen':
        return <FaDoorOpen />
      case 'FaUsers':
        return <FaUsers />

    }
  }
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              {menus && menus.map((menu: IMenu) => {
                const { linkTo, linkText, iconType, className } = menu;
                return (
                  <li>
                    <Link to={linkTo} className={className}>
                      {getIcons(iconType)}
                      <span>{linkText}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/bookables" element={<BookablesPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
