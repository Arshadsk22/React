import Article from './Article';

const articles = [
    { title: "React Basics", body: "React is a JavaScript library for building UIs." },
    { title: "Understanding Props", body: "Props allow components to receive data from their parent." },
    { title: "What is Bootstrap?", body: "Bootstrap is a CSS framework that helps in designing responsive websites." }
];

const ArticleList = () => {
    return (
        <div>
            {articles.map((article) => (
                <Article title={article.title} children={article.body} />
            ))}
        </div>
    );
}

export default ArticleList;