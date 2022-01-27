
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
import TwitterBorderIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import DirectionsIcon from '@mui/icons-material/Directions';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ListItemText, Container } from '@mui/material';
import { Box } from '@mui/system';
import styles from './Nav.module.css'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 5
    }
}));
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function Nav() {
    const classes = useStyles();
    return (
        <section style={{ backgroundColor: '#024761' }}>



            <AppBar position="static" style={{ borderRadius: "0 0 20px 20px", backgroundColor: 'white', boxShadow: '4px 4px 5px #566573', position: 'relative' }} >
                <Toolbar >
                    <Typography variant="h5" color='primary' className={classes.title}>
                        LOGO
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box style={{ display: 'flex', flexDirection: 'column ', alignItems: 'flex-end' }}>
                <img style={{ height: '150px', width: '400px', position: 'absolute', marginBottom: '120px' }} className='img-fluid shadow-4' src={lineasamarillas} alt='hola' title='Image' />
            </Box>

            <Box style={{ height: '100%', display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', margin: '250px 0 550px' }}>

                <Paper
                    component="form"
                    sx={{ p: '3px 4px', display: 'flex', position: 'absolute', zIndex: '15', alignItems: 'center', width: '60%', justifyContent: 'center', border: '1px solid #808B96', borderRadius: '30px 30px 30px 30px', height: '50px', boxShadow: '2px 2px 5px', }}
                >

                    <Box style={{ position: 'absolute', marginTop: '-240px', textAlign: 'center', color: 'white' }}>
                        <h1>BIENVENID@</h1>
                        <h2>AL BUSCADOR Y MONITOREO DE REDES SOCIALES</h2>

                        <h6>BUSCA Y ANALIZA REDES SOCIALES EN TIEMPO REAL</h6>

                    </Box>


                    <Box style={{ position: 'relative' }}>
                        <img style={{ height: '600px', position: 'absolute', zIndex: '1000', marginLeft: '-180px', marginTop: '-250px', }} className='img-fluid shadow-4' src={wachin} alt='hola' title='Image' />
                    </Box>

                    <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                        <img style={{ height: '200px', width: '600px', position: 'absolute', zIndex: '-99999', marginTop: '320px' }} className='img-fluid shadow-4' src={lineasrosa} alt='hola' title='Image' />
                    </Box>
                    <InputBase
                        // hiddenLabel={true}
                        // name='sadaaaaaaaaaaaaaaaaaaaaaaaaaa'
                        sx={{ ml: 1, flex: 1, fontFamily: 'Ubuntu, sans-serif' }}
                        placeholder="Que deseas buscar"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <Box style={{ position: 'absolute', marginTop: '150px', color: 'white', fontSize:'20px' }} >
                        <Checkbox
                        
                            {...label}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 35} }}
                            
                            icon={<InstagramIcon />}
                            color="primary"
                            checkedIcon={<InstagramIcon />}
                        />

                        <Checkbox
                            {...label}
                            icon={<TwitterIcon />}
                            checkedIcon={<TwitterIcon />}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 35} }}
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
                    <Box style={{ marginTop:'300px', position:'absolute', color:'white'}}>
                        <ul style={{display:'flex',gap:'50px'}}>
                            <li>Nosotros</li>
                            <li>Api</li>
                            <li>Tendencias</li>
                            <li>Siguenos</li>
                            <li>Preguntas Frecuentes</li>
                        </ul>
                    </Box>
                    <Button type="submit" size="large" sx={{ height: '100%', borderRadius: '0px 25px 25px 0px', backgroundColor: '#3498DB' }} variant="contained" title="Buscar" endIcon={<SearchOutlinedIcon />}>
                        Buscar
                        {/* <IconButton sx={{ p: '10px', display:'flex', alignItems:'center', justifyContent:'center' }} aria-label="search">
                    <SearchOutlinedIcon />
                </IconButton> */}

                    </Button>


                    <Divider />

                </Paper>
            </Box>

            <div style={{ height: '60px', zIndex: '1', position: 'relative' }}>

            </div>
        </section>
    );
}

