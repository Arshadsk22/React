import Article from './Article';
import fetchArticles from '../Services/ArticleServices';

const ArticleList = () => {
    return (
        <div>
            {fetchArticles().map((article) => (
                <Article title={article.title}>{article.body}</Article>
            ))}
        </div>
    );
}

export default ArticleList;