import React, { Component } from "react";

class FooterWrapper extends Component{
    render(){
        return(
            <div>
                <div className="footer_wrapper">
                    <div className="column offset-large1 offset-medium1 small0">

                    </div>
                    <div className="column large4 medium4 small12">
                        <br/><br/>
                        <p className="heading">Sections</p>
                        <a className="footerLink" href="#top">Back to Top</a><br/>
                        <a className="footerLink" href="#about">About Us</a><br/>
                        <a className="footerLink" href="#benefits">Benefits</a><br/>
                        <a className="footerLink" href="#process">The Proccess</a><br/>
                        <a className="footerLink" href="#variants">Product Variants</a><br/>
                    </div>
                    <div className="column large4 medium4 small12">
                        <br/><br/>
                        <p className="heading">Contact Us</p>
                        <a className="footerLink" href="tel:7406181000"><i className="ms-Icon ms-Icon--Phone"></i> +917406181000</a><br/>
                        <a className="footerLink" href="tel:9739188802"><i className="ms-Icon ms-Icon--Phone"></i> +919739188802</a><br/>
                        <a className="footerLink" href="mailto:rukkuscoffee@gmail.com"><i className="ms-Icon ms-Icon--Mail"></i> rukkuscoffee@gmail.com</a><br/>
                    </div>
                    <div className="column large2 medium2 small12">
                        <br/><br/>
                        <p className="heading">Send your feedback</p>
                        <a className="footerLink" >
                            Rukku's Coffee, <br/>
                            Chokkanna Street, <br/>
                            Chikmaglur, 577101
                        </a><br/>
                    </div>
            </div>
            </div>
        )
    }
}

export default FooterWrapper;