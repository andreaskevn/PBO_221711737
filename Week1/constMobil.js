class Mobil {
    constructor(merek) {
        this.merek = merek;
    }

    nyalakan() {
        console.log(`${this.merek} dinyalakan`);
    }
}
// const mobil1 = new Mobil("Toyota");
mobil1.nyalakan(); // Output: Toyota dinyalakan
