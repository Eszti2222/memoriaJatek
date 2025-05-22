import Kartya from "./Kartya.js";

export default class Jatekter {
  #kartyaLista = [];
  #szElem = document.querySelector(".jatekter");
  #kivalasztottKartyaLista = [];
  constructor(kartyaLista) {
    this.#kartyaLista = kartyaLista;
    this.#init();
  }
  /*összes kártya megjelnitése */
  #init() {
    this.#kever();
    this.#kartyaLista.forEach((element,index) => {
        //element = this.#kartyaLista[0]
      const kartya = new Kartya(index,element,this.#szElem);
    });
  }
  //array sort() rendezés fv
  #kever(){
    this.#kartyaLista.sort((a,b)=>{ 
       return Math.random()-0.5 //fele- fele arányban generál poz és neg számokat
    });
  }
}
