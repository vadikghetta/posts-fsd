import { Outlet } from "react-router";

export function Layout() {


    return (
        <>
            <header>

            </header>
            <main>

                <Outlet /> {/* Здесь будет основное содержимое страницы */}
            </main>
            <footer>

            </footer>
        </>
    );
}