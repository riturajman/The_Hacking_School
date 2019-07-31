use petshop
db.pets.insert({name: "Mikey", species: "Gerbil"})
db.pets.insert({name: "Davey Bungooligan", species: "Piranha"})
db.pets.insert({name: "Suzy B", species: "Cat"})
db.pets.insert({name: "Mikey", species: "Hotdog"})
db.pets.insert({name: "Terrence", species: "Sausagedog"})
db.pets.insert({name: "Philomena Jones", species: "Cat"})

//Add another piranha, and a naked mole rat called Henry.
db.pets.insertMany([
    {name: "Fishy", species: "Piranha"},
    {name: "Henry", species: "Naked mole"}
])

//Use find to list all the pets. Find the ID of Mikey the Gerbil.
db.pets.find().pretty()

//Use find to find Mikey by id
db.pets.find({"_id" : ObjectId("5d416847aa6443271c6c04cc")})

//Use find to find all the gerbils.
db.pets.find({species: "Gerbil"})

//Find all the creatures named Mikey.
db.pets.find({name: "Mikey"})

//Find all the creatures named Mikey who are gerbils.
db.pets.find({name: "Mikey", species: "Gerbil"})

//Find all the creatures with the string "dog" in their species.
db.pets.find({species: /.*dog.*/})