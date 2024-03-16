import * as React from "react";
import "./style.css";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

export default function SignIn() {
    return (
        <Grid display={'flex'} height={'100vh'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} className={'login'}>
            <Typography className={'welcome'}>Welcome to <span className={'platformName'}>CREON</span></Typography>
            <Typography className={'subwelcome'}>Create connections.</Typography>
            <Grid display={'flex'} flexDirection={'column'} width={'100%'} className={'textFieldsWrapper'}>
                <Grid>
                    <Typography className={'textFieldLabel'}>Email Address</Typography>
                    <TextField variant="outlined" placeholder={'Username'} className={'textField'}/>
                </Grid>
                <Grid>
                    <Typography className={'textFieldLabel'}>Password</Typography>
                    <TextField variant="outlined" placeholder={'Password'} className={'textField'}/>
                </Grid>
            </Grid>
            <Grid marginTop={'100px'}>
                <Button className={'signInButton'}>Sign In</Button>
                <Typography className={'noAccountText'}>Don{'\''}t have an account?</Typography>
                <Button className={'signUpButton'}>Sign Up</Button>
            </Grid>
        </Grid>
    )
}