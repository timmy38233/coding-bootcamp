import './ArticleList.scss';


function ArticleList({ searchResultList, displayArticle }) {
    return (
        <ul className="ArticleList">
            {searchResultList.map((article, i) => {
                return <li className="ArticleList__item" key={i} onClick={(e) => displayArticle(article.pageid)}>{article.title}</li>
            })}
        </ul>
    )
}

export default ArticleList