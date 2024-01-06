import React from "react";
import Header from "../Header";
import Description from "../Description";
import Cards from "../Card";
import Footer from "../Footer";
import CartModal from "../CartModal";
import CartProvider from '../../Store/CartProvider'
const HomePage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <CartProvider>
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
      </CartProvider>
    </>
  );
};

export default HomePage;
