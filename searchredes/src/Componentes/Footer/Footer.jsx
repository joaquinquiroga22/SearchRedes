import React from 'react';
import { Container, Box, Grid, IconButton, List, Typography } from '@mui/material';
// import { Link } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from '../Footer/Footer.Module.css'
const buttons = [
    <IconButton style={{color:'#2F9DED', backgroundColor:'white', margin: '0 2px'}}>
        <FacebookIcon />
    </IconButton>,
    <IconButton style={{color:'#2F9DED', backgroundColor:'white',  margin: '0 2px'}}>
        <TwitterIcon />
    </IconButton>,
    <IconButton style={{color:'#2F9DED', backgroundColor:'white',  margin: '0 2px'}}>
        <InstagramIcon />
    </IconButton>,
    <IconButton style={{color:'#2F9DED', backgroundColor:'white',  margin: '0 2px'}}>
        <LinkedInIcon />
    </IconButton>,
];


 function Footer() {

    return (

        <footer style={{ width:'100%', zIndex:'10000'}} >
            <Box sx={{ backgroundColor: '#3498DB', }}   >
                <Container maxWidth="lg">
                    <Grid container spacing={11} sx={{}} flexDirection="row"
                        justifyContent="flex-start"
                        alignItems="center"  className={styles.elementos} >
                        <Grid item xs sm={4} color="white"  >
                            <List sx={{ marginTop: '-80px', float: 'left' }}  >
                                <Typography  sx={{justifyContent:'flex-start', fontFamily: 'Ubuntu, sans-serif'}}>
                                    Empresa
                              <br/>  
                              <br/>
                                    Teléfono: 2645676869
                                </Typography>
                            </List>

                            {/* <p style={{marginTop:'-50px'}}>hola</p> */}
                        </Grid>
                        <Grid item xs={8} sm={4} color="white" sx={{ marginTop: '-80px', float: 'left' }} >




                            <Typography sx={{fontFamily: 'Ubuntu, sans-serif'}} >
                                Mail: ejemplo@
                            
                            <br />
                            <br />
                                Dirección: Ejemplo calle nº 2344 (e)
                            </Typography>



                        </Grid>
                        <Grid item xs={6} sm={4} sx={{ }} >
                            <Box
                                sx={{

                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    '& > *': {
                                        m: 1,
                                    },
                                    
                                    
                                }}
                            >
                                <ButtonGroup size="large" aria-label="small button group" style={{}} >
                                    {buttons}
                                </ButtonGroup>

                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )

}

export default Footer;