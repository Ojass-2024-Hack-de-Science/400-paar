// import React from 'react';
// import { useParams } from 'react-router-dom'

// const Success = () => {
//     const { tm } = useParams();
//   const screenWidth = window.innerWidth;
//   const screenHeight = window.innerHeight;
//     console.log(tm);
//   return (
//     <>
//       <div style={{ width: screenWidth, height: screenHeight, overflow: 'hidden', margin: 0, padding: 0 }}>
//         <embed
//           src="https://tailwindcss.com/"
//           style={{
//             width: '100%',
//             height: '100%'
//           }}
//         />
//       </div>
//     </>
//   );
// };

// export default Success;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Success = () => {
  // const { tm } = useParams();
  // console.log(tm);

  // const [hours, minutes, seconds] = tm.split(':').map(Number);

  // Calculate the total duration in milliseconds
  // const totalMilliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  // console.log(totalMilliseconds);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1000);
      }
    }, 1000);

    return () => clearTimeout(timerId);
  }, [time]);

  // const getFormattedTime = (milliseconds) => {
  //   const totalSeconds = Math.floor(milliseconds / 1000);
  //   const hours = Math.floor(totalSeconds / 3600);
  //   const minutes = Math.floor((totalSeconds % 3600) / 60);
  //   const seconds = totalSeconds % 60;

  //   return `${formatDigit(hours)}:${formatDigit(minutes)}:${formatDigit(seconds)}`;
  // };

  // const formatDigit = (value) => {
  //   return `value < 10 ? 0${value} : value`;
  // };

  return (
    <>
      <div style={{ width: screenWidth, height: screenHeight, overflow: 'hidden', margin: 0, padding: 0 }}>
        <embed
          src="https://dash.parsec.app/"
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      {/* <div>formatDigit({tm})</div> */}
    </>
  );
};

export default Success;