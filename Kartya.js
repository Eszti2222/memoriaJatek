export default class Kartya{
    #fajlnev="";
    #allapot=false;//false -> nincs felfordítva
    #divElem;
    #imgElem;
    #id;

    constructor(id,fajlnev,szuloElem){
        this.#id=id;
        this.#fajlnev=fajlnev;
        this.#divElem=szuloElem;
        this.#megjelenit();
        this.#kattintasTrigger();
    }
    #megjelenit(){
        /*egy kártya megjelenitése */
        let html=`
            <div class="kartya">
            <img src="kepek/hatter.jpg" alt="kép"> 
            </div>
        `
        this.#divElem.insertAdjacentHTML("beforeend",html);
    }
    getFajlNev(){
        return this.#fajlnev;
    }
    setAllapot(){
        this.#allapot=!this.#allapot;
        this.setLap()
    }
    setLap(){
        /*módosítja a kép src attribútumát */
        
        if(this.#allapot){
            this.#imgElem.src=this.#fajlnev 
        }else{
            this.#imgElem.src="kepek/hatter.jpg"
        }
    }
    #kattintasTrigger(){
        /*itt hozzuk létre a saját eseményt
        ha rákattintunk a képre
         */
        this.#imgElem=document.querySelector(".kartya:last-child img");
        this.#imgElem.addEventListener("click",()=>{
            console.log(this.#imgElem)
            const e = new CustomEvent("fordit",{detail:this})
            window.dispatchEvent(e)
            this.setAllapot();
        });
    }
    
}