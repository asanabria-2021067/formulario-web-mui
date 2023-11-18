import { Box, Button, Typography } from "@mui/material"
import SaveAsIcon from '@mui/icons-material/SaveAs';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Botones() {
    return (
        <div>
            <Typography
                variant="h3"
                component="div"
                color={{ color: '#06079C' }}
                mt={5}
                mb={5}
                align="center"

            >
                Estilo de Botones Grandes..
            </Typography>

            <div className="centrarElementos">
                <Button className="button" variant="outlined" color="indigo">Secondary</Button>
                <Button className="button" variant="contained" color="bgwarning">Primary</Button>
                <Button variant="contained" disabled>Disabled</Button>
                <Button variant="contained" color="primary" href="https://mui.com/material-ui/getting-started/installation/" target="_blank" >Install MUI</Button>
                <Button variant="contained" color="success">Success</Button>
                <Button variant="outlined" color="error">Error</Button>
            </div>

            <div className="centrarElementos">
                <Typography
                    variant="h4"
                    component="div"
                    color={{ color: '#06079C' }}
                    mt={5}
                    mb={5}
                    align="center"

                >
                    Estilo de Botones Pequeños
                </Typography>
                <Button variant="outlined" size="small" >
                    Small
                </Button>
                <Button variant="outlined" size="medium">
                    Medium
                </Button>
                <Button variant="outlined" size="large">
                    Large
                </Button>

            </div>

            <h1 className="titulo">Botones con Icones</h1>
            <div className="centrarElementos">
                <Button variant="contained" color="primary" startIcon={<SaveAsIcon />}> Guardar </Button>
                <Button variant="contained" color="secondary" startIcon={<ShoppingCartIcon />}> Comprar </Button>
                <Button variant="contained" color="success" startIcon={< EditIcon />}> Editar </Button>
                <Button variant="outlined" color="error" startIcon={<DeleteIcon />} >Eliminar</Button>


            </div>

            <br />

            <Box
                sx={{
                    border: 5,
                    padding: 3,
                    borderRadius: 3,
                    borderColor: 'primary.main',
                    textAlign: 'center',
                    color: 'primary.main',
                    boxShadow: 5,
                }}
            >
                <Typography variant="h5" component="div" textAlign={'center'}>
                    Curso de React + vite + Material UI + Intecap
                </Typography>
            </Box>



        </div>
    )
}
