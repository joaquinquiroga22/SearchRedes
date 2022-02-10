
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import ListItemButton from '@mui/material/ListItemButton';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import wachin from '../imagenes/wachin.png'
import lineasrosa from '../imagenes/lineasrosa.png'
import lineasamarillas from '../imagenes/lineasamarillas.png'
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, width } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
// import Busqueda from "../Busqueda/Busqueda.jsx"
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import style from '../Nav/Nav.module.css'
import { ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 5,
        cursor:'pointer',
        
    }
}));
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Nav() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const classes = useStyles();

    const goTwitter = () => {
        if (input) {
            navigate({
                pathname: '/busqueda',
                search: '?search=' + input,
            });
        }
    };

    return (
        <section style={{ backgroundColor: '#024761', }}>



            <AppBar position="static" style={{ borderRadius: "0 0 20px 20px", backgroundColor: 'white', boxShadow: '4px 4px 5px #566573', position: 'relative' }} >
                <Toolbar >
                    <Typography variant="h5" color='primary'  onClick={() => window.open("https://nodoshub.com/", "_blank")}>
                        <Typography variant="h5" onClick={() => window.open("https://nodoshub.com/", "_blank")} className={classes.title}>
LOGO
                        </Typography>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box style={{ display: 'flex', flexDirection: 'column ', alignItems: 'flex-end' }}>
                <img style={{ width: '30%', position: 'absolute', marginBottom: '120px' }} className='img-fluid shadow-4' src={lineasamarillas} alt='hola' title='Image' />
            </Box>

            <Box style={{ height: '100%', display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', margin: '250px 0 550px' }}>

                <Paper
                    component="form"
                    sx={{ p: '3px 4px', display: 'flex', position: 'absolute', zIndex: '150000', alignItems: 'center', width: '70%', justifyContent: 'center', border: '1px solid #808B96', borderRadius: '30px 30px 30px 30px', height: '50px', boxShadow: '2px 2px 5px', }}
                >

                    <Box style={{ position: 'absolute', marginTop: '-240px', textAlign: 'center', color: 'white' }}>
                        <h1>BIENVENID@</h1>
                        <h2>AL BUSCADOR Y MONITOREO DE REDES SOCIALES</h2>

                        <h5 className={style.h5}>BUSCA Y ANALIZA REDES SOCIALES EN TIEMPO REAL</h5>

                    </Box>


                    {/* <Box style={{ position: 'relative' }}>
                        <img style={{ height: '600px', position: 'absolute', zIndex: '-1', marginLeft: '-180px', marginTop: '-250px', }} className='img-fluid shadow-4' src={wachin} alt='hola' title='Image' />
                    </Box> */}

                    <InputBase
                        // hiddenLabel={true}
                        // name='sadaaaaaaaaaaaaaaaaaaaaaaaaaa'
                        className={style.Input}
                        sx={{ ml: 1, flex: 1, fontFamily: 'Ubuntu, sans-serif' }}
                        placeholder="Que deseas buscar"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={e => setInput(e.target.value)}
                        value={input}
                    />
                    <Box style={{ position: 'absolute', marginTop: '200px', color: 'white', fontSize: '20px', alignItems:'center', textAlign:'center'}} >
                        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap:'5px', marginTop:'5px', paddingBottom:'0px', textAlign:'center' }} >
                           SELECCIONA LA RED DONDE QUIERES REALIZAR TU BUSQUEDA
                        </Box>
                        <Checkbox
                            
                            {...label}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}

                            icon={<InstagramIcon />}
                            color="primary"
                            checkedIcon={<InstagramIcon />}
                        />

                        <Checkbox
                            {...label}
                            icon={<TwitterIcon />}
                            checkedIcon={<TwitterIcon />}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                        />
                        <Checkbox
                            {...label}
                            icon={<FacebookIcon />}
                            checkedIcon={<FacebookIcon />}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                        />
                        <Checkbox
                            {...label}
                            icon={<LinkedInIcon />}
                            checkedIcon={<LinkedInIcon />}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                        />
                    </Box>
                    <Box style={{ marginTop: '270px', position: 'absolute', color: 'white', textAlign:'center' }}>
                        <ul style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '-55px', paddingTop:'100px', textAlign:'center' }}>
                            <li>Nosotros</li>
                            <li>Api</li>
                            <li>Tendencias</li>
                            <li>Siguenos</li>
                            <li>Preguntas Frecuentes</li>

                        </ul>
                    </Box>
                    <Button type="submit" size="small" className={style.Button} sx={{ height: '100%', borderRadius: '0px 25px 25px 0px', backgroundColor: '#3498DB' }} variant="contained" title="Buscar" endIcon={<SearchOutlinedIcon />} onClick={() => goTwitter()}>
                        Buscar
                        {/* <IconButton sx={{ p: '10px', display:'flex', alignItems:'center', justifyContent:'center' }} aria-label="search">
                    <SearchOutlinedIcon />
                </IconButton> */}

                    </Button>


                    <Divider />

                </Paper>
            </Box>
            {/* <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                    <img style={{ width: '20%',position: 'absolute', zIndex: '1',}} className='img-fluid shadow-4' src={lineasrosa} alt='hola' title='Image' />
                </Box> */}

            <div style={{ height: '60px', zIndex: '1', position: 'relative', width: '100%' }}>

            </div>
        </section>
    );
}

