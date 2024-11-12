class Kucing {
  constructor(nama, makanan) {
    this.nama = nama;
    this.makanan = makanan;
  }

  bersuara() {
    console.log(`${this.nama} mengeluarkan suara "Meow!"`);
  }

  makan() {
    console.log(`${this.nama} memakan ${this.makanan} tiga kali sehari`);
  }
}

const kucing1 = new Kucing("Tom", "Whiskas");

console.log(kucing1.nama);
kucing1.makan();


