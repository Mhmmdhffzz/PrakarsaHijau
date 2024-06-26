import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Home } from "../pages/home/Home";
import { Register } from "../pages/auth/Register";
import { Landing } from "../pages/landing/Landing";
import { Profile } from "../pages/profile/Profile";
import { Article } from "../pages/article/Article";
import { ArticleDetail } from "../pages/article/ArticleDetails";
import { Tips } from "../pages/tips/Tips";
import { TipsForm } from "../pages/tips/TipsForm";
import { ProtectedRoute } from "../utils/ProtectedRoute";
import { ProtectedAdminRoute } from "../utils/ProtectedRoute";
import { DetailTipsPage } from "../pages/tips/DetailTipsPage";
import { AboutUsPage } from "../pages/about/AboutUsPage";
import { EditProfilePage } from "../pages/profile/EditProfilePage";
import { RequestPage } from "../pages/admin/RequestPage";
import { Calculator } from "../pages/calculate/Calculator";
import  NotFound  from "../pages/NotFound/NotFound";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login />}/>

            <Route path="/*" element={<NotFound redirectPage="/landing"/>} />

            <Route path="/tips" element={<Tips />}/>
            <Route path="/tips/:id" element={<DetailTipsPage />}/>
            {ProtectedRoute("/contribute", <TipsForm />)}
            {ProtectedAdminRoute("/request-role", <RequestPage />)}
            <Route path="/landing" element={<Landing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/article" element={<Article />} />
            <Route path="/article/:id" element={<ArticleDetail />}/>
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/calculate" element={<Calculator />} />
        </Routes>
    )
}