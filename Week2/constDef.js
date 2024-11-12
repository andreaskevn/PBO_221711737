class KelasDefault {
  constructor(nama, umur) {
    // Inisialisasi properti objek
    this.nama = nama;
    this.umur = umur;
    this.berat = 50;
  }

  bersuara() {
    console.log(`saya ${this.nama} berumur ${this.umur} bobot saya ${this.berat}`);
  }
}

const kelas2 = new KelasDefault("Joko", "55");
const kelas3 = new KelasDefault("Jaki", "51");
console.log(kelas2.bersuara())
console.log(kelas3.bersuara())
