import './Home.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginSignup from './LoginSignup';

export default function Home({ onLoginStatus }) {
  const [login, setLogin] = useState(false);
  const [getStarted, setGetStarted] = useState(false);
  onLoginStatus(login);

  return (
    <div className="home">
      <div className='home_content centered'>
        <center>
          <div className='home_title primary'>Food<span className='eats'>Junction</span></div>
          <div className='home_sub sec'>The Food Junction Cafe: Where every dish is a journey of flavors.</div>
          <Link to="/Auth">
            <button className='home_button' onClick={() => setGetStarted(true)}>Order Now</button> <br/>
            
          </Link>
         
        </center>
        
      </div>
      <div className={`${getStarted ? 'modal_active' : 'modal'}`}>
        <LoginSignup onLoginStatus={(props) => setLogin(props)} />
      </div>
    </div>
  )
}