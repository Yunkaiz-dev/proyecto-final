import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "/Users/Jose-PC/Downloads/Proyecto React/proyecto-final/src/Pages/MainPage/View/MainPage";
import BlogPage from "/Users/Jose-PC/Downloads/Proyecto React/proyecto-final/src/Pages/BlogPage/View/BlogPage"; // Importa el componente Blog
import LoginPage from "/Users/Jose-PC/Downloads/Proyecto React/proyecto-final/src/Pages/LoginPage/View/LoginPage"; // Asegúrate de crear este componente
import RegisterPage from "/Users/Jose-PC/Downloads/Proyecto React/proyecto-final/src/Pages/RegisterPage/View/RegisterPage";
import MainPage2 from "/Users/Jose-PC/Downloads/Proyecto React/proyecto-final/src/Pages/Login-MainPage/View/MainPage2";
import RecipePage from "/Users/Jose-PC/Downloads/Proyecto React/proyecto-final/src/Pages/RecipePage/View/RecipePage";
import BlogPageLG from "/Users/Jose-PC/Downloads/Proyecto React/proyecto-final/src/Pages/Login-BlogPage/View/BlogPage2";
import RecipePageLG from "/Users/Jose-PC/Downloads/Proyecto React/proyecto-final/src/Pages/Login-RecipePage/view/RecipePage2";
import UserPage from "/Users/Jose-PC/Downloads/Proyecto React/proyecto-final/src/Pages/UserPage/view/UserPage";
import CreateRecipe from "/Users/Jose-PC/Downloads/Proyecto React/proyecto-final/src/Pages/CreateRecipe/View/CreateRecipe";

const Rutas: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Inicio" element={<MainPage2 />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Registro" element={<RegisterPage />} />
        <Route path="/Recetas" element={<RecipePage />} />
        <Route path="/Recetaslg" element={<RecipePageLG />} />
        <Route path="/Bloglg" element={<BlogPageLG />} />
        <Route path="/User" element={<UserPage />} />
        <Route path="/CreateRecipe" element={<CreateRecipe />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
