import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Caursel from "../caurasel/Caursel";
import HomeItems from "../HomeItems/HomeItems";

import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./allcourse.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const fours = courses.slice(0, 4);
  return [
    <div>
      <Card className="bg-dark">
        <Card.Img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5fc5545f851237f27b13a0db%2FAsian-boy-student-video-conference-e-learning-with-teacher-and-classmates-on-computer%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D7952%26cropY1%3D630%26cropY2%3D5106" />
        <Card.ImgOverlay>
          <Card.Title className="border border-dark border-1">
            <h1 className="mt-0 fw-bold text-danger">Welcome To My</h1>
            <h2 className="fw-bold text-light">Online Teaching Home</h2>
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>,

    <div className="mt-5">
      <h1 className="fw-bold mb-5 title">Some Educational Courses</h1>
      <div className="d-flex flex-row justify-content-center flex-wrap gap-2">
        {fours.map((four) => (
          <HomeItems four={four}></HomeItems>
        ))}
      </div>
    </div>,
    <Caursel></Caursel>,
  ];
};

export default Home;
