import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { fields } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js';

const columns = [
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        sortable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 50,
        type: 'number',
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
    },
];
const rows = [
    { id: 1, name: "Vini", age: 23, email: 'vineelav123@gmail.com' },
    { id: 2, name: "Jhhni", age: 26, email: 'jhauyaua234@gmail.com' },
    { id: 3, name: "Krish", age: 33, email: 'krishn3@gmail.com' },
    { id: 4, name: "Jcak", age: 24, email: 'jacks03@gmail.com' },
    { id: 5, name: "Vjahh", age: 19, email: 'vjahgs1@gmail.com' },
    { id: 6, name: "Vani", age: 23, email: 'vani90@gmail.com' },
    { id: 7, name: "Kjhsg", age: 26, email: 'kajhhsy13@gmail.com' },
    { id: 8, name: "Jack", age: 31, email: 'jacklinw0980@gmail.com' },
    { id: 9, name: "Mic", age: 29, email: 'michle567@gmail.com' },
];

export default function DataTable() {
    return (
        <Box sx={{ height: 300, width: '100%'}}>
          <h2>User Information.</h2>
          <DataGrid rows={rows} columns={columns} pageSize={5} pagination checkboxSelection disableRowSelectionOnClick />
        </Box>
    );
}