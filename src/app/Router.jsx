import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home.jsx";
import Consulta from "../pages/Consulta.jsx";
import Alta from "../pages/Alta.jsx";
import Actualizacion from "../pages/Actualizacion.jsx";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/Consulta"
        element={
          <Layout>
            <Consulta />
          </Layout>
        }
      />
      <Route
        path="/Alta"
        element={
          <Layout>
            <Alta />
          </Layout>
        }
      />
      <Route
        path="/Actualizacion/:id"
        element={
          <Layout>
            <Actualizacion />
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
