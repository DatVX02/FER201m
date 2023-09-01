import React, { Component } from 'react';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import './Films.css'
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div className='Header'>
            <nav className='headerMenu' >
                            <li><Link className='active' to='/'>Home</Link></li>
                            <li><Link to="#">News</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                <div style={{position: "absolute", right: '0' }}>
                    <a className='switch-mode' href='#' onClick={toggle}
                        style={{
                            color: theme.color,
                            outline: 'none',
                        }} data-testid='toggle-them-batn'>
                        Switch Theme to {!dark ? 'Dark' : 'Light'} mode
                    </a>
                </div>
            </nav>
        </div>

    );
}