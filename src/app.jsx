import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import { Login } from './login/login';
import { About } from './about/about';
import { Play } from './play/play';
import { Scores } from './scores/scores';

export default function App() {
    return (
        <BrowserRouter>
            <div className='body bg-dark text-light'>
                <header className='container-fluid'>
                    <nav className='navbar fixed-top navbar-dark'>
                        <div className='navbar-brand'>
                            Simon<sup>&reg;</sup>
                        </div>
                        <menu className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to=''>Login</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='play'>Play</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='scores'>Scores</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='about'>About</NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/play' element={<Play />} />
                    <Route path='/scores' element={<Scores />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className='bg-dark text-white-50'>
                    <div className='container-fluid'>
                        <span className='text-reset'><a href='https://github.com/danielgraviet/simon-html'>GitHub</a></span>
                        <a className='text-reset' href='https://github.com/danielgraviet/simon-html'>
                            Source
                        </a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }