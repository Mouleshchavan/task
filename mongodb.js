//crud create delete updaate delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
// or
const {MongoClient, ObjectID} = require('mongodb')

mongoose.connect('mongodb+srv://mouleshchavan:<password>@cluster0.d00gzzn.mongodb.net/?retryWrites=true&w=majorit',   
{useNewUrlParser:true}).then(()=>
console.log("mongoDb is connected"))
.catch(err=>console.log(err)
)

MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error, client)=>{

    if(error){
        return console.log('Enable to conenct to database!')
    }

    const db = client.db(databaseName)

  
})



