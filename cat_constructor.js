// Let's make a Cat constructor!
var Cat = (function () {
  var cats = {
    count: 0,
    totalWeight: 0,
    avgWeight: 0
  }
  
  function Cat (name, weight) {
    if (!name || !weight) {
      throw new Error('Both `name` and `weight` should be provided');
    }
    cats.count++;
    this.name = name;

    Object.defineProperty(this, 'weight', {
      get: function () {
        return this._weight || 0;
      },
      set: function (val) {
        cats.totalWeight = cats.totalWeight - this.weight + val;
        cats.avgWeight =  cats.totalWeight / cats.count;
        return this._weight = val;
      }
    });

    this.weight = weight;
  }
  
  Cat.averageWeight = function () {
    return cats.avgWeight;
  }
  
  return Cat;
  
}());

// // Let's make a Cat constructor!
// Cat.objects = [];

// function Cat(name, weight) {
//   if (!name) {throw 'No name found'};
//   this.name = name;

//   Object.defineProperties(this, {
//     name: {
//       value: name,
//       writable: true
//     },
//     weight: {
//       value: weight,
//       writable: true
//     }
//   })

//   Cat.objects.push(this);
// };


// Cat.weight = function (weight) {
//   this.weight = weight;
// }

// Cat.averageWeight = function() {
//   return Cat.objects.reduce((a, cat) =>{ return a + cat.weight }, 0) / Cat.objects.length
// }

describe("Tests", () => {
  it("test", () => {
fluffy = new Cat('fluffy', 15);
garfield = new Cat('garfield', 25);


Test.assertEquals(fluffy.weight, 15);
Test.assertEquals(fluffy instanceof Cat, true);
Test.assertEquals(fluffy.averageWeight, undefined);
Test.assertEquals(typeof Cat.averageWeight, "function");
Test.assertEquals(Cat.averageWeight(), 20);

  });
});


