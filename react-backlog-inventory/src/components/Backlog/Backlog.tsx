import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGetData } from '../../custom-hooks';
import { Navbar } from '../Navbar';
import { DataTable } from '../../components/DataTable';
import { GameForm } from '../GameForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Backlog = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
  return (
    <div>
        <Navbar />
        <Button variant="primary" onClick={handleShow}>
            Add New Game
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <GameForm />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                {/* <Button variant="primary" onClick={handleClose}>
                    Add Game
                </Button> */}
            </Modal.Footer>
        </Modal>

        <DataTable />
    </div>
  )
}
