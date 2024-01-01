import "./App.css";
import React from "react";
import Header from "./components/Header";
import Description from "./components/Description";
import Cards from "./components/Card";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
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
  );
}

export default App;
