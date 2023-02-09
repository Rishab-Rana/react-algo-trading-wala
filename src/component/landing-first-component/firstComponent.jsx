import React from "react";
import bannerImg from "./../image/banner-Image.png";
import NavigationBar from "../Navigation Bar/navBar";
export default function FirstComponent(){
    return (
        <>
        <NavigationBar />
        <div className="container-one">
            <div className="row flex justify-center max-lg:flex-col-reverse">
                <div className="col flex flex-col justify-center max-lg:my-5 text-start">
                    <h1>Start Algo Trading<br></br> With Profitable Strategies</h1>
                    <p>Quickly - Optimally - In One Call</p>
                    <div className="btn-get-started">Get Started</div>
                </div>
                <div className="col">
                    <img src={bannerImg} alt="" className="w-96"/>
                </div>
            </div>
        </div>  
        </>
    );
}