import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Course {
    id: string;
    title: string;
    description: string;
    duration: string;
    fees: number;
    imageUrl: string;
}

function Courses() {
    const API_URL = "https://67a97dbe6e9548e44fc3c58c.mockapi.io/courses";

    const [courses, setCourses] = useState<Course[]>([]);
    const fetchCourses = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCourses(data);
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div className="container">
            <Link to="/add-courses" className="btn btn-outline-success">
                Add Courses
            </Link>
            <h2>Courses List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Fees</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <th scope="row">{course.id}</th>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>{course.duration}</td>
                            <td>{course.fees}</td>
                            <td>
                                <img src={course.imageUrl} alt={course.title} className="img-thumbnail" style={{ width: "60px", height: "60px" }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Courses;