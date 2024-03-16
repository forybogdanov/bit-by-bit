'use client'
import { Box, Button, FormControlLabel, Grid, IconButton, Input, InputAdornment, Modal, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import { darkBlue, lightBlue, orange, red, white } from "../Theme/theme";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { grey } from "@mui/material/colors";


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

enum PollValue {
    CHANGE_TOPIC="change topic",
    KEEP_TOPIC="keep topic",
}

const pollOptions = [
    {value: PollValue.CHANGE_TOPIC, label: "Change Topic"},
    {value: PollValue.KEEP_TOPIC, label: "Keep Topic"},
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

const defultChat: IMessage[] = [
    {text: "Current topic is Music", user: 0, type: MessageType.ANNOUNCEMENT},
];

export default function Page() {
  const [messages, setMessages] = useState<IMessage[]>(defultChat);
  const [message, setMessage] = useState<string>('');
  const [user, setUser] = useState(0);
  const [open, setOpen] = useState(false);

  const getMessage = useCallback(() => {
    socket.on('message', (message: IMessage) => {
        console.log(messages);
        setMessages([...messages, message]);
    });
  }, [messages]);

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
  }, [messages, getMessage]);

  useEffect(() => {
    getUser();
  }, [user, getUser]);

  return (
    <Stack sx={{width: "100vw", height: "100vh"}}>
        <Grid container width={"100%"} height={"80px"} sx={{background: darkBlue}}>
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
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Poll
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                {pollOptions.map((option, index) => (
                    <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
                ))}
            </RadioGroup>
            <Button variant="contained" sx={{ mt: 2 }} onClick={() => setOpen(false)}>
                Let's go!
            </Button>
        </Box>
        </Modal>
    </Stack>
  )
}