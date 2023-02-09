import React from "react";
import banner from "./../image/Secound-container/banner.png";

export default function SecoundComponent(){

    return(
        <>
        <div className="container-two">
            <div className="row flex items-center">
                <div className="col">
                    <h1>Simple Connect your Trading With Powerful Algorithms</h1>
                    <img src={banner} alt="" className="w-96" />
                </div>
                <div className="grid grid-cols-2">
                    <div className="box1">
                        <h1>Best trading Strategies to Deploy</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Accusantium nihil inventore ipsam veritatis suscipit ullam similique 
                             doloribus alias provident voluptatem, officia, ab est earum temporibus 
                             odio quibusdam quo repudiandae non?</p>
                    </div>
                    <div className="box2 w-1/2">
                        <h1>Backtesting</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Accusantium nihil inventore ipsam veritatis suscipit ullam similique 
                             doloribus alias provident voluptatem, officia, ab est earum temporibus 
                             odio quibusdam quo repudiandae non?</p>
                    </div>
                    <div className="box3 w-1/2">
                        <h1>Elemination of Emotions</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Accusantium nihil inventore ipsam veritatis suscipit ullam similique 
                             doloribus alias provident voluptatem, officia, ab est earum temporibus 
                             odio quibusdam quo repudiandae non?</p>
                    </div>
                    <div className="box4 w-1/2">
                        <h1>plug And Play</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Accusantium nihil inventore ipsam veritatis suscipit ullam similique 
                             doloribus alias provident voluptatem, officia, ab est earum temporibus 
                             odio quibusdam quo repudiandae non?</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}