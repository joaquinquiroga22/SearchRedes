import React from 'react'
import axios from 'axios';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

import { alpha, makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import TwitterIcon from '@mui/icons-material/Twitter';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@mui/material/Avatar';
import { ListItemIcon } from '@mui/material';
import { Container, ThemeProvider } from 'react-bootstrap';
import { Paper, Box, Link, Grid } from '@material-ui/core';
import BurbujaTwitter from '../BurbujaTwitter/BurbujaTwitter.js'
import { Modal } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import CircularProgress from '@mui/material/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { useSearchParams } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import boxClass from '../GoogleBusqueda/GoogleBusqueda.module.css'
import image7 from '../imagenes/image7.png'
import Group8 from '../imagenes/Group8.png'
import { useNavigate } from 'react-router-dom';
import RepeatSharpIcon from '@material-ui/icons/RepeatSharp';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import TagSharpIcon from '@mui/icons-material/TagSharp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import CachedIcon from '@mui/icons-material/Cached';
import LogoEmpresaNuevo from '../imagenes/LogoEmpresaNuevo.png'
import BarChartIcon from '@mui/icons-material/BarChart';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';

const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
        fontSize: 50,
    },
})



const usseStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: "40%",
        backgroundColor: 'white',
        border: '2px solid #2FBCED',
        borderRadius: '8px',
        boxShadow: theme.shadows[6],
        padding: '16px 32px 24px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        aspectRatio: '16/9',
        maxWidth: '600px'
    }

}))



//Menu

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #2FBCED',
        borderRadius: '8px',
        marginTop: '8px'
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            // border: '1px solid #2FBCED ',
            // borderRadius: '7px',
            // backgroundColor: theme.palette.primary.man,
            // '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            //   color: theme.palette.common.white,
            // },
        },
    },
}))(MenuItem);


/////////////////////////-------------//////////////

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        color: '#2FBCED',
        display: "none",
        [theme.breakpoints.up("sm")]: {

            display: "block"
        },

    },
    search: {
        position: 'relative',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        color: '#2FBCED',
        padding: theme.spacing(0, 1),
        height: '80%',
        position: 'absolute',
        zIndex: '1',
        pointerEvents: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Minimalust',

        marginTop: '4px',

    },
    inputRoot: {
        color: '#808B96',
    },
    inputInput: {
        border: '2px solid #2FBCED',
        position: 'relative',
        borderRadius: '12px',
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(10)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
}));

const shortText = function (text) {
    var newText = text.substring(0, 19);
    newText = newText.charAt(0).toUpperCase() + newText.slice(1);

    if (text.length > 19) {
        return newText + "";
    }
    return newText;
};
const shortTextTitle = function (text) {
    var newText = text.substring(0, 40);
    newText = newText.charAt(0).toUpperCase() + newText.slice(1);

    if (text.length > 40) {
        return newText + "";
    }
    return newText;
};
const shortTextFecha = function (text) {
    var newText = text.substring(0, 10);
    newText = newText.charAt(0).toUpperCase() + newText.slice(1);

    if (text.length > 10) {
        return newText + "";
    }
    return newText;
};

const Progress = ({ done }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 100);

    return (
        <div className={boxClass["progress"]}>
            <div className={boxClass["progress-done"]} style={style}>
                {done}%
            </div>
        </div>
    )
}






export default function GoogleBusqueda() {

    const [openAlert, setOpenAlert] = React.useState(false);

    const [inputBusquedaGoogle, setInputBusquedaGoogle] = useState("");



    const goGoogle = () => {
        if (inputBusquedaGoogle) {
            navigate({
                pathname: '/google-busqueda',
                search: '?search=' + inputBusquedaGoogle,
            });
        }
    };

    const [search] = useSearchParams();
    var busquedaGoogle = search.get('search')?.toLowerCase()





    const navigate = useNavigate();

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);




    const styless = usseStyles();
    const [modal, setModal] = useState(false)

    const [anchorEl, setAnchorEl] = React.useState();



    const handleClicke = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosee = () => {
        setAnchorEl();
    };



    const handleCloseAlert = () => {
        setOpenAlert(false);
    };





    const abrirCerrarModal = () => {
        setModal(!modal);
    }

    const body = (
        <div className={styless.modal}>
            <div align="center" >
                <h1 style={{ color: '#34495E' }} >Burbuja</h1>
            </div>
            {<BurbujaTwitter />}
            <div>

                <Button align="center" variant="outlined" color="secondary" size="small" onClick={() => abrirCerrarModal()} >Close</Button>
            </div>
        </div>
    )

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function espera() {
        await sleep(1000);
    }



    const classes = useStyles();


    useEffect(() => {
        if (busquedaGoogle) {
            setLoading(true);
            fetch(`https://newsapi.org/v2/everything?q=${busquedaGoogle}&lenguage=es&apiKey=6f437bea93ce4b7badc357e36da6b2dc`)


                .then((res) => res.json())
                .then(datos => {
                    console.log(datos)
                    setData(datos);
                    setLoading(false);


                }).catch((err) => {
                    console.log(err);
                    setLoading(false)
                })
        }


    }, [busquedaGoogle]);
    console.log(data)

    //`https://guarded-sierra-66845.herokuapp.com/buscar/tw-test/${busqueda}`
    //`https://guarded-sierra-66845.herokuapp.com/buscar/tw/${busqueda}`
    //`

    if (!busquedaGoogle) {
        //if (true) {
        return <div style={{ backgroundColor: '#024761' }}>
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: 'white', borderRadius: "0 0 20px 20px", boxShadow: '4px 4px 5px #566573' }}>
                    <Toolbar>
                        <ListItemAvatar className={classes.title}>

                            <Avatar variant="rounded" sx={{ width: 120, height: 54, backgroundColor: 'transparent' }}>
                                <a href='/' style={{ width: '100%' }}><img style={{ width: '90%', aspectRatio: '1.88/1' }} src={LogoEmpresaNuevo} alt="img" /></a>
                            </Avatar>
                        </ListItemAvatar>
                        <Box className={boxClass.BoxInput}>
                            <InputBase

                                className={boxClass.Input}

                                sx={{ ml: 1, flex: 1, fontFamily: 'Ubuntu, sans-serif' }}
                                placeholder="Que deseas buscar"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={e => setInputBusquedaGoogle(e.target.value)}
                                value={inputBusquedaGoogle}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        goGoogle()
                                    }
                                }}
                            />
                            <Button type="submit" size="small" className={boxClass.ButtonInput} style={{ height: '100%', borderRadius: '0px 25px 25px 0px', backgroundColor: '#3498DB', marginTop: '5px !important', paddingLeft: '10px' }} variant="contained" title="Buscar" endIcon={<SearchOutlinedIcon className={boxClass.IconButton} />} onClick={() => goGoogle()}>
                                Buscar

                            </Button>
                        </Box>
                        <Button
                            style={{ borderRadius: '20px', backgroundColor: '#2F9DED', color: 'white' }}
                            variant="outlined"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<BarChartIcon style={{ borderRadius: '20px', backgroundColor: 'white', color: '#2F9DED' }} />}

                            onClick={handleClicke}
                        >
                            Esquemas
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClosee}
                            className={boxClass.MenuEsquemas}
                        >
                            <StyledMenuItem>
                                <ListItemIcon className={boxClass.Burbuja}>
                                    <BubbleChartIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Burbuja" onClick={() => abrirCerrarModal()} />
                                <Modal
                                    className={boxClass.burbuja}
                                    open={modal}
                                    onClose={abrirCerrarModal}>
                                    {body}
                                </Modal>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon className={boxClass.Burbuja}>
                                    <DraftsIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Grafico Barras" />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon className={boxClass.Burbuja}>
                                    <InboxIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Grafico Lineas" />
                            </StyledMenuItem>
                            <Button style={{ marginLeft: '60px', marginTop: '10px' }} variant='outlined' color='secondary' size='small' href="/" className={boxClass.BotonVolver}>
                                Volver
                            </Button>
                        </StyledMenu>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={{ padding: 16, margin: '10px auto 80px', maxWidth: '80%', aspectRatio: '16/9 !important' }}>


                <Container>
                    <Paper
                        style={{ margin: '0 auto', width: '700px', maxWidth: '700px', height: '750px', textAlign: 'center', backgroundColor: 'transparent', boxShadow: 'none', borderColor: 'transparent', aspectRatio: '16/9 !important' }}
                    >


                        <Box className={boxClass.ErrorBox}>
                            <Box>
                                <img className={boxClass.Group8} src={Group8} alt="" />
                            </Box>

                            <Box>
                                <h2 className={boxClass.h2}>No se encontraron datos <br /> en tu busqueda </h2>
                            </Box>
                            <Box>
                                <Button
                                    variant="contained"
                                    size="large"
                                    style={{
                                        backgroundColor: '#2F9DED',
                                        color: 'white',
                                        marginBottom: '10px',
                                        margintTop: '20px',
                                        borderRadius: '20px',
                                    }}
                                    color="secondary"
                                    href="/" >
                                    Intente Nuevamente
                                </Button>
                            </Box>
                            <Box style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>


                                <img style={{ width: '80%', marginTop: '5%' }} src={image7} alt="hola" />

                            </Box>
                        </Box>

                    </Paper>
                </Container>

            </div>
        </div>
    }
    console.log(data)

    if (loading) {
        //if (true) {
        espera();
        return <div style={{ backgroundColor: '#024761' }}>
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: 'white', borderRadius: "0 0 20px 20px", boxShadow: '4px 4px 5px #566573' }}>
                    <Toolbar>
                        <ListItemAvatar className={classes.title}>

                            <Avatar variant="rounded" sx={{ width: 120, height: 54, backgroundColor: 'transparent' }}>
                                <a href='/' style={{ width: '100%' }}><img style={{ width: '90%', aspectRatio: '1.88/1' }} src={LogoEmpresaNuevo} alt="img" /></a>
                            </Avatar>
                        </ListItemAvatar>


                        <Box className={boxClass.BoxInput}>
                            <InputBase

                                className={boxClass.Input}

                                sx={{ ml: 1, flex: 1, fontFamily: 'Ubuntu, sans-serif' }}
                                placeholder="Que deseas buscar"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={e => setInputBusquedaGoogle(e.target.value)}
                                value={inputBusquedaGoogle}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        goGoogle()
                                    }
                                }}
                            />
                            <Button type="submit" size="small" className={boxClass.ButtonInput} style={{ height: '100%', borderRadius: '0px 25px 25px 0px', backgroundColor: '#3498DB', marginTop: '5px !important', paddingLeft: '10px' }} variant="contained" title="Buscar" endIcon={<SearchOutlinedIcon className={boxClass.IconButton} />} onClick={() => goGoogle()}>
                                Buscar


                            </Button>
                        </Box>


                        <Button
                            style={{ borderRadius: '20px', backgroundColor: '#2F9DED', color: 'white' }}
                            variant="outlined"

                            size="large"
                            className={classes.button}
                            startIcon={<BarChartIcon style={{ borderRadius: '20px', backgroundColor: 'white', color: '#2F9DED' }} />}

                            onClick={handleClicke}
                        >
                            Esquemas
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClosee}
                            style={{ top: '0px' }}
                            className={boxClass.MenuEsquemas}

                        >
                            <StyledMenuItem >
                                <ListItemIcon className={boxClass.Burbuja}>
                                    <BubbleChartIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Burbuja" onClick={() => abrirCerrarModal()} />
                                <Modal
                                    open={modal}
                                    onClose={abrirCerrarModal}>
                                    {body}
                                </Modal>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon className={boxClass.Burbuja}>
                                    <DraftsIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Grafico Barras" />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon className={boxClass.Burbuja}>
                                    <InboxIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Grafico Lineas" />
                            </StyledMenuItem>
                            <Button style={{ marginLeft: '60px', marginTop: '10px' }} variant='outlined' color='secondary' size='small' href="/" className={boxClass.BotonVolver}>
                                Volver
                            </Button>
                        </StyledMenu>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={{ padding: 16, margin: '10px auto 80px', maxWidth: '80%' }}>


                <Container>
                    <Paper
                        style={{ margin: '0 auto', width: '100%', height: '800px', backgroundColor: '#024761', backgroundColor: 'transparent', boxShadow: 'none', borderColor: 'transparent' }}
                    >
                        <Box className={boxClass.hola} style={{ width: '50%', height: '300px', border: '', borderRadius: '10px', margin: '200px auto', textAlign: 'center' }}>

                            <h1 style={{ color: '#2FBCED' }}>Buscando...</h1>
                            {/* <Spinner /> */}
                            <CircularProgress style={{ color: '#2FBCED', width: '10%' }} />
                        </Box>

                    </Paper>
                </Container>

            </div>
        </div>
    }

    if (!data || data.articles.length === 0) {
        return <div style={{ backgroundColor: '#024761' }}>
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: 'white', borderRadius: "0 0 20px 20px", boxShadow: '4px 4px 5px #566573' }}>
                    <Toolbar>
                        <ListItemAvatar className={classes.title}>

                            <Avatar variant="rounded" sx={{ width: 120, height: 54, backgroundColor: 'transparent' }}>
                                <a href='/' style={{ width: '100%' }}><img style={{ width: '90%', aspectRatio: '1.88/1' }} src={LogoEmpresaNuevo} alt="img" /></a>
                            </Avatar>
                        </ListItemAvatar>
                        <Box className={boxClass.BoxInput}>
                            <InputBase

                                className={boxClass.Input}

                                sx={{ ml: 1, flex: 1, fontFamily: 'Ubuntu, sans-serif' }}
                                placeholder="Que deseas buscar"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={e => setInputBusquedaGoogle(e.target.value)}
                                value={inputBusquedaGoogle}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        goGoogle()
                                    }
                                }}
                            />
                            <Button type="submit" size="small" className={boxClass.ButtonInput} style={{ height: '100%', borderRadius: '0px 25px 25px 0px', backgroundColor: '#3498DB', marginTop: '5px !important', paddingLeft: '10px' }} variant="contained" title="Buscar" endIcon={<SearchOutlinedIcon className={boxClass.IconButton} />} onClick={() => goGoogle()}>
                                Buscar


                            </Button>
                        </Box>
                        <Button
                            style={{ borderRadius: '20px', backgroundColor: '#2F9DED', color: 'white' }}
                            variant="outlined"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<BarChartIcon style={{ borderRadius: '20px', backgroundColor: 'white', color: '#2F9DED' }} />}

                            onClick={handleClicke}
                        >
                            Esquemas
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClosee}
                            className={boxClass.MenuEsquemas}
                        >
                            <StyledMenuItem>
                                <ListItemIcon className={boxClass.Burbuja}>
                                    <BubbleChartIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Burbuja" onClick={() => abrirCerrarModal()} />
                                <Modal
                                    open={modal}
                                    onClose={abrirCerrarModal}>
                                    {body}
                                </Modal>

                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon className={boxClass.Burbuja}>
                                    <DraftsIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Grafico Barras" />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon className={boxClass.Burbuja}>
                                    <InboxIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Grafico Lineas" />
                            </StyledMenuItem>
                            <Button style={{ marginLeft: '60px', marginTop: '10px' }} variant='outlined' color='secondary' size='small' href="/" className={boxClass.BotonVolver}>
                                Volver
                            </Button>
                        </StyledMenu>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={{ padding: 16, margin: '10px auto 80px', maxWidth: '80%', height: '800px' }}>


                <Container>
                    <Paper
                        style={{ margin: '0 auto', width: '100%', maxWidth: '500px', height: '800px', textAlign: 'center', backgroundColor: 'transparent', boxShadow: 'none', borderColor: 'transparent', aspectRatio: '16/9' }}
                    >


                        <Box className={boxClass.ErrorBox}>

                            <Box>
                                <img className={boxClass.Group8} src={Group8} alt="" />
                            </Box>

                            <Box>
                                <h2 className={boxClass.h2}>No se encontraron datos <br /> en tu busqueda </h2>
                            </Box>
                            <Box>
                                <Button
                                    variant="contained"
                                    size="large"
                                    style={{
                                        backgroundColor: '#2F9DED',
                                        color: 'white',
                                        marginBottom: '10px',
                                        margintTop: '20px',
                                        borderRadius: '20px',
                                    }}
                                    color="secondary"
                                    href="/" >
                                    Intente Nuevamente
                                </Button>
                            </Box>
                            <Box style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>


                                <img style={{ width: '80%', marginTop: '5%' }} src={image7} alt="hola" />

                            </Box>


                        </Box>
                    </Paper>
                </Container>

            </div>
        </div >
    }





    return (

        <div style={{ backgroundColor: '#024761' }}>
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: 'white', borderRadius: "0 0 20px 20px", boxShadow: '4px 4px 5px #566573', marginBottom: '150px' }}>
                    <Toolbar>

                        <ListItemAvatar className={classes.title}>

                            <Avatar variant="rounded" sx={{ width: 120, height: 54, backgroundColor: 'transparent' }}>
                                <a href='/' style={{ width: '100%' }}><img style={{ width: '90%', aspectRatio: '1.88/1' }} src={LogoEmpresaNuevo} alt="img" /></a>
                            </Avatar>
                        </ListItemAvatar>

                        <Box className={boxClass.BoxInput}>
                            <InputBase

                                className={boxClass.Input}

                                style={{ fontFamily: 'Ubuntu, sans-serif', color: 'rgba(0,0,0,1)', paddingLeft: '5px' }}
                                placeholder="Que deseas buscar"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={e => setInputBusquedaGoogle(e.target.value)}
                                value={inputBusquedaGoogle}
                                onKeyDown={event => {
                                    if (event.key === 'Enter') {
                                        if (busquedaGoogle && busquedaGoogle.toLowerCase() === inputBusquedaGoogle.toLowerCase()) {

                                            setOpenAlert(true)
                                        }
                                        goGoogle();
                                    }
                                }}
                            />
                            <Button

                                size="small"
                                className={boxClass.ButtonInput}
                                style={{ height: '100%', borderRadius: '0px 25px 25px 0px', backgroundColor: '#3498DB', marginTop: '5px !important', paddingLeft: '10px' }}
                                variant="contained"
                                title="Buscar"
                                endIcon={<SearchOutlinedIcon
                                    className={boxClass.IconButton} />}
                                onClick={() => {
                                    if (busquedaGoogle && busquedaGoogle.toLowerCase() === inputBusquedaGoogle.toLowerCase()) {
                                        setOpenAlert(true);
                                    }
                                    goGoogle()
                                }
                                }>
                                Buscar


                            </Button>
                        </Box>
                        <div >

                            <Dialog

                                open={openAlert}
                                onClose={handleCloseAlert}
                                aria-labelledby="responsive-dialog-title"
                            >
                                <DialogTitle id="responsive-dialog-title" sx={{ textAlign: 'center' }}>
                                    <Box>
                                        <img className={boxClass.Group8} src={Group8} alt="" />
                                    </Box>
                                </DialogTitle>
                                <DialogContent>

                                    <h3 style={{ textAlign: 'center' }}>

                                        ESTA BUSQUEDA YA SE REALIZÓ
                                        <br />
                                        REALICE OTRA
                                    </h3>


                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCloseAlert} color="secondary" variant="contained" style={{ marginRight: '16%' }}>
                                        Intentar Nuevamente
                                    </Button>

                                </DialogActions>
                            </Dialog>
                        </div>


                        <Button
                            style={{ borderRadius: '20px', backgroundColor: '#2F9DED', color: 'white' }}
                            variant="outlined"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<BarChartIcon style={{ borderRadius: '20px', backgroundColor: 'white', color: '#2F9DED' }} />}

                            onClick={handleClicke}
                        >
                            Esquemas
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClosee}
                            className={boxClass.MenuEsquemas}

                        >
                            <StyledMenuItem>
                                <ListItemIcon className={boxClass.Burbuja}>
                                    <BubbleChartIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Burbuja" onClick={() => abrirCerrarModal()} />
                                <Modal
                                    open={modal}
                                    onClose={abrirCerrarModal}>
                                    {body}
                                </Modal>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon className={boxClass.Burbuja}>
                                    <DraftsIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Grafico Barras" />
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon className={boxClass.Burbuja}>
                                    <InboxIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Grafico Lineas" />
                            </StyledMenuItem>

                        </StyledMenu>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={{ padding: 0, margin: '0px 0px 0px  0px', maxWidth: '100%', minHeight: '750px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>


                {/* Contenedor Margen Izquierdo */}

                <Paper className={boxClass.PaperGrid} style={{ margin: '0 auto', position: 'absolute', width: '15%', marginTop: '-120px', color: 'white', backgroundColor: 'transparent', boxShadow: 'none', borderColor: 'transparent', fontFamily: 'Minimalust' }}>




                    {/* <Grid container spacing={1} className={boxClass.Grid} style={{ marginTop: '100px', marginLeft: '11%' }}  >

                

                  
                        <Grid item xs={12}>
                            <Paper className={boxClass.Grid13}>
                                <h4>Ultima Mencion hace 10hs</h4>

                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={boxClass.Grid13}>
                                <h4>Ultima Mencion hace 10hs</h4>

                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={boxClass.Grid13}>
                                <h4>Ultima Mencion hace 10hs</h4>

                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                className={boxClass.ButtonRedes}
                                fullWidth
                                style={{ color: 'white', borderRadius: '20px', width: '40%', left: '30%' , marginTop:'50px !important', border:'10px solid red'}}
                                href="/Google"
                                
                                variant="contained"

                            >

                                volver

                            </Button>
                        </Grid>
                 
                    </Grid> */}

                </Paper>

                <Container className={boxClass.ContenedorIzquierdo} style={{ borderRadius: '20px', marginBottom: '100px', width: '18%', border: '1px solid transparent', marginTop: '50px' }}>
                    <Paper
                        style={{ margin: '0 0 0 0', width: '100%', minHeight: '750px', borderRadius: '20px', backgroundColor: 'transparent', boxShadow: 'none', borderColor: 'transparent' }} //Paper margen izquierdo
                    >


                        <List
                            sx={{
                                margin: '0 auto',
                                width: '100%',
                                maxWidth: '120%',
                                bgcolor: 'transparent',
                                borderRadius: '20px',
                                boxShadow: 'none',
                                borderColor: 'transparent'
                            }}
                            theme={theme}
                        >
                            <ListItem >


                                {/* <Box className={boxClass.BoxMargen} sx={{ color: 'white', marginLeft: '5%', width: '100%' }}>






                                    <Divider style={{ backgroundColor: 'white' }}></Divider>

                                    <h1>Palabras Principales</h1>
                                    {data.articles ? (
                                        data.articles && data.articles.map((item) => (
                                            <Box>

                                                <Divider style={{ backgroundColor: 'white' }}></Divider>

                                                <Divider style={{ backgroundColor: 'white' }}></Divider>
                                                <h4><StickyNote2OutlinedIcon style={{ marginBottom: '-6px' }} />{item.palabra}</h4>

                                                <Divider style={{ backgroundColor: 'white' }}></Divider>
                                            </Box>
                                        ))


                                    ) : (
                                        <p>no hay nada</p>
                                    )}



                                </Box> */}
                            </ListItem>
                        </List>


                    </Paper>
                </Container>

                {/* <Divider className={boxClass.LineaDivisora} style={{ backgroundColor: 'white', color: "white", marginLeft: '10px', marginTop: '-150px', marginBottom: '100px', width: '1px' }} orientation='vertical' flexItem variant='middle' /> */}


                <Paper style={{ width: '30%', marginTop: '-150px', color: 'white', backgroundColor: 'transparent', boxShadow: 'none', borderColor: 'transparent', fontFamily: 'Minimalust', position: 'absolute', marginLeft: '23%' }}>
                    <Box className={boxClass.BusquedaTwitt} style={{ paddingTop: '-100px', colo: 'white', fontSize: '25px', wordWrap: 'break-word !important' }}>
                        <h4 style={{ wordWrap: 'break-word !important' }}>BUSQUEDA EN GOOGLE NEWS: {'"'}{busquedaGoogle}{'"'} <br /> RESULTADOS: </h4>
                    </Box>
                </Paper>

                <Container className={boxClass.ContenedorDerecho} style={{ borderRadius: '25px', marginBottom: '100px', marginLeft: '60px', width: '60%', border: '0px solid #3498DB' }}>

                    <Divider className={boxClass.LineaDivisora} style={{ backgroundColor: 'yellow', color: "white" }} orientation="vertical" />
                    <Paper
                        style={{ width: '100%', minHeight: '750px', borderRadius: '20px', float: 'right' }}

                    >


                        <Button className={boxClass.nueva} variant="contained" color="primary" style={{ textAlign: 'center', bottom: '20px', right: '3px', fontSize: '10px', width: '9%', position: 'fixed', marginTop: '-64px', paddingRight: '30px', paddingBottom: '10px', height: '40px', borderRadius: '20px' }} aria-label="upload picture" component="span" onClick={() => window.location.replace("/Google")} startIcon={<ArrowBackIcon />} >Nueva Busqueda</Button>
                        {data.articles ? (
                            data.articles && data.articles.map((item) => (
                                <List
                                    className={boxClass.ListPaperDerecho}
                                    sx={{
                                        margin: '0 auto',
                                        width: '100%',
                                        maxWidth: '120%',
                                        bgcolor: 'white',
                                        borderRadius: '20px'
                                    }}
                                    theme={theme}
                                >
                                    <ListItem >

                                        <ListItemAvatar style={{ width: '20%', height: '20%', marginLeft: '-10px', aspectRatio:'1.49/1' }} >
                                            <Avatar style={{ width: '100%', height:'100%', borderRadius:'10px'}} variant="square" >
                                                <a style={{ width: '100%', height: '100%' }} href={item.url_user} target="_blank" rel='noopener noreferrer' alt={item.url} title={item.title}>
                                                    <img style={{ width: '100%', height: '100%', objectFit:'cover'}} src={item.urlToImage} alt="" />
                                                </a>

                                            </Avatar>

                                        </ListItemAvatar>
                                        <ListItemText
                                        style={{paddingLeft:'10px'}}
                                            primary={
                                                <ThemeProvider theme={theme} display="block" >
                                                    <Typography variant="h6" display="block" gutterBottom className={boxClass.cuerpo} >
                                                        {item.description}
                                                        <br />
                                                    </Typography>

                                                    <Typography variant="subtitle1" display="block" gutterBottom className={boxClass.url}>
                                                        <NewspaperOutlinedIcon style={{ height: '15px', cursor: 'pointer' }} onClick={() => window.open(`${item.url}`, `_blank`)} />
                                                        <Link style={{ cursor: 'pointer' }} onClick={() => window.open(`${item.url}`, `_blank`)}>
                                                           {shortText(item.url)}
                                                        </Link>

                                                        <Typography variant="subtitle1" display="block" gutterBottom className={boxClass.fecha}>
                                                            <CalendarTodayOutlinedIcon style={{ height: '15px' }} /> {shortTextFecha(item.publishedAt)}
                                                        </Typography>

                                                        <Typography variant="subtitle2" display="block" gutterBottom className={boxClass.hashtag}>

                                                            <ListItemText   >
                                                               <SubtitlesOutlinedIcon style={{height: '15px' }} /> {shortTextTitle(item.title)}
                                                            </ListItemText>
                                                        </Typography>
                                                        <Divider></Divider>
                                                    </Typography>
                                                </ThemeProvider>
                                            }


                                        />

                                    </ListItem>
                                </List>
                            ))


                        ) : (
                            <p>no hay nada</p>
                        )}

                    </Paper>
                </Container>

            </div>
        </div>


    );

}