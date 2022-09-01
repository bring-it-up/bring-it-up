import React from 'react';
import {AppBar, Typography, Toolbar, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { ReactElement } from 'react';

const CustomizedHeading = styled(Typography)({
    position:'absolute',
    left:'3%',
    top:'25%',
    color:'#151611',
    fontFamily:'Noto Sans',
    fontSize:'28px',
    fontWeight: '700',
    fontStyle:'normal',
    lineHeight:'49px'
}) as typeof Typography;

const CustomizedButton = styled(Button)({
    position: 'absolute',
    textTransform:'capitalize',
    top: '30%',
    color:'#151611',
    fontFamily:'Noto Sans',
    fontStyle:'normal',
    fontWeight:'400',
    fontSize:'20px',
    lineHeight:'27px',
    '&:hover': {
        color:'#151611',
    }
}) as typeof Button;

const Navigation = (): ReactElement => {
    return (
        <AppBar position='static' elevation={0}>
            <Toolbar disableGutters sx={{background:'white', height:'105px'}}>
                <CustomizedHeading variant='h1'>Bring It Up</CustomizedHeading>
                <CustomizedButton component={Link} to={'/'} 
                sx={{left: '20%'}}>Home</CustomizedButton>
                <CustomizedButton component={Link} to={'/services'} 
                sx={{left: '30%'}}>Services</CustomizedButton>
                <CustomizedButton component={Link} to={'/about'} 
                sx={{left: '42%'}}>About</CustomizedButton>
                <CustomizedButton sx={{
                textDecoration:'underline',
                right: '3%'}}>Sign in</CustomizedButton>  
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;