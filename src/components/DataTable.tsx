import { Box, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { formatCurrency } from "./utils/utils";

export default function DataTable() {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        // Función para obtener datos desde la API    
        getTestData();
    }, []);

    const getTestData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            const data = response.data;
            console.log(data);
            setRows(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'Tipo',
            width: 150,
            editable: true,
        },
        {
            field: 'rating',
            headerName: 'Calificacion',
            width: 150,
            editable: true,
            valueGetter: (params:any) => {
                return params.rate;
            }
        },
        {
            field: 'category',
            headerName: 'Categoria',
            width: 150,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Cantidad',
            type: 'number',
            width: 110,
            valueGetter: (params:any) => {
            return formatCurrency(params);
            }
        }
    ];
    return (
        <Box>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography sx={{
                        width: '100%',
                        textAlign: 'center',
                        mb: '16px',
                        fontSize: '2rem',
                        color: '#9C0461'
                    }}><strong>Movimientos</strong></Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                        pagination: {
                            paginationModel: {
                            pageSize: 5,
                            },
                        },
                        }}
                        pageSizeOptions={[5]}
                        sx={{
                            color: 'white'
                        }}
                    />
                </Grid>            
            <Paper>
            </Paper>
        </Box>
    );
}