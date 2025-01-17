import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./context/CitiesProvider";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRounthed from "../pages/ProtectedRounthed";
import { lazy, Suspense } from "react";

// import Product from "../pages/Product";
// import Pricing from "../pages/Pricing";
// import Homepage from "../pages/Homepage";
// import PageNotFound from "../pages/PageNotFound";
// import AppLayout from "../pages/AppLayout";
// import Login from "../pages/Login";

const Homepage = lazy(() => import("../pages/Homepage"));
const Product = lazy(() => import("../pages/Product"));
const Pricing = lazy(() => import("../pages/Pricing"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const AppLayout = lazy(() => import("../pages/AppLayout"));
const Login = lazy(() => import("../pages/Login"));

import CityList from "../components/CityList";
import CountryList from "../components/CountryList";
import City from "../components/City";
import Form from "../components/Form";
import SpinnerFullPage from "../components/SpinnerFullPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="app"
                  element={
                    <ProtectedRounthed>
                      <AppLayout />
                    </ProtectedRounthed>
                  }
                >
                  <Route index element={<Navigate replace to="cities" />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />

                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
