// Antarmuka umum untuk semua kemampuan hewan
class AktivitasHewan {
    terbang() {
      throw new Error("Fungsi 'terbang()' harus diimplementasikan");
    }
  
    berenang() {
      throw new Error("Fungsi 'berenang()' harus diimplementasikan");
    }
  
    berburu() {
      throw new Error("Fungsi 'berburu()' harus diimplementasikan");
    }
  }
  
  // Kelas dasar Hewan yang mengimplementasikan semua kemampuan
  class Hewan extends AktivitasHewan {
    constructor(nama) {
      super();
      this.nama = nama;
    }
  
    suara() {
      console.log(`${this.nama} membuat suara!`);
    }
  
    terbang() {
      console.log(`${this.nama} terbang!`);
    }
  
    berenang() {
      console.log(`${this.nama} berenang!`);
    }
  
    berburu() {
      console.log(`${this.nama} berburu!`);
    }
  }
  
  // Kelas Burung yang tidak perlu berenang atau berburu, tapi terpaksa mengimplementasikan semuanya
  class Burung extends Hewan {
    constructor(nama) {
      super(nama);
    }
  
    // Burung hanya perlu terbang, tetapi harus mengimplementasikan semua metode
    terbang() {
      console.log(`${this.nama} sedang terbang!`);
    }
  
    berenang() {
      console.log(`${this.nama} tidak bisa berenang!`);
    }
  
    berburu() {
      console.log(`${this.nama} tidak berburu!`);
    }
  }
  
  // Kelas Harimau yang tidak perlu terbang atau berenang, tapi terpaksa mengimplementasikan semuanya
  class Harimau extends Hewan {
    constructor(nama) {
      super(nama);
    }
  
    // Harimau hanya perlu berburu, tetapi harus mengimplementasikan semua metode
    terbang() {
      console.log(`${this.nama} tidak bisa terbang!`);
    }
  
    berenang() {
      console.log(`${this.nama} berenang!`);
    }
  
    berburu() {
      console.log(`${this.nama} sedang berburu!`);
    }
  }
  
  // Kelas Paus yang tidak perlu terbang atau berburu, tapi terpaksa mengimplementasikan semuanya
  class Paus extends Hewan {
    constructor(nama) {
      super(nama);
    }
  
    // Paus hanya perlu berenang, tetapi harus mengimplementasikan semua metode
    terbang() {
      console.log(`${this.nama} tidak bisa terbang!`);
    }
  
    berenang() {
      console.log(`${this.nama} sedang berenang!`);
    }
  
    berburu() {
      console.log(`${this.nama} tidak berburu!`);
    }
  }
  
  // Membuat objek burung, harimau, dan paus
  const burung = new Burung("Elang");
  const harimau = new Harimau("Harimau Sumatera");
  const paus = new Paus("Paus Biru");
  
  // Memanggil metode untuk setiap hewan sesuai kemampuannya
  burung.suara();
  burung.terbang(); // Burung terbang
  burung.berenang(); // Burung tidak bisa berenang
  burung.berburu(); // Burung tidak berburu
  
  harimau.suara();
  harimau.terbang(); // Harimau tidak bisa terbang
  harimau.berenang(); // Harimau berenang
  harimau.berburu(); // Harimau berburu
  
  paus.suara();
  paus.terbang(); // Paus tidak bisa terbang
  paus.berenang(); // Paus berenang
  paus.berburu(); // Paus tidak berburu
  