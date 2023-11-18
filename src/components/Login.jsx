import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';

function Copyright(props) {
    return (
        <Typography variant="body2" align="center" {...props}>

        </Typography>
    );
}

const defaultTheme = createTheme();

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        Swal.fire({
            title: "Bienvenido",
            text: data.get("email")
        })
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container id="containerAll" component="main" maxWidth="xs">
                <CssBaseline />
                <div id='containerImg' style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ textAlign: "center", minWidth: "50vh", marginTop:"5vh", justifyContent: "start", marginLeft: "30%" }}>
                        <img id='imgLogo' src="https://aulas.intecap.edu.gt/pluginfile.php/1/theme_moove/logo/1698702940/intecap.png" alt="..." height={300} />
                    </div>
                    <Grid container justifyContent="center" id="containerLogin" alignItems="center" style={{ minHeight: '85vh', minWidth: "60vh", marginTop: "5%"}}>
                        <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: "100%",
                                justifyContent: "end" 
                            }}
                        >
                            <Typography component="h1" variant="h4" style={{ color: "white", textAlign: "center", fontSize: "28px", minWidth: "50vh", marginTop:"5vh" }}>
                                <strong>Bienvenido de vuelta</strong>
                            </Typography>
                            <Typography component="h1" variant="h5" style={{ color: "rgba(255, 255, 255, 0.781)", textAlign: "center", fontSize: "15px", marginTop: "03%", minWidth: "50vh" }}>
                                <strong>Que bueno verte por aquí :)</strong>
                            </Typography>
                            <Grid container spacing={2} justifyContent="center" marginTop="05%" gap="30px" style={{ minWidth: "50vh" }}>
                                <Button
                                    type="primary"
                                    style={{ backgroundColor: "blue", color: "white", borderRadius: "50%", minWidth: "20px", height: "52px", marginTop: "12px" }}
                                    sx={{ mt: 3, mb: 2 }}
                                    variant='outlined'
                                >
                                    <FacebookIcon />
                                </Button>
                                <Button
                                    type="primary"
                                    style={{ backgroundColor: "darkred", color: "white", borderRadius: "50%", minWidth: "20px", height: "52px", marginTop: "12px" }}
                                    variant='outlined'
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    <GoogleIcon />
                                </Button>

                            </Grid>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} borderColor={"red"} style={{ minWidth: "50vh", marginTop:"10px" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Correo Electronico"
                                            name="email"
                                            autoComplete="email"
                                            sx={{
                                                '& label': { color: 'white' },
                                                '& input': { color: 'white' },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Contraseña"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                            color='info'
                                            sx={{
                                                '& label': { color: 'white' },
                                                '& input': { color: 'white' },
                                            }} />
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            ¿Olvidaste tu contraseña?
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    style={{ height: "45px", borderRadius: "20px" }}
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Inicia Sesion
                                </Button>
                                <Grid container style={{ minWidth: "50vh" }}>
                                    <Grid justifyContent="flex-start" style={{ marginLeft: "20px", color: "white" }}>
                                        <Grid item>
                                            ¿Aun no tienes cuenta?
                                        </Grid>
                                    </Grid>
                                    <Grid justifyContent="flex-end" style={{ marginLeft: "20px", marginBottom: "20px" }}>
                                        <Grid item>
                                            <Link href="#" variant="body2">
                                                Registrate aqui
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Grid justifyContent="flex-start" style={{ marginLeft: "20px", color: "white" }}>
                                        <Grid item >
                                            <div style={{display: "flex", gap:"5px"}}>
                                            <div style={{backgroundColor: "white", height: "2px", width:"135px"}}></div> <div style={{marginTop:"-12px"}}>o</div> <div style={{backgroundColor: "white", height: "2px", width:"135px"}}></div></div>
                                        </Grid>
                                    </Grid>
                                    <Grid justifyContent="flex-start" style={{color: "white", marginRight: "auto", marginLeft:"auto"}}>
                                        <div className="d-flex align-items-center justify-content-center">
                                        <Grid item >
                                           <Button type='reset'
                                           fullWidth
                                           id="btnOrganizacion"
                                           variant="outlined"
                                           style={{ height: "35px", marginTop: "3px", color:"white"}}
                                           sx={{ mt: 3, mb: 2}}>
                                            Ingresa con tu organización
                                           </Button>
                                        </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                </div>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
