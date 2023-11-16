// import React, { useState } from 'react';

// const Counter = () => {
//     const [count, setCount] = useState(0);
    


//     const handleDecrease = () => {
//         if (count > 0) {
//             setCount(prevCount => prevCount - 1);
//         }
//     };

//     const handleIncrease = () => {
//         setCount(prevCount => prevCount + 1);
//     };

//     return (
//         <div>
//             <span className="custom-button">
//                 <p className="buttonpara mt-2" onClick={handleDecrease}>-</p>
//                 <p className="mt-1">{count}</p>
//                 <p className="buttonpara mt-2" onClick={handleIncrease}>+</p>
//             </span>
//         </div>
//     );
// };

// export default Counter;

import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);

    const handleDecrease = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className="counter-containercount">
            <span className="custom-buttoncount">
                <p className="buttonpara mt-2" onClick={handleDecrease}>-</p>
                <p className="mt-1">{count}</p>
                <p className="buttonpara mt-2" onClick={handleIncrease}>+</p>
            </span>
        </div>
    );
};

export default Counter;

