'use client'

import * as React from "react";
import "./style.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import TheatersIcon from '@mui/icons-material/Theaters';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PaletteIcon from '@mui/icons-material/Palette';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ScienceIcon from '@mui/icons-material/Science';
import DevicesIcon from '@mui/icons-material/Devices';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import {
    ArtSubCategories, BusinessSubCategories, CinemaSubCategories,
    BooksSubCategories, HistorySubCategories,
    MusicSubCategories, ScienceSubCategories,
    PoliticsSubCategories, SportSubCategories,
    TechnologySubCategories, CookingSubCategories,
    TravelSubCategories
} from "@/app/setup/utils";

const categories = [
    {
        index: 0,
        name: 'Music',
        icon: MusicNoteIcon,
        lightColor: '#FFC0CB',
        darkColor: '#fc8193',
        subCategories: MusicSubCategories,
    },
    {
        index: 1,
        name: 'Sports',
        icon: SportsSoccerIcon,
        lightColor: '#E6E6FA',
        darkColor: '#9292f6',
        subCategories: SportSubCategories,
    },
    {
        index: 2,
        name: 'Cinema',
        icon: TheatersIcon,
        lightColor: '#78b678',
        darkColor: '#34b934',
        subCategories: CinemaSubCategories,
    },
    {
        index: 3,
        name: 'Books',
        icon: AutoStoriesIcon,
        lightColor: '#87CEEB',
        darkColor: '#32b3e7',
        subCategories: BooksSubCategories,
    },
    {
        index: 4,
        name: 'Business',
        icon: BusinessCenterIcon,
        lightColor: '#C8A2C8',
        darkColor: '#cb59cb',
        subCategories: BusinessSubCategories,
    },
    {
        index: 5,
        name: 'Art',
        icon: PaletteIcon,
        lightColor: '#FFFF99',
        darkColor: '#fafa47',
        subCategories: ArtSubCategories,
    },
    {
        index: 6,
        name: 'History',
        icon: AccountBalanceIcon,
        lightColor: '#AFEEEE',
        darkColor: '#6af5f5',
        subCategories: HistorySubCategories,
    },
    {
        index: 7,
        name: 'Science',
        icon: ScienceIcon,
        lightColor: '#BAA8FF',
        darkColor: '#957bfc',
        subCategories: ScienceSubCategories,
    },
    {
        index: 8,
        name: 'Technology',
        icon: DevicesIcon,
        lightColor: '#FFB347',
        darkColor: '#fa9818',
        subCategories: TechnologySubCategories,
    },
    {
        index: 9,
        name: 'Politics',
        icon: GavelIcon,
        lightColor: '#98FB98',
        darkColor: '#79f879',
        subCategories: PoliticsSubCategories,
    },
    {
        index: 10,
        name: 'Travel',
        icon: LocalAirportIcon,
        lightColor: '#eee4ab',
        darkColor: '#e8d585',
        subCategories: TravelSubCategories,
    },
    {
        index: 11,
        name: 'Cooking',
        icon: RamenDiningIcon,
        lightColor: '#B0E0E6',
        darkColor: '#88dce3',
        subCategories: CookingSubCategories,
    }
]

const TabStep = {
    MainCategoriesSelection: 0,
    SubCategoriesSelection: 1,
    CompletedSelection: 2,
}

interface ICategoryState {
    mainIndex: number;
    subIndexes: number[];
}

export default function Setup() {
    const [selectedCategories, setSelectedCategories] = useState<ICategoryState[]>([]);
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleSelection = (index: number) => {
        if (selectedCategories.some(category => category.mainIndex === index)) {
            setSelectedCategories(selectedCategories.filter(category => category.mainIndex !== index));
        } else {
            setSelectedCategories([...selectedCategories, { mainIndex: index, subIndexes: [] }]);
        }
    };

    const handleSubCategorySelection = (mainIndex: number, subIndex: number) => {
        const categoryIndex = selectedCategories.findIndex(item => item.mainIndex === mainIndex);
        if (selectedCategories[categoryIndex].subIndexes.some(subcategoryIndex => subcategoryIndex === subIndex)) {
            const updatedCategories = [...selectedCategories];
            updatedCategories[categoryIndex].subIndexes.filter(subcategoryIndex => subcategoryIndex !== subIndex)
            setSelectedCategories(updatedCategories);
        } else {
            const updatedCategories = [...selectedCategories];
            updatedCategories[categoryIndex].subIndexes.push(subIndex);
            setSelectedCategories(updatedCategories);
        }
        console.log(selectedCategories);
    }

    return (
        <Grid className={'setup'} display={'flex'} container>
            {activeTab === TabStep.MainCategoriesSelection &&
                <Grid display={'flex'} flexDirection={'column'} gap={6}>
                    <Typography>SET UP YOUR PROFILE!</Typography>
                    <Typography>You have to select at least 5 main categories.</Typography>
                    <Grid display={'flex'} className={'cardsWrapper'} container>
                        {categories.map((item, index) =>
                            <Grid item key={index} className={selectedCategories.some(category => category.mainIndex === index) ? 'categoryCardSelected' : 'categoryCard'} onClick={() => handleSelection(index)} sx={{ backgroundColor: selectedCategories.some(category => category.mainIndex === index) ? item.darkColor : item.lightColor }}>
                                <Typography className={'categoryCardText'}>{item.name}</Typography>
                                <item.icon className={'categoryCardIcon'}/>
                            </Grid>
                        )}
                    </Grid>
                    <Button disabled={selectedCategories.length < 5} onClick={() => setActiveTab(TabStep.SubCategoriesSelection)}>NEXT</Button>
                </Grid>
            }
            {activeTab === TabStep.SubCategoriesSelection &&
                <Grid display={'flex'} flexDirection={'column'} gap={6}>
                    <Typography>SET UP YOUR PROFILE!</Typography>
                    <Typography>Now select at least one subcategory of each category you are interested in.</Typography>
                    <Grid display={'flex'} flexDirection={'column'} gap={12}>
                        {categories.filter(category => selectedCategories.some(selectedCategory => selectedCategory.mainIndex === category.index)).map((item, index) =>
                            <Grid key={index} display={'flex'} alignItems={'center'}>
                                <Grid item key={index} className={'categoryCard'} sx={{ backgroundColor: item.darkColor }}>
                                    <Typography className={'categoryCardText'}>{item.name}</Typography>
                                    <item.icon className={'categoryCardIcon'}/>
                                </Grid>
                                <Grid display={'flex'} gap={2}>
                                    {item.subCategories.map((subItem, subIndex) =>
                                        <Grid key={subIndex} className={selectedCategories.find(cat => cat.mainIndex === item.index).subIndexes.includes(subIndex) ? 'subCategoryOptionSelected' : 'subCategoryOption'} onClick={() => handleSubCategorySelection(item.index, subIndex)}>{subItem.name}</Grid>
                                    )}
                                </Grid>

                            </Grid>
                        )}
                    </Grid>
                    <Button onClick={() => setActiveTab(TabStep.MainCategoriesSelection)}>Go back</Button>
                    <Button onClick={() => setActiveTab(TabStep.CompletedSelection)} disabled={!selectedCategories.every(item => item.subIndexes.length > 0)}>Complete</Button>
                </Grid>
            }
            {activeTab === TabStep.CompletedSelection &&
                <Grid>
                    all done!!!
                    <Button href={'/dashboard'}>go to dashboard</Button>
                </Grid>
            }
        </Grid>
    )
}