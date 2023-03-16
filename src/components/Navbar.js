import React from 'react';
import Logo from '../assets/logo.jpg';
import SearchToggle from '../assets/search_button.svg';
import HumbergerToggle from '../assets/nav_toggler.svg';

import '../style/navbar.css';
import { category } from '../utils/Constants';

import HorizontalScroll from 'react-horizontal-scrolling';

const Navbar = ({setCategory}) => {
  return (
    <nav>
        <div>
            <div>
                <h4>Editon: English</h4>
            </div>
            <div>
                <img src={Logo} alt="logo" />
                <h4>Tuesday, 2 March 2023</h4>
            </div>
            <div>
                <button className='btn'> 
                    <img src={SearchToggle} className="icon" alt={SearchToggle} />
                </button>
                <button className='btn'>
                    <img src={HumbergerToggle} className="icon" alt={HumbergerToggle} />
                </button>
            </div>
        </div>
            <HorizontalScroll className='horizontal'>
                {
                    category.map((item, index) => (
                        <li key={index}>
                            <button
                                className="btn btn-link"
                                onClick={() => setCategory(item.name)}
                                key={index}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))
                }
            </HorizontalScroll>
    </nav>
  )
}

export default Navbar