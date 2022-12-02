import React, {useState} from 'react'
import { Modal, Button} from "react-bootstrap";

function RecipeModal({title, description}) {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
    <div className='row-cols-7 px-1 mx-4'> 
    <>
        <Button className='p-1 mx-4' variant="primary" onClick={handleShow}>
            See More
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{description}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    </div>
    );
}

export default RecipeModal