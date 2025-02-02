import './AdvanceCourseList.css';
import Course from '../Models/CourseModel';

interface CourseListProp {
    courses: Course[];
}

function AdvanceCourseList(props: CourseListProp) {
    return (
        <div className="container">
            <h1 className="h2">List of the Courses</h1>
            <ul className="list-group">
                {props.courses.map((course) => (
                    <li className="list-group-item" key={course.id}>
                        {course.name}-{course.duration}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdvanceCourseList;