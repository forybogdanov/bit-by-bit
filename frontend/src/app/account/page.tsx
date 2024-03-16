import "./style.css";
import { Button, Grid, Typography } from "@mui/material";
import * as React from "react";

const user = {
    username: "Rami04",
    firstName: "Rami",
    secondName: "Hennawi",
    email: "rami@gmail.com",
    facebook: "Rami Hennawi",
    instagram: "@rami_hennawi",
    snapchat: "@rami78",
    phone: "+0829424124",
}

const connections = [
    {
        username: "Fory04",
        facebook: "Forka",
        instagram: "@forymotory",
        snapchat: "",
    },
    {
        username: "Tonki",
        facebook: "",
        instagram: "@toni_bonboni",
        snapchat: "@dgdsg",
        phone: "+028359324",
    },
];

function Circle() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="179" height="180" viewBox="0 0 179 180" fill="none" className={'circle'}>
            <path opacity="0.05" d="M104 90C104 98.6787 97.1147 105 89.5 105C81.8852 105 75 98.6787 75 90C75 81.3213 81.8852 75 89.5 75C97.1147 75 104 81.3213 104 90Z" stroke="#4B3564" strokeWidth="150"/>
        </svg>
    )
}

function CircleSecond() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="179" height="180" viewBox="0 0 179 180" fill="none" className={'circleTwo'}>
            <path opacity="0.05" d="M104 90C104 98.6787 97.1147 105 89.5 105C81.8852 105 75 98.6787 75 90C75 81.3213 81.8852 75 89.5 75C97.1147 75 104 81.3213 104 90Z" stroke="#4B3564" strokeWidth="150"/>
        </svg>
    )
}

export default function Account() {
    return (
        <Grid className={'account'}>
            <Grid display={'flex'} justifyContent={'space-between'} marginBottom={'36px'} alignItems={'center'}>
                <Typography className={'title'}>Your account.</Typography>
                <Grid display={'flex'} gap={4}>
                    <Button className={'editProfileButton'}>Edit Profile Info</Button>
                    <Button className={'signOutButton'} href={'/setup'}>Edit Interests</Button>
                </Grid>
            </Grid>
            <Grid display={'flex'} flexDirection={'row'} gap={12} marginBottom={'56px'}>
                <Grid width={'50%'}>
                    <Typography className={'subTitle'}>General information</Typography>
                    <Typography className={'generalInfoText'}><strong>Username:</strong> {user.username}</Typography>
                    <Typography className={'generalInfoText'}><strong>First name:</strong> {user.firstName}</Typography>
                    <Typography className={'generalInfoText'}><strong>Second name:</strong> {user.secondName}</Typography>
                    <Typography className={'generalInfoText'}><strong>Email:</strong> {user.email}</Typography>
                </Grid>
                <Grid width={'50%'}>
                    <Typography className={'subTitle'}>Contact information</Typography>
                    <Typography className={'generalInfoText'}><strong>Facebook:</strong> {user.facebook}</Typography>
                    <Typography className={'generalInfoText'}><strong>Instagram:</strong> {user.instagram}</Typography>
                    <Typography className={'generalInfoText'}><strong>Snapchat:</strong> {user.snapchat}</Typography>
                    <Typography className={'generalInfoText'}><strong>Phone:</strong> {user.phone}</Typography>
                </Grid>
            </Grid>
            <Grid display={'flex'} flexDirection={'column'} gap={1}>
                <Typography className={'subTitle'}><span className={'purpleText'}>Connections</span> made</Typography>
                <Grid className={'connectionsCardsWrapper'}>
                    {connections.map((item, index) =>
                        <Grid key={index} className={'connectionsCard'} display={'flex'} flexDirection={'column'}>
                            <Typography className={'connectionCardName'}>{item.username}</Typography>
                            <Grid>
                                {item.facebook && <Typography className={'connectionCardOther'}><strong>Facebook:</strong> {item.facebook}</Typography>}
                                {item.instagram && <Typography className={'connectionCardOther'}><strong>Instagram:</strong> {item.instagram}</Typography>}
                                {item.snapchat && <Typography className={'connectionCardOther'}><strong>Snapchat:</strong> {item.snapchat}</Typography>}
                                {item.phone && <Typography className={'connectionCardOther'}><strong>Phone:</strong> {item.phone}</Typography>}
                            </Grid>
                            <Circle/>
                            <CircleSecond />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}