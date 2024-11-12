class Kucing {
    constructor(nama, warna) {
        this.nama = nama;
        this.warna = warna;
        // this.berat = berat;
        // this.gender = gender;
    }

    bersuara() {
        console.log(`${this.nama} mengeluarkan suara "Meow!"`);
    }
    
    berwarna(){
        console.log(`${this.nama} berwarna ${this.warna}`);
    }
}

const kucing1 = new Kucing ("Jerry", "Orange")
console.log(kucing1.bersuara())
// console.log(kucing1.berwarna())


const kucing2 = new Kucing ("Tom", "Abu-abu")
console.log(kucing2.bersuara())
console.log(kucing2.berwarna())



// const namaobjek = new NamaKelas(isiParameterMisalAda)