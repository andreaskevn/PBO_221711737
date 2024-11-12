class Hewan {
    constructor() {
        if (this.constructor === Hewan) {
            throw new Error("Kelas abstrak 'Hewan' tidak bisa diinstansiasi secara langsung");
        }
    }
    bersuara() {
        throw new Error("Metode abstrak 'bersuara()' harus diimplementasikan oleh kelas turunan");
    }

    berjalan() {
        throw new Error("Metode abstrak 'berjalan()' harus diimplementasikan oleh kelas turunan");
    }

    deskripsi() {
        console.log("Ini adalah hewan");
    }
}

class Kucing extends Hewan {
    bersuara() {
        console.log("Kucing ini sedang meong");
    }

    berjalan() {    
        console.log("Kucing ini sedang berjalan");    
    }
}

class Anjing extends Hewan {
    bersuara() {
        console.log("Anjing ini sedang menggong");
    }
}

const kucing1 = new Kucing();
kucing1.bersuara();
kucing1.berjalan();
kucing1.deskripsi();

const anjing1 = new Anjing();
anjing1.bersuara();
anjing1.berjalan();
anjing1.deskripsi();

// class IBangunDatar {
//     luas() {
//         throw new Error("Metode this.luas() harus diimplementasikan");
//     }
//     keliling() {
//         throw new Error("Metode this.keliling() harus diimplementasikan");
//     }
// }

// class Persegi extends IBangunDatar {
//     constructor(sisi) {
//         super();
//         this.sisi = sisi;
//     }
//     luas() {
//         return this.sisi * this.sisi;
//     }    
//     keliling() {
//         return 4 * this.sisi;
//     }
// }
// class PersegiPanjang extends IBangunDatar {
//     constructor(panjang, lebar) {
//         super();
//         this.panjang = panjang;
//         this.lebar = lebar;
//     }

//     luas() {
//         return this.panjang * this.lebar;
//     }    
//     keliling() {
//         return (this.panjang + this.lebar) * 2;
//     }
// }

// const persegipjg1 = new PersegiPanjang(2, 3);
// console.log(persegipjg1.luas());
// console.log("Luas persegi panjang: ", persegipjg1.luas());
// console.log("Keliling persegi panjang: ",persegipjg1.keliling());

// Interface IHitungDiskon
class IHitungDiskon {
    hitungDiskon() {
        throw new Error("Metode hitungDiskon() harus diimplementasikan");
    }
}

// Interface IHitungPPN
class IHitungPPN {
    hitungPPN() {
        throw new Error("Metode hitungPPN() harus diimplementasikan");
    }
}

// Kelas Produk yang mengimplementasikan IHitungDiskon dan IHitungPPN
class Produk extends IHitungDiskon {
    constructor(nama, hargaPokok) {
        super();
        this.nama = nama;
        this.hargaPokok = hargaPokok;
    }

    // Implementasi metode hitungDiskon
    hitungDiskon() {
        return this.hargaPokok * 0.9; // Diskon 10%
    }

    // Implementasi metode hitungPPN
    hitungPPN() {
        return this.hargaPokok * 1.11; // PPN 11%
    }

    // Method untuk menampilkan informasi produk
    infoProduk() {
        console.log(`Nama Produk: ${this.nama}`);
        console.log(`Harga Pokok: Rp ${this.hargaPokok}`);
        console.log(`Harga Setelah Diskon: Rp ${this.hitungDiskon()}`);
        console.log(`Harga Setelah PPN: Rp ${this.hitungPPN()}`);
    }
}

// Contoh penggunaan
const produk1 = new Produk("Laptop", 10000000);

produk1.infoProduk();




// class Karyawan {
//     constructor(nama, gajiPokok) {
//         this.nama = nama;
//         this.gajiPokok = gajiPokok;
//     }

//     infoPerhitungan() {
//         throw new Error("Metode abstrak 'infoPerhitungan()' harus diimplementasikan oleh kelas turunan");
//     }

//     infoKaryawan(){
//         console.log(`Nama: ${this.nama}\nJabatan: ${this.constructor.name}\nGaji Pokok: ${this.infoPerhitungan()}`);
//     }
// }

// class Staff extends Karyawan {
//     infoPerhitungan(){
//         return this.gajiPokok * 30 + 500000;
//     }    
// }
// class Manager extends Karyawan {
//     infoPerhitungan(){
//         return this.gajiPokok * 30 + 1000000;
//     }    
// }

// const manager = new Manager("Ahmad", 3000000);
// const staff = new Staff("Budi", 2000000);

// console.log("=================================");
// console.log("Informasi Karyawan");
// manager.infoKaryawan();
// console.log("=================================");

// console.log("=================================");
// console.log("Informasi Karyawan");
// staff.infoKaryawan();
// console.log("=================================");




