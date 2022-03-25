
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import lineasamarillas from '../imagenes/lineasamarillas.png'
import Button from '@mui/material/Button';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Group8 from '../imagenes/Group8.png'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import IconButton from '@mui/material/IconButton';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import style from '../Nav/Nav.module.css'
import { Avatar, ListItemAvatar } from '@mui/material';
import LogoEmpresaNuevo from '../imagenes/LogoEmpresaNuevo.png'
import { FcGoogle } from 'react-icons/fc'


const ColorModeContext = React.createContext({ toggleColorMode: () => { } });
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 5,
        cursor: 'pointer',

    }
}));
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



function MyApp() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <Box
            sx={{
                display: 'flex',
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            {theme.palette.mode} mode
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    );
}


const useStyless = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },

}));

export default function Nav() {
    const classess = useStyless();
    const handleEvent = () => {
        return openAlertNav(true)
    }


    const [openAlertNav, setOpenAlertNav] = React.useState(false);

    const handleClickOpenAlertNav = () => {
        setOpenAlertNav(true);
    };

    const handleCloseAlertNav = () => {
        setOpenAlertNav(false);
    };

    //DARK MODE

    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    //////////////////////////////


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
        <section style={{ backgroundColor: '#024761'}}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>



                    <AppBar position="static" style={{ borderRadius: "0 0 20px 20px", backgroundColor: 'white', boxShadow: '4px 4px 5px #566573', position: 'relative' }} >
                        <Toolbar >
                            <ListItemAvatar >

                                <Avatar variant="rounded" sx={{ width: 120, height: 56, backgroundColor: 'transparent' }}>
                                    <a style={{ width: '100%' }}><img style={{ width: '85%', aspectRatio: '1.88/1' }} src={LogoEmpresaNuevo} alt="img" /></a>
                                </Avatar>
                            </ListItemAvatar>
                        </Toolbar>
                    </AppBar>
                    <Box style={{ display: 'flex', flexDirection: 'column ', alignItems: 'flex-end' }}>
                        <img style={{ width: '30%', position: 'absolute', marginBottom: '120px' }} className='img-fluid shadow-4' src={lineasamarillas} alt='hola' title='Image' />
                    </Box>

                    <Box style={{ height: '100%', display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', margin: '250px 0 550px' }}>

                        <Paper
                            component="form"
                            sx={{ p: '3px 4px', display: 'flex', position: 'absolute', zIndex: '150000', alignItems: 'center', width: '70%', justifyContent: 'center', border: '1px solid #808B96', borderRadius: '30px 30px 30px 30px', height: '50px', boxShadow: '2px 2px 5px'}}
                        >

                            <Box style={{ position: 'absolute', marginTop: '-240px', textAlign: 'center', color: 'white' }}>
                                <h1 className={style.h1}>BIENVENID@</h1>
                                <h2 className={style.h2}>AL BUSCADOR Y MONITOREO DE REDES Y MEDIOS</h2>

                                <h5 className={style.h5}>BUSCA Y ANALIZA TWITTER Y MEDIOS EN TIEMPO REAL</h5>

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
                                onKeyDown={event => {
                                    if (event.key === 'Enter') {
                                        if (input === "" || input === "?") {
                                            // return alert("Busca otra cosa")
                                            return setOpenAlertNav(true)
                                        }
                                        goTwitter()
                                    }
                                }}
                            />
                            <Box style={{ position: 'absolute', marginTop: '200px', color: 'white', fontSize: '20px', alignItems: 'center', textAlign: 'center' }} >
                                <Box className={style.BoxSeleccion} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '5px', marginTop: '1px', paddingBottom: '0px !important', textAlign: 'center', fontFamily: 'Trebuchet MS ' }} >
                                    <h4>
                                        Realizar busqueda por Google
                                    </h4>
                                </Box>
                                <Button
                                    variant="contained"


                                    endIcon={<FcGoogle />}
                                    style={{ backgroundColor: 'white', color: 'black',position:'relative', zIndex:'1', borderRadius:'20px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
                                    href="/Google"
                                >
                                    Google

                                </Button>
                            </Box>
                            <Box style={{ marginTop: '270px', position: 'absolute', color: 'white', textAlign: 'center' }}>
                                <ul style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '-55px', paddingTop: '100px', textAlign: 'center', }}>
                                    <li>Nosotros</li>
                                    <li>Api</li>
                                    <li>Tendencias</li>
                                    <li>Siguenos</li>
                                    <li>Preguntas Frecuentes</li>

                                </ul>
                            </Box>
                            <Button

                                size="small"
                                className={style.Button}
                                sx={{ height: '100%', borderRadius: '0px 25px 25px 0px', backgroundColor: '#3498DB' }}
                                variant="contained"
                                title="Buscar"
                                endIcon={<SearchOutlinedIcon />}
                                onClick={() => {
                                    if (input === "" || input === "?") {
                                        return setOpenAlertNav(true)
                                    }
                                    return goTwitter()
                                }
                                }>
                                Buscar
                                {/* <IconButton sx={{ p: '10px', display:'flex', alignItems:'center', justifyContent:'center' }} aria-label="search">
                    <SearchOutlinedIcon />
                </IconButton> */}

                            </Button>


                            <Divider />

                        </Paper>
                    </Box>
                    <div >

                        <Dialog
                            className={style.Dialogo1}
                            open={openAlertNav}
                            onClose={handleCloseAlertNav}
                            aria-labelledby="responsive-dialog-title"
                        >
                            <DialogTitle id="responsive-dialog-title" sx={{ textAlign: 'center' }}>
                                <Box>
                                    <img className={style.Group8} src={Group8} alt="" />
                                </Box>
                            </DialogTitle>
                            <DialogContent>

                                <h3 style={{ textAlign: 'center' }}>

                                    DEBE REALIZAR UNA BUSQUEDA
                                    <br />
                                    GRACIAS
                                </h3>


                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseAlertNav} variant="contained" style={{ margin: '0 auto', backgroundColor: '#FA4343' }}>
                                    Intentar Nuevamente
                                </Button>

                            </DialogActions>
                        </Dialog>
                    </div>
                    {/* <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                    <img style={{ width: '20%',position: 'absolute', zIndex: '1',}} className='img-fluid shadow-4' src={lineasrosa} alt='hola' title='Image' />
                </Box> */}

                    <div style={{ height: '60px', zIndex: '1', position: 'relative', width: '100%' }}>

                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </section>
    );
}

