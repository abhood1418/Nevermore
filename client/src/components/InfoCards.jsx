import lovecraft from '../assets/lovecraft.png';
import poe from '../assets/poe.png';
import '../css/component-css/InfoCards.css';


const InfoCards = () => {
  return (
    <div className="info-card-main">
      <div className="card1"><img src={lovecraft} /></div>
      <div className="main-card">
        <h4 className="main-title">What is Nevermore?</h4>
        <p className="main-desc">Never more is in need of some information in this location. If you have any information or know where to find some, please list it out below where there is nowhere to list it. If you have problems listing it below, then please make sure to use the contact form in the links above that we have not provided.</p>
      </div>
      <div className="card2"><img src={poe}/></div>
    </div>
  )
}

export default InfoCards;