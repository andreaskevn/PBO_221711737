function buatMobil(roda, mesin) {
    return {
        roda,
        mesin,
        jumlahRoda() {
            return roda;
        },
        ccMesin() {
            return mesin;
        }
    };
}

const mobil1 = buatMobil(4, '1000cc');

console.log(mobil1.jumlahRoda())
console.log(mobil1.ccMesin())

