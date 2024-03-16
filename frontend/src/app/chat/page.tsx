'use client'
import { Button, Grid, IconButton, Input, InputAdornment, Stack, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import { darkBlue, lightBlue, white } from "../Theme/theme";
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
        maxWidth: "50%",
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

export default function Page() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState<string>('');
  const [user, setUser] = useState(0);

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
      <Grid container width={"100%"} height={"50px"} sx={{background: darkBlue}}>
      </Grid>
      <Stack sx={{
        padding: "60px 16px 0px 16px",
        height: "100%",
        overflowY: "scroll",
      }}>
        {messages.map((message, index) => (
          <MessageBox key={index} user={user} message={message}/>
        ))}
      </Stack>
      <Grid container width={"100%"} sx={{
        padding: "20px 40px",
      }}>
        <Input
          multiline
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disableUnderline={true}
          style={{
            width: "90%",
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
                socket.emit("message", {text: message, user}); 
                setMessage("");
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