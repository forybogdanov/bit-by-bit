import * as React from "react";
import "./Footer.css";
import { Button, Grid, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';
import Image from "next/image";
import logo from "@/app/components/Header/black.jpg";

const contactList = [EmailIcon, FacebookIcon, LinkedInIcon];

const pagesList = ["About us", "Contacts", "Other"];

export default function Footer() {
    return (
        <Grid className={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-between'}>
            <Grid className={'upperPart'} display={'flex'} justifyContent={'space-between'}>
                <Grid display={'flex'} flexDirection={'column'} rowGap={2}>
                    <Grid display={'flex'} columnGap={2} alignItems={'center'}>
                        <Image className={'logo'} alt={'logo'} src={logo}/>
                        <Typography>PROJECT</Typography>
                    </Grid>
                    <Typography>Some info about the team!</Typography>
                </Grid>
                <Grid display={'flex'} columnGap={12}>
                    <Grid display={'flex'} flexDirection={'column'} gap={2}>
                        {pagesList.map((item, index) =>
                            <Typography key={index} className={'pageLink'}>{item}</Typography>
                        )}
                    </Grid>
                    <Grid display={'flex'} flexDirection={'column'} rowGap={3}>
                        <Button className={'buttonSecondaryBordered'}>Sign in</Button>
                        <Button className={'buttonPrimary'}>Join us now</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Divider orientation="horizontal" className={'divider'}/>
            <Grid className={'lowerPart'} width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Grid>
                    <Typography className={'copyrightText'}>All rights reserved.</Typography>
                    <Typography className={'copyrightText'}>Copyright2024 bit-by-bit.</Typography>
                </Grid>
                <Grid display={'flex'} columnGap={2}>
                    {contactList.map((Icon, index) =>
                        <Grid key={index} className={'contactCircle'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            <Icon className={'contactIcon'}/>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}