import { useQuery } from "@tanstack/react-query";
import styles from "./PostsPage.module.css";
import { GetAllPosts } from "../../../../shared/api/posts/posts";
import { ArticlePreview } from "../ArticlePreview/ArticlePreview";

export function PostsPage() {
    const { isLoading, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => GetAllPosts()
    })

    if (isLoading) {
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
                            {data?.posts.map((article) => (
                                <ArticlePreview key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}