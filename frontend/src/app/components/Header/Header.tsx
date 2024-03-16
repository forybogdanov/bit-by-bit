import * as React from "react";
import "./Header.css";
import { Button, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import logo from "./logo.png";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Header() {
    const [user, setUser] = useState('');
    const router = useRouter();

    useEffect(() => {
        const userProfileFromLocalStorage = localStorage.getItem('userProfile');

        if (userProfileFromLocalStorage) {
            setUser(JSON.parse(userProfileFromLocalStorage));
        }
    }, []);

    return (
        <Grid className={'header'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Grid display={'flex'} columnGap={2} alignItems={'center'} onClick={() => router.push('/dashboard')}>
                <Image className={'logo'} alt={'logo'} src={logo}/>
                <Typography className={'projectName'}>C R E O N</Typography>
            </Grid>
            {user ?
                <Grid display={'flex'} alignItems={'center'} gap={3}>
                    <Button className={'buttonPrimary'}>Sign Out</Button>
                    <Button className={'username'} onClick={() => router.push('/account')}>Account</Button>
                </Grid> :
                <Grid display={'flex'} columnGap={2} alignItems={'center'}>
                    <Button className={'buttonSecondary'} href={'/signin'}>Sign in</Button>
                    <Button className={'buttonPrimary'} href={'/register'}>Join us now</Button>
                </Grid>
            }
        </Grid>
    )
}