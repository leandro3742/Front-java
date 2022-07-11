import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

function Video(){
    const { id, url } = useParams();
    const [stopA, setStopA] = useState(false)
    const [progress, setProgress] = useState(0)
    useEffect(() => {
       console.log(progress)
    }, [progress]);
    
    const saveDuration = (time, id) => {

    }
    
    return (
        <div style={{ width: '100%', height: '100%'}}>
        <ReactPlayer 
            url='https://www.youtube.com/watch?v=pLBuFxMYkx8'
            width='100%'
            height='100%'
            controls
            onPause={()=> saveDuration(progress, id)}
            onProgress={(e)=> {setProgress(e.playedSeconds)}}
        />
        </div>
    )
}

export default Video