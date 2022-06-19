import React from 'react'

export default function Tutorials() {

    var myText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a elit posuere, egestas odio et, blandit magna. Aliquam ex nisi, dapibus sed varius sed, accumsan viverra lacus. Duis luctus fringilla magna, id dignissim ex vehicula vitae. Integer consectetur commodo malesuada. Vestibulum ornare justo faucibus ultricies placerat. Nunc nec faucibus ex. Mauris id elit ultricies, luctus velit id, venenatis ante. In eros libero, pellentesque a malesuada nec, congue ac quam. Donec ex felis, tincidunt vel efficitur sed, tincidunt sed lacus. Vivamus a nisi ut libero luctus pulvinar. " ;
  return (

    <div>
       <h1 id="slogan">Tutorials</h1> 

       <h2 id="slogan2">This page is Tutorials page</h2> 

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