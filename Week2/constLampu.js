class Lampu {
    constructor(status) {
      this.status = status;
    }
  
    nyalakan() {
      this.status = "Menyala";
    }
  
    matikan() {
      this.status = "Mati";
    }
  }
  
  const lampu = new Lampu("Mati");
  lampu.nyalakan();
  console.log(lampu.status); // Menyala
  lampu.matikan();
  console.log(lampu.status); // Mati
  lampu.nyalakan();
  console.log(lampu.status);
  console.log(lampu.status);