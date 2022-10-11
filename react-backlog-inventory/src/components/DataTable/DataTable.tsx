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
    let [ open, setOpen ] = useState(false);
    let [ gridData, setData ] = useState<gridData>({data:{}});
    const [ selectionModel, setSelectionModel ] = useState<any>([]);

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout( () => {window.location.reload();}, 1000);
    };

    // console.log(`GridData: ${gridData.data.id}`);
    // console.log(`testing for data ${gameData}`);

  return (
    <div style={{ height: 400, width: '100%' }}>
        <h2>My Backlog</h2>

        <DataGrid rows={gameData} columns={ columns } pageSize={ 5 } checkboxSelection={true}
        onSelectionModelChange={ (item) => {
            setSelectionModel(item)
            }}
        />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        {/* Dialog pop-up */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Game {selectionModel}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update Game</DialogContentText>
                    <GameForm id={selectionModel!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
        </Dialog>
        {/* End Dialog pop-up */}
    </div>
  )
}
