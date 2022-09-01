import React, { useState } from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

function Modalpop() {
  const [show, popup] = useState(false);
  const modalOpen = () => popup(true);
  const modalClose = () => popup(false);

  return (
    <div>
      <Button variant="success" onClick={modalOpen}>
        Open Modalpopup
      </Button>
      <Modal show={show} onHide={modalClose}>
        <Modal.Body>
          <App />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Modalpop;
