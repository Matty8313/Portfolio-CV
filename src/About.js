import React from 'react'
import "./About.scss"
import Portfolio2 from "./Portfolio2";
import Photo1 from "./doStr.jpg"

export default function About(props) {
    let number = 0
    
    
  setInterval(function(){
    number = number + 1
    let text = "My name is Mateusz Płocica and I am a student of finance and accounting. I started my programming adventure 2 years ago"
    let textCut = text.slice(0,number + 1)
    let writebox = document.getElementById("writeBox")
    if(writebox !== null){
    writebox.innerText = textCut + "_"
    }
    else if (number === text.length || writebox === null){
      clearInterval()
    }

    
   });
   
  return (
    <>
    <div id="background"><img id="backbacki" src={Photo1}></img></div>
    <div class="container-2">
      <div id="wrap-Box">
      <div  id="writeBox" ></div>
      <div  id="writeBox2" ></div>
      <div  id="writeBox3" ><text id="txt">It started with creating my own website for wordpress because I wanted to create a blog about SEO</text></div>
    </div>
    </div>
    <div class="container-3">
      <div id="wrap-Box">
      <div id="leftBar">
          <div id="circle"></div>
          <text id="cText">ashgdhasbdhasbdhbasdh</text>
      </div>
      <div id="rightBar"><Portfolio2/></div>
    
      </div>
    </div>
    </>
  )
}

/* 
<div id="body2">
    <div className="circleAbout" id="CircleMain">My name is Mateusz Płocica and I am a student of finance and accounting. I started my programming adventure 2 years ago</div>
    <div class="circleAbout" id="Circle2">It started with creating my own website for wordpress because I wanted to create a blog about SEO</div>
    <div class="circleAbout" id="Circle3">My girlfriend pointed out that I spend more time styling the page than writing articles</div>
    <div class="circleAbout" id="Circle4">I thought about it and found that writing code was more interesting to me after all</div>
    <div class="circleAbout" id="Circle5">And so I started to learn programming more seriously</div>
    <div id="BackCircle"><p></p></div>
    <div id="BackCircle-violet"><p></p></div>
    <div id="BackCircle-orange"><p></p></div>
    </div>

*/