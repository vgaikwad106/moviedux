import React from 'react';
import '../styles.css';

export default function Header(){
  return (
    <div className='header'>
<img className='logo' src='logo.png' alt='moviedux logo'/>
<h2 className='app-subtitle'>Explore the world of cinema and find your next movie here!</h2>
    </div>
  );
}