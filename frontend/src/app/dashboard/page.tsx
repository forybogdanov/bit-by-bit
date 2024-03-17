'use client'
import * as React from "react";
import "./style.css";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';
import img from './chat.png';

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
                <Grid xs={7}>
                    <Typography className={'title'}>Working with the platform</Typography>
                    <Typography className={'subTitle'} sx={{ marginBottom: '36px' }}>And why it is an awesome way to make connections.</Typography>
                    <Typography sx={{ color: '#FFF', fontSize: '26px', fontFamily: 'GilroyExtraBold', marginBottom: '12px' }}>Chat Room Creation</Typography>
                    <Typography sx={{ color: '#FFF', fontSize: '18px', fontFamily: 'Gilroy', marginBottom: '32px' }}>Chat Rooms: Users can join chat rooms based which is generated based on specific interests, such as "Technology Enthusiasts" or "Art Lovers." that they share with other users. These rooms are private and you do not get to see the user's profile until you both agree to exchange contacts.</Typography>
                    <Typography sx={{ color: '#FFF', fontSize: '26px', fontFamily: 'GilroyExtraBold', marginBottom: '12px' }}>Chatting</Typography>
                    <Typography sx={{ color: '#FFF', fontSize: '18px', fontFamily: 'Gilroy', marginBottom: '32px' }}>Messaging: After you join a chat room a 'Theme' will be generated based on all the categories that the users have in common. Then a question relating to the theme will be generated through an AI-based algorithm, which selects common modern questions on the subject.  After a user has started chatting a 'Timer' will appear under the given 'Theme' which after a certain amount of time, based on how frequently the users are chatting will run out. Upon running out a 'Pole' will appear giving the user an option to either continue the topic, change the question, or change the whole 'Theme'.</Typography>
                    <Typography sx={{ color: '#FFF', fontSize: '26px', fontFamily: 'GilroyExtraBold', marginBottom: '12px' }}>Community Building</Typography>
                    <Typography sx={{ color: '#FFF', fontSize: '18px', fontFamily: 'Gilroy', marginBottom: '32px' }}>Connection: We provide the user with a safe and private connection with other users who share the same interests. If two users do not get along with their chatting they can leave the chat and none of their real personal data would be shared with others. However, if both users agree to exchange information, a 'Profile pop-up' will appear sharing their contacts from their 'Profile' page.</Typography>
                </Grid>
                <Grid xs={5} display={'flex'} justifyContent={'center'}>
                    <Image src={img} alt={'platform photo'} className={'secondSectionImage'}/>
                </Grid>
            </Grid>
            <Grid display={'flex'} flexDirection={'column'} className={'thirdSection'}>
                <Typography className={'title'} sx={{ marginBottom: '32px' }}>Purpose & Uniqueness</Typography>
                <Typography sx={{ fontFamily: 'GilroyExtraBold', fontSize: '26px', marginBottom: '18px' }}>Chat, Connect, and Collaborate!</Typography>
                <Typography sx={{ fontFamily: 'Gilroy', fontWeight: '500', fontSize: '20px', marginBottom: '12px' }}>CREON is your go-to platform for meaningful conversations, connecting with like-minded individuals, and collaborating on exciting projects. Whether you're here to meet new friends or discuss your passions we've got you covered.</Typography>
                <Typography sx={{ fontFamily: 'GilroyExtraBold', fontSize: '26px', marginBottom: '18px', marginTop: '18px' }}>Features</Typography>
                <Typography sx={{ fontFamily: 'Gilroy', fontWeight: '500', fontSize: '18px', marginBottom: '12px' }}><strong>Chat Rooms:</strong> Join public chat rooms or create your own. Engage in discussions on topics ranging from technology to arts and everything in between.</Typography>
                <Typography sx={{ fontFamily: 'Gilroy', fontWeight: '500', fontSize: '18px', marginBottom: '12px' }}><strong>Community:</strong> Our diverse and welcoming community is ready to welcome you! Meet people from around the world who share your interests and passions.</Typography>
                <Typography sx={{ fontFamily: 'Gilroy', fontWeight: '500', fontSize: '18px', marginBottom: '12px' }}><strong>Private Messaging:</strong> Have private conversations with individuals or create group chats for focused discussions.</Typography>
                <Typography sx={{ fontFamily: 'Gilroy', fontWeight: '500', fontSize: '18px', marginBottom: '12px' }}><strong>Collaboration Tools:</strong> Work together seamlessly with our integrated collaboration tools. Share files, plan events, and brainstorm ideas in real-time.</Typography>
                <Typography sx={{ fontFamily: 'GilroyExtraBold', fontSize: '26px', marginBottom: '18px', marginTop: '18px' }}>Why CREON?</Typography>
                <Typography sx={{ fontFamily: 'Gilroy', fontWeight: '500', fontSize: '18px', marginBottom: '12px' }}><strong>Secure & Private:</strong> Your privacy is our top priority. Enjoy chatting in a safe and secure environment.</Typography>
                <Typography sx={{ fontFamily: 'Gilroy', fontWeight: '500', fontSize: '18px', marginBottom: '12px' }}><strong>User-Friendly:</strong> Our platform is designed for ease of use, whether you're a seasoned chatter or new to online conversations.</Typography>
                <Typography sx={{ fontFamily: 'Gilroy', fontWeight: '500', fontSize: '18px', marginBottom: '12px' }}><strong>Mobile-Friendly:</strong>  Chat on the go with our mobile-responsive design. Stay connected wherever you are.</Typography>
                <Typography sx={{ fontFamily: 'GilroyExtraBold', fontSize: '26px',  marginTop: '36px', marginBottom: '-12px' }}>Join CREON today and start exploring the world of limitless conversations and connections!</Typography>
            </Grid>
        </Grid>
    )
}
