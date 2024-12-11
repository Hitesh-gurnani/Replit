import fs from "fs/promises";
export const handleEditorSocketEvents = (socket, io) => {
    socket.on("writeFile",({ data , pathToFileOrFolder })=>{
        try {
            const response = fs.writeFile(pathToFileOrFolder, data);
            socket.emit("writeFileSuccess", {
                data:"File written successfully"
            });
        } catch (error) {
            console.log("error writing the file",error);
            socket.emit("error", {
                data:"Error writing the file"
            });
        }
    })

    socket.on("createFile",async({ pathToFileOrFolder })=>{
        const isFileAlreadyExists = await fs.stat(pathToFileOrFolder);
        if(isFileAlreadyExists){
            socket.emit("error", {
                data:"File already exists"
            });
            return;
        }
        try {
            const response = fs.writeFile(pathToFileOrFolder, data);
            socket.emit("createFileSuccess", {
                data:"File created successfully"
            });
        } catch (error) {
            console.log("error creating the file",error);
            socket.emit("error", {
                data:"Error creating the file"
            });
        }
    })

    socket.on("readFile",async({ pathToFileOrFolder })=>{
        try {
            const response = await fs.readFile(pathToFileOrFolder);
            socket.emit("readFileSuccess", {
                data:response.toString(),
                path:pathToFileOrFolder
            });
        } catch (error) {
            console.log("error reading the file",error);
            socket.emit("error", {
                data:"Error reading the file"
            });
        }
    })

    socket.on("deleteFile",async({ pathToFileOrFolder })=>{
        try {
            const response = await fs.unlink(pathToFileOrFolder);
            socket.emit("deleteFileSuccess", {
                data:"File deleted successfully"
            });
        } catch (error) {
            console.log("error deleting the file",error);
            socket.emit("error", {
                data:"Error deleting the file"
            });
        }
    })

    socket.on("createFolder",async({ pathToFileOrFolder })=>{
        const isFolderAlreadyExists = await fs.stat(pathToFileOrFolder);
        if(isFolderAlreadyExists){
            socket.emit("error", {
                data:"Folder already exists"
            });
            return;
        }
        try {
            const response = fs.mkdir(pathToFileOrFolder);
            socket.emit("createFolderSuccess", {
                data:"Folder created successfully"
            });
        } catch (error) {
            console.log("error creating the folder",error);
            socket.emit("error", {
                data:"Error creating the folder"
            });
        }
    })

    socket.on("deleteFolder",async({ pathToFileOrFolder })=>{
        try {
            const response = await fs.rmdir(pathToFileOrFolder,{ recursive: true });
        } catch (error) {
            console.log("error deleting the folder",error);
            socket.emit("error", {
                data:"Error deleting the folder"
            });
        }
    })
    
                
}