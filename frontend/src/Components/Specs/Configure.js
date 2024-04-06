import React, { useState } from 'react';
import './configure.css';

import Checkout from '../Checkout/Checkout';


const Configure = () => {
  const [selectedConfigIndex, setSelectedConfigIndex] = useState(null);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const configurations = [
    {
      name: 'CHIST I5 Extreme',
      image: './chisti5.jpg',
      processor: 'Core i5 11400F 4.4Ghz',
      graphics: 'RX580 8GB',
      storage: '512GB SSD',
      operatingSystem: 'Windows 11',
      price: '10',
    },
    {
      name: 'HP OMEN 25L Gaming',
      image: './omen25L.png',
      processor: 'AMD Ryzen 9',
      graphics: 'AMD Radeon RX 6900 XT',
      storage: '2TB SSD',
      operatingSystem: 'Windows 11',
      price: '20',
    },
    {
      name: 'Ant PC Argentine Al700',
      image: './antpc.jpg',
      processor: 'Intel Core i7 12700',
      graphics: 'AMD Radeon RX 6900 XT',
      storage: '256GB NVMe m.2 SSD',
      operatingSystem: 'Windows 11',
      price: '30',
    },
    {
      name: 'Lenovo Ideapad',
      image: './lenovo.jpg',
      processor: 'AMD Ryzen 9',
      graphics: 'AMD Radeon RX 6900 XT',
      storage: '2TB SSD',
      operatingSystem: 'Windows 11',
      price: '40',
    },
  ];

  const handleSelectConfig = (index) => {
    setSelectedConfigIndex(index === selectedConfigIndex ? null : index);
    // Log data to console
    // console.log('Selected Configuration:', configurations[index]);
  };

  const handleHourScroll = (event) => {
    if (event.deltaY > 0) {
      // Scrolling down
      setHours(hours + 1);
    } else {
      // Scrolling up
      if (hours > 0) {
        setHours(hours - 1);
      }
    }
  };

  const handleMinuteScroll = (event) => {
    if (event.deltaY > 0) {
      // Scrolling down
      setMinutes(minutes + 1);
    } else {
      // Scrolling up
      if (minutes > 0) {
        setMinutes(minutes - 1);
      }
    }
  };

  const handleSecondScroll = (event) => {
    if (event.deltaY > 0) {
      // Scrolling down
      setSeconds(seconds + 1);
    } else {
      // Scrolling up
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }
  };

  return (
    <div>
      <h2 className='config_head'>Choose your PC configuration</h2>
      <div className='configurations'>
        {configurations.map((config, index) => (
          <div
            className={`configuration-card ${
              selectedConfigIndex === index ? 'selected' : ''
            }`}
            key={index}
            onClick={() => handleSelectConfig(index)}
          >
            <img
              src={config.image}
              alt={config.name}
              className='config-image'
            />
            <h3>{config.name}</h3>
            <p>Processor: {config.processor}</p>
            <p>Graphics: {config.graphics}</p>
            <p>Storage: {config.storage}</p>
            <p>Operating System: {config.operatingSystem}</p>
            <div className={`bttn ${selectedConfigIndex === index ? 'selected' : ''}`}>
              {selectedConfigIndex === index ? 'Selected' : 'Select'}
            </div>
          </div>
        ))}
      </div>
      <div className='timing_section'>
          <div className='inside_timing' onWheel={handleHourScroll}>
             <div className='head'>Select Time : </div>
             <div className='counter'>{hours} Hr</div>
          </div>
          <div className='inside_timing' onWheel={handleMinuteScroll}>
             <div className='counter'>{minutes} Min</div>
          </div>
          <div className='inside_timing' onWheel={handleSecondScroll}>
             <div className='counter'>{seconds} Sec</div>
          </div>
          
            {selectedConfigIndex !== null && <Checkout
             name={configurations[selectedConfigIndex].name} 
             price={configurations[selectedConfigIndex].price}
             time = {hours}

             />}
      </div>
    </div>
  );
};



export default Configure;