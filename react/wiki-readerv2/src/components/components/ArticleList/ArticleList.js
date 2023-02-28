import './ArticleList.scss';


function ArticleList({ searchResultListResource, setModalPageId }) {
    
    const searchResultList = searchResultListResource.read();
    
    return (
        <ul className="ArticleList">
            {searchResultList && searchResultList.map((article, i) => {
                return <li className="ArticleList__item" key={i} onClick={(e) => setModalPageId(article.pageid)}>{article.title}</li>
            })}
        </ul>
    )
}

export default ArticleList