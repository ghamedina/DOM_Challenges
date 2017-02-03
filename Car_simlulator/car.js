function carSim(make,model,year){
  return {
    make: make,
    model: model,
    year: year,
    getData: function(){return this.make + this.model + this.year}
  }
}
