import './ArticleModal.scss';


function ArticleModal({ article, displayArticle }) {
    return (
        <div className="ArticleModal">
            <div className="ArticleModal__header">
                <h2 className="ArticleModal__title">{article.title}</h2>
                <button className="ArticleModal__close" onClick={e => displayArticle(null)}>✕</button>
            </div>
            <div className="ArticleModal__article">
                {!!article.thumbnail ? <img className="ArticleModal__thumbnail" src={article.thumbnail.source} alt={article.title} /> : ''}
                <div className="ArticleModal__content" dangerouslySetInnerHTML={{ __html: article.extract }} />
            </div>
        </div>
    )
}

export default ArticleModal