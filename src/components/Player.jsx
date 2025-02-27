import React, { useContext } from "react";

import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {

    const {Track, seekBar , seekBg, playStatus , play , pause, Time, previous , next, seekSong} = useContext(PlayerContext)
    return(
        <div className="h-[8%] bg-black flex justify-between items-center text-white px-4">
            <div className=" hidden lg:flex  items-center gap-4">
                <img className = 'w-12' src={Track.image} alt="" />
                <div>
                    <p>{Track.name}</p>
                    <p>{Track.desc.slice(0,12)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4 ">
                    <img className = 'w-4 cursor-pointer ' src={assets.shuffle_icon} alt="" />
                    <img onClick={previous} className = 'w-4 cursor-pointer ' src={assets.prev_icon} alt="" />
                    {playStatus
                    ?<img onClick={pause} className = 'w-4 cursor-pointer ' src={assets.pause_icon} alt="" />
                    :<img onClick={play} className = 'w-4 cursor-pointer ' src={assets.play_icon} alt="" />
                    }
                    <img onClick={next} className = 'w-4 cursor-pointer ' src={assets.next_icon} alt="" />
                    <img className = 'w-4 cursor-pointer ' src={assets.loop_icon} alt="" />
                </div>
                <div className="flex items-center gap-5">
                    <p>{Time.currentTime.minute}:{Time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer ">
                        <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full "/>
                    </div>
                    <p>{Time.TotalTime.minute}:{Time.TotalTime.second}</p>
                </div>
            </div>
            <div className="hidden lg:flex opacity-75 items-center gap-2">
                <img className="w-4" src={assets.play_icon} alt="" />
                <img className="w-4" src={assets.mic_icon} alt="" />
                <img className="w-4" src={assets.queue_icon} alt="" />
                <img className="w-4" src={assets.speaker_icon} alt="" />
                <img className="w-4" src={assets.volume_icon} alt="" />
                <div className="w-30 bg-slate-50 h-1 rounded"></div>
                <img className="w-4" src={assets.mini_player_icon} alt="" />
                <img className="w-4" src={assets.zoom_icon} alt="" />
            </div>
        </div>
    )
}

export default Player;