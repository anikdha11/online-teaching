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
    return (
        <div className="">
        {
            courses.map(course => <HomeItems 
            key={course.id}
            course={course}></HomeItems>)
        }
        </div>
    );
};

export default Home;