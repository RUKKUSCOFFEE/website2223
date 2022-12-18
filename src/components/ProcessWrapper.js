import React, { Component } from "react";

class ProcessWrapper extends Component{
    render(){
        return(
            <div>
                <div className="process_wrapper" id="process">
                    <div className="column large12 medium12 small12">
                        <br/><br/><br/>
                        <h1 className="ta_center" style={{textDecoration: "underline"}}>The Coffee Making Process</h1>
                        <br/><br/>
                        <div className="halfwrapper">
                            <div className="text">
                                <button className="disc right small0">1</button>
                                <span className="large0 medium0"><button className="disc">1</button><br/><br/></span>
                                <h1>Coffee Roasting</h1>
                                <p className="ta_justify">
                                We developed a roasting cycle that can improve the aroma, taste, and other characteristics of beans. 
                                This process necessitates a precise balance of time and temperature. 
                                Following the completion of the process, the coffee is brought to room temperature to bring out the long-lasting aroma.
                                </p>
                            </div>
                        </div>

                        <br/>

                        <div className="offsethalfwrapper">
                            <div className="text">
                                <button className="disc small0">2</button>
                                <span className="large0 medium0"><button className="disc">2</button><br/><br/></span>
                                <h1 className="right">Coffee Beans Grinding</h1>
                                <p className="ta_justify">
                                We grind the beans to a medium size, making them suitable for both general and commercial use. 
                                It also helps to preserve the taste, flavour, and aroma for a much longer period of time than other methods.
                                </p>
                            </div>
                        </div>

                        <br/>

                        <div className="halfwrapper">
                            <div className="text">
                                <button className="disc right small0">3</button>
                                <span className="large0 medium0"><button className="disc">3</button><br/><br/></span>
                                <h1>Storage and Packing</h1>
                                <p className="ta_justify">
                                    Because ground coffee is so exquisite, it should be protected from moisture, air, and light. 
                                    We use highly qualified techniques and materials to preserve its freshness and keep the fragrance intact. 
                                    We use eco-friendly covers to keep the coffee powder fresh and help save the environment.
                                </p>
                            </div>
                        </div>
                        <br/><br/><br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProcessWrapper;