import React from 'react';
import Logo from '../assets/logo.jpg';

import '../style/navbar.css';
import { category } from '../utils/Constants';

const Navbar = ({setCategory}) => {
  return (
    <nav>
        <img src={Logo} alt="logo" />
        <ul>
            {
                category.map((item, index) => (
                    <li key={index}>
                        <button
                            className="btn"
                            onClick={() => setCategory(item.name)}
                            key={index}
                        >
                            {item.name}
                        </button>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar