import * as React from "react";
import "./style.css";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

function CircleFirst() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1195" height="1200" viewBox="0 0 1195 1200" fill="none" className={'circleFirst'}>
            <path opacity="0.05" d="M1119.26 600C1119.26 890.289 885.154 1125 597.129 1125C309.104 1125 75 890.289 75 600C75 309.711 309.104 75 597.129 75C885.154 75 1119.26 309.711 1119.26 600Z" stroke="#4B3564" strokeWidth="120"/>
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

export default function Register() {
    return (
        <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} className={'register'}>
            <Grid className={'formWrapper'}>
                <Typography className={'createAccountText'}>Create <span className={'platformName'}>CREON</span> account</Typography>
                <Grid display={'flex'} flexDirection={'column'} gap={4}>
                    <Grid display={'flex'} width={'100%'} flexDirection={'column'} gap={4}>
                        <Grid item width={'100%'} display={'flex'} gap={4}>
                            <Grid item width={'50%'}>
                                <Typography className={'textFieldLabel'}>First Name</Typography>
                                <TextField variant="outlined" placeholder={'Enter first Name'} className={'textField'}/>
                            </Grid>
                            <Grid item width={'50%'}>
                                <Typography className={'textFieldLabel'}>Last Name</Typography>
                                <TextField variant="outlined" placeholder={'Enter last Name'} className={'textField'}/>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography className={'textFieldLabel'}>Email Address</Typography>
                            <TextField variant="outlined" placeholder={'Enter email address'} className={'textField'}/>
                        </Grid>
                        <Grid item>
                            <Typography className={'textFieldLabel'}>Username</Typography>
                            <TextField variant="outlined" placeholder={'Enter username'} className={'textField'}/>
                        </Grid>
                        <Grid item>
                            <Typography className={'textFieldLabel'}>Password</Typography>
                            <TextField variant="outlined" placeholder={'Enter password'} className={'textField'}/>
                        </Grid>
                        <Grid display={'flex'} flexDirection={'column'} xs={12}>
                            <Typography className={'textFieldLabel'}>Social Media</Typography>
                            <Grid className={'socialMediaWrapper'}>
                                <TextField variant="outlined" placeholder={'Facebook'} className={'textField socialMedia'}/>
                                <TextField variant="outlined" placeholder={'Instagram'} className={'textField socialMedia'}/>
                                <TextField variant="outlined" placeholder={'Snapchat'} className={'textField socialMedia'}/>
                                <TextField variant="outlined" placeholder={'Phone number'} className={'textField socialMedia'}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Button className={'signUpButton'}>Sign Up</Button>
            </Grid>
            <CircleFirst/>
            <CircleSecond/>
            <CircleThird/>
        </Grid>
    )
}