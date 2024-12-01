import { useQuery } from "@tanstack/react-query";
import styles from "./PostsPage.module.css";

import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import { GetAllPosts, GetAllTagsPosts } from "../../../../shared/api";

export function PostsPage() {
    const posts = useQuery({
        queryKey: ["posts"],
        queryFn: GetAllPosts
    })
    const tags = useQuery({
        queryKey: ["tags"],
        queryFn: GetAllTagsPosts
    })

    if (posts.isLoading) {
        return <div>Loading</div>
    }

    return (
        <div className={styles.home_page}>
            <div className={styles.banner}>
                <div className="container">
                    <h1 >Posts</h1>
                </div>
                <div className="container page">
                    <div className="row">
                        <div className="col-md-9">
                            {posts.data?.posts.map((article) => (
                                <ArticlePreview key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="tag-list">
                    {tags.data?.map((tag) => (
                        <button
                            key={tag}
                            name="tag"
                            value={tag}
                            className="tag-pill tag-default"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}