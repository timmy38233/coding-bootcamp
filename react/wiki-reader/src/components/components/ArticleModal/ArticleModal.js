import './ArticleModal.scss';


function ArticleModal({ article, displayArticle }) {
    return (
        <div className="ArticleModal">
            <div className="ArticleModal__header">
                <h2 className="ArticleModal__title">{article.title}</h2>
                <button onClick={e => displayArticle(null)}>X</button>
            </div>
            {!!article.thumbnail ? <img className="ArticleModal__thumbnail" src={article.thumbnail.source} alt={article.title} /> : ''}
            <div className="ArticleModal__content" dangerouslySetInnerHTML={{ __html: article.extract }} />
        </div>
    )
}

export default ArticleModal