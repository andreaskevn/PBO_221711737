const prototipeMobil = {
  jumlahRoda() {
      return this.roda;
  },
  ccMesin() {
      return this.mesin;
  }
};

const mobil3 = Object.create(prototipeMobil);
mobil3.roda = 3;
mobil3.mesin = '900cc';

console.log(mobil3.jumlahRoda())
console.log(mobil3.ccMesin())