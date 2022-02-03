
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
import { Box } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
// import Busqueda from "../Busqueda/Busqueda.jsx"

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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

   const [input, setInput] = useState("");
    const navigate = useNavigate();
    const classes = useStyles();

    const goTwitter = () =>{
    if (input){

        navigate({
          pathname: '/busqueda',
          search: '?search=' + input,
        });
    }
};

    return (
        <section style={{ backgroundColor: '#024761' ,}}>



            <AppBar position="static" style={{ borderRadius: "0 0 20px 20px", backgroundColor: 'white', boxShadow: '4px 4px 5px #566573', position: 'relative' }} >
                <Toolbar >
                    <Typography variant="h5" color='primary' className={classes.title}>
                        LOGO
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box style={{ display: 'flex', flexDirection: 'column ', alignItems: 'flex-end' }}>
                <img style={{ width: '30%', position: 'absolute', marginBottom: '120px' }} className='img-fluid shadow-4' src={lineasamarillas} alt='hola' title='Image' />
            </Box>

            <Box style={{ height: '100%', display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', margin: '250px 0 550px' }}>

                <Paper
                    component="form"
                    sx={{ p: '3px 4px', display: 'flex', position: 'absolute', zIndex: '150000', alignItems: 'center', width: '60%', justifyContent: 'center', border: '1px solid #808B96', borderRadius: '30px 30px 30px 30px', height: '50px', boxShadow: '2px 2px 5px', }}
                >

                    <Box style={{ position: 'absolute', marginTop: '-240px', textAlign: 'center', color: 'white' }}>
                        <h1>BIENVENID@</h1>
                        <h2>AL BUSCADOR Y MONITOREO DE REDES SOCIALES</h2>

                        <h6>BUSCA Y ANALIZA REDES SOCIALES EN TIEMPO REAL</h6>

                    </Box>


                    <Box style={{ position: 'relative' }}>
                        <img style={{ height: '600px', position: 'absolute', zIndex: '-1', marginLeft: '-180px', marginTop: '-250px', }} className='img-fluid shadow-4' src={wachin} alt='hola' title='Image' />
                    </Box>

                    <InputBase
                        // hiddenLabel={true}
                        // name='sadaaaaaaaaaaaaaaaaaaaaaaaaaa'
                        sx={{ ml: 1, flex: 1, fontFamily: 'Ubuntu, sans-serif' }}
                        placeholder="Que deseas buscar"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={e => setInput(e.target.value)}
                        value={input}
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
                            
                        </ul>
                    </Box>
                    <Box style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <img style={{ width: '50%',position: 'absolute', zIndex: '-99999',top:'310px',left:'-500px'}} className='img-fluid shadow-4' src={lineasrosa} alt='hola' title='Image' />
                    </Box>
                    <Button type="submit"  size="small" sx={{ height: '100%', borderRadius: '0px 25px 25px 0px', backgroundColor: '#3498DB' }} variant="contained" title="Buscar" endIcon={<SearchOutlinedIcon />}  onClick={() => goTwitter()}>
                        Buscar
                        {/* <IconButton sx={{ p: '10px', display:'flex', alignItems:'center', justifyContent:'center' }} aria-label="search">
                    <SearchOutlinedIcon />
                </IconButton> */}

                    </Button>
               

                    <Divider />

                </Paper>
            </Box>

            <div style={{ height: '60px', zIndex: '1', position: 'relative', width:'100%'}}>

            </div>
        </section>
    );
}

