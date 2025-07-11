import React from "react";
import Card from "./card";


function Tour({tours, BtnHandler}){
    return (
        <div className="container">
            <div>
                <h2 className="heading01">Plan with me</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} BtnHandler={BtnHandler}/>
                    })
                }
            </div>
        </div>
    )
}

export default Tour ;