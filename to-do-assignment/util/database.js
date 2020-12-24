const {Client}=require('pg');

const client = new Client({
    host:'localhost',
    port:5432,
    password:'monster@123',
    database:'todosystem',
    user:'postgres'
});

client.connect().then(success=>{
    console.log('database connected succesfuly');
}).catch(err=>{
    console.log('db error',err);
})

module.exports=client;