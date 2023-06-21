import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
<nav>
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/men">Men</Link>
</li>
<li>
<Link to="/women">Women</Link>
</li>
<li>
<Link to="/kids">Kids</Link>
</li>
<li>
<Link to="/accessories">Accessories</Link>
</li>
<li>
<Link to="/contact">Contact</Link>
</li>
<li>
<Link to="/offers">Offers</Link>
</li>
<li>
<Link to="/about">About Us</Link>
</li>
</ul>
</nav>
 );
};

export default Navbar;