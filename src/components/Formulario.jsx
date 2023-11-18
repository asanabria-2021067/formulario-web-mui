import { useState } from 'react'
import {
    Typography,
    TextField,
    Button,
    Checkbox,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Stack,
    Modal,
    Box,
    Paper,
} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

export default function Formulario() {

    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        genero: '',
        tipoVehiculo: [],
        departamento: '',
        password: '',
        telefono: '',
    })


    const [modalOpen, setModalOpen] = useState(false)


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;


        if (type === "checkbox") {
            const updatedTipoVehiculo = checked
                ? [...formData.tipoVehiculo, value]
                : formData.tipoVehiculo.filter(item => item !== value);

            setFormData({

                ...formData,
                tipoVehiculo: updatedTipoVehiculo
            });
        } else {
            setFormData({
                ...formData,
                [name]: type === "checkbox" ? checked : value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
        handleClearForm()
    }

    const handleClearForm = () => {
        setFormData({
            nombre: "",
            correo: "",
            genero: "",
            tipoVehiculo: [],
            departamento: "",
            password: "",
            telefono: ""
        });
    };


    const listDepartamentos = [
        {
            value: 'Guatemala',
            label: 'Guatemala',
        },
        {
            value: 'Quetzaltenango',
            label: 'Quetzaltenango',
        },
        {
            value: 'Totonicapan',
            label: 'Totonicapan',
        }
    ];


    return (
        <div style={{ maxWidth: "800px", margin: "auto" }}>

            <form onSubmit={handleSubmit}>
                <Typography className='titulo' variant="h4" component="h4" align="center" mt={5}>
                    Registro de Paciente
                </Typography>

                <TextField
                    fullWidth
                    label="Ingrese nombre"
                    name='nombre'
                    required
                    variant="outlined"
                    margin="normal"
                    type="text"
                    value={formData.nombre}
                    onChange={handleInputChange}
                />

                <TextField
                    fullWidth
                    label="Ingrese correo"
                    name='correo'
                    required
                    variant="outlined"
                    margin="normal"
                    type="email"
                    value={formData.correo}
                    onChange={handleInputChange}
                />

                <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">Género</FormLabel>
                    <RadioGroup
                        name="genero"
                        value={formData.genero}
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                        <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                    </RadioGroup>
                </FormControl>

                <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">Tipo de Vehículo</FormLabel>
                    <Stack direction="row" spacing={2}>
                        <FormControlLabel
                            control={<Checkbox
                                name="tipoVehiculo"
                                value="auto"
                                checked={formData.tipoVehiculo.includes("auto")}
                                onChange={handleInputChange}
                            />}
                            label="Auto"
                        />
                        <FormControlLabel
                            control={<Checkbox
                                name="tipoVehiculo"
                                value="moto"
                                checked={formData.tipoVehiculo.includes("moto")}
                                onChange={handleInputChange}
                            />}
                            label="Moto"
                        />
                    </Stack>
                </FormControl>

                <TextField
                    fullWidth
                    label="Contraseña"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    variant="outlined"
                    type="password"
                    required
                    margin="normal"
                />

                <TextField
                    fullWidth
                    label="Teléfono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    variant="outlined"
                    type="tel"
                    required
                    margin="normal"
                />

                <TextField
                    fullWidth
                    label="Departamento"
                    name='departamento'
                    value={formData.departamento}
                    variant="outlined"
                    onChange={handleInputChange}
                    required
                    margin="normal"
                    select
                >
                    {
                        listDepartamentos.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))
                    }
                </TextField>


                <Stack direction="row" spacing={2} justifyContent="center" marginTop={2}>
                    <Button variant="contained" color="primary" type="submit">
                        Registrar Usuario
                    </Button>
                </Stack>
            </form>


            <Modal
                open={modalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <Paper style={{ padding: "20px" }}>
                        <Typography variant="h5" component="div" gutterBottom>
                            Datos Registrados Correctamente
                        </Typography>
                        <Typography variant="body1">
                            Nombre: {formData.nombre}<br />
                            Correo: {formData.correo}<br />
                            Género: {formData.genero}<br />
                            Tipo de Vehículo: {formData.tipoVehiculo.join(",")}<br />
                            Contraseña: {formData.password}<br />
                            Teléfono: {formData.telefono}<br />
                            Departamento: {formData.departamento}<br />
                        </Typography>
                        <Button variant="outlined" color="primary" onClick={handleCloseModal}>
                            Cerrar
                        </Button>
                    </Paper>
                </Box>
            </Modal>


        </div>
    )
}
