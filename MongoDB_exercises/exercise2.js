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
db.people.find({$and: [{"cat.age": {$gt: 12, $lt: 20}}, {"age": {$gt: 12, $lt: 20}}]})

//Use $where to find all the people who have a cat.
db.getCollection('people').find({$where: "this.cat"})

//Find all the people who are younger than their cats.
db.getCollection('people').find({$where: "this.cat && this.age < this.cat.age"})

//Use projection to format your array of people. We want only the names.
db.getCollection('people').find({}, {name:1, _id:0})

//Output just the names of the people who are 99 years old
db.getCollection('people').find({age: {$eq : 99}}, {name:1, _id:0})

//Output only the cats
db.getCollection('people').find({"cat": {$exists : true}}, {"cat":1, _id:0})

//count the number of people
db.getCollection('people').count({})

//Using your collection of people, and $exists, tell me how many people have cats.
db.people.count({"cat": {$exists : true}})

//Use $where to count how many people have cats which are older than them.
db.getCollection('people').count({$where: "this.cat && this.age < this.cat.age"})

//Give me the first 5 people
db.getCollection('people').find({}).limit(5)

//Give me the next 5 people
db.getCollection('people').find({}).limit(5).skip(5)

//Give me the names and ages of the oldest 5 pensioners with piranhas


//Give me the names and ages of the youngest 5 teenagers with cats, 
//where the cats have the word "Yolanda" in their name.








//using aggregate to group data and sort for the most profitable sector
db.getCollection('stocks').aggregate([{$group : {
  _id  : "$Sector",
  profit: {$avg: "$Profit Margin"}}},
 {$sort : {profit: -1}}
 ])

 //