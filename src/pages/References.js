import React from 'react'

export default function References() {

    var myText = "Maecenas vitae massa suscipit, semper mauris in, lobortis sapien. Pellentesque eget est vehicula, imperdiet libero in, condimentum enim. Pellentesque euismod convallis semper. Etiam blandit magna et tincidunt tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam libero urna, imperdiet euismod ex ut, tincidunt placerat est. Ut nunc turpis, tempor eu consectetur ac, eleifend nec purus. " ;
  return (

    <div>
       <h1 id="slogan">References</h1> 

       <h2 id="slogan2">This page is References page</h2> 

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