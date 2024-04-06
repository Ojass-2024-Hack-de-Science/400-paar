import React from 'react';
import { useParams } from 'react-router-dom'

const Success = () => {
    const { tm } = useParams();
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
    console.log(tm);
  return (
    <>
      <div style={{ width: screenWidth, height: screenHeight, overflow: 'hidden', margin: 0, padding: 0 }}>
        <embed
          src="https://tailwindcss.com/"
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    </>
  );
};

export default Success;
