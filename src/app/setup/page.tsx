import * as React from "react";
import "./style.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import TheatersIcon from '@mui/icons-material/Theaters';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Grid } from "@mui/material";

const categories = [
    {
        name: 'Music',
        icon: MusicNoteIcon,
    },
    {
        name: 'Sports',
        icon: SportsSoccerIcon,
    },
    {
        name: 'Cinema',
        icon: TheatersIcon,
    },
    {
        name: 'Books',
        icon: AutoStoriesIcon,
    }
]

export default function Setup() {
    return (
        <Grid className={'setup'} display={'flex'} gap={6} container>
            <Grid display={'flex'} className={'cardsWrapper'} container>
                {categories.map((item, index) =>
                    <Grid item key={index} className={'categoryCard'}>
                        <item.icon className={'categoryCardIcon'}/>
                        {item.name}
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}