import "./App.css";
import { Button, Alert, Navbar, Container, Card } from "react-bootstrap";
import Counter from "./components/Header";
import Description from "./components/Description";
import Cards from "./components/Card";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Counter />
      <Description />
      <div >
          <h1 style={{marginLeft:'50vw'}}>Colors</h1>
        <div style={{ gap:'5px',display: "flex", justifyContent:'center', width:'80vw', margin:'auto' ,overflow:'auto'}}>
          <Cards />
        </div>
      </div>
      <Footer />

    </>
  );
}

export default App;
