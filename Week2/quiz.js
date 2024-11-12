class Rekening {
    #jumlahSaldo = 10000;
    nama = this.nama;

    constructor(nama) {
      this.nama = nama;
    }

    getSaldo() {
      return (`${this.nama} mempunyai saldo sebesar ${this.#jumlahSaldo}`);
    }
  }
  
  const rek1 = new Rekening("John");
  console.log(rek1.nama);
  console.log(rek1.getSaldo());