import { Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./components/pages/Home";
import Profile from './components/pages/Profile';
import Footer from "./components/common/Footer";
import Products from "./components/pages/Products";
import ProductsPage from "./components/pages/ProductsPage";
import SimpleForm from "./components/forms/SimpleForms";
import SignInForm from "./components/forms/SignInForm";


export default function App() {
    return (
        <div>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/signUp" element={<SimpleForm />} />
                    <Route path="/pruebaSupabase" element={<ProductsPage />} />
                    <Route path="/signIn" element={<SignInForm />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}