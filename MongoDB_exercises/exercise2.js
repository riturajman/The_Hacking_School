use people
(function() {
  var names = [
    'Yolanda',
    'Iska',
    'Malone',
    'Frank',
    'Foxton',
    'Pirate',
    'Poppelhoffen',
    'Elbow',
    'Fluffy',
    'Paphat'
  ]
  var randName = function() {
    var n = names.length;
    return [
      names[Math.floor(Math.random() * n)],
      names[Math.floor(Math.random() * n)]
    ].join(' ');
  }
  var randAge = function(n) {
    return Math.floor(Math.random() * n);
  }
  for (var i = 0; i < 1000; ++i) {
    var person = {
      name: randName(),
      age: randAge(100)
    }
    if (Math.random() > 0.8) {
      person.cat = {
        name: randName(),
        age: randAge(18)
      }
    }
    db.people.insert(person);
  };
})();

//Use find to get all the people who are exactly 99 years old
db.people.find({"age": 99})

//Find all the people who are eligible for a bus pass (people older than 65)
db.people.find({"age": {$gt: 65}})

//Find all the teenagers, greater than 12 and less than 20
db.people.find({age : {$gt: 12, $lt: 20}})

//Find all the people with cats.
db.people.find({"cat": {$exists : true}})

//Find all the pensioners with cats.
db.people.find({$and: [{"cat": {$exists : true}}, {"age": {$gt: 65}}]})

//Find all the teenagers with teenage cats.
db.people.find({$and: [{"cat.age": {$gt: 12, $lt: 20}}, {"age": {$gt: 65}}]})

//Use $where to find all the people who have a cat.
(
  {$where: }
)