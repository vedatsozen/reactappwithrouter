import React from 'react'

export default function Contact() {

    var myText = "Suspendisse eu malesuada ex. Mauris lacus sapien, commodo eget lobortis et, facilisis scelerisque nibh. Cras nec ullamcorper est. Pellentesque tellus turpis, laoreet at purus eget, consectetur semper diam. Quisque cursus sed felis et scelerisque. Ut vel eleifend lectus. Sed eget auctor sem, vitae ultrices enim. Aliquam posuere, neque commodo tincidunt ultricies, nunc risus pretium arcu, tempor cursus nisi metus consectetur metus. Nam ex ex, scelerisque at massa eu, malesuada ultricies nisi. " ;
  return (

    <div>
       <h1 id="slogan">Contact</h1> 

       <h2 id="slogan2">This page is Contact page</h2> 

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