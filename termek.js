

class Termek{
    constructor(obj,szuloElem,index){
        let txt=`<div id=${index}>`
        for (const kulcs in obj) {
         
                txt+="<p>"+obj[kulcs]+"</p>";
            }
        txt+="<button class='kedvenc'>Kedvencekhez ad</button>"
        txt+="</div>"
        szuloElem.append(txt)
/**megfogjuk a HTML elemeket */

 const BTTN= $(`div:last-child button`);

 BTTN.on(click,()=>{
    this.esemenyTrigger();
 })

esemenyTrigger(){
    const esemeny =new CustomEvent("Kedvencek",{
        detail: this,
    });
    window.dispatchEvent(esemeny);
    }
}
}
export default Termek