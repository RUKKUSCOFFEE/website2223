import React, { Component } from "react";
import benefitsImage from "./data/benefits.png";


class BenefitsWrapper extends Component{
    render(){
        return(
            <div>
                <div className="benefits_wrapper" id="benefits">
                    <div className="column large12 medium12 small12">
                        <br/><br/><br/>
                        <h1 className="ta_center" style={{textDecoration: "underline"}}>The benefits of Coffee?</h1>
                        <br/><br/>
                        <div className="column large10 medium10 small12 center">
                            <div className="column large4 medium4 small12 ta_center boxv2">
                                <div className="tooltip_container small0">  
                                    <span className="tooltip_info">Coffee could help support weight management and may be linked to decreased body fat. One study also found that people who consumed coffee were more likely to be physically active.</span>  
                                    <button className="small primary_white dlevel2">Promote weight management</button>  
                                </div>

                                <p className="heading large0 medium0">Promote weight management</p>
                                <p className="info large0 medium0">Coffee could help support weight management and may be linked to decreased body fat. One study also found that people who consumed coffee were more likely to be physically active.</p>
                            </div>
                            <div className="column large4 medium4 small12 ta_center ">
                                
                            </div>
                            <div className="column large4 medium4 small12 ta_center boxv2">
                                <div className="tooltip_container small0">  
                                    <span className="tooltip_info">Coffee could improve physical performance and endurance when consumed before exercising. However, some studies have turned up mixed results.</span>  
                                    <button className="small primary_white dlevel2">Increases metabolism</button>  
                                </div>

                                <p className="heading large0 medium0">Increases metabolism</p>
                                <p className="info large0 medium0">Coffee could improve physical performance and endurance when consumed before exercising. However, some studies have turned up mixed results.</p>
                            </div>
                            <div className="column large4 medium4 small12 ta_center boxv2">
                                <div className="tooltip_container small0">  
                                    <span className="tooltip_info">Coffee contains caffeine, a stimulant that has been shown to increase energy levels and decrease fatigue by altering levels of certain neurotransmitters in the brain.</span>  
                                    <button className="small primary_white dlevel2">Boosts energy levels</button>  
                                </div>

                                <p className="heading large0 medium0">Boosts energy levels</p>
                                <p className="info large0 medium0">Coffee contains caffeine, a stimulant that has been shown to increase energy levels and decrease fatigue by altering levels of certain neurotransmitters in the brain.</p>
                            </div>
                            <div className="column large4 medium4 small0 ta_center boxv2">
                                <img src={benefitsImage} alt="benefits" />
                            </div>
                            <div className="column large4 medium4 small12 ta_center boxv2">
                                <div className="tooltip_container small0">  
                                    <span className="tooltip_info">People tend to get more antioxidants from beverages than foods, and studies from all over the world demonstrate that coffee is the single biggest dietary source of antioxidants.</span>  
                                    <button className="small primary_white dlevel2">Detox and Antioxidants</button>  
                                </div>

                                <p className="heading large0 medium0">Detox and Antioxidants</p>
                                <p className="info large0 medium0">People tend to get more antioxidants from beverages than foods, and studies from all over the world demonstrate that coffee is the single biggest dietary source of antioxidants.</p>
                            </div>
                            <div className="column large4 medium4 small12 ta_center boxv2">
                                <div className="tooltip_container small0">  
                                    <span className="tooltip_info">Several studies have found that coffee could be linked to a lower risk of depression and may even be linked to a lower risk of death by suicide.</span>  
                                    <button className="small primary_white dlevel2">Lower risk of depression</button>  
                                </div>

                                <p className="heading large0 medium0">Lower risk of depression</p>
                                <p className="info large0 medium0">Several studies have found that coffee could be linked to a lower risk of depression and may even be linked to a lower risk of death by suicide.</p>
                            </div>
                            <div className="column large4 medium4 small12 ta_center ">
                                
                            </div>
                            <div className="column large4 medium4 small12 ta_center boxv2">                                
                                <div className="tooltip_container small0">  
                                    <span className="tooltip_info">Drinking coffee has been linked to numerous health benefits, including a reduced risk of type 2 diabetes and liver, heart, and neurological diseases. It may also benefit mental health and help you live longer.</span>  
                                    <button className="small primary_white dlevel2">Lower risk of type 2 diabetes</button>  
                                </div>

                                <p className="heading large0 medium0">Lower risk of type 2 diabetes</p>
                                <p className="info large0 medium0">Drinking coffee has been linked to numerous health benefits, including a reduced risk of type 2 diabetes and liver, heart, and neurological diseases. It may also benefit mental health and help you live longer.</p>
                            </div>

                        </div>
                        <br/><br/>
                    </div>
                    <br/><br/><br/>
                </div>
            </div>
        )
    }
}

export default BenefitsWrapper;