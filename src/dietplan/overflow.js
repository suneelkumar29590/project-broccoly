import React, { useEffect, useState } from 'react';

const Overflow = () => {
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);

  // Function to adjust styles based on screen width
  const adjustStyles = () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Adjust styles based on screen width
    if (screenWidth <= 600) {
      setIsOverflowHidden(true);
    } else {
      setIsOverflowHidden(false);
    }
  };

  // Effect to run on mount and on window resize
  useEffect(() => {
    adjustStyles();

    window.addEventListener('resize', adjustStyles);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', adjustStyles);
    };
  }, []); // Empty dependency array ensures the effect runs only on mount and unmount

  return (
    <div style={{ overflowX: isOverflowHidden ? 'hidden' : 'auto' }}>
      {/* Your content here */}
    </div>
  );
};

export default Overflow;
