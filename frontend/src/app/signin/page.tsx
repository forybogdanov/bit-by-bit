import * as React from "react";
import "./style.css";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

function CircleFirst() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="804" viewBox="0 0 800 804" fill="none" className={'circleFirst'}>
            <path opacity="0.05" d="M725 401.923C725 582.817 579.154 728.846 400 728.846C220.846 728.846 75 582.817 75 401.923C75 221.029 220.846 75 400 75C579.154 75 725 221.029 725 401.923Z" stroke="#4B3564" strokeWidth="110"/>
        </svg>
    )
}

function CircleSecond() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="804" viewBox="0 0 800 804" fill="none" className={'circleSecond'}>
            <path opacity="0.05" d="M725 401.923C725 582.817 579.154 728.846 400 728.846C220.846 728.846 75 582.817 75 401.923C75 221.029 220.846 75 400 75C579.154 75 725 221.029 725 401.923Z" stroke="#4B3564" strokeWidth="75"/>
        </svg>
    )
}

function CircleThird() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="804" viewBox="0 0 800 804" fill="none" className={'circleThird'}>
            <path opacity="0.05" d="M725 401.923C725 582.817 579.154 728.846 400 728.846C220.846 728.846 75 582.817 75 401.923C75 221.029 220.846 75 400 75C579.154 75 725 221.029 725 401.923Z" stroke="#4B3564" strokeWidth="90"/>
        </svg>
    )
}

export default function SignIn() {
    return (
        <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} className={'login'}>
            <Grid className={'formWrapper'}>
                <Typography className={'welcome'}>Welcome to <span className={'platformName'}>CREON</span></Typography>
                <Typography className={'subwelcome'}>Create connections.</Typography>
                <Grid display={'flex'} flexDirection={'column'} width={'100%'} className={'textFieldsWrapper'}>
                    <Grid>
                        <Typography className={'textFieldLabel'}>Username</Typography>
                        <TextField variant="outlined" placeholder={'Enter username'} className={'textField'}/>
                    </Grid>
                    <Grid>
                        <Typography className={'textFieldLabel'}>Password</Typography>
                        <TextField variant="outlined" placeholder={'Enter password'} className={'textField'}/>
                    </Grid>
                </Grid>
                <Grid marginTop={'100px'}>
                    <Button className={'signInButton'}>Sign In</Button>
                    <Typography className={'noAccountText'}>Don{'\''}t have an account?</Typography>
                    <Button className={'signUpButton'}>Sign Up</Button>
                </Grid>
            </Grid>
            <CircleFirst/>
            <CircleSecond/>
            <CircleThird/>
        </Grid>
    )
}