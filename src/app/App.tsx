import { BrowserRouter, Route, Routes } from "react-router"
import { Layout } from "../shared/ui/layouts"
import { PostsPage } from "../pages/posts"

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route index element={<PostsPage />} />
                </Route>
                {/* 
                 <Route index element={<Home />} />
                <Route path="about" element={<About />} />

                <Route element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                <Route path="concerts">
                    <Route index element={<ConcertsHome />} />
                    <Route path=":city" element={<City />} />
                    <Route path="trending" element={<Trending />} />
                </Route>  */}
            </Routes>
        </BrowserRouter>
    )
}