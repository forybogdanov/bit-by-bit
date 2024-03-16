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
import ChurchIcon from '@mui/icons-material/Church';
import PublicIcon from '@mui/icons-material/Public';
import TranslateIcon from '@mui/icons-material/Translate';
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import {
    ArtSubCategories, BusinessSubCategories, CinemaSubCategories,
    BooksSubCategories, HistorySubCategories,
    MusicSubCategories, ScienceSubCategories,
    PoliticsSubCategories, SportSubCategories,
    TechnologySubCategories, CookingSubCategories,
    TravelSubCategories, ReligionSubCategories, GeographySubCategories
} from "@/app/setup/utils";

const categories = [
    {
        index: 0,
        name: 'Music',
        icon: MusicNoteIcon,
        lightColor: 'rgba(178,160,187,0.7)',
        darkColor: '#5d4a65',
        subCategories: MusicSubCategories,
    },
    {
        index: 1,
        name: 'Sports',
        icon: SportsSoccerIcon,
        lightColor: 'rgba(147,190,220,0.7)',
        darkColor: '#325a79',
        subCategories: SportSubCategories,
    },
    {
        index: 2,
        name: 'Cinema',
        icon: TheatersIcon,
        lightColor: 'rgba(232,114,127,0.7)',
        darkColor: '#D61F34',
        subCategories: CinemaSubCategories,
    },
    {
        index: 3,
        name: 'Books',
        icon: AutoStoriesIcon,
        lightColor: 'rgba(184,203,158,0.7)',
        darkColor: '#538332',
        subCategories: BooksSubCategories,
    },
    {
        index: 4,
        name: 'Business',
        icon: BusinessCenterIcon,
        lightColor: 'rgba(128,179,128,0.7)',
        darkColor: '#375d37',
        subCategories: BusinessSubCategories,
    },
    {
        index: 5,
        name: 'Art',
        icon: PaletteIcon,
        lightColor: 'rgba(246,171,101,0.7)',
        darkColor: '#88450e',
        subCategories: ArtSubCategories,
    },
    {
        index: 6,
        name: 'History',
        icon: AccountBalanceIcon,
        lightColor: 'rgba(165,120,163,0.7)',
        darkColor: '#5e3f5c',
        subCategories: HistorySubCategories,
    },
    {
        index: 7,
        name: 'Science',
        icon: ScienceIcon,
        lightColor: 'rgba(142,168,195,0.7)',
        darkColor: '#2f3e56',
        subCategories: ScienceSubCategories,
    },
    {
        index: 8,
        name: 'Technology',
        icon: DevicesIcon,
        lightColor: 'rgba(141,161,185,0.7)',
        darkColor: '#374659',
        subCategories: TechnologySubCategories,
    },
    {
        index: 9,
        name: 'Politics',
        icon: GavelIcon,
        lightColor: 'rgba(239,222,87,0.7)',
        darkColor: '#d2c20d',
        subCategories: PoliticsSubCategories,
    },
    {
        index: 10,
        name: 'Travel',
        icon: LocalAirportIcon,
        lightColor: 'rgba(173,180,192,0.7)',
        darkColor: '#44494f',
        subCategories: TravelSubCategories,
    },
    {
        index: 11,
        name: 'Cooking',
        icon: RamenDiningIcon,
        lightColor: 'rgba(216,130,157,0.7)',
        darkColor: '#772b42',
        subCategories: CookingSubCategories,
    },
    {
        index: 12,
        name: 'Religion',
        icon: ChurchIcon,
        lightColor: 'rgba(147,118,136,0.7)',
        darkColor: '#4b3c44',
        subCategories: ReligionSubCategories,
    },
    {
        index: 13,
        name: 'Geography',
        icon: PublicIcon,
        lightColor: 'rgba(133,179,107,0.7)',
        darkColor: '#415b2e',
        subCategories: GeographySubCategories,
    },
    {
        index: 14,
        name: "Languages",
        icon: TranslateIcon,
        lightColor: 'rgba(146,207,242,0.7)',
        darkColor: '#236f96',
        subCategories: [],
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
        const updatedCategories = [...selectedCategories];

        if (selectedCategories[categoryIndex].subIndexes.some(subcategoryIndex => subcategoryIndex === subIndex)) {
            updatedCategories[categoryIndex].subIndexes = updatedCategories[categoryIndex].subIndexes.filter(subcategoryIndex => subcategoryIndex !== subIndex);
        } else {
            updatedCategories[categoryIndex].subIndexes.push(subIndex);
        }

        setSelectedCategories(updatedCategories);
    }

    return (
        <Grid className={'setup'} display={'flex'} container>
            {activeTab === TabStep.MainCategoriesSelection &&
                <Grid display={'flex'} flexDirection={'column'} className={'firstStep'}>
                    <Typography className={'title'}>SET UP YOUR PROFILE.</Typography>
                    <Typography className={'subTitle'}>You have to select a minimum of 5 main categories. These are the main categories on which you potential connections are based on. You can edit them later on.</Typography>
                    <Grid display={'flex'} className={'cardsWrapper'} container>
                        {categories.map((item, index) =>
                            <Grid item key={index} className={selectedCategories.some(category => category.mainIndex === index) ? 'categoryCardSelected' : 'categoryCard'} onClick={() => handleSelection(index)} sx={{ backgroundColor: selectedCategories.some(category => category.mainIndex === index) ? item.darkColor : item.lightColor }}>
                                <Typography className={'categoryCardText'}>{item.name}</Typography>
                                <item.icon className={'categoryCardIcon'}/>
                            </Grid>
                        )}
                    </Grid>
                    <Grid display={'flex'} flexDirection={'row-reverse'}>
                        <Button disabled={selectedCategories.length < 5} onClick={() => setActiveTab(TabStep.SubCategoriesSelection)} className={'nextButton'}>NEXT</Button>
                    </Grid>
                </Grid>
            }
            {activeTab === TabStep.SubCategoriesSelection &&
                <Grid display={'flex'} flexDirection={'column'} className={'secondStep'}>
                    <Typography className={'title'}>SET UP YOUR PROFILE.</Typography>
                    <Typography className={'subTitle'}>Now select at least one subcategory you are interested in per each of the main ones you already chose.</Typography>
                    <Grid display={'flex'} flexDirection={'column'} className={'selectedCategories'}>
                        {categories.filter(category => selectedCategories.some(selectedCategory => selectedCategory.mainIndex === category.index)).map((item, index) =>
                            <Grid key={index} display={'flex'} alignItems={'center'} className={'selectedCategoryGroup'}>
                                <Grid item key={index} className={'categoryBigCard'} sx={{ backgroundColor: item.darkColor }}>
                                    <Typography className={'categoryCardText'}>{item.name}</Typography>
                                    <item.icon className={'categoryCardIcon'}/>
                                </Grid>
                                <Grid className={'subcategoriesWrapper'}>
                                    <Typography className={'subcategoriesLabel'}>Subcategories:</Typography>
                                    <Grid display={'flex'} gap={2} className={'subcategoriesGrid'}>
                                        {item.subCategories.map((subItem, subIndex) =>
                                            <Grid key={subIndex} className={selectedCategories?.find(cat => cat.mainIndex === item.index).subIndexes.includes(subIndex) ? 'subCategoryOptionSelected' : 'subCategoryOption'} onClick={() => handleSubCategorySelection(item.index, subIndex)}>{subItem.name}</Grid>
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                    <Grid display={'flex'} justifyContent={'space-between'}>
                        <Button onClick={() => setActiveTab(TabStep.MainCategoriesSelection)} className={'backButton'}>Go back</Button>
                        <Button onClick={() => setActiveTab(TabStep.CompletedSelection)} disabled={!selectedCategories.every(item => item.subIndexes.length > 0)} className={'completeButton'}>Complete</Button>
                    </Grid>
                </Grid>
            }
            {activeTab === TabStep.CompletedSelection &&
                <Grid className={'thirdStep'}>
                    <Typography className={'title'}>YOU ARE ALL SET!</Typography>
                    <Typography className={'subTitle'}>Have fun making new connections through your favorite, little things.</Typography>
                    <Button href={'/dashboard'} className={'routeButton'}>Go to dashboard</Button>
                </Grid>
            }
        </Grid>
    )
}