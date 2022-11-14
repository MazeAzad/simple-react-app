import Values from "values.js";
import { useEffect, useState } from "react";

const Colors=()=>{
    let [colors,setColors]=useState([]);
    const [clipboardAlert,setClipboardAlert]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
       let color= document.getElementById("color").value;
         let baseColor=new Values(color);
        colors= baseColor.all(20);
        setColors(colors);
        console.log(colors);
        
    }
    const hexColor=(rgbArray)=>{
        let hexColor="#";
        rgbArray.forEach((rgb)=>{
           let rgbNumber=rgb.toString(16);
           if(rgbNumber<10)
           {
            hexColor+=`0${rgbNumber}`;
           }else{
            hexColor+=rgbNumber;
           }
        })
        return hexColor;
    }
    const makingColor=(rgbArray)=>{
        let color="rgb(";
        for(let i=0;i<rgbArray.length;++i)
        {
            if(i===rgbArray.length-1)
            {
                color+=`${rgbArray[i]})`;
            }else{
                color+=`${rgbArray[i]},`;
            }
        }

        return color;
    }
    useEffect(()=>{
        let colorDivs=document.querySelectorAll(".color");
        let colorDivsArray=Array.from(colorDivs);
        colorDivsArray.forEach((element)=>{
            element.addEventListener("click",()=>{
               const node=document.createElement("p");
               node.classList.add("e");
               const textNode=document.createTextNode("copied to clipboard");
               node.appendChild(textNode);
               element.appendChild(node);
               const e=document.querySelector(".e");
               
               const mySetTimeOut=setTimeout(() => {
                    element.removeChild(e);
               }, 2000);
               return ()=>{clearTimeout(mySetTimeOut)}
            })
        })

        return ()=>{  colorDivsArray.forEach((element)=>{
            element.removeEventListener();
        })}
    })
     
    let counter=0;
    return (
    <div className="mainContainer">
        <div className="colorFormContainer">
            <form className="colorForm" onSubmit={handleSubmit}>
                <label htmlFor="color">color:</label>
                <input type="text" id="color"  name="color" />
                <button type="submit">find</button>
            </form>
        </div>
        <div className="colorsContainer">
            <div className="colors">
               {
                    colors.map((clr)=>
                    {
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
                                <div className="color" key={Math.random()} style={myStyle} >
                                    <p>{weight}</p>
                                    <p>{hexColorStr}</p>

                                </div>
                            )

                            
                    })
                }
                </div>        
            </div>
        </div>)
}

export default Colors;