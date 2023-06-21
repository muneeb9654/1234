import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Homepage.js';
import Men from './pages/Men.js';
import Women from './pages/Women.js';
import Kids from './pages/Kids.js';
import Accessories from './pages/Accessories.js';
import Contact from './pages/Contact.js';
import Offers from './pages/Offers.js';
import AboutUs from './pages/AboutUs.js';

const App = () => {
 return (
<Router>
<Navbar />
<Switch>
<Route exact path="/" component={Home} />
<Route path="/men" component={Men} />
<Route path="/women" component={Women} />
<Route path="/kids" component={Kids} />
<Route path="/accessories" component={Accessories} />
<Route path="/contact" component={Contact} />
<Route path="/offers" component={Offers} />
<Route path="/about" component={AboutUs} />
</Switch>
</Router>
 );
};

export default App;



