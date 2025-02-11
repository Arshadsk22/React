import { useState } from "react";

const AddCourse: React.FC = () => {
    const API_URL = "https://67a97dbe6e9548e44fc3c58c.mockapi.io/courses";

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [fees, setFees] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addUser();
    };

    const addUser = async () => {
        let requestBody = { title, description, duration, fees, imageUrl };
        let requestBodyJSON = JSON.stringify(requestBody);

        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: requestBodyJSON,
        };

        const response = await fetch(API_URL, request);
        if (response.ok) {
            console.log("Course added..");
            setTitle('');
            setDescription('');
            setDuration('');
            setFees('');
            setImageUrl('');
            setMessage('Course Added Successfully');
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
                            Title
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
                            Description
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
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCourse; 