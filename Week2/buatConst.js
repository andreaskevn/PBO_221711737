class Mahasiswa {
  constructor(nama, umur) {
    // Inisialisasi properti objek
    this.nama = nama;
    this.umur = umur;
  }

  bersuara() {
    console.log(`saya ${this.nama} berumur ${this.umur}`);
  }
}

const mhsw1 = new Mahasiswa("Joko", "55");
const mhsw2 = new Mahasiswa("Yono", "50");
console.log(mhsw1.bersuara())
console.log(mhsw2.bersuara())

