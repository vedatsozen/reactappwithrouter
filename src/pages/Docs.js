import React from 'react'

export default function Docs() {

    var myText = "Praesent sodales non risus sed euismod. Praesent vitae elit sed massa dictum tempor sagittis sit amet nisi. Duis ultricies lacus sit amet libero tincidunt, vel dapibus risus malesuada. Nulla aliquet commodo ex, vel euismod nunc hendrerit in. Maecenas dui ante, condimentum pretium cursus ac, condimentum in magna. Etiam tempor sit amet mi ac posuere. Praesent pulvinar interdum malesuada. Etiam nec euismod nulla, ut luctus ligula. " ;
  return (

    <div>
       <h1 id="slogan">Documentation</h1> 

       <h2 id="slogan2">This page is Documentation page</h2> 

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

  