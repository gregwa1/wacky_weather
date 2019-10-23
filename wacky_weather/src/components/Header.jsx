import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" >Home</Link>
      <Link to="/gifpage" >Gifs</Link>
      <h1>Welcome to Wacky Weather</h1>
    </header>
  )
}