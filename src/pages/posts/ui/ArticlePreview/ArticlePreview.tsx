
import { Link } from "react-router";
import { IPostsItem } from "../../../../shared/types/posts.types";


interface ArticlePreviewProps {
    article: IPostsItem;
}

export function ArticlePreview({ article }: ArticlePreviewProps) {
    return (
        <div className="article-preview">
            <div className="article-meta">
                <div className="info">
                    <Link
                        to={`/profile/${article.userId}`}
                        className="author"
                        prefetch="intent"
                    >
                        {article.userId}
                    </Link>

                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> {article.reactions.likes}
                </button>
            </div>
            <Link
                to={`/article/${article.id}`}
                className="preview-link"
                prefetch="intent"
            >
                <h2>{article.title}</h2>
                <p>{article.body}</p>
                <span>Read more...</span>
                <ul className="tag-list">
                    {article.tags.map((tag) => (
                        <li key={tag} className="tag-default tag-pill tag-outline">
                            {tag}
                        </li>
                    ))}
                </ul>
            </Link>
        </div>
    );
}