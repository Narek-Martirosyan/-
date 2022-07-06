import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";

export default function Main() {
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
