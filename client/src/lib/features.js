import moment from "moment";

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

const getLastSevenDays = () => {
    const currentDate = moment();

    const lastSevenDays = [];
    for(let i=0; i<7; i++){
        const dayDate = currentDate.clone().subtract(i, 'days');
        lastSevenDays.unshift(dayDate.format('dddd'))
    }
    return lastSevenDays
}


const transformImage = (url="",width=100)=> url;
export { fileFormat,transformImage,getLastSevenDays }

