import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { GameForm } from '../GameForm';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true},
    { field: 'title', headerName: 'Game Title', flex: 2},
    { field: 'genre', headerName: 'Genre', flex: 1},
    { field: 'system', headerName: 'System', flex: 1},
    { field: 'beaten', headerName: 'Beaten', flex: 1},
];

interface gridData {
    data: {
        id?: string
    }
};

export const DataTable = () => {

    let { gameData, getData } = useGetData();
    let [ gridData, setData ] = useState<gridData>({data:{}});
    const [ selectionModel, setSelectionModel ] = useState<any>([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout( () => {window.location.reload();}, 1000);
    };

    console.log(gridData.data.id!);
    console.log(`testing for data ${gameData}`);

  return (
    <div style={{ height: 400, width: '100%' }}>
        <h2>My Backlog</h2>

        <DataGrid rows={gameData} columns={ columns } pageSize={ 5 } checkboxSelection={true}
        onSelectionModelChange={ (item) => {
            setSelectionModel(item)
        }} />

        <Button onClick={handleShow}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        {/* Dialog pop-up */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <GameForm id={selectionModel!} />
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                {/* <Button variant="primary" onClick={handleClose}>
                    Update Game
                </Button> */}
            </Modal.Footer>
        </Modal>
        {/* End Dialog pop-up */}
    </div>
  )
}
