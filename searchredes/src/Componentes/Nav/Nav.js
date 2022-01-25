
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ListItemButton from '@mui/material/ListItemButton';

import Button from '@mui/material/Button';
import DirectionsIcon from '@mui/icons-material/Directions';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ListItemText } from '@mui/material';

export default function Nav() {
    return (
        <div style={{display:'flex', alignItems: 'center', justifyContent:'center',margin:'431.5px 0'}}>
            
        
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '75%', justifyContent:'center', border: '1px solid black', borderRadius: '20px 30px 30px 20px', height:'50px', boxShadow:'2px 2px 5px' }}
            >
                
                <InputBase
                    sx={{ ml: 1, flex: 1, }}
                    placeholder="Que deseas buscar"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                
                <Button type = "submit" size="large" sx={{height:'100%',borderRadius: '0px 25px 25px 0px', backgroundColor:'#3498DB'}} variant="contained" title="Buscar" endIcon={<SearchOutlinedIcon />}>
                Buscar    
                {/* <IconButton sx={{ p: '10px', display:'flex', alignItems:'center', justifyContent:'center' }} aria-label="search">
                    <SearchOutlinedIcon />
                </IconButton> */}
                
                </Button>
                
            
                <Divider />
                
            </Paper>
            </div>
        );
    }
            
