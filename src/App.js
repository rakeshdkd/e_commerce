import "./App.css";
import React from "react";
// import Header from "./components/Header";
// import Description from "./components/Description";
// import Cards from "./components/Card";
// import Footer from "./components/Footer";
// import CartModal from "./components/CartModal";
// import CartProvider from "./Store/CartProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/Pages/About";
import StorePage from "./components/Pages/StorePage";
import HomePage from "./components/Pages/HomePage";

const router = createBrowserRouter([
  {path:'/', element:<HomePage />},
  { path: "/Store", element: <StorePage /> },
  {
    path: "/About",
    element: <About />,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
        {/* <CartProvider>
          <div className="main">
            <Header onClick={() => setModalShow(true)} />
            <Description />
            <CartModal
              show={modalShow}
              onHide={() => setModalShow((prevState) => !prevState)}
            />
            <div>
              <h1 style={{ marginLeft: "50vw" }}>Colors</h1>
              <div
                style={{
                  gap: "5px",
                  display: "flex",
                  justifyContent: "center",
                  width: "80vw",
                  margin: "auto",
                  overflow: "auto",
                }}
              >
                <Cards />
              </div>
            </div>
            <Footer />
          </div>
        </CartProvider> */}
    </>
  );
}

export default App;
