import './ArticleList.scss';


function ArticleList({ searchResultList, displayArticle }) {
    return (
        <div className="ArticleList">
            {searchResultList.map((article, i) => {
                return <div key={i}>
                    <h2 onClick={(e) =>  displayArticle(article.pageid)}>{(article.thumbnail) ? <img src={article.thumbnail.source} alt={article.title} /> : ''}{article.title}</h2>
                </div>
            })}
        </div>
    )
}

export default ArticleList