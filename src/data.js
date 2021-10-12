
   
// estas funciones son de ejemplo

const filters = {

  orderAZ(rickandmorty) {
    let orderCharacters = rickandmorty.sort((a,b) => {
      if (a.name > b.name) {
        return 1;
      }
      {
        return -1;
      }
    });
    return orderCharacters;
    },
    
    orderZA(rickandmorty) {
    let orderCharacters= rickandmorty.sort((a,b) => {
      if (a.name < b.name) {
        return 1;
      }
      {
        return -1;
      }
    });
    return orderCharacters;
    },
    


searchFunction(rickandmorty, searchValue){
  let onlySearch = rickandmorty.filter(character => character.name.toLowerCase().includes(searchValue.toLowerCase()));
    return onlySearch
},

genderFunction(rickandmorty, gender){
  let onlyGender = rickandmorty.filter((character) => {
  return character.gender === gender;
  });
  //console.log(onlyGender);
  return onlyGender;
},

speciesFunction(rickandmorty, species){
  let onlySpecies = rickandmorty.filter((character) => {
  return character.species === species;
  });
  return onlySpecies;
},

statusFunction(rickandmorty, status){
  let onlyStatus = rickandmorty.filter((character) => {
  return character.status === status;
  });
  return onlyStatus;
},

locationFunction(rickandmorty, location){
  let onlyLocation = rickandmorty.filter((character) => {
  return character.location.name === location;
  });
  return onlyLocation;
  
},

originFunction(rickandmorty, location){
  let onlyLocation = rickandmorty.filter((character) => {
  return character.location.name === location;
  });
  return onlyLocation;
  
},


}
  
export default filters
  
