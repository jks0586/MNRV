import "./App.css";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/layout/sidebar";
import RightSidebar from "./components/layout/rightsidebar";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


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
