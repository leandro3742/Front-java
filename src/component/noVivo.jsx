import React from 'react'
import ReactPlayer from "react-player";

function NoVivo (props) {
    const {saveDuration, setProgress, url} = props
  return (
    <div style={{ width: "100%", height: "90vh" }} className="row m-0">
        <div className="col-12 p-0">
                <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                controls
                onPause={() => saveDuration(progress, id)}
                onProgress={(e) => {
                    setProgress(e.playedSeconds);
                }}
                />
        </div>
    </div>
  )
}

export default NoVivo