import React from 'react'

export default function Home() {

    var myText = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna lacus, mattis et rutrum vel, sodales sed nibh. Phasellus sit amet lectus et nulla cursus mollis vel vel diam. Maecenas felis turpis, condimentum a rutrum non, suscipit at felis. Nulla sed ultricies leo. Praesent quis metus porttitor, tempus ex eget, dignissim sapien. Quisque finibus tempor felis, in ultrices nulla condimentum et. Cras non pharetra nunc. In vel dolor augue. Sed ac erat feugiat, lobortis velit at, finibus orci. " ;
  return (

    <div>
       <h1 id="slogan">I am learning Javascript</h1> 

       <h2 id="slogan2">Practice makes perfect</h2> 

       <div id="fourdiv">

        <div id="one">{myText}</div>
        <div id="two">{myText}</div>
        <div id="three">{myText}</div>
        <div id="four">{myText}</div>

       </div>

       <div id="fourdiv">

        <div id="one">{myText}</div>
        <div id="two">{myText}</div>
        <div id="three">{myText}</div>
        <div id="four">{myText}</div>

        </div>

    </div>
  )
}

  