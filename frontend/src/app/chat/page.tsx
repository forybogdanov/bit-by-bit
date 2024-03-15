import { Socket, io } from "socket.io-client";

const PORT = process.env.SOCKET_PORT ? parseInt(process.env.SOCKET_PORT) : 3001;

export default function Page() {
  const socket = io(`:${PORT}`, { path: "/api/socket", addTrailingSlash: false })

  socket.on("connect", () => {
    console.log("Connected")
  })

  socket.on("disconnect", () => {
    console.log("Disconnected")
  })

  socket.on("connect_error", async (err: any) => {
    console.log(`connect_error due to ${err.message}`)
    await fetch("/api/socket")
  })
  return (
    <div>
        Chat
    </div>
  )
}