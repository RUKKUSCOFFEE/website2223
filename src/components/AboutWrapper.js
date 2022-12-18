import React, { Component } from "react";

class AboutWrapper extends Component{
    render(){
        return(
            <div>
                <div className="about_wrapper" id="about">
                    <div className="column large6 medium12 small12 center">
                        <div className="text">
                            <h1 className="ta_center" style={{textDecoration: "underline"}}>About Rukku's Coffee</h1>
                            <br/>
                            <p className="ta_justify">
                            We are coffee planters from the land of coffee in Chikmagalur, and we have 30 acres of land dedicated to growing Arabica coffee beans and pepper. 
                            We also have an in-house coffee processing unit. With the resources we have, we are proud to introduce our own brand of filter coffee powder called RUKKU’S COFFEE. 
                            Rukku’s coffee is a classic blend of pure Arabica coffee beans and chicory which has been perfectly roasted to give a rich flavor and aroma. 
                            The product has already gained a tremendous positive response and appreciation from it's customers. So why not go ahead and give it a try.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutWrapper;