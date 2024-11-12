  class Kendaraan {
    protectedMerk = "Toyota";
  }
  
  class Mobil extends Kendaraan {
    showMerk() {
      console.log(this.protectedMerk);
    }
  }
  
  const mobil1 = new Mobil();
  mobil1.showMerk(); // Output: Toyota
  a