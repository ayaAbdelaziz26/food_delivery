import React from 'react'
import './footer.css'
import facebook_icon from '../../Assets/facebook_icon.png'
import twitter_icon from '../../Assets/twitter_icon.png'
import linkedin_icon from '../../Assets/linkedin_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-inner">
        <div className="footer-description">
            <h1>TOMATO.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium et porro ut nihil rem, reiciendis eos veniam pariatur necessitatibus neque quisquam, fuga officia cumque voluptas culpa. Exercitationem distinctio praesentium dolorum!</p>
            <div className="footer-description-images">
                <img src={facebook_icon} alt="facebook" />
                <img src={twitter_icon} alt="twitter" />
                <img src={linkedin_icon} alt="linkedin" />
            </div>
        </div>

        <div className="footer-options">
            <h1>COMPANY</h1>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className="footer-contact">
            <h1>GET IN TOUCH</h1>
            <div className="footer-contact-info">
            <p>+1-215-259-7148</p>
            <p>contact@tomato.com</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
