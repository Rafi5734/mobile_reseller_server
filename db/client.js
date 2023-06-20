const { MongoClient, ServerApiVersion } = require("mongodb");

// const uri = "mongodb+srv://Mobile_Reseller:DycM6Y4reEat7ryS@cluster0.jnkxtnw.mongodb.net/?retryWrites=true&w=majority"

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1
// });

// const uri = "mongodb+srv://Mobile_Reseller:DycM6Y4reEat7ryS@cluster0.jnkxtnw.mongodb.net/?retryWrites=true&w=majority";


// userName = mobile_reseller;
// password = BetrbIYaaU3ivCXr;
const uri =
  "mongodb+srv://mobile_reseller:BetrbIYaaU3ivCXr@cluster0.viq6r.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


module.exports = client;
