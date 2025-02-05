import './Article .css'
interface ArticleProps {
    title: string;
    children: string; // Restricting children to only text
}
const Article = ({ title, children }: ArticleProps) => {
    return (
        <div className="card shadow-lg my-3 text-bg-success hover">
            <span className="border warning"></span>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{children}</p> {/* Displays text content */}
            </div>
        </div>
    );
};
export default Article;