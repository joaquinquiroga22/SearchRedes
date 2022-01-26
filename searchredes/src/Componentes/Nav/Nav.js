
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ListItemButton from '@mui/material/ListItemButton';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import wachin from '../imagenes/wachin.png'
import Button from '@mui/material/Button';
import DirectionsIcon from '@mui/icons-material/Directions';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ListItemText } from '@mui/material';
import { Box } from '@mui/system';



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

export default function Nav() {
    const classes = useStyles();
    return (
        <section style={{ backgroundColor:'#024761'}}>

        <div >
            
                <AppBar position="static"  style={{borderRadius: "0 0 20px 20px", backgroundColor:'white', boxShadow:'4px 4px 5px #566573' }} >
                    <Toolbar >
                        <Typography variant="h5"  color='primary' className={classes.title}>
                            LOGO
                        </Typography>
                    </Toolbar>
                </AppBar>
                
            <div  style={{}}>
                <img style= {{height:'450px', position:'absolute',zIndex:'100000', marginLeft:'210px',marginTop:'40px'}} src={wachin} alt='hola' title='hola'/>
            </div>
      <div style={{height:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '200px 0 400px' }}>

            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', zIndex:'100000' ,alignItems: 'center', width: '50%', justifyContent: 'center', border: '1px solid #808B96', borderRadius: '30px 30px 30px 30px', height: '50px', boxShadow: '2px 2px 5px', }}
            >

                <InputBase
                    sx={{ ml: 1, flex: 1, fontFamily: 'Ubuntu, sans-serif' }}
                    placeholder="Que deseas buscar"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />

                <Button type="submit" size="large" sx={{ height: '100%', borderRadius: '0px 25px 25px 0px', backgroundColor: '#3498DB', }} variant="contained" title="Buscar" endIcon={<SearchOutlinedIcon />}>
                    Buscar
                    {/* <IconButton sx={{ p: '10px', display:'flex', alignItems:'center', justifyContent:'center' }} aria-label="search">
                    <SearchOutlinedIcon />
                </IconButton> */}

                </Button>


                <Divider />

            </Paper>
        </div>
        </div>
            <div style={{backgroundColor:'green', height:'50px'}}>
                
            </div>
        </section>
    );
}

