import { OBJEKTUMLISTA } from "./adat.js";
import Kedvencek from "./kedvencek.js";
import Termek from "./termek.js";

class Termekek{
    #kedvencek=[];
    constructor(){
    let lista={}
    const ARTICLEELEM=$("article")
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
        new Termek(OBJEKTUMLISTA[index],ARTICLEELEM,index)
    }
    $(window).on("kedvenc",(event)=>{
        this.#kedvencek.push(event.detail);
        console.log(this.#kedvencek)
    })
    
    
    
    
    /*const info=new Kedvencek(lista)
    $(window).on("kedvenc",(event)=>{
        const info=new Kedvencek(lista,event)
        this.#kedvencekLista.push(event.detail)
    })*/
    }
}
export default Termekek;