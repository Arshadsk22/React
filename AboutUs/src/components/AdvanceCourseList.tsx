import './CourseList.css';

interface Course {
    id: number;
    name: string;
    duration: string;
}
interface CourseListProp{
    courses: Course[];
}

function AdvanceCourseList(prop:CourseListProp) {
    

    return (
        <div>
            <h1>List of the Courses </h1>
            <ul className="list-group">
                {prop.courses.map((course) => (
                    <li className="list-group-item" key={course.id}>
                        {course.name} - {course.duration}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdvanceCourseList;