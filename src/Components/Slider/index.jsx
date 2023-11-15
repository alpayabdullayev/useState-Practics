import React, { useState } from 'react';

const Slider = () => {
  const [src, setSrc] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvMFRbhCTjdbDTDysJ8ZXF9j0Bn_ypdniIZaKH-RS9qw&s'
  );

  const handleImageClick = (e) => {
    setSrc(e.target.src)
  };

  return (
    <>
      <div id='slider'>
        <div className='bigImg'>
          <img src={src} alt='' />
        </div>
        <div className='imgs'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvMFRbhCTjdbDTDysJ8ZXF9j0Bn_ypdniIZaKH-RS9qw&s'
            alt=''
            onClick={(e)=>{handleImageClick(e)}}
          />
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s'
            alt=''
            onClick={handleImageClick}
          />
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zD798t66JH1NFpF-Ws7Cxz3to3CCt49PstJDfJeY2Q&s'
            alt=''
            onClick={handleImageClick}
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
