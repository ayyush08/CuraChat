const fileFormat = (url = "") => {
    const fileExtension = url.split(".").pop();
    if (fileExtension == "mp4" || fileExtension == "webm" || fileExtension == "ogg") {
        return "video";
    }
    if(fileExtension == "mp3" || fileExtension == "wav"){
        return "audio";
    }
    if(fileExtension == "jpg" || fileExtension == "jpeg" || fileExtension == "png" || fileExtension == "gif"){
        return "image";
    }
    if(fileExtension == "pdf"){
        return "pdf";
    }
    return "file";
}



const transformImage = (url="",width=100)=> url;
export { fileFormat,transformImage }