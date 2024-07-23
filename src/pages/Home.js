import React, { useState } from 'react';
import Slider from 'react-slick';
import './Home.css';

// List of image sources
const images = [
  '/cat1.webp', '/cat2.webp', '/cat3.webp', '/cat4.webp', '/cat5.webp',
  '/cat6.webp', '/cat7.webp', '/cat8.webp', '/cat9.webp', '/cat10.webp',
  '/cat11.webp', '/cat12.webp', '/cat13.webp', '/cat14.webp', '/cat15.webp',
  '/cat16.webp', '/cat17.webp', '/cat18.webp', '/cat19.webp'
];

function Home() {
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText('FbbqzbSrXZAbFcVbkLHfg6YHdvkbmnqBgBPXiTDzpump')
      .then(() => setCopySuccess('Copied!'))
      .catch(() => setCopySuccess('Failed to copy!'));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300, // Faster speed (300ms)
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000, // Speed up rotation (2000ms = 2 seconds)
  };

  return (
    <div className="home">
      <h1>Welcome to Nucci</h1>
      <section className="crypto-address-section">
        <h2>Future of Crypto</h2>
        <div className="address-box">
          <p className="address-text">
            FbbqzbSrXZAbFcVbkLHfg6YHdvkbmnqBgBPXiTDzpump
          </p>
          <button className="copy-button" onClick={handleCopy}>
            {copySuccess || 'Copy'}
          </button>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="carousel-item">
              <img src={img} alt={`cat${index + 1}`} />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default Home;






