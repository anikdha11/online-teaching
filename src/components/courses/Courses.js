import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CourseItems from "../courseItems/CourseItems";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./allcourse.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="border bg-img">
      <h1 className="text-center text-light mb-0 p-4">
        Our Educational Course
      </h1>

      <div className="d-flex flex-row justify-content-center flex-wrap gap-3">
        {courses.map((course) => (
          <CourseItems key={course.id} course={course}></CourseItems>
        ))}
      </div>
    </div>
  );
};

export default Courses;
