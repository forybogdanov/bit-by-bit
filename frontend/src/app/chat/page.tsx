'use client'
import { useCallback, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

const BASE_URL = "http://localhost:4000";
const socket = io(BASE_URL, {
  transports: ['websocket'],
  autoConnect: false,
});

export default function Page() {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');

  const getMessage = useCallback(() => {
    socket.on('message', (message: string) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }
    getMessage();
  }, [messages, getMessage]);

  return (
    <div>
        Chat
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
        <input type="text" value={message} onChange={(e: any) => {setMessage(e.target.value)}}></input>
        <button onClick={() => {socket.emit("message", message); setMessage("")}}>Send</button>
    </div>
  )
}