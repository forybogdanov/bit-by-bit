'use client'
import * as React from "react";
import "./style.css";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import img from "./black.jpg";
import { useRouter } from 'next/navigation';

const roomOptions = [
    {
        name: "One person",
    },
    {
        name: "Two people",
    },
    {
        name: "Three people",
    }
]

function CircleFirst(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="149" height="87" viewBox="0 0 149 87" fill="none" className={'circleFirst'}>
            <g opacity="0.1" clipPath="url(#clip0_296_4753)">
                <circle cx="92.5" cy="-5.5" r="77.5" stroke="white" strokeWidth="30"/>
            </g>
            <defs>
                <clipPath id="clip0_296_4753">
                    <rect width="149" height="87" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

function CircleSecond() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="185" height="185" viewBox="0 0 185 185" fill="none" className={'circleSecond'}>
            <circle cx="92.5" cy="92.5" r="77.5" stroke="white" strokeOpacity="0.1" strokeWidth="30"/>
        </svg>
    )
}

function CircleThird() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="185" height="185" viewBox="0 0 185 185" fill="none" className={'circleThird'}>
            <circle cx="92.5" cy="92.5" r="77.5" stroke="white" strokeOpacity="0.1" strokeWidth="30"/>
        </svg>
    )
}

export default function Page() {
    const router = useRouter();
    return (
        <Grid>
            <Grid className={'firstSection'}>
                <Grid display={'flex'} flexDirection={'column'} gap={4}>
                    <Typography className={'title'}>JOIN A <span className={'titleSpan'}>ROOM</span>!</Typography>
                    <Grid>
                        <Typography className={'subTitle'}><strong>Connect</strong> with people through our unique chatting experience.</Typography>
                        <Typography className={'subTitle'}>Select the number of people you{'\''}d like to chat with.</Typography>
                    </Grid>
                </Grid>
                <Grid className={'roomsWrapper'}>
                    {roomOptions.map((item, index) =>
                        <Grid key={index} className={'roomCard'} onClick={() => {
                            router.push('/chat');
                        }}>
                            <Typography className={'roomCardTitle'}>{item.name}</Typography>
                            <CircleFirst/>
                            {index > 0 && <CircleSecond/>}
                            {index > 1 && <CircleThird/>}
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Grid className={'secondSection'} container xs={12} gap={6}>
                <Grid xs={6}>
                    <Typography className={'title'}>Working with the platform</Typography>
                    <Typography className={'subTitle'}>And why it is an awesome way to make connections.</Typography>
                </Grid>
                <Grid xs={6}>
                    <Image src={img} alt={'platform photo'} className={'secondSectionImage'}/>
                </Grid>
            </Grid>
            <Grid className={'thirdSection'}>
                <Typography className={'title'}>Purpose & Uniqueness</Typography>
            </Grid>
        </Grid>
    )
}
