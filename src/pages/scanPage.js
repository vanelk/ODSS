import { useRef, useState, useEffect } from "react"
export default function ScanPage(){
    const videoRef = useRef();
    const [stream, setStream] = useState(null);
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
        setStream(stream);
    });
    useEffect(()=>{
        if (videoRef && stream){
            videoRef.srcObject = stream;
        }
    }, [stream]);
    return (
        <div>
            <video ref={videoRef}></video>
        </div>
    )
}