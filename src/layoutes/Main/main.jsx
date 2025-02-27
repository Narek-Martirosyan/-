import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Main = () => {
    return (
        <>
            <Navbar />
            <div className="container" style={{ minHeight: '80vh' }}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
