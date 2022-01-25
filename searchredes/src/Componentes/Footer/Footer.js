import react from 'react';
import { Container, Box, Grid, IconButton, ListItemText, List, Typography } from '@mui/material';
import { Link } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const buttons = [
    <IconButton>
        <FacebookIcon />
    </IconButton>,
    <IconButton>
        <TwitterIcon />
    </IconButton>,
    <IconButton>
        <InstagramIcon />
    </IconButton>,
    <IconButton>
        <LinkedInIcon />
    </IconButton>,
];


export default function footer() {

    return (

        <footer >
            <Box sx={{ backgroundColor: '#3498DB', }}  >
                <Container maxWidth="lg">
                    <Grid container spacing={11} sx={{}} direction="row"
                        justifyContent="flex-start"
                        alignItems="center">
                        <Grid item xs sm={4} color="white"  >
                            <List sx={{ marginTop: '-80px', float: 'left' }} >
                                <Typography  sx={{justifyContent:'flex-start'}}>
                                    Empresa
                              <br/>  
                              <br/>
                                    Teléfono: 2645676869
                                </Typography>
                            </List>

                            {/* <p style={{marginTop:'-50px'}}>hola</p> */}
                        </Grid>
                        <Grid item xs={6} sm={4} color="white" sx={{ marginTop: '-80px', float: 'left' }} >




                            <Typography  >
                                Mail: ejemplo@ejemplo.com
                            </Typography>
                            <br />
                            <Typography>
                                Dirección: Ejemplo calle nº 2344 (e)
                            </Typography>



                        </Grid>
                        <Grid item xs={6} sm={4} sx={{ }} >
                            <Box
                                sx={{

                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    '& > *': {
                                        m: 1,
                                    },
                                    
                                    
                                }}
                            >
                                <ButtonGroup size="large" aria-label="small button group">
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