'use client'
import { Box, Button, CircularProgress, FormControlLabel, Grid, IconButton, Input, InputAdornment, LinearProgress, Modal, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useCallback, useDebugValue, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { darkBlue, green, lightBlue, orange, red, white } from "../Theme/theme";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { questions } from "../matching";
import { useRouter } from "next/navigation";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

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
    bgcolor: 'background.paper',
    border: '2px solid #000',
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
    CHANGE_TOPIC="change topic",
    KEEP_TOPIC="keep topic",
    CHANGE_QUESTION="change question",
}

const pollOptions = [
    {value: PollValue.KEEP_TOPIC, label: "Keep Question"},
    {value: PollValue.CHANGE_QUESTION, label: "Change Question"},
    {value: PollValue.CHANGE_TOPIC, label: "Change Topic"},
]

const getMessageStyle = (props: any) => {
    if (props.message.type === MessageType.ANNOUNCEMENT) {
        return {
            background: "radial-gradient(circle, rgba(255,255,255,1) 9%, rgba(48,48,48,1) 200%)|",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(11.9px)",
            WebkitBackdropFilter: "blur(11.9px)",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            padding: "8px 16px",
            margin: "8px",
        }
    }
    if (props.message.type === MessageType.USER) {
        return {
            background: props.message.user === props.user ? darkBlue : lightBlue,
            borderRadius: "8px",
            margin: "8px",
            maxWidth: "70%",
            border: "1px solid #fsfsfs",
            boxShadow: "0px 4px 3px #5f5f5f",
            padding: "8px 16px",
            animationName: `${props.message.user === props.user ? "fadeFromRight" : "fadeFromLeft"}`,
            animationDuration: "1s",
        }
    }
}

const getTextStyle = (props: any) => {
    if (props.message.type === MessageType.ANNOUNCEMENT) {
        return {
            color: "#000000",
            fontSize: "20px",
        }
    }
    if (props.message.user === props.user) {
        return {
            color: white,
            fontSize: "20px",
        }
    }
    return {
        color: "#000000",
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
            <Typography sx={getTextStyle(props)}>{props.message.text}</Typography>
        </Grid>
    </Grid>
    )
}

const getBigTopic = (AllTopics: any[], index: number) => {
    return AllTopics[index];
};

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

const maxTime = 5 * 1000;
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
      }
    });
    if (user === 0) {
      socket.emit('newUser');
    }
  }, [user]);

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }
    getMessage();
  }, [messages, getMessage, chatStart]);

  useEffect(() => {
    getUser();
    const userProfileFromLocalStorage = localStorage.getItem("userProfile");
    if (userProfileFromLocalStorage) {
      setUserProfile(JSON.parse(userProfileFromLocalStorage));
    }
    const userProfileFromLocalStorage2 = localStorage.getItem("userProfile2");
    if (userProfileFromLocalStorage2) {
      setUserProfile2(JSON.parse(userProfileFromLocalStorage2));
    }
  }, [user, getUser]);

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
                <Typography marginBottom={"20px"}>
                    Searching for the perfect match!
                </Typography>
                <CircularProgress />
            </Stack>
        )
    }

    if (step === 1) {
        return (
            <Stack justifyContent={"center"} alignItems={"center"} sx={{width: "100vw", height: "100vh"}}>
                <Typography marginBottom={"20px"}>
                    Found a match!
                </Typography>
                <CheckCircleRoundedIcon sx={{fontSize: "100px", color: green}} />
            </Stack>
        )
    }

    return (
    <Stack sx={{width: "100vw", height: "100vh"}}>
        <Grid container width={"100%"} height={"80px"} sx={{background: darkBlue}}>
            <Typography sx={{color: white}}>
                {userProfile?.username}
            </Typography>
        </Grid>
        <Grid container justifyContent={"center"}>
            <Grid sx={{
                background: lightBlue,
                maxWidth: "100%",
                padding: "8px 16px",
                textAlign: "center",
            }}>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                {chatStart && !openExchangeModal && !showContacts && (
                    <LinearProgress variant="determinate" value={progress} />
                )}
            </Grid>
        </Grid>
        <Stack sx={{
            padding: "40px 16px 100px 16px",
            height: "100%",
            overflowY: "scroll",
        }}>
            {messages.map((message, index) => (
            <MessageBox key={index} user={user} message={message}/>
            ))}
        </Stack>
        <Grid container width={"100%"} sx={{
            padding: "20px 40px",
            background: "transparent",
            position: "fixed",
            bottom: "0",
            alignItems: "center",
        }}>
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
            padding: "8px",
            marginBottom: "16px",
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
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Poll
            </Typography>
            <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={vote}
                onChange={(e) => setVote(e.target.value as PollValue)}
            >
                {pollOptions.map((option, index) => (
                    <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
                ))}
            </RadioGroup>
            <Button variant="contained" sx={{ mt: 2 }} onClick={() =>  {
                setNewTopicModal(false);
                setChatStart(null);
                socket.emit("vote", {vote});
                setVote(null);
            }}>
                Let's go!
            </Button>
        </Box>
        </Modal>
        <Modal
        open={openExchangeModal && !showContacts}>
        <Box sx={style}>
            <Typography sx={{ mt: 2 }}>
               Do you want to exchange contact information with this person?
            </Typography>
            <Grid container gap="20px">
                <Button variant="contained" sx={{ mt: 2, backgroundColor: red }}>
                    No, thanks!
                </Button>
                <Button variant="contained" sx={{ mt: 2, backgroundColor: darkBlue }} onClick={() => {
                    setOpenExchangeModal(false);
                    setLoading(false);
                    setShowContacts(true);
                }}>
                    Of course!
                </Button>
            </Grid>
        </Box>
        </Modal>
        <Modal
        open={showContacts}>
        <Box sx={style}>
            <Typography sx={{ mt: 2 }}>
                Here are the contact details of the person you just chatted with!
            </Typography>
            <Stack gap="20px">
                <Typography>
                    username: {userProfile2?.username}
                </Typography>
                <Typography>
                    instagram: {userProfile2?.instagram}
                </Typography>
                <Typography>
                    facebook: {userProfile2?.facebook}
                </Typography>
                <Typography>
                    snapchat: {userProfile2?.snapchat}
                </Typography>
                <Typography>
                    phone: {userProfile2?.phone}
                </Typography>
                <Button variant="contained" onClick={() => {
                    router.push('/dashboard');
                }}>
                    Save to contacts
                </Button>
            </Stack>
        </Box>
        </Modal>
        <Modal open={loading}>
            <Grid sx={progressStyle}>
                <CircularProgress />
            </Grid>
        </Modal>
    </Stack>
  )
}