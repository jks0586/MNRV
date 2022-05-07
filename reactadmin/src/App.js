import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/layout/sidebar";
import RightSidebar from "./components/layout/rightsidebar";
import LetscmsRoutes from './routes/routes';
function App() {
  return (
    <>
    <LetscmsRoutes />
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={3} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={9} id="page-content-wrapper">
            <RightSidebar/>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default App;
