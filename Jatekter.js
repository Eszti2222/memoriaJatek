import Kartya from "./Kartya.js";

export default class Jatekter {
  #kartyaLista = [];
  #szElem = document.querySelector(".jatekter");
  #kivalasztottKartyaLista = [];

  constructor(kartyaLista) {
    this.#kartyaLista = kartyaLista;
    this.#init();
  }

  /* Összes kártya megjelenítése */
  #init() {
    this.#kever();
    this.#kartyaLista.forEach((element, index) => {
      const kartya = new Kartya(index, element, this.#szElem);
      this.#ellenorzes();
    });
  }

  // Array sort() rendezés fv
  #kever() {
    this.#kartyaLista.sort((a, b) => {
      return Math.random() - 0.5; // fele-fele arányban generál pozitív és negatív számokat
    });
  }

  #ellenorzes() {
    /* Itt iratkozunk fel a "fordit" eseményre
       Meg kell nézni, hogy a két kiválasztott kártya egyezik-e
    */
    window.addEventListener("fordit", (event) => {
      if (this.#kivalasztottKartyaLista.length < 2) {
        this.#kivalasztottKartyaLista.push(event.detail);
        if (this.#kivalasztottKartyaLista.length === 2) {
        this.triggerBlocked();
          let f1 = this.#kivalasztottKartyaLista[0];
          let f2 = this.#kivalasztottKartyaLista[1];
          if (f1.getFajlNev()=== f2.getFajlNev()) {
            console.log("talált egy párt");
            this.triggerUnBlocked();
          } else {
            console.log("nem pár");
            setTimeout(() => {
              f1.setAllapot();
              f2.setAllapot();
              this.triggerUnBlocked();
            }, 2000);
          }
          this.#kivalasztottKartyaLista.splice(0);
          this.#kivalasztottKartyaLista.push(event.detail)
        }
      }
    });
  }
  triggerBlocked(){
    /*létrejoz egy gameBlocked saját eseményt , amire majd fel tud iratkozni a Kártya  */
    const e = new CustomEvent("gameBlocked")
    window.dispatchEvent(e);
  }
  triggerUnBlocked(){
    /*létrejoz egy gameBlocked saját eseményt , amire majd fel tud iratkozni a Kártya  */
    const e = new CustomEvent("gameBlocked")
    window.dispatchEvent(e);
  }
}
