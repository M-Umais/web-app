import React, { useState } from 'react';
import './Srtyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <div>
         <header className="navbar">
      <div className="logo">
        <i className="fas fa-cart-arrow-down"></i>
        <span>Aroma</span>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">Blog</a>
        <a href="/">Pages</a>
        <a href="/" className="active">Contact</a>
      </nav>
      <div className="nav-actions">
        <i className="fas fa-search search-icon"></i>
        <div className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-badge"></span>
        </div>
        <button className="buy-now">Buy Now</button>
      </div>
    </header>
        <div className='contact'>
           <h1> Contact Us</h1>
        </div>
    <div className='container'>
         <div className='contone'>
           <div class="info-box">
    <i class="fas fa-house"></i>
    <div>
      <strong>California United States</strong>
      <p>Santa monica bullevard</p>
    </div>
  </div>

  <div class="info-box">
    <i class="fas fa-headphones"></i>
    <div>
      <strong>00 (440) 9865 562</strong>
      <p>Mon to Fri 9am to 6pm</p>
    </div>
  </div>

  <div class="info-box">
    <i class="fas fa-envelope"></i>
    <div>
      <strong>support@colorlib.com</strong>
      <p>Send us your query anytime!</p>
    </div>
  </div>
        </div>
       
      
      
         <div className='contwo'>
      <form>
         <input type="text" name="name" placeholder="Your Name" required /><br></br>
        <input type="email" name="email" placeholder="Your Email" required /><br></br>
        <input type="text" name="Subject" placeholder="Your Subject" required />
      </form>
      </div>
      <div className='conthree'>
        <form >
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea><br></br>
        <button type="submit">Send Message</button>
        </form>
        </div>
      </div>
      </div>
    
  )
}

export default Contact
