// class Produk {
//     #namaProduk;
//     #harga; 
//     #jumlahStok;
//     constructor(namaProduk, harga, jumlahStok) {
//         this.#namaProduk = namaProduk;
//         this.#harga = harga;
//         this.#jumlahStok = jumlahStok;
//     }

//     beli() {
//         this.#jumlahStok++;
//         console.log(`Produk ${this.#namaProduk} telah dibeli!`);
//     }

//     jual() {
//         this.#jumlahStok--;
//         console.log(`Produk ${this.#namaProduk} telah dijual!`)
//     }

//     infoProduk() {
//         console.log(`Produk: ${this.#namaProduk}`);
//         console.log(`Harga: ${this.#harga}`);
//         console.log(`Jumlah Stok: ${this.#jumlahStok}`);
//     }
// }

// class Toko {
//     #namaToko;
//     #modal = 500000;
//     constructor(namaToko) {
//         this.#namaToko = namaToko;
//     }

//     infoToko() {
//         console.log(`Nama Toko: ${this.#namaToko}`);
//         console.log(`Modal: ${this.#modal}`);
//     }

//     beliProduk(Produk) {
//         this.#modal -= Produk.harga;
//         Produk.beli();
//         console.log(`Stok Produk telah ditambahkan!`)
//     }
// }

// class Kasir {
//     #nama;
//     #id;

//     constructor(nama, id) {
//         this.#nama = nama;
//         this.#id = id;
//     }

//     infoKasir() {
//         console.log(`Kasir ${this.#nama}, ID: ${this.#id}`)
//     }

//     jualProduk(Produk, Pelanggan) {
//         console.log(`Transaksi: oleh Pelanggan ${Pelanggan.getNama()}`);
//         Produk.jual();
//     }
// }

// class Pelanggan {
//     #nama; 

//     constructor(nama) {
//         this.#nama = nama; 
//     }

//     getNama() {
//         return this.#nama;
//     }
// }


// const produk1 = new Produk("Buku", 10000, 10);
// const produk2 = new Produk("Pulpen", 5000, 0);

// const pelanggan1 = new Pelanggan("Joko");
// const kasir1 = new Kasir("Seka Mewing", 1);

// kasir1.jualProduk(produk1, pelanggan1);
// kasir1.jualProduk(produk2, pelanggan1);

// class Bird {
// 	fly() { 
//         console.log("Flying High"); 
//     }
// }
// class Penguin extends Bird{
// 	fly() { 
//         console.log("I can’t fly!");
//     }
// }

// class Staff {
//     constructor(id, nama, jamKerja) {
//         this.id = id;
//         this.nama = nama;
//         this.jamKerja = jamKerja;
//     }
//     hitungGaji() {
//         return this.jamKerja * 7000;
//     }
// }
// const sekretaris = new Staff("EMP-1", "Rayanzza", 8);
// sekretaris.hitungGaji();

// function panggilberjalanHewan(hewan) {
//    ...(x)... 
//    }

//    const anjing = new Anjing();
//    const ayam = new Ayam();
//    panggilberjalanHewan(anjing); 
//    panggilberjalanHewan(ayam);  

// class Kendaraan {
//    showKecepatan() {
//      return "Kendaraan bergerak dengan sangat cepat";
//    }
//  }

//  class Mobil extends Kendaraan {
//    showKecepatan() {
//      return "Mobil bergerak dengan kecepatan maksimal 360km/h";
//    }
//  }

//  class Motor extends Kendaraan {
//    showKecepatan() {
//      return "Motor memang hanya dapat melaju 100km/h, namun bisa meliuk";
//    }
//  }

//  class Pesawat extends Kendaraan {
//    showKecepatan() {
//      return "Pesawatlah yang tercepat, dapat melaju hingga 500km/h";
//    }
//  }

//  function ujiKecepatan(kendaraan) {
//    console.log(kendaraan.showKecepatan());
//  }

//  const mobil = new Mobil();
//  const motor = new Motor();
//  const pesawat = new Pesawat();
//  const kendaraan = new Kendaraan();

//  ujiKecepatan(mobil); // Output: Mobil bergerak dengan kecepatan maksimal 360km/h
//  ujiKecepatan(motor); // Output: Motor memang hanya dapat melaju 100km/h, namun bisa meliuk
//  ujiKecepatan(pesawat); // Output: Pesawatlah yang tercepat, dapat melaju hingga 500km/h
//  ujiKecepatan(kendaraan); // Output: Kendaraan bergerak dengan sangat cepat

// class Kendaraan {
//    bunyi() {
//       throw new Error("Method bunyi() harus diimplementasikan");
//    }
// }

// class Mobil extends Kendaraan {
//    bunyi() {
//       console.log("Mobil berbunyi: Beep beep!");
//    }
// }

// class Motor extends Kendaraan {
//    bunyi() {
//       console.log("Motor berbunyi: Vroom vroom!");
//    }
// }

// function panggilBunyiKendaraan(kendaraan) {
//    kendaraan.bunyi();
// }

// const mobil = new Mobil();
// const motor = new Motor();

// panggilBunyiKendaraan(mobil); // Output: Mobil berbunyi: Beep beep!
// panggilBunyiKendaraan(motor); // Output: Motor berbunyi: Vroom vroom!

// Definisi objek dengan perilaku "berjalan"
// const manusia = {
//    berjalan: function() {
//      console.log("Manusia berjalan.");
//    }
//  };
 
//  // Definisi objek dengan perilaku "berenang"
//  const ikan = {
//    berenang: function() {
//      console.log("Ikan berenang.");
//    }
//  };
 
//  // Fungsi untuk memanggil perilaku objek
//  function jalankanAksi(objek) {
//    if (objek.berjalan) {
//      objek.berjalan();
//    } else if (objek.berenang) {
//      objek.berenang();
//    } else {
//      console.log("Tidak ada perilaku yang dikenali.");
//    }
//  }
 
//  jalankanAksi(manusia); // Output: Manusia berjalan.
//  jalankanAksi(ikan);    // Output: Ikan berenang.

// Kelas abstrak
// class Kendaraan {
//    constructor(merk, model) {
//      this.merk = merk;
//      this.model = model;
//    }
 
//    getDeskripsi() {
//      // buatlah method abstrak 
//    }
//  }
 
//  // Subclass Mobil
//  class Mobil extends Kendaraan {
//    constructor(merk, model, jumlahPintu) {
//      // isilah constructor berikut
//    }
 
//    getDeskripsi() {
//      return `Mobil ${this.merk} ${this.model} dengan ${this.jumlahPintu} pintu.`;
//    }
//  }
 
//  // Subclass Motor
//  class Motor extends Kendaraan {
//    constructor(merk, model, tipe) {
//       // isilah constructor berikut
//    }
 
//    getDeskripsi() {
//      return `Motor ${this.merk} ${this.model} tipe ${this.tipe}.`;
//    }
//  }
 
//  // Fungsi untuk mendeskripsikan kendaraan
//  function deskripsikanKendaraan(kendaraan) {
//    // isilah function berikut
//  }
 
//  // Contoh penggunaan
//  const mobil = new Mobil("Toyota", "Camry", 4);
//  const motor = new Motor("Yamaha", "R15", "Sport");
 
// buatlah objek mobil
// buatlah objek motor
 
// class Perpustakaan {
//   pinjamBuku(...args){
//     var  pinjam1 = function (buku, namaPeminjam) { 
//       return console.log(`${namaPeminjam} meminjam buku ${buku}`);
//     }
//     var pinjam2 = function (buku, namaPeminjam, tanggal) {
//       return console.log(`${namaPeminjam} meminjam buku ${buku} pada tanggal ${tanggal}`);
//     }
//     if (args.length == 2) {
//       pinjam1(args[0], args[1]);
//     } else if (args.length == 3) {
//       pinjam2(args[0], args[1], args[2]);
//     }
//   }
// }

// const perpustakaan = new Perpustakaan();
// perpustakaan.pinjamBuku("Angel and Demon", "Charlie");
// perpustakaan.pinjamBuku("Pangeran Kecil", "Budi", "10 Agustus");




// class Vehicle {
//   startEngine() {
//     throw new Error("Metode abstrak 'startEngine()' harus diimplementasikan");
//   }

//   describe() {
//     console.log("This is a Vehicle");
//   }
// }

// class Car extends Vehicle {
//   startEngine() {
//     console.log("Car engine started");
//   }

// }

// class Motorcycle extends Vehicle {
//   startEngine() {
//     console.log("Motorcycle engine started");
//   }
// }

// let car = new Car();
// let motorcycle = new Motorcycle();

// car.startEngine();
// car.describe();
// motorcycle.startEngine();
 // Kelas Induk (Parent Class)
// class Binatang {
//   constructor(nama) {
//     this.nama = nama;
//   }

//   bersuara() {
//     console.log(`${this.nama} sedang bersuara.`);
//   }
// }

// // Kelas Anak Pertama (First Child Class)
// class Mamalia extends Binatang {
//   constructor(nama, jenis) {
//     super(nama);
//     this.jenis = jenis;
//   }

//   menyusui() {
//     console.log(`${this.nama} adalah seorang mamalia jenis ${this.jenis}.`);
//   }
// }

// // Kelas Anak Kedua (Second Child Class)
// class Burung extends Binatang {
//   constructor(nama, tipe) {
//     super(nama);
//     this.tipe = tipe;
//   }

//   terbang() {
//     console.log(`${this.nama} adalah seorang burung tipe ${this.tipe}.`);
//   }
// }

// // Kelas Cucu Pertama (First Grandchild Class)
// class Gajah extends Mamalia {
//   constructor(nama, berat) {
//     super(nama, "gajah");
//     this.berat = berat;
//   }

//   ukuran() {
//     console.log(`${this.nama} adalah seekor gajah dengan berat ${this.berat} kg.`);
//   }
// }

// // Kelas Cucu Kedua (Second Grandchild Class)
// class Elang extends Burung {
//   constructor(jenisSayap) {
//     super(nama, "elang");
//     this.jenisSayap = jenisSayap;
//   }

//   sayap() {
//     console.log(`${this.nama} adalah seekor elang dengan jenis sayap ${this.jenisSayap}.`);
//   }
// }

// // Membuat objek dari kelas cucu
// const gajah1 = new Gajah("Raja", 5000);
// gajah1.bersuara(); // Output: Raja sedang bersuara.
// gajah1.menyusui(); // Output: Raja adalah seorang mamalia jenis gajah.
// gajah1.ukuran(); // Output: Raja adalah seekor gajah dengan berat 5000 kg.

// const elang1 = new Elang("Lebar");
// elang1.bersuara(); // Output: Garuda sedang bersuara.
// elang1.terbang(); // Output: Garuda adalah seorang burung tipe Lebar.
// elang1.sayap(); // Output: Garuda adalah seekor elang dengan jenis sayap Lebar.

// Definisi interface "Hewan"
// Definisi interface "Hewan"
class Hewan {
  suara() {
    throw new Error("Method suara() harus diimplementasikan");
  }
}

// Implementasi interface "Hewan" oleh kelas Anjing
class Anjing extends Hewan {
  suara() {
    console.log("Anjing menggonggong: Woof woof!");
  }

  lari() {
    console.log("Hewan ini berlari dengan kecepatan 20 km/jam");
  }
}

// Implementasi interface "Hewan" oleh kelas Kucing
class Kucing extends Hewan {
  suara() {
    console.log("Kucing mengiau: Meow meow!");
  }

  lari() {
    console.log("Hewan ini berlari dengan kecepatan 15 km/jam");
  }
}

// Implementasi interface "Hewan" oleh kelas Burung (tidak memiliki metode lari)
class Burung extends Hewan {
  suara() {
    console.log("Burung berkicau: Tweet tweet!");
  }

  terbang() {
    console.log("Hewan ini sedang terbang dengan kecepatan 100 km/jam");
  }
}

// Fungsi untuk menampilkan suara dan, jika tersedia, kecepatan lari hewan
function tampilkanInfoHewan(hewan) {
  hewan.suara();
  // hewan.lari();
  
  // Menggunakan duck typing untuk mengecek keberadaan metode `lari`
  if (typeof hewan.lari === "function") {
    hewan.lari();
  }

  if (typeof hewan.terbang === "function") {
    hewan.terbang();
  }
}

// Membuat objek dari masing-masing kelas
const anjing_1737 = new Anjing();
const kucing_1737 = new Kucing();
const burung_1737 = new Burung();

// Memanggil fungsi tampilkanInfoHewan dengan objek yang berbeda
tampilkanInfoHewan(anjing);  // Output: Anjing menggonggong: Woof woof!
                              //         Hewan ini berlari dengan kecepatan 20 km/jam
tampilkanInfoHewan(kucing);   // Output: Kucing mengiau: Meow meow!
                              //         Hewan ini berlari dengan kecepatan 15 km/jam
tampilkanInfoHewan(burung);   // Output: Burung berkicau: Tweet tweet!
                              //         Hewan ini sedang terbang dengan kecepatan 100 km/jam




