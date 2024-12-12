import express from 'express'
import { PORT } from './config/serverConfig.js'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import cors from 'cors'
import chokidar from 'chokidar'
import apiRouter from './routes/index.js' 
import path from 'path'
import queryString from 'querystring'
import { handleEditorSocketEvents } from './socketHandlers/editorHandler.js'
const app = express()
const server = createServer(app)
const io = new Server(server,{
  cors: {
    origin: '*',
    method: ['GET', 'POST']
  }
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

io.on('connection', (socket) => {
  console.log('a user connected');
})

app.use('/api', apiRouter)

app.get('/ping', (req, res) => {
    return res.json({ message: 'pong' })
})

const editorNamespace = io.of('/editor')

editorNamespace.on('connection', (socket) => {
  console.log('editor connected')
  // somehow we will get the projectId from frontend
  const queryParams = socket.handshake.query
  let projectId = queryParams.projectId;

  console.log("Query fron frontend", queryParams)

  if(projectId){
    var watcher = chokidar.watch(`./projects/${projectId}`,{
      ignored: (path) => path.includes('node_modules'),
      persistent: true, // keeps the watcher in running state till the time app is running 
      awaitWriteFinish : {
        stabilityThreshold: 2000, // ensures stability of file before triggering event
      },
      ignoreInitial: true
    })
    watcher.on('all', (event,path) => {
      console.log('file changed', path , event)
    })
  }

  handleEditorSocketEvents(socket)
  // socket.on('message', (data) => {
  //   console.log(data,"message data")

  //   const message = JSON.parse(data.toString())
  // });
  socket.on('disconnect', async () => {
    console.log('editor disconnected')
    await watcher?.close()
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})