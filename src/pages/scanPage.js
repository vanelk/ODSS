import { useRef } from "react"
export function ScanPage(){
    const videRef = useRef();
    return (
        <div>
            <video ref></video>
        </div>
    )
}