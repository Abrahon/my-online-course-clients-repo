import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses-categories')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    }, []);
    return (
        <div>
            <h3>left categories:{categories.length}</h3>
            <div >
                {
                    categories.map(category=> <button className='d-flex w-50 p-2 mb-2 align-items-center justify-content-center' key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>

                       </button> )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;