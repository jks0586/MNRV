import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/layout/sidebar";
import RightSidebar from "./components/layout/rightsidebar";
function App() {
  return (
    <>
    <div className="App">
      <Container fluid>
        <Row>
          
            <Sidebar />
          
            <RightSidebar/>
          
        </Row>
      </Container>
    </div>
    </>
  );
}

export default App;
