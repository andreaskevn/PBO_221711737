class Product {
    #namaProduk;
    #harga;
    #jumlahStok;

    constructor(namaProduk, harga, jumlahStok) {
        this.#namaProduk = namaProduk;
        this.#harga = harga;
        this.#jumlahStok = jumlahStok;
    }

    beliProduct() {
        this.#jumlahStok = this.#jumlahStok++;
        console.log(`Produk ${this.#namaProduk} telah dibeli`);
    }

    jualProduct() {
        this.#cekStok();
        if (this.#cekStok()) {
            this.#jumlahStok = this.#jumlahStok--;
            console.log(`Produk ${this.#namaProduk} telah dijual`);
        } else {
            console.log(`Stok product ${this.#namaProduk} habis`);
        }
        
    }

    infoProduct() {
        console.log(`Produk ${this.#namaProduk}\nHarga: ${this.#harga}\nJumlahStok: ${this.#jumlahStok}`);
    }

    #cekStok() {
        if (this.#jumlahStok >= 1) {
            return true;
        } else {
            return false;
        }
    }
}

class Kasir {
    #nama;
    #id;

    constructor(nama, id) {
        this.#nama = nama;
        this.#id = id;
    }

    infoKasir() {
        console.log(`Kasir ${this.#nama}, ID: ${this.#id}`);
    }

    jualProduct(Product, Pelanggan) {
        console.log(`Transaksi oleh Pelanggan ${Pelanggan.getNama()}`);
        Product.jualProduct();
    }
}

class Pelanggan {
    #nama;
    constructor(nama) {
        this.#nama = nama;
    }

    getNama() {
        return this.#nama;
    }
}

class Toko {
    #namaToko;
    #modal;

    constructor(namaToko) {
        this.#namaToko = namaToko;
        this.#modal = 500000;
    }

    infoToko() {
        console.log(`Toko ${this.#namaToko}\nModal: ${this.#modal}`);
    }

    beliProduct(Product) {
        this.#modal -= Product.harga;
        Product.beliProduct();
        console.log(`Stok telah ditambahkan`);
    }
}

const produk1 = new Product("Baju", 10000, 10);
const produk2 = new Product("Pulpen", 10000, 0);

const pelanggan1 = new Pelanggan("John");
const kasir1 = new Kasir("John", 1);

kasir1.jualProduct(produk1, pelanggan1);
kasir1.jualProduct(produk2, pelanggan1);