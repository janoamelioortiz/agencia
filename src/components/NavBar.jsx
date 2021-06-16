import { AppBar, IconButton, makeStyles, Toolbar, Typography, Button } from '@material-ui/core'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import Category from '../Category';


const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    }    

}))

const NavBar = () =>  {
    const classes = useStyles()
    return (
        <div>
            <AppBar>              
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                   Amelio Ortiz
                </Typography>
                    <Button variant='text' color='inherit'>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>  ,
            4
            <div className={classes.offset}></div>
                   
        </div>

    )

}

export default NavBar;
