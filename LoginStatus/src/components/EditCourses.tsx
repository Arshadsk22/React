import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const EditCourse: React.FC = () => {
    const API_URL = "https://67a97dbe6e9548e44fc3c58c.mockapi.io/courses";
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [description, setDescription] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [duration, setDuration] = useState("");
    const [fees, setFees] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [message, setMessage] = useState("");

    const fetchCourse = async () => {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);
        setDuration(data.duration);
        setFees(data.fees);
        setImageUrl(data.imageUrl);
    }

    useEffect(() => {
        fetchCourse();
    }, [id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isFormValid()) {
            editCourse();
            setMessage('');
        }
        else {
            setMessage("Please fix the validation errors");
        }
    };

    const isFormValid = () => {
        let validForm: boolean = true;
        if (title.trim() == '') {
            setTitleError("Title is required");
            validForm = false;
        }
        else {
            setTitleError('');
        }

        if (description.trim() == '') {
            setDescriptionError("Description is required");
            validForm = false;
        }
        else {
            setDescriptionError('');
        }

        return validForm;
    }

    const editCourse = async () => {
        let requestBody = { title, description, duration, fees, imageUrl };
        let requestBodyJSON = JSON.stringify(requestBody);

        const request = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: requestBodyJSON,
        };

        const response = await fetch(`${API_URL}/${id}`, request);
        if (response.ok) {
            console.log("Course Updated");
            setTitle('');
            setDescription('');
            setDuration('');
            setFees('');
            setImageUrl('');
            setMessage('Course Updated Successfully');
            setTimeout(()=>navigate('/courses'),2000);
        }
    };


    return (
        <div>
            {message &&
                <div className="alert alert-success">{message}</div>
            }
            <h2>Add Course</h2>
            <form className="border p-3 shadow-lg rounded form-control" onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2">
                        <label htmlFor="titleTextBox" className="text-secondary">
                            Title{titleError ? (
                                <p className="text-danger small"> {titleError} </p>
                            ) : (
                                <p></p>
                            )}
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="titleTextBox"
                            id="titleTextBox"
                            value={title}
                            className="form-control mb-4"
                            placeholder="Enter Course Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2">
                        <label htmlFor="descriptiontextBox" className="text-secondary">
                            Description{descriptionError ? (
                                <p className="text-danger small"> {descriptionError} </p>
                            ) : (
                                <p></p>
                            )}
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="descriptiontextBox"
                            id="descriptiontextBox"
                            value={description}
                            className="form-control mb-4"
                            placeholder="Enter Course Description"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2">
                        <label htmlFor="durationBox" className="text-secondary">
                            Duration
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="durationBox"
                            id="durationBox"
                            value={duration}
                            className="form-control mb-4"
                            placeholder="Enter Course Duration"
                            onChange={(e) => setDuration(e.target.value)}
                        />

                    </div>
                </div>
                <div>
                    <div className="mb-2">
                        <label htmlFor="feesBox" className="text-secondary">
                            Fees
                        </label>
                    </div>
                    <div>
                        <input
                            type="number"
                            name="feesBox"
                            id="feesBox"
                            value={fees}
                            className="form-control mb-4"
                            placeholder="Enter Course Fees"
                            onChange={(e) => setFees(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2">
                        <label htmlFor="imageUrlBox" className="text-secondary">
                            Image URL
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="imageUrlBox"
                            id="imageUrlBox"
                            value={imageUrl}
                            className="form-control mb-4"
                            placeholder="Enter Image URL"
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-success m-3">
                        Submit
                    </button>
                    <Link to="/courses" className="btn btn-dark">
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default EditCourse; 