// class Mobil {
//   #privateMerk = "Toyota";
// }

// const mobil1 = new Mobil();
// console.log(mobil1.#privateMerk); // Error: Private field '#privateMerk' must be declared in an enclosing class

class Mobil {
  #privateMerk = "Toyota";
  jumlahRoda = 5;  

  getMerk() {
    return this.#privateMerk;  
  }
}

const mobil1 = new Mobil();
console.log(mobil1.getMerk());
console.log(mobil1.jumlahRoda);

