import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Post {
    id: number;
    title: string;
}

const PostListSearch: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/posts");
                const data = await response.json();
                setPosts(data.posts);
            } catch (error) {
                setError("Failed to load posts");
            }
        };

        fetchPosts();
    }, []);
    const filteredPosts=posts.filter((post)=>post.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div className="container mt-4">
            <h2>📝 Post List</h2>
            <input type="text"
                placeholder="Search the Post"
                className="form-control mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}

            />
            {error && <p className="text-danger">{error}</p>}
            <ul className="list-group">
                {filteredPosts.map((post) => (
                    <li key={post.id} className="list-group-item">
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostListSearch;