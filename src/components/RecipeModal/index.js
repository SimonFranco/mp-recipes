import React, {useState} from 'react'
import { Modal, Button} from "react-bootstrap";

function RecipeModal({title, description}) {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return ( 
    <>
        <Button className='p-1 m-2 mx-3' style={{position:'relative', right:'-40px'}} variant="primary" onClick={handleShow}>
            See More
        </Button>

        <Modal show={show} onlyide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>title</Modal.Title>
            </Modal.Header>
            <Modal.Body>{description}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default RecipeModal