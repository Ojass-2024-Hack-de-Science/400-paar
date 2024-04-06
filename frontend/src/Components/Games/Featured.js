import React, { useState, useRef } from 'react';
import './feature.css';

const games = [
  { name: 'Candy-Crush', images: ['./candy.png', './candy1.jpg', './candy2.webp'] },
  { name: 'Chess', images: ['./chess.avif', './chess1.avif', './chess2.webp'] },
  { name: 'Pubg', images: ['./pubg_game.webp', './pubg1.jpg', './pubg2.jpg'] },
  { name: 'IGI', images: ['./igi.jpg', './igi1.jpg', './igi2.webp'] },
];

function Game({ name, images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isHovering = useRef(false);

  const handleMouseEnter = () => {
    isHovering.current = true;
    const timer = setInterval(() => {
      if (isHovering.current) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 1500); // Change image every 1 second
    return () => {
      clearInterval(timer);
      isHovering.current = false;
    };
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    setCurrentImageIndex(0); // Reset to the original image
  };

  return (
    <div className="game" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={images[currentImageIndex]} alt={name} className="thumbnail" />
      <p>{name}</p>
    </div>
  );
}

const Featured = () => {
  return (
    <div className='h-100 header'>
      <div>
        <h2 className='head-section'>Featured Games</h2>
        <div className="game-list">
          {games.map((game, index) => (
            <Game key={index} name={game.name} images={game.images} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
