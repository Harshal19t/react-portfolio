import "./Workcard.css";
import React from 'react'
import Workcard from "./Workcard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="word-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
           {WorkCardData.map((val,index) => {
                return(
                    <Workcard key={index} imgsrc={val.imgsrc} title={val.title} text={val.text} source={val.source}/>
                )
           })}
        </div>
    </div>
  )
}

export default Work;