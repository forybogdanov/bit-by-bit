import * as React from "react";
import "./style.css";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

export default function Register() {
    return (
        <Grid display={'flex'} height={'100vh'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <Typography marginBottom={4}>Register</Typography>
            <Grid display={'flex'} flexDirection={'column'} gap={4}>
                <Grid display={'flex'} gap={2}>
                    <Grid item xs={6}>
                        <TextField variant="outlined" placeholder={'First Name'}></TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField variant="outlined" placeholder={'Last Name'}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" placeholder={'Email'}></TextField>
                    </Grid>
                </Grid>
                <Grid display={'flex'} xs={12} marginTop={4}>
                    <TextField variant="outlined" placeholder={'Username'}></TextField>
                    <TextField variant="outlined" placeholder={'Password'}></TextField>
                </Grid>
                <Typography>social media</Typography>
                <Grid display={'flex'} xs={12} marginTop={4}>
                    <TextField variant="outlined" placeholder={'Facebook'}></TextField>
                    <TextField variant="outlined" placeholder={'Instagram'}></TextField>
                    <TextField variant="outlined" placeholder={'Snapchat'}></TextField>
                    <TextField variant="outlined" placeholder={'Telegram'}></TextField>
                    <TextField variant="outlined" placeholder={'Phone number'}></TextField>
                </Grid>
            </Grid>

            <Button>Register</Button>
            <Link>Terms and conditions</Link>
        </Grid>
    )
}