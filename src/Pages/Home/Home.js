import React from 'react';
import img from './img.png'

const Home = () => {
    return (
        <div className=' d-flex justify-content-around'>
            <div>
                <h2>Web course</h2>

            </div>
            
           <img className='w-50' src={img} alt="" />
        </div>
        
    );
};

export default Home;