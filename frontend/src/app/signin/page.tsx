import * as React from "react";
import "./style.css";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

export default function SignIn() {
    return (
        <Grid display={'flex'} height={'100vh'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <Typography marginBottom={4}>LOG IN</Typography>
            <Grid display={'flex'} flexDirection={'column'} gap={2}>
                <TextField variant="outlined" placeholder={'Username'}></TextField>
                <TextField variant="outlined" placeholder={'Password'}></TextField>
            </Grid>
            <Typography marginTop={4}>Don{'\''}t have an account yet? <Link href={'/register'}>Create one here.</Link></Typography>
            <Button>Sign in</Button>
            <Link>Terms and conditions</Link>
        </Grid>
    )
}