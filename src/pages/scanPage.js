import { useRef, useState, useEffect } from "react"
import "./scanPage.css";
import { Button, Box } from "@mui/material";
import BottomNav from "../components/BottomNav";
export default function ScanPage(){
    const videoRef = useRef();
    const [stream, setStream] = useState(null);
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video: { facingMode: { exact: "environment" }}}).then(setStream).catch(e=>{
            navigator.mediaDevices.getUserMedia({video: true}).then(setStream);
        });
    }, [])
    if (videoRef.current){
        videoRef.current.srcObject = stream;
    }
    function takePicture(){
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let video = videoRef.current
        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, canvas.width, canvas.height);
    }
    return (
        <div>
            <video className="video_elm" ref={videoRef} autoPlay></video>
            <Box sx={{textAlign:'center', marginTop: 8,'& button': {width: '80%'}}}>
                <Button variant="contained" size="large" onClick={takePicture}>Scan</Button>
            </Box>
            <BottomNav></BottomNav>
        </div>
    )
}