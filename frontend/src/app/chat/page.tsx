'use client'
import { Box, Button, CircularProgress, FormControlLabel, Grid, IconButton, Input, InputAdornment, LinearProgress, Modal, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useCallback, useDebugValue, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { darkBlue, green, lightBlue, orange, red, white } from "../Theme/theme";
import { blueDark, purpleDark, purpleLight } from "../Theme/theme";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { questions } from "../matching";
import { useRouter } from "next/navigation";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import "./style.css";
import * as React from "react";

const BASE_URL = "http://localhost:4000";
const socket = io(BASE_URL, {
  transports: ['websocket'],
  autoConnect: false,
});

enum MessageType {
    USER="user",
    ANNOUNCEMENT="announcement",
}

interface IMessage {
  text: string;
  user: number;
  type: MessageType;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
}

const styleSmall = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    boxShadow: 24,
    p: 4,
}

const progressStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

enum PollValue {
    CHANGE_TOPIC = "change topic",
    KEEP_TOPIC = "keep topic",
    CHANGE_QUESTION = "change question",
}

const pollOptions = [
    {value: PollValue.KEEP_TOPIC, label: "Keep Question"},
    {value: PollValue.CHANGE_QUESTION, label: "Change Question"},
    {value: PollValue.CHANGE_TOPIC, label: "Change Topic"},
]

const getMessageStyle = (props: any) => {
    if (props.message.type === MessageType.ANNOUNCEMENT) {
        return {
            backdropFilter: "blur(11.9px)",
            WebkitBackdropFilter: "blur(11.9px)",
            margin: "20px 10px",
        }
    }
    if (props.message.type === MessageType.USER ) {
        return {
            background: props.message.user === props.user ? purpleLight : purpleDark,
            borderRadius: props.message.user === props.user ? "32px 8px 32px 32px" : "8px 32px 32px 32px",
            maxWidth: "70%",
            marginBottom: '8px',
            boxShadow: "2px 4px 12px 0 rgba(0, 0, 0, 0.1);",
            padding: "12px 16px",
            animationName: `${props.message.user === props.user ? "fadeFromRight" : "fadeFromLeft"}`,
            animationDuration: "1.4s",
        }
    }
}

const getTextStyle = (props: any) => {
    if (props.message.type === MessageType.ANNOUNCEMENT) {
        return {
            color: "rgba(0,0,0,0.8)",
            textShadow: "2px 4px 12px 0 rgba(0, 0, 0, 0.5);",
            fontFamily: 'GilroyBold',
            fontWeight: 500,
            fontSize: '17px',
        }
    }
    if (props.message.user === props.user) {
        return {
            color: "#17243D",
            fontSize: "20px",
        }
    }
    return {
        color: white,
        fontSize: "20px",
    }

}

const getJustify = (props: any) => {
    if (props.message.type === MessageType.ANNOUNCEMENT) {
        return "center";
    } else if (props.message.user === props.user) {
        return "end";
    } else {
        return "start";
    }
}

const MessageBox = (props: {message: IMessage, user: number}) => {
    return (
    <Grid container width={"100%"} justifyContent={getJustify(props)}>
        <Grid sx={getMessageStyle(props)}>
            {props.message.type === MessageType.ANNOUNCEMENT && <Typography sx={{ textAlign: 'center', fontSize: '14px', marginBottom: '0' }}>NEW QUESTION:</Typography>}
            <Typography sx={getTextStyle(props)}>{props.message.text}</Typography>
        </Grid>
    </Grid>
    )
}

const getBigTopic = (AllTopics: any[], index: number) => {
    return AllTopics[index];
};

const getTopicName = (AllTopics: any[], index: number) => {
    return Object.keys(getBigTopic(AllTopics, index))[0];
}

const getQuestionString = (AllTopics: any[], topicsIndex: number, questionIndex: number) => {
    const BigTopic = getBigTopic(AllTopics, topicsIndex);
    const topicName = Object.keys(BigTopic)[0];
    const question = BigTopic[topicName][questionIndex];
    return question;
}

const defaultTopic = 0;
const defaultQuestion = 0;

const defultChat: IMessage[] = [
    {text: getQuestionString(questions, defaultTopic, defaultQuestion), user: 0, type: MessageType.ANNOUNCEMENT},
];

const maxTime = 30 * 1000;
const maxQuestions = 2;
const loadChatTime = 3000;
const displayFoundMatchTime = 2000;

interface UserProfile {
    username: string;
    instagram: string;
    facebook: string;
    snapchat: string;
    phone: string;

}

function CircleFirst() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" className={'circleChatOne'}>
            <path opacity="0.05" d="M725 401.923C725 582.817 579.154 728.846 400 728.846C220.846 728.846 75 582.817 75 401.923C75 221.029 220.846 75 400 75C579.154 75 725 221.029 725 401.923Z" stroke="#FFFFFF" strokeWidth="150"/>
        </svg>
    )
}

function CircleSecond() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800" fill="none" className={'circleChatTwo'}>
            <path opacity="0.05" d="M725 401.923C725 582.817 579.154 728.846 400 728.846C220.846 728.846 75 582.817 75 401.923C75 221.029 220.846 75 400 75C579.154 75 725 221.029 725 401.923Z" stroke="#FFFFFF" strokeWidth="110"/>
        </svg>
    )
}

function CircleThird() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300" fill="none" className={'circleChatThree'}>
            <path opacity="0.05" d="M104 90C104 98.6787 97.1147 105 89.5 105C81.8852 105 75 98.6787 75 90C75 81.3213 81.8852 75 89.5 75C97.1147 75 104 81.3213 104 90Z" stroke="#FFFFFF" strokeWidth="150"/>
        </svg>
    )
}

function CircleFourth() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none" className={'circleChatFour'}>
            <path opacity="0.05" d="M725 401.923C725 582.817 579.154 728.846 400 728.846C220.846 728.846 75 582.817 75 401.923C75 221.029 220.846 75 400 75C579.154 75 725 221.029 725 401.923Z" stroke="#FFFFFF" strokeWidth="60"/>
        </svg>
    )
}

export default function Page() {
  const [messages, setMessages] = useState<IMessage[]>(defultChat);
  const [message, setMessage] = useState<string>('');
  const [user, setUser] = useState(0);
  const [chatStart, setChatStart] = useState<Date | null>();
  const [progress, setProgress] = useState(0);
  const [newTopicModal, setNewTopicModal] = useState(false);
  const [vote, setVote] = useState<PollValue | null>(null);
  const [topic, setTopic] = useState(defaultTopic);
  const [question, setQuestion] = useState(defaultQuestion);
  const [questionsCount, setQuestionsCount] = useState(0);
  const [openExchangeModal, setOpenExchangeModal] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const [showContacts, setShowContacts] = useState(false);
  const [userProfile2, setUserProfile2] = useState<UserProfile>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [step, setStep] = useState(0);

  const getMessage = useCallback(() => {
    socket.off('message');
    socket.on('message', (message: IMessage) => {
        if (!chatStart) {
            setChatStart(new Date());
        }
        setMessages([...messages, message]);
    });
  }, [messages, chatStart]);

  const getUser = useCallback(() => {
    socket.on('newUser', (newUser: number) => {
      if(user === 0) {
        setUser(newUser);
        if (newUser % 4 == 2) {
            const userProfileFromLocalStorage = localStorage.getItem("userProfile");
            const userProfileFromLocalStorage2 = localStorage.getItem("userProfile2");
            if (userProfileFromLocalStorage) {
                setUserProfile(JSON.parse(userProfileFromLocalStorage));
            }
            if (userProfileFromLocalStorage2) {
                setUserProfile2(JSON.parse(userProfileFromLocalStorage2));
            }
        }
        if (newUser % 4 == 0) {
            const userProfileFromLocalStorage = localStorage.getItem("userProfile");
            const userProfileFromLocalStorage2 = localStorage.getItem("userProfile2");
            if (userProfileFromLocalStorage) {
                setUserProfile2(JSON.parse(userProfileFromLocalStorage));
            }
            if (userProfileFromLocalStorage2) {
                setUserProfile(JSON.parse(userProfileFromLocalStorage2));
            }
        }
      }
    });
    if (user === 0) {
      socket.emit('newUser');
    }
  }, [user, userProfile, userProfile2]);

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }
    getMessage();
  }, [messages, getMessage, chatStart]);

  useEffect(() => {
    getUser();
  }, [user, getUser, userProfile, userProfile2]);

  const handlePollResult = useCallback(() => {
    socket.on('pollResults', ({result, questionsCount }: any) => {
        setQuestionsCount(questionsCount);
        if (result === PollValue.CHANGE_TOPIC) {
            const newTopicMessage: IMessage  = {
                text: getQuestionString(questions, topic+1, 0),
                user: 0,
                type: MessageType.ANNOUNCEMENT,
            };
            setMessages([...messages, newTopicMessage]);
            setTopic(topic+1);
            setQuestion(0);
        }
        if (result === PollValue.CHANGE_QUESTION) {
            const newQuestionMessage: IMessage  = {
                text: getQuestionString(questions, topic, question+1),
                user: 0,
                type: MessageType.ANNOUNCEMENT,
            };
            setMessages([...messages, newQuestionMessage]);
            setQuestion(question+1);
        }
    });
  }, [messages]);

  useEffect(() => {
    handlePollResult();
  }, [messages]);

    useEffect(() => {
            const interval = setInterval(() => {
            if (chatStart && !newTopicModal && !openExchangeModal) {
                const now = new Date();
                const elapsed = now.getTime() - chatStart?.getTime();
                const progress = (elapsed / maxTime) * 100;
                setProgress(progress);
                if (progress >= 100) {
                    if (questionsCount < maxQuestions) {
                        setNewTopicModal(true);
                    } else {
                        clearInterval(interval);
                        setOpenExchangeModal(true);
                    }
                }
            }
            }, 100);
            return () => clearInterval(interval);
    }, [chatStart, newTopicModal, questionsCount, openExchangeModal]);

    useEffect(() => {
        setTimeout(() => {
            setStep(1);
            setTimeout(() => {
                setStep(2);
            }, displayFoundMatchTime);
        }, loadChatTime);
    }, []);

    if (step === 0) {
        return (
            <Stack justifyContent={"center"} alignItems={"center"} sx={{width: "100vw", height: "100vh"}}>
                <Typography marginBottom={"20px"} fontSize={'24px'}>
                    Searching for the perfect match!
                </Typography>
                <CircularProgress />
            </Stack>
        )
    }

    if (step === 1) {
        return (
            <Stack justifyContent={"center"} alignItems={"center"} sx={{width: "100vw", height: "100vh"}}>
                <Typography marginBottom={"20px"} fontSize={'24px'}>
                    Found a match!
                </Typography>
                <CheckCircleRoundedIcon sx={{ fontSize: "100px", color: purpleLight }} />
            </Stack>
        )
    }

    return (
        <Grid className={'chatBackground'}>
            <Stack className={'chat'}>
                <Grid container width={"100%"} height={"64px"} sx={{ background: blueDark, padding: '0 24px' }} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography sx={{ fontFamily: 'GilroyExtraBold', color: white }}>C R E O N</Typography>
                    <Grid display={'flex'} gap={1} sx={{ color: white, fontSize: '20px', fontFamily: 'GilroyBold' }}>
                        <PersonIcon sx={{ color: "#FFF", fontSize: '30px' }}/>
                        {userProfile2?.username}
                    </Grid>
                    <CloseIcon sx={{ color: "#FFF", fontSize: '40px', width: '70px', display: 'flex', flexDirection: 'row-reverse' }} onClick={() => router.push('/dashboard')}/>
                </Grid>
                <Grid container justifyContent={"center"}>
                    <Grid sx={{
                        background: purpleLight,
                        width: "100%",
                        padding: "8px 16px",
                        textAlign: "center",
                    }}>
                        <Typography><strong className={'currentBold uppercase'}>{getTopicName(questions, topic)}</strong></Typography>
                        <Typography>Current question: <strong className={'currentBold'}>{getQuestionString(questions, topic, question)}</strong></Typography>
                    </Grid>
                    {chatStart && !openExchangeModal && !showContacts && (
                        <LinearProgress className={'progressBar'} variant="determinate" value={progress} />
                    )}
                </Grid>
                <Stack sx={{
                    padding: "5px 16px 5px 16px",
                    height: "calc(100vh - 80px - 40px - 90px + 5px)",
                    overflowY: "scroll",
                    overflowX: 'hidden',
                }}>
                    {messages.map((message, index) => (
                        <MessageBox key={index} user={user} message={message}/>
                    ))}
                </Stack>
                <Grid container sx={{
                    width: '60vw',
                    padding: "13px 24px",
                    background: "transparent",
                    position: "fixed",
                    bottom: "0",
                    alignItems: "center",
                    borderTop: '2px solid rgba(94, 96, 103, 0.3)',
                }} className="input">
                    <Input
                        multiline
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        disableUnderline={true}
                        style={{
                            width: "100%",
                            borderRadius: "12px",
                            border: "1px solid #E7F0F5",
                            background: "#FFF",
                            boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.12)",
                            padding: "10px 16px",
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={ () => {
                                    if (message !== "") {
                                        socket.emit("message", {text: message, user,type: MessageType.USER});
                                        setMessage("");
                                    }
                                }}>
                                    <SendRoundedIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </Grid>
                <Modal
                    open={newTopicModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className={'modal'}>
                        <Typography sx={{ fontSize: '20px', fontFamily: 'GilroyBold', marginBottom: '8px' }}>
                            Poll
                        </Typography>
                        <Typography sx={{ marginBottom: '16px' }}>
                            Select one of the following options regarding the next talking idea.
                        </Typography>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            value={vote}
                            sx={{ marginBottom: '20px' }}
                            onChange={(e) => setVote(e.target.value as PollValue)}
                        >
                            {pollOptions.map((option, index) => (
                                <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
                            ))}
                        </RadioGroup>
                        <Button variant="contained" className={'buttonContinue'} onClick={() =>  {
                            setNewTopicModal(false);
                            setChatStart(null);
                            socket.emit("vote", {vote});
                            setVote(null);
                        }}>
                            Continue
                        </Button>
                    </Box>
                </Modal>
                <Modal
                    open={openExchangeModal && !showContacts}>
                    <Box sx={style} className={'exchangeModal'}>
                        <Typography sx={{ fontSize: '24px', fontFamily: 'GilroyBold', textAlign: 'center', marginBottom: '24px' }}>
                            Do you want to exchange contact information with this person?
                        </Typography>
                        <Grid container display={'flex'} justifyContent={'space-around'}>
                            <Button variant="contained" className={'noButton'} onClick={() => router.push('/dashboard')}>
                                No, thanks
                            </Button>
                            <Button variant="contained" className={'yesButton'} onClick={() => {
                                setOpenExchangeModal(false);
                                setLoading(false);
                                setShowContacts(true);
                            }}>
                                Of course
                            </Button>
                        </Grid>
                    </Box>
                </Modal>
                <Modal
                    open={showContacts}>
                    <Box className={'contactModal'}>
                        <Typography sx={{ fontFamily: 'GilroyExtraBold', fontSize: '24px', textAlign: 'center', marginBottom: '36px' }}>
                            Here are the contact details of the person you just chatted with!
                        </Typography>
                        <Stack gap="12px" marginBottom={'28px'}>
                            <Typography>
                                <span className={'contactModalLabel'}>username:</span> {userProfile2?.username}
                            </Typography>
                            <Typography>
                                <span className={'contactModalLabel'}>instagram:</span> {userProfile2?.instagram}
                            </Typography>
                            <Typography>
                                <span className={'contactModalLabel'}>facebook:</span> {userProfile2?.facebook}
                            </Typography>
                            <Typography>
                                <span className={'contactModalLabel'}>snapchat:</span> {userProfile2?.snapchat}
                            </Typography>
                            <Typography>
                                <span className={'contactModalLabel'}>phone:</span> {userProfile2?.phone}
                            </Typography>
                        </Stack>
                        <Grid display={'flex'} alignItems={'center'}>
                            <Button variant="contained" className={'yesButton wideButton'} onClick={() => {
                                router.push('/dashboard');
                            }}>
                                Save to contacts
                            </Button>
                        </Grid>
                    </Box>
                </Modal>
                <Modal open={loading}>
                    <Grid sx={progressStyle}>
                        <CircularProgress />
                    </Grid>
                </Modal>
            </Stack>
            <CircleFirst/>
            <CircleSecond/>
            <CircleThird/>
            <CircleFourth/>
        </Grid>
    )
}