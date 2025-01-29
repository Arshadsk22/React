import './CourseList.css';

function CourseList() {
    const courses = [
        'An item',
        'A second item',
        'A third item',
        'A fourth item',
        'And a fifth one'
    ];

    return (
        <div>
            <h1>List of the Courses </h1>
            <ul className="list-group">
                {courses.map((course) => (
                    <li className="list-group-item">{course}</li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;