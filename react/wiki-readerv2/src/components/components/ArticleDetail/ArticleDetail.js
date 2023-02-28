import './ArticleDetail.scss';


function ArticleDetail({ articleDetailResource }) {

    const article = articleDetailResource.read();

    return (
        <div className="ArticleDetail">
            <h2 className="ArticleDetail__title">{article.title}</h2>
            {!!article.thumbnail ? <img className="ArticleDetail__thumbnail" src={article.thumbnail.source} alt={article.title} /> : ''}
            <div className="ArticleDetail__content" dangerouslySetInnerHTML={{ __html: article.extract }} />
        </div>
    )
}

export default ArticleDetail