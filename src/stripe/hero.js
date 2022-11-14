import hero from './images/hero.svg';
import phone from './images/phone.svg';
import { mainContext } from './context';
import { useContext } from 'react';
const Hero=()=>{
    const {closeSubmenu}=useContext(mainContext);
    return <div className="heroContainer" onMouseOver={closeSubmenu} >
       <div className="heroImageContainer">
         <img src={hero} alt="hero" />
       </div>
       <div className="heroContentContainer">
            <div className="heroTextContainer">
                    <div className="heroText">
                        <h1 className='heroTextHeading'>
                            Payments infrastructure <br />
                            for the internet
                        </h1>
                        <p>
                            Millions of companies of all sizes—from startups to Fortune 500s—use
                            Stripe’s software and APIs to accept payments, send payouts, and
                            manage their businesses online.
                        </p>
                        <button className='btn'>Start now</button>
                    </div>
                
            </div>
            <div className="phoneImageContainer">
                <img src={phone} alt="phone" />
            </div>

       </div>

    </div>
    
}

export default Hero;