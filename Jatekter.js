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
    this.#kartyaLista.forEach((element,index) => {
        //element = this.#kartyaLista[0]
      const kartya = new Kartya(index,element,this.#szElem);
    });
  }
}
