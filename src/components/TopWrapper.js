import React, { Component } from "react";
import coverVid from "./data/cover.webm";
import phoneCover from "./data/cover_phone.png";

class TopWrapper extends Component{
    render(){
        return(
            <div>
                <div className="top_wrapper" id="top">
                    <div className="tabCenter">
                        <video autoPlay muted loop >
                            <source src={coverVid} type="video/mp4" />
                        </video>
                        <div className="coverOverlay" alt="cover">.</div>

                        <img src={phoneCover} alt="phoneCover" className="large0 medium0 small0" />
                    </div>
                </div>
            </div>
        )
    }
}

export default TopWrapper;


/*
                    <div className="pivot_container large12 medium12 small12 primary_white zi2">
                        <button className="center primary_blue">Rukkus Coffee</button>
                    </div>
*/