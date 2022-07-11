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
    // setInterval(async ()=>{

    // },5000);
    return (
        <div style={{ width: '100%', height: '90vh'}} className='row m-0'>
            <div className='col-9 p-0'>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=pLBuFxMYkx8'
                    width='100%'
                    height='100%'
                    controls
                    onPause={()=> saveDuration(progress, id)}
                    onProgress={(e)=> {setProgress(e.playedSeconds)}}
                />
            </div>

            <div className='col-3 p-0'>
                <div style={{width: '100%', height: '100%', backgroundColor: 'red'}} className='m-0'>
                    <div style={{overflowY: 'scroll', height: '80vh'}}>
                        <div className='d-flex'>
                            adsdassssssss
                            <button className='btn btn-warning btn-sm'> Reportar </button>
                        </div>

                    </div>
                    <div style={{position: 'absolute', bottom: '0'}} className='row m-0 d-flex justify-content-between align-items-center'>
                        <div className='col-lg-9 col-12 p-0'>
                            <input  className='col-12'/>
                        </div>
                        <div className='col-lg-3 col-12 p-0'>
                            <button className='col-12 btn btn-primary'>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video