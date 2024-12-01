import { useQuery } from "@tanstack/react-query";
import styles from "./PostsPage.module.css";

import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import { getAllPosts, getAllTagsPosts } from "../../../../shared/api";
import { useState } from "react";

export function PostsPage() {
    const [tag, setTag] = useState<string | null>(null);
    const posts = useQuery({
        queryKey: ["posts", tag],
        queryFn: ({ queryKey }) => getAllPosts(queryKey[1])
    })
    const tags = useQuery({
        queryKey: ["tags"],
        queryFn: getAllTagsPosts
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
                            onClick={() => {
                                setTag(tag)
                            }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}