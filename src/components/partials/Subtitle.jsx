import React from "react";

function Subtitle(props){
 
return(
    props.title ? 
<div className="subtitleBanner">
    <h2>
{props.title}
</h2>
</div>
: null
)

    }


    export default Subtitle;