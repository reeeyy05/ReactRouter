import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";


export default function AppLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* <Header /> */}
            <main className="flex-1 container mx-auto px-4 py-6">
                {/* El 'Outlet' es donde se van a intercambiar las diferentes vistas */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}