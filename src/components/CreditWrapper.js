import React, { Component } from "react";

function closecredits (){
    document.getElementById("creditWindow").style.display="none";
}

function openPort(){
    window.open("https://shivendrasaurav.vercel.app");
}

function frosting(){

    document.querySelector(".frost_container:hover").onmousemove = e => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
    
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
    };
}

class CreditWrapper extends Component{
    render(){
        return(
            <div>
                <div className="modal_container" id="creditWindow">  
                <div className="dialogue_box  large6 medium6 small8 center zi3">  
                    <div className="dialogue_pane large12" >  
                    <span className="dialogue_title">Credits</span>  
                    <button className="mod_close_btn" onClick={closecredits} style={{left: "0px", height: "38px"}}>X</button>  
                    </div>  
                    <div className="dialogue_content large12" style={{height: "82%", borderTop: "1px solid #0e0e0e"}}>
                        <br />
                        <p className="ta_center" style={{fontSize: "18px"}}>This website was designed and developed by</p>  
                        <p className="ta_center" style={{fontSize: "22px", fontWeight: "bold"}}>Shivendra Saurav</p>
                        <button className="primary_blue dlevel2 frost_container center" onMouseOver={frosting} onClick={openPort}>  
                            <span className="frost">See Developer's Portfolio</span>
                        </button>
                    </div>
                </div>  
                </div>
            </div>
        )
    }
}

export default CreditWrapper;