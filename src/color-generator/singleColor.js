const SingleColor=(clr)=>{
const rgb=makingColor(clr.rgb);
const weight=clr.weight;
counter++;
let myStyle={background:rgb};
const hexColorStr=hexColor(clr.rgb)
if(counter>Math.floor((colors.length-1)/2))
{
    myStyle={background:rgb,color:"white"};
}
return (
    <div className="color" key={Math.random()} style={myStyle} onClick={()=>{
        navigator.clipboard.writeText(hexColorStr);
        setClipboardAlert(true);
    }}>
        <p>{weight}</p>
        <p>{hexColorStr}</p>
        {clipboardAlert && <p>copied on clipboad</p>}
    </div>
)

 
}