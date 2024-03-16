'use client'
import { Button, Grid, IconButton, Input, InputAdornment, Stack, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import { darkBlue, lightBlue, orange, red, white } from "../Theme/theme";
import SendRoundedIcon from "@mui/icons-material/SendRounded";


const BASE_URL = "http://localhost:4000";
const socket = io(BASE_URL, {
  transports: ['websocket'],
  autoConnect: false,
});

interface IMessage {
  text: string;
  user: number;
}

const MessageBox = (props: {message: IMessage, user: number}) => {
  return (
   <Grid container width={"100%"} justifyContent={props.message.user === props.user ? "end" : "start"}>
      <Grid sx={{
        background: props.message.user === props.user ? darkBlue : lightBlue,
        borderRadius: "8px",
        margin: "8px",
        maxWidth: "70%",
        border: "1px solid #fsfsfs",
        boxShadow: "0px 4px 3px #5f5f5f",
        padding: "8px 16px"
      }}>
        <Typography sx={{
          color: props.message.user === props.user ? white : "#000000",
          fontSize: "20px",
        }}>{props.message.text}</Typography>
      </Grid>
   </Grid>
  )
}

const defultChat: IMessage[] = [
    {text: "Hello", user: 1},
    {text: "Hi", user: 2},
    {text: "How are you?", user: 1},
    {text: "I'm fine", user: 2},
    {text: "What about you?", user: 2},
    {text: "I'm also fine", user: 1},
    {text: "Bye", user: 2},
    {text: "Goodbye", user: 1},
];

export default function Page() {
  const [messages, setMessages] = useState<IMessage[]>(defultChat);
  const [message, setMessage] = useState<string>('');
  const [user, setUser] = useState(1);

  const getMessage = useCallback(() => {
    socket.on('message', (message: IMessage) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const getUser = useCallback(() => {
    socket.on('newUser', (newUser: number) => {
      console.log('newUser', newUser);
      if(user === 0) {
        console.log("wewe");
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
                  socket.emit("message", {text: message, user}); 
                  setMessage("");
                }
              }}>
                <SendRoundedIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Grid>
    </Stack>
  )
}