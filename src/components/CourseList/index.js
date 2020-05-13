import React from "react";
import { useSelector, useDispatch } from "react-redux";

function CourseList() {
  /**
   * É possível adicionar um array de dependencias no segundo parâmetro assim como o useEffect
   */
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  /**
   * action
   *
   * @param {String} title - course title
   * @param {String} teacher - course teacher
   */
  const actionAddCourse = (title, teacher) => ({
    type: "ADD_COURSE",
    title: "React Native",
    teacher: "Gabriel M",
  });

  function addCourse(title, teacher) {
    dispatch(actionAddCourse(title, teacher));
  }

  return (
    <>
      <ul>
        {courses.map((course) => (
          <li key={course.title}>
            <strong>{course.title}</strong> - {course.teacher}
          </li>
        ))}
      </ul>
      <button onClick={addCourse}>Adicionar curso</button>
    </>
  );
}

export default CourseList;
