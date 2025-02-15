import filters from '../src/data.js';

const testArray = 
[{id: 1, name: "Summer Smith", status: "Alive", species: "Human", gender: "Female", origin: "Earth", location: "Earth"},
 {id: 2, name: "Morty Smith", status: "Alive", species: "Human", gender: "Male", origin: "Earth", location: "Earth"},
  {id: 3, name: "Beth Smith", status: "Alive", species: "Human", gender: "Female", origin: "Earth", location: "Earth"},
  {id:4, name: "Evil Rick",status: "Dead", species: "Humanoide", gender: "Male", origin: {"name": "unknown","url": ""}, location: { "name": "Citadel of Ricks", "url": "" }}];


const newArray = 
[{id: 1, name: "Summer Smith", status: "Alive", species: "Human", gender: "Female", origin: "Earth", location: "Earth"},
   {id: 2, name: "Zick Zack", status: "Alive", species: "Human", gender: "Male", origin: "Earth", location: "Earth"},
    {id: 3, name: "Beth Smith", status: "Alive", species: "Human", gender: "Female", origin: "Earth", location: "Earth"},
    {id: 4, name: "Evil Rick",status: "Dead", species: "Humanoide", gender: "Male", origin: {"name": "unknown","url": ""}, location: { "name": "Citadel of Ricks", "url": "" }},
    {id: 5, name: "Abradolf Lincler",status: "Dead", species: "Humanoide", gender: "Male", origin: {"name": "unknown","url": ""}, location: { "name": "Citadel of Ricks", "url": "" }
  }];
  
  
describe('filters', () => {

  it('should be an object', () => {
    expect(typeof filters).toBe('object');
  });

  describe('filters.orderAZ', () => {

    it('should be a function', () => {
      expect(typeof filters.orderAZ).toBe('function');
    });

    
    it('return testArray width orderAZ', () => {
      expect(filters.orderAZ(testArray)).toEqual([{id: 3, name: "Beth Smith", status: "Alive", species: "Human", gender: "Female", origin: "Earth", location: "Earth"},
      {id:4, name: "Evil Rick",status: "Dead", species: "Humanoide", gender: "Male", origin: {"name": "unknown","url": ""}, location: {
        "name": "Citadel of Ricks",
        "url": "" }},
       {id: 2, name: "Morty Smith", status: "Alive", species: "Human", gender: "Male", origin: "Earth", location: "Earth"}, 
       {id: 1, name: "Summer Smith", status: "Alive", species: "Human", gender: "Female", origin: "Earth", location: "Earth"}]);
    });

  describe('filters.orderZA', () => {

      it('should be a function', () => {
        expect(typeof filters.orderZA).toBe('function');
      });

    it('return newArray width orderZA', () => {
      expect(filters.orderZA(newArray)).toEqual([{id: 2, name: "Zick Zack", status: "Alive", species: "Human", gender: "Male", origin: "Earth", location: "Earth"},
      {id: 1, name: "Summer Smith", status: "Alive", species: "Human", gender: "Female", origin: "Earth", location: "Earth"},
       {id: 4, name: "Evil Rick",status: "Dead", species: "Humanoide", gender: "Male", origin: {"name": "unknown","url": ""}, location: { "name": "Citadel of Ricks", "url": "" }},
       {id: 3, name: "Beth Smith", status: "Alive", species: "Human", gender: "Female", origin: "Earth", location: "Earth"},
       {id: 5, name: "Abradolf Lincler",status: "Dead", species: "Humanoide", gender: "Male", origin: {"name": "unknown","url": ""}, location: { "name": "Citadel of Ricks", "url": "" }}]);
  });

});

  });



describe('filters.statusFunction', () => {

  it('should be a function', () => {
    expect(typeof filters.statusFunction).toBe('function');
  });

  it('return status characters', () => {
    expect(filters.statusFunction(testArray, 'Dead')).toEqual([{id:4, name: "Evil Rick",status: "Dead", species: "Humanoide", gender: "Male", origin: {"name": "unknown","url": ""}, location: {"name": "Citadel of Ricks","url": "" }}]);
  });


});


describe('filters.speciesFunction', () => {

  it('should be a function', () => {
    expect(typeof filters.speciesFunction).toBe('function');
  });

  it('return species characters', () => {
    expect(filters.speciesFunction(testArray, 'Humanoide')).toEqual([{id:4, name: "Evil Rick",status: "Dead", species: "Humanoide", gender: "Male", origin: {"name": "unknown","url": ""}, location: {"name": "Citadel of Ricks", "url": "" }}]);

});

});


describe('filters.originFunction', () => {

  it('should be a function', () => {
    expect(typeof filters.originFunction).toBe('function');
  });

  it('return origin characters', () => {
    expect(filters.originFunction(testArray,'unknown')).toStrictEqual([{id:4, name: "Evil Rick",status: "Dead", species: "Humanoide", gender: "Male", origin: {"name": "unknown","url": ""}, location: {"name": "Citadel of Ricks", "url": "" }}]);

});
});


describe('filters.locationFunction', () => {

  it('should be a function', () => {
    expect(typeof filters.locationFunction).toBe('function');
  });

  it('return location characters', () => {
    expect(filters.locationFunction(testArray,'Citadel of Ricks')).toStrictEqual([{id:4, name: "Evil Rick",status: "Dead", species: "Humanoide", gender: "Male", origin: {"name": "unknown","url": ""}, location: {"name": "Citadel of Ricks", "url": "" }}]);

});
});


describe('filters.genderFunction', () => {

  it('should be a function', () => {
    expect(typeof filters.genderFunction).toBe('function');
  });

  it('return gender characters', () => {
    expect(filters.genderFunction(testArray, 'Female')).toEqual([{id: 3, name: "Beth Smith", status: "Alive", species: "Human", gender: "Female", origin: "Earth", location: "Earth"},{id: 1, name: "Summer Smith", status: "Alive", species: "Human", gender: "Female", origin: "Earth", location: "Earth"}, 
    ]);
});

});


describe('filters.searchFunction', () => {

  it('should be a function', () => {
    expect(typeof filters.searchFunction).toBe('function');
  });

  it('return searchValue characters', () => {
    expect(filters.searchFunction(testArray, 'Summer')).toEqual([{id: 1, name: "Summer Smith", status: "Alive", species: "Human", gender: "Female", origin: "Earth", location: "Earth"}]);
});

});

});
