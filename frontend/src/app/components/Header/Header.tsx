import * as React from "react";
import "./Header.css";
import { Button, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import logo from "./black.jpg";

export default function Header() {
    return (
        <Grid className={'header'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Grid display={'flex'} columnGap={2} alignItems={'center'}>
                <Image className={'logo'} alt={'logo'} src={logo}/>
                <Typography>PROJECT</Typography>
            </Grid>
            <Grid display={'flex'} columnGap={2} alignItems={'center'}>
                <Button className={'buttonSecondary'} href={'/signin'}>Sign in</Button>
                <Button className={'buttonPrimary'} href={'/register'}>Join us now</Button>
            </Grid>
        </Grid>
    )
}