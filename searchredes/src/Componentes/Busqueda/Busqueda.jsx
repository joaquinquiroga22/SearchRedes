import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import TwitterIcon from '@mui/icons-material/Twitter';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { ListItemIcon } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Container, ModalFooter, ThemeProvider } from 'react-bootstrap';
import { Paper, TextField } from '@material-ui/core';
import BurbujaTwitter from '../BurbujaTwitter/BurbujaTwitter.js'
// import { Modal } from 'react-bootstrap';
import { Modal } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
    fontSize: 50,
  },
})



const usseStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 350,
    backgroundColor: 'white',
    border: '2px solid #2FBCED',
    borderRadius: '8px',
    boxShadow: theme.shadows[6],
    padding: '16px 32px 24px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
    }
  },
  search: {
    backgroundColor: 'white',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    color: '#2FBCED',
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#808B96',
  },
  inputInput: {
    border: '1px solid #2FBCED',
    borderRadius: '12px',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

export default function Busqueda() {

  const styless = usseStyles();
  const [modal, setModal] = useState(false)

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



  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClicke = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosee = () => {
    setAnchorEl(null);
  };



  const [open, setOpen] = React.useState(false);

  const handleClickk = () => {
    setOpen(!open);
  };

  // const [show, popup] = useState(false);
  // const modalOpen = () => popup(true);
  // const modalClose = () => popup(false);

  const classes = useStyles();

  return (
    <div style={{ backgroundColor: '#024761' }}>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: 'white', borderRadius: "0 0 20px 20px", boxShadow: '4px 4px 5px #566573' }}>
          <Toolbar>
            <Typography className={classes.title} variant="h4" noWrap>
              Logo
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>

                <SearchIcon />

              </div>

              <InputBase

                placeholder="Que deseas buscar"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />

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
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <BubbleChartIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Burbuja" onClick={() => abrirCerrarModal()} />
                <Modal
                  open={modal}
                  onClose={abrirCerrarModal}>
                  {body}
                </Modal>
                {/* onClick={modalOpen} */}
                {/* <div class="modal-body">
                <div class="container-fluid">

                  <Modal show={show} onHide={modalClose}>
                    <Modal.Body><BurbujaTwitter /></Modal.Body>
                    <Modal.Footer>
                      <Button onClick={modalClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div> */}


              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <DraftsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Grafico Barras" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Grafico Lineas" />
              </StyledMenuItem>
              <Button style={{ marginLeft: '60px', marginTop: '10px' }} variant='outlined' color='secondary' size='small' href="/">
                Volver
              </Button>
            </StyledMenu>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{ padding: 16, margin: '10px auto 80px', maxWidth: '80%' }}>


        <Container>
          <Paper
            sx={{ margin: '0 auto', width: '100%' }}
          >

            <List
              sx={{
                margin: '0 auto',
                width: '100%',
                maxWidth: '100%',
                bgcolor: 'white',
                borderRadius:'20px'
              }}
              theme={theme}
            >
              <h4 style={{ textAlign: 'center' }} display='inline'>Busqueda Twits @Sergio Uñac</h4>
              <ListItem >
                <ListItemAvatar>
                  <Avatar>
                    <TwitterIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <ThemeProvider theme={theme}>
                      <Typography variant="h6" display="block" gutterBottom>
                        Con foco en el desarrollo de la ciencia, tecnología e innovación,
                        Sergio Uñac se reunió con Fernando Peirano
                        <Typography variant="subtitle1" display="block" gutterBottom>
                          https://twitter.com/user/status
                          /1483863563408183297
                          <Typography variant="subtitle1" display="block" gutterBottom>
                            12/01/2022
                          </Typography>
                        </Typography>
                      </Typography>
                    </ThemeProvider>
                  }
                  secondary="#ciencia"
                />


              </ListItem>

              <ListItem sx={{ marginTop: '10px' }}>
                <ListItemAvatar>
                  <Avatar>
                    <TwitterIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <ThemeProvider theme={theme}>
                      <Typography variant="h6" display="block" gutterBottom>
                        Desarrollo Humano continúa con las inscripciones al programa #Progresar
                        <Typography variant="subtitle1" display="block" gutterBottom>
                          http://t.co/8DAOAj1H1
                          <Typography variant="subtitle1" display="block" gutterBottom>
                            13/01/2022
                          </Typography>
                          <Typography variant="subtitle2" display="block" gutterBottom>
                            @sergiounac
                          </Typography>
                        </Typography>
                      </Typography>
                    </ThemeProvider>
                  }
                  secondary="#Progresar" />
              </ListItem>

              <ListItem sx={{ marginTop: '10px', width: '100%' }}>
                <ListItemAvatar>
                  <Avatar>
                    <TwitterIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText sx={{ width: '100%' }}
                  primary={
                    <ThemeProvider theme={theme}>
                      <Typography variant="h6" display="block" gutterBottom>
                        En la mañana del día miércoles, el gobernador @sergiounac recibió al campeón Nacional de Malambo, Sergio Zalazar, en Casa de Gobierno.
                        <Typography variant="subtitle1" display="block" gutterBottom>
                          https://twitter.com/user/status
                          /1483839269215121409
                          <Typography variant="subtitle1" display="block" gutterBottom>
                            14/01/2022
                          </Typography>
                          <Typography variant="subtitle2" display="block" gutterBottom>
                            @sergiounac
                          </Typography>
                        </Typography>
                      </Typography>
                    </ThemeProvider>
                  }
                  secondary="#Campeonato" />
              </ListItem>

              <ListItem sx={{ marginTop: '10px' }}>
                <ListItemAvatar>
                  <Avatar>
                    <TwitterIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <ThemeProvider theme={theme}>
                      <Typography variant="h6" display="block" gutterBottom>
                        "@diegodesanjuan Juan domingo Biden le llamó a Sergio para adelantarle la noticia y Uñac medio enojado le exigió que no lo den a conocer hasta que Alberto no viniera a la Provincia y así poderle contar de primera mano"
                        <Typography variant="subtitle1" display="block" gutterBottom>
                          https://twitter.com/user/status
                          /1483605376255737860
                          <Typography variant="subtitle1" display="block" gutterBottom>
                            15/01/2022
                          </Typography>
                          <Typography variant="subtitle2" display="block" gutterBottom>
                            @diegodesanjuan
                          </Typography>
                        </Typography>
                      </Typography>
                    </ThemeProvider>
                  }
                  secondary="#Biden" />
              </ListItem>

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
                        @Gustavo84124185 @sergiounac @roberto_gattoni No me respondiste. Sos larretista ahora?
                        <Typography variant="subtitle1" display="block" gutterBottom>
                          https://twitter.com/user/status
                          /1484314138536865799
                          <Typography variant="subtitle1" display="block" gutterBottom>
                            16/01/2022
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
                  secondary="" />

              </ListItem>
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
                        @Gustavo84124185 @sergiounac @roberto_gattoni Y porque no en el 2015. Se tomó dos años, porque lo hizo en noviembre.Pero vamos a lo importante. Votarias a Larreta en el 2023?
                        <Typography variant="subtitle1" display="block" gutterBottom>
                          https://twitter.com/user/status
                          /1484283206215999488
                          <Typography variant="subtitle1" display="block" gutterBottom>
                            17/01/2022
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
                  secondary="#Gattoni" />

              </ListItem>
              {/* <ListItem sx={{marginTop:'10px'}} >
              <ListItemAvatar>
                <Avatar>
                  <TwitterIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText      
              primary={
            <ThemeProvider theme={theme}>
                <Typography variant="h6" display="block" gutterBottom>
                  Gioja solicita que se declare emergencia Hídrica Nacional
                  <Typography variant="subtitle1" display="block" gutterBottom>
                  http://t.co/8DAOAj1H1
                  <Typography variant="subtitle2" display="block" gutterBottom>
                  @joseluisgioja @tdosoSanJuan @Frente DeTodos @Diputados_Todos #SanJuan
                </Typography>
                </Typography>
                </Typography>
            </ThemeProvider>
              } 
              secondary="#EmergenciaHídrica"  />
            </ListItem> */}

              <ListItem style={{ width: '130px', float: 'right' }}>
                <ListItemButton onClick={handleClickk} >
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText />
                  {/* Ver Mas */}
                  {open ? <HorizontalRuleIcon /> : <AddIcon />}
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
            </List>
          </Paper>
        </Container>

      </div>
    </div>
  );

}