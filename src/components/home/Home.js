import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeItems from '../HomeItems/HomeItems';

import "./Home.css"

const Home = () => {
    const [courses,setCourses] = useState([]);
    useEffect(() =>{
        fetch('./allcourse.JSON')
        .then(res => res.json())
        .then(data =>setCourses(data))
    },[])
    const fours = courses.slice(0,4);
    return (
        <div className="">

              <div className="d-flex justify-content-center flex-wrap">
              {
                    fours.map(four=><HomeItems
                    four={four}></HomeItems>)
                }
              </div>
        </div>
    );
};

export default Home;