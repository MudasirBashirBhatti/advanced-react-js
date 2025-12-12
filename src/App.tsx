import { useState } from "react";
import ModalWithContext from "./components/compound-components/modals/ModalWithContext/ModalWithContext";
import Header from "./components/compound-components/modals/ModalWithContext/Header/Header";
import TrackMouse from "./components/mouse-tracking/TrackMouse/TrackMouse";

const App = () => {
  const [isModalVisible, setisModalVisible] = useState(false);
  return (
    <div>
      {/* <Modal
        onClose={() => setisModalVisible(false)}
        isVisible={isModalVisible}
      >
        This is modal
        <Modal.Header>This is modal header one</Modal.Header>
        <Modal.Body>
          This is Modal Body <h1>dasf</h1>
        </Modal.Body>
      </Modal> */}

      <ModalWithContext
        onClose={() => setisModalVisible(false)}
        isVisible={isModalVisible}
      >
        This is modal
        <Header>Hello Header</Header>
      </ModalWithContext>

      <button onClick={() => setisModalVisible(true)}>show modal</button>

      <TrackMouse />
    </div>
  );
};

export default App;
