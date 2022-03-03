import React from 'react';
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';
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
// import { Modal } from 'react-bootstrap';
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
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import { useSearchParams } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
// import Spinner from '../Spinner/Spinner.js';
import boxClass from './Busqueda.module.css'
import image7 from '../imagenes/image7.png'
import Group8 from '../imagenes/Group8.png'
import { useNavigate } from 'react-router-dom';
import RepeatSharpIcon from '@material-ui/icons/RepeatSharp';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import TagSharpIcon from '@mui/icons-material/TagSharp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';


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
        backgroundColor: 'white',
        position: 'relative',
        // borderRadius: theme.shape.borderRadius,
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
        // border:'1px solid #7FB3D5',
        // backgroundColor:'#7FB3D5',
        marginTop: '4px',
        // marginLeft:'3px',
        // color:'white',
        // width:'80px'

    },
    inputRoot: {
        color: '#808B96',
    },
    inputInput: {
        border: '2px solid #2FBCED',
        position: 'relative',
        borderRadius: '12px',
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
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

const hashtag = (item) =>{
   if(item.length === 0){
       return ""
   }
   return <TagSharpIcon style={{ height: '15px' }}/>;
}
export default function Busqueda() {

    const [openAlert, setOpenAlert] = React.useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [inputBusqueda, setInput] = useState("");
    const goTwitter = () => {
        if (inputBusqueda) {
            navigate({
                pathname: '/busqueda',
                search: '?search=' + inputBusqueda,
            });
        }
    };
    const navigate = useNavigate();

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    // const params = useParams();
    // const {search} = params
    // console.log(search);
    // console.log(params)

    const [search] = useSearchParams();
    var busqueda = search.get('search').toLowerCase()


    const styless = usseStyles();
    const [modal, setModal] = useState(false)

    const [anchorEl, setAnchorEl] = React.useState();

    // const handle = (e) => {
    //     if(e.key == "Enter"){
    //         inputBusqueda()
    //     }
    //     return false;
    // }

    const handleClicke = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosee = () => {
        setAnchorEl();
    };

    const handleClickOpenAlert = () => {
        setOpenAlert(true);
    };

    const handleCloseAlert = () => {
        setOpenAlert(false);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickk = () => {
        setOpen(!open);
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

    // const [show, popup] = useState(false);
    // const modalOpen = () => popup(true);
    // const modalClose = () => popup(false);

    const classes = useStyles();

    useEffect(() => {
        if (busqueda) {
            setLoading(true);
            axios.get(`https://guarded-sierra-66845.herokuapp.com/buscar/tw-test/${busqueda}`, {
                //   method: 'GET',
                //   headers: {
                //       "dataType": "json",
                //      "Accept": "application/json",
                //   }
            })
                .then(response => response.data)
                .then(datos => {
                    console.log(datos)
                    setData(datos);
                    setLoading(false);
                    // console.log(datos[0].name)

                }).catch((err) => {
                    console.log(err);
                    setLoading(false)
                })
        }


    }, [busqueda]);

    //`https://guarded-sierra-66845.herokuapp.com/buscar/tw-test/${busqueda}`
    //`https://guarded-sierra-66845.herokuapp.com/buscar/tw/${busqueda}`
    //`
    if (!busqueda) {
        //if (true) {
        return <div style={{ backgroundColor: '#024761' }}>
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: 'white', borderRadius: "0 0 20px 20px", boxShadow: '4px 4px 5px #566573' }}>
                    <Toolbar>
                        <Typography variant="h4" className={classes.title}   >
                            <Typography variant="subtitle"  >
                                <span style={{ cursor: 'pointer', fontFamily: 'Raleway, Arial' }} onClick={() => window.location.replace("/")}>Logo</span>
                            </Typography>
                        </Typography>
                        <Box className={boxClass.BoxInput}>
                            <InputBase
                                // hiddenLabel={true}
                                // name='sadaaaaaaaaaaaaaaaaaaaaaaaaaa'
                                className={boxClass.Input}

                                sx={{ ml: 1, flex: 1, fontFamily: 'Ubuntu, sans-serif' }}
                                placeholder="Que deseas buscar"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={e => setInput(e.target.value)}
                                value={inputBusqueda}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        goTwitter()
                                    }
                                }}
                            />
                            <Button type="submit" size="small" className={boxClass.ButtonInput} style={{ height: '100%', borderRadius: '0px 25px 25px 0px', backgroundColor: '#3498DB', marginTop: '5px !important', paddingLeft: '10px' }} variant="contained" title="Buscar" endIcon={<SearchOutlinedIcon className={boxClass.IconButton} />} onClick={() => goTwitter()}>
                                Buscar
                                {/* <IconButton sx={{ p: '10px', display:'flex', alignItems:'center', justifyContent:'center' }} aria-label="search">
                    <SearchOutlinedIcon />
                </IconButton> */}

                            </Button>
                        </Box>
                        <Button
                            style={{ borderRadius: '8px' }}
                            variant="outlined"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<AnalyticsOutlinedIcon />}

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
    console.log(busqueda)

    if (loading) {
        //if (true) {
        espera();
        return <div style={{ backgroundColor: '#024761' }}>
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: 'white', borderRadius: "0 0 20px 20px", boxShadow: '4px 4px 5px #566573' }}>
                    <Toolbar>
                        <Typography className={classes.title} variant="h4" noWrap onClick={() => window.location.replace("/")}>
                            Logo
                        </Typography>
                        {/* <div className={classes.search}> */}
                        {/* <Button type="submit" title="Buscar" style={{ borderRadius: '10px' }} className={classes.searchIcon} onClick={() => goTwitter()} endIcon={<SearchIcon />} >

                                Buscar

                            </Button>

                            <InputBase

                                placeholder="Que deseas buscar"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                                inputProps={{ "aria-label": "search" }}
                                onChange={e => setInput(e.target.value)}
                                value={inputBusqueda}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        goTwitter()
                                    }
                                }}
                            /> */}

                        <Box className={boxClass.BoxInput}>
                            <InputBase
                                // hiddenLabel={true}
                                // name='sadaaaaaaaaaaaaaaaaaaaaaaaaaa'
                                className={boxClass.Input}

                                sx={{ ml: 1, flex: 1, fontFamily: 'Ubuntu, sans-serif' }}
                                placeholder="Que deseas buscar"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={e => setInput(e.target.value)}
                                value={inputBusqueda}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        goTwitter()
                                    }
                                }}
                            />
                            <Button type="submit" size="small" className={boxClass.ButtonInput} style={{ height: '100%', borderRadius: '0px 25px 25px 0px', backgroundColor: '#3498DB', marginTop: '5px !important', paddingLeft: '10px' }} variant="contained" title="Buscar" endIcon={<SearchOutlinedIcon className={boxClass.IconButton} />} onClick={() => goTwitter()}>
                                Buscar
                                {/* <IconButton sx={{ p: '10px', display:'flex', alignItems:'center', justifyContent:'center' }} aria-label="search">
                    <SearchOutlinedIcon />
                </IconButton> */}

                            </Button>
                        </Box>

                        {/* </div> */}
                        <Button
                            style={{ borderRadius: '8px' }}
                            variant="outlined"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<AnalyticsOutlinedIcon />}

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

    if (!data || data.listadoTwitter.length == 0) {
        return <div style={{ backgroundColor: '#024761' }}>
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: 'white', borderRadius: "0 0 20px 20px", boxShadow: '4px 4px 5px #566573' }}>
                    <Toolbar>
                        <Typography variant="h4" className={classes.title}   >
                            <Typography variant="subtitle"  >
                                <span style={{ cursor: 'pointer', fontFamily: 'Raleway, Arial' }} onClick={() => window.location.replace("/")}>Logo</span>
                            </Typography>
                        </Typography>
                        <Box className={boxClass.BoxInput}>
                            <InputBase
                                // hiddenLabel={true}
                                // name='sadaaaaaaaaaaaaaaaaaaaaaaaaaa'
                                className={boxClass.Input}

                                sx={{ ml: 1, flex: 1, fontFamily: 'Ubuntu, sans-serif' }}
                                placeholder="Que deseas buscar"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={e => setInput(e.target.value)}
                                value={inputBusqueda}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        goTwitter()
                                    }
                                }}
                            />
                            <Button type="submit" size="small" className={boxClass.ButtonInput} style={{ height: '100%', borderRadius: '0px 25px 25px 0px', backgroundColor: '#3498DB', marginTop: '5px !important', paddingLeft: '10px' }} variant="contained" title="Buscar" endIcon={<SearchOutlinedIcon className={boxClass.IconButton} />} onClick={() => goTwitter()}>
                                Buscar
                                {/* <IconButton sx={{ p: '10px', display:'flex', alignItems:'center', justifyContent:'center' }} aria-label="search">
                    <SearchOutlinedIcon />
                </IconButton> */}

                            </Button>
                        </Box>
                        <Button
                            style={{ borderRadius: '8px' }}
                            variant="outlined"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<AnalyticsOutlinedIcon />}

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
                        <Typography variant="h4" className={classes.title}   >
                            <Typography variant="subtitle"  >
                                <span style={{ cursor: 'pointer', fontFamily: 'Raleway, Arial' }} onClick={() => window.location.replace("/")}>Logo</span>
                            </Typography>
                        </Typography>


                        <Box className={boxClass.BoxInput}>
                            <InputBase
                                // hiddenLabel={true}
                                // name='sadaaaaaaaaaaaaaaaaaaaaaaaaaa'
                                className={boxClass.Input}

                                style={{ fontFamily: 'Ubuntu, sans-serif', color: 'rgba(0,0,0,1)', paddingLeft: '5px' }}
                                placeholder="Que deseas buscar"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={e => setInput(e.target.value)}
                                value={inputBusqueda}
                                onKeyDown={event => {
                                    if (event.key === 'Enter') {
                                        if (busqueda && busqueda.toLowerCase() == inputBusqueda.toLowerCase()) {

                                            setOpenAlert(true)
                                        }
                                        goTwitter();
                                    }
                                }}
                            />
                            <Button type="submit" size="small" className={boxClass.ButtonInput} style={{ height: '100%', borderRadius: '0px 25px 25px 0px', backgroundColor: '#3498DB', marginTop: '5px !important', paddingLeft: '10px' }} variant="contained" title="Buscar" endIcon={<SearchOutlinedIcon className={boxClass.IconButton} />} onClick={() => goTwitter()}>
                                Buscar
                                {/* <IconButton sx={{ p: '10px', display:'flex', alignItems:'center', justifyContent:'center' }} aria-label="search">
                    <SearchOutlinedIcon />
                </IconButton> */}

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
                            style={{ borderRadius: '8px' }}
                            variant="outlined"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<AnalyticsOutlinedIcon />}

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
            <div style={{ padding: 0, margin: '0px 0px 0px  0px', maxWidth: '100%', minHeight: '750px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                {/* 
                <Paper style={{ margin: '0 left', width: '50%', marginTop: '-150px', color: 'white', backgroundColor: 'transparent', boxShadow: 'none', borderColor: 'transparent', fontFamily: 'Minimalust' }}>
                    <Box className={boxClass.BusquedaTwitt} style={{ paddingTop: '-100px', colo: 'white', fontSize: '25px', wordWrap: 'break-word !important' }}>
                        <h4 style={{ wordWrap: 'break-word !important' }}>BUSQUEDA DE TWITTS {""} {""} {'"'}{busqueda}{'"'} <br /> RESULTADOS: </h4>
                    </Box>
                </Paper> */}

                {/* Contenedor Margen Izquierdo */}

                <Paper className={boxClass.PaperGrid} style={{ margin: '0 auto', position: 'absolute', width: '15%', marginTop: '-140px', color: 'white', backgroundColor: 'transparent', boxShadow: 'none', borderColor: 'transparent', fontFamily: 'Minimalust' }}>
                    <Box style={{ paddingTop: '-50px', marginLeft: '25%', color: 'white', fontSize: '25px' }}>
                        <Button className={boxClass.ButtonDatos} style={{ borderRadius: '20px', marginBottom: '20px', width: '100%' }} size="large" variant="contained" color="primary">DATOS</Button>
                    </Box>

                    <Grid container spacing={1} className={boxClass.Grid} style={{ marginTop: '-10px', marginLeft: '11%' }}  >
                        <Grid item xs={6}>
                        <Paper className={boxClass.Grid12}>
                               <h2 > 6%</h2>
                               <h3 style={{marginTop:'-25px'}}>Strength</h3>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                        <Paper className={boxClass.Grid12}>
                               <h2 > 10:1</h2>
                               <h3 style={{marginTop:'-25px'}}>sentiment</h3>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={boxClass.Grid12}>
                               <h2 > 64%</h2>
                               <h3 style={{marginTop:'-25px'}}>Passion</h3>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                        <Paper className={boxClass.Grid12}>
                               <h2 > 17%</h2>
                               <h3 style={{marginTop:'-25px'}}>Reach</h3>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                        <Paper className={boxClass.Grid13}>
                               <h3>Likes</h3>
                              
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                        <Paper className={boxClass.Grid13}>
                               <h3>Retweets</h3>
                              
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                        <Paper className={boxClass.Grid13}>
                               <h3>Ultima Mencion 3 Dias Atras</h3>
                              
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>


                <Container className={boxClass.ContenedorIzquierdo} style={{ borderRadius: '20px', marginBottom: '100px', width: '18%', border: '1px solid transparent', marginTop: '220px', }}>
                    <Paper
                        style={{ margin: '0 0 0 0', width: '100%', minHeight: '750px', borderRadius: '20px', backgroundColor: 'transparent', boxShadow: 'none', borderColor: 'transparent' }} //Paper margen izquierdo
                    >
                        {/* {data.listadoTwitter ? (
                            data.listadoTwitter && data.listadoTwitter.map((item) => ( */}
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

                                {/* <ListItemAvatar >
                                            <Avatar style={{ backgroundColor: 'transparent', width: '100%', height: '100%', aspectRatio: '1/1', imageRendering: 'crisp-edges' }}>
                                                <a style={{ width: '100%', height: '100%' }} href={item.url_user} target="_blank" rel='noopener noreferrer'>
                                                //     {/* <TwitterIcon /> */}
                                {/* <img style={{ width: '100%', height: '100%' }} src={item.foto_perfil} />
                                                 </a>  */}

                                {/* </Avatar>

                                        </ListItemAvatar> */}
                                <Box sx={{ color: 'white', marginLeft: '5%', width: '100%' }}>




                                    <h1>Sentimientos</h1>
                                    <Divider style={{ backgroundColor: 'white' }}></Divider>
                                    <h3>Positivo</h3>
                                    <Progress done="80" />



                                    <Divider style={{ backgroundColor: 'white' }}></Divider>

                                    <h1>Palabras Principales</h1>

                                    <Progress done="30" />
                                    <Progress done="50" />
                                    <Progress done="20" />
                                    <Progress done="10" />
                                    <Progress done="90" />
                                    <Divider style={{ backgroundColor: 'white' }}></Divider>
                                    <h1>Usuarios Principales</h1>

                                    <Progress done="60" />
                                    <Progress done="40" />
                                    <Progress done="30" />
                                    <Progress done="20" />
                                    <Progress done="50" />
                                    <Divider style={{ backgroundColor: 'white' }}></Divider>
                                    <h1>Hashtag Principales</h1>

                                    <Progress done="50" />
                                    <Progress done="50" />
                                    <Progress done="70" />
                                    <Progress done="80" />
                                    <Progress done="90" />



                                </Box>
                            </ListItem>
                        </List>
                        {/* ))


                        ) : (
                            <p>no hay nada</p>
                        )} */}


                    </Paper>
                </Container>

                <Divider className={boxClass.LineaDivisora} style={{ backgroundColor: 'white', color: "white", marginLeft: '10px', marginTop: '-150px', marginBottom: '100px', width: '1px' }} orientation='vertical' flexItem variant='middle' />


                <Paper style={{ width: '30%', marginTop: '-150px', color: 'white', backgroundColor: 'transparent', boxShadow: 'none', borderColor: 'transparent', fontFamily: 'Minimalust', position: 'absolute', marginLeft: '23%' }}>
                    <Box className={boxClass.BusquedaTwitt} style={{ paddingTop: '-100px', colo: 'white', fontSize: '25px', wordWrap: 'break-word !important' }}>
                        <h4 style={{ wordWrap: 'break-word !important' }}>BUSQUEDA DE TWITTS {""} {""} {'"'}{busqueda}{'"'} <br /> RESULTADOS: </h4>
                    </Box>
                </Paper>

                <Container className={boxClass.ContenedorDerecho} style={{ borderRadius: '20px', marginBottom: '100px', marginLeft: '60px', width: '60%', border: '0px solid #3498DB' }}>

                    <Divider className={boxClass.LineaDivisora} style={{ backgroundColor: 'yellow', color: "white" }} orientation="vertical" />
                    <Paper
                        style={{ width: '100%', minHeight: '750px', borderRadius: '5px', float: 'right' }}

                    >



                        {/* <Fab variant="extended" sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center'}} className={boxClass.BusquedaTwitt}>
                                <TwitterIcon sx={{ mr: 1 }} />
                                Busqueda Twitt: {busqueda}
                            </Fab> */}

                        {/* <IconButton color="primary" style={{ marginTop: '-75px' }} aria-label="upload picture" component="span" onClick={() => window.location.replace("/")}>
                          <ArrowBackIcon /> Nueva Busqueda 
                        </IconButton> */}
                        <Button className={boxClass.nueva} variant="contained" color="primary" style={{ textAlign: 'center', bottom: '20px', right: '3px', fontSize: '10px', width: '9%', position: 'fixed', marginTop: '-64px', paddingRight: '30px', paddingBottom: '10px', height: '40px', borderRadius: '20px' }} aria-label="upload picture" component="span" onClick={() => window.location.replace("/")} startIcon={<ArrowBackIcon />} >Nueva Busqueda</Button>
                        {data.listadoTwitter ? (
                            data.listadoTwitter && data.listadoTwitter.map((item) => (
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

                                        <ListItemAvatar >
                                            <Avatar style={{ backgroundColor: 'transparent', width: '100%', height: '100%', aspectRatio: '1/1', imageRendering: 'crisp-edges' }}>
                                                <a style={{ width: '100%', height: '100%' }} href={item.url_user} target="_blank" rel='noopener noreferrer'>
                                                    {/* <TwitterIcon /> */}<img style={{ width: '100%', height: '100%' }} src={item.foto_perfil} />
                                                </a>

                                            </Avatar>

                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <ThemeProvider theme={theme} display="block" >
                                                    <Typography variant="h6" display="block" gutterBottom className={boxClass.cuerpo} >
                                                        {item.cuerpo}
                                                        <br />
                                                        <Typography variant="subtitle1" display="block" gutterBottom className={boxClass.name}>
                                                            <AccountCircleIcon style={{ height: '15px' }} />{item.name}
                                                        </Typography>

                                                        <Typography variant="subtitle1" display="block" gutterBottom className={boxClass.url}>
                                                            <TwitterIcon style={{ color: '#2FBCED', height: '15px', cursor: 'pointer' }} onClick={() => window.open(`${item.url}`, `_blank`)} />
                                                            <Link style={{ cursor: 'pointer' }} onClick={() => window.open(`${item.url}`, `_blank`)}>
                                                                {shortText(item.url)}
                                                            </Link>
                                                            <Typography variant="subtitle1" display="block" gutterBottom className={boxClass.fecha}>
                                                                <CalendarTodayOutlinedIcon style={{ height: '15px' }} /> {item.fecha}
                                                            </Typography>
                                                            <Typography variant="subtitle2" display="block" gutterBottom className={boxClass.hashtag}>
                                                                <ListItemText   >
                                                                    <RepeatSharpIcon style={{ height: '15px' }} /> {item.retweet}
                                                                </ListItemText>
                                                            </Typography>
                                                            <Typography variant="subtitle2" display="block" gutterBottom className={boxClass.hashtag}>

                                                                <ListItemText   >
                                                                    <FavoriteIcon style={{ height: '15px', display: 'inline-block', color: 'red' }} /> {item.likes}
                                                                </ListItemText>
                                                            </Typography>
                                                            
                                                            <Typography variant="subtitle2" display='inline-block' className={boxClass.menciones}>
                                                    <AlternateEmailIcon style={{ height: '15px' }} /> {item.menciones}
                                                    
                                                 </Typography>
                                                       

                                                        </Typography>
                                                    </Typography>
                                                </ThemeProvider>
                                            }
                                            secondary={
                                                
                                                <Typography variant="subtitle1" display="inline-block" gutterBottom className={boxClass.hashtag}>
                                                                
                                                                 {/* <  TagSharpIcon style={{ height: '15px' }}  />{item.hashtag} */}
                                                                 {hashtag(item.hashtag)} {item.hashtag}
                                                                 <Divider></Divider>
                                                            </Typography>
                                            }

                                        />

                                    </ListItem>
                                </List>
                            ))


                        ) : (
                            <p>no hay nada</p>
                        )}
                        {/* <Button className={boxClass.nueva} variant="contained" color="primary" style={{ bottom:'20px',right:'22px',fontSize:'8px',width:'7.5%' ,paddingBottom: '10px', height: '40px', borderRadius: '20px', position:'fixed'}} aria-label="upload picture" component="span" onClick={() => window.location.replace("/")} startIcon={<ArrowBackIcon />} >Nueva Busqueda</Button> */}
                    </Paper>
                </Container>

                {/* <List> */}
                {/* <ListItem style={{ width: '130px', float: 'right' }}>
                            <ListItemButton onClick={handleClickk} >
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText />
                            {/* Ver Mas */}
                {/* {open ? <HorizontalRuleIcon /> : <AddIcon />}
                                    </ListItemButton>
                                    </ListItem>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                    <ListItem sx={{ marginTop: '10px' }} >
                                    <ListItemAvatar>
                                    <Avatar >
                                    <TwitterIcon />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary={
                                        <ThemeProvider theme={theme}>
                                        <Typography variant="h6" display="block" gutterBottom>
                                        @sergiounac @ferpeirano @agenciaidiar usted es un tipazo, no baje los brazos, estamos con usted
                                        <Typography variant="subtitle1" display="block" gutterBottom>
                                        https://twitter.com/user/status
                                        /1484224358495236107
                                        <Typography variant="subtitle1" display="block" gutterBottom>
                                        18/01/2022
                                        </Typography>
                                        <Typography variant="subtitle2" display="block" gutterBottom>
                                        @sergiounac
                                        @ferpeirano
                                        @agenciaidiar
                                        </Typography>
                                        </Typography>
                                        </Typography>
                                        </ThemeProvider>
                                    }
                                        secondary="#Uñac" />
                                        
                                        </ListItem>
                                        </Collapse>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                        <ListItem sx={{ marginTop: '10px' }} >
                                        <ListItemAvatar>
                                        <Avatar>
                                        <TwitterIcon />
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={
                                            <ThemeProvider theme={theme}>
                                            <Typography variant="h6" display="block" gutterBottom>
                                            @sergiounac ojala siga ocupandose de la provincia como hasta ahora
                                            <Typography variant="subtitle1" display="block" gutterBottom>
                                            https://twitter.com/user/
                                            status
                                            /1484223729412587522
                                            <Typography variant="subtitle1" display="block" gutterBottom>
                                            19/01/2022
                                            </Typography>
                                            <Typography variant="subtitle2" display="block" gutterBottom>
                                            @sergiounac
                                            </Typography>
                                            </Typography>
                                            </Typography>
                                            </ThemeProvider>
                                        }
                                        secondary="#Uñac" />

                                        </ListItem>
                                        </Collapse>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                        <ListItem sx={{ marginTop: '10px' }} >
                                        <ListItemAvatar>
                                        <Avatar>
                                        <TwitterIcon />
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={
                                            <ThemeProvider theme={theme}>
                                            <Typography variant="h6" display="block" gutterBottom>
                                            @sergiounac @ferpeirano @agenciaidiar lo felicito gobernador, la provincia merece esto y mucho mas.
                                            <Typography variant="subtitle1" display="block" gutterBottom>
                                            https://twitter.com/user
                                            /status
                                            /1484223048345694214
                                            <Typography variant="subtitle1" display="block" gutterBottom>
                                            20/01/2022
                                            </Typography>
                                            <Typography variant="subtitle2" display="block" gutterBottom>
                                            @sergiounac
                                            @ferpeirano
                                            @agenciaidiar
                                            </Typography>
                                            </Typography>
                                            </Typography>
                                            </ThemeProvider>
                                        }
                                        secondary="#Gobernador" />

                                        </ListItem>
                                        </Collapse>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                        <ListItem sx={{ marginTop: '10px' }} >
                                        <ListItemAvatar>
                                        <Avatar>
                                        <TwitterIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary={
                                            <ThemeProvider theme={theme}>
                                            <Typography variant="h6" display="block" gutterBottom>
                                            @Gustavo84124185 @sergiounac @roberto_gattoni Eso fue un manotazo de ahogado cuando se estaba yendo (lo hizo en noviembre de 2017). Como EL IVA de los alimentos. Se objetivo. Queres baja de impuestos proba con el liberalismo.
                                            <Typography variant="subtitle1" display="block" gutterBottom>
                                            https://twitter.com/user
                                            /status
                                            /1484210845164916742
                                            <Typography variant="subtitle1" display="block" gutterBottom>
                                            21/01/2022
                                            </Typography>
                                            <Typography variant="subtitle2" display="block" gutterBottom>
                                            @Gustavo84124185
                                            @sergiounac
                                            @roberto_gattoni
                                            </Typography>
                                            </Typography>
                                            </Typography>
                                            </ThemeProvider>
                                        }
                                        secondary="#Ahogado" />
                                        
                                        </ListItem>
                                        </Collapse>
                                        <ListItem sx={{ marginTop: '10px' }} >
                                        <Button variant="contained" href="/" color='secondary'>Volver</Button>
                                        
                                    
                                        </ListItem>
                                    </List> */}
                {/* </Paper>
                    </Container>  */}

            </div>
        </div>
    );

}