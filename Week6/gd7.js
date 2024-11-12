// class Restoran {
//     pesanMakanan(...args) {
//         var pesan1 = function (namaMakanan) {
//             return console.log(`Makanan dengan nama "${namaMakanan}" tidak tersedia.`);
//         }   

//         var pesan2 = function (namaMakanan, namaPemesan) {
//             return console.log(`Pesanan telah diterimma: "${namaMakanan}" untuk ${namaPemesan}.`);
//         } 

//         if (args.length == 1) {
//             pesan1(args[0]);
//         } else if (args.length == 2) {
//             pesan2(args[0], args[1]);
//         } else {
//             return console.log("Jumlah Parameter tidak valid");
//         }
//     }
// }

// const restoran = new Restoran();
// restoran.pesanMakanan("Nasi Goreng");
// restoran.pesanMakanan("Nasi Goreng", "Budi");
// restoran.pesanMakanan("Nasi Goreng", "Budi", "Pedas");
// restoran.pesanMakanan("Nasi Goreng", "Budi", "Pedas", "Enak");
// restoran.pesanMakanan("");

class Transportasi {
    mode() {
        console.log("Transportasi sedang bergerak");
    }
}

class Mobil extends Transportasi {
    mode() {
        console.log("Mobil bergerak di jalan");
    }
}

class Kereta extends Transportasi {
    mode() {
        console.log("Kereta bergerak di rel");
    }
}

class Pesawat extends Transportasi {
    mode() {
        console.log("Pesawat terbang di udara");
    }
}

function tampilkanModeTransportasi(transportasi) {
    transportasi.mode();
}

const mobil = new Mobil();
const kereta = new Kereta();
const pesawat = new Pesawat();

tampilkanModeTransportasi(mobil);
tampilkanModeTransportasi(kereta);
tampilkanModeTransportasi(pesawat);

