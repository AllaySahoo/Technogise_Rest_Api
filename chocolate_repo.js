import Chocolate from './chocolate.js';

export default class ChocolateRepo {  
  arr_of_chocolate = []; 

  flavour_id = 0

  addChocolateFlavour(flavour_name) { 
    const chocolateFlavour = new Chocolate(this.flavour_id, flavour_name);
    this.arr_of_chocolate.push(chocolateFlavour); 
    this.flavour_id++;
  }
  getAllflavours(){
    return this.arr_of_chocolate;
  }
}
