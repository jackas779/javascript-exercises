const findTheOldest = function(people) {
  let edad;
let fecha = new Date().getFullYear();
people.reduce((ant,acum) => {
  if(ant.yearOfDeath === undefined) ant.yearOfDeath = fecha
  if((ant.yearOfDeath - ant.yearOfBirth) < (acum.yearOfDeath - acum.yearOfBirth) ){  
    edad = acum;
  }
  else{
    edad = ant;
  }
  return edad;
});
return edad
};

// Do not edit below this line
module.exports = findTheOldest;
