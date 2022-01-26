const mongoose=require('mongoose');
const mongo_host='mongo';
const mongo_port='27017';
const mongo_db='primera_prueba';

mongoose.connect(`mongodb://${mongo_host}:${mongo_port}/${mongo_db}`,{

// useNewUrlParse:true,

// useUnifieldTopology:true,

// useCreateIndex:true,

// useFindAndModify:false

})

 const {Schema,model}=mongoose;
// console.log(Schema);
const MainSchema=new Schema({});
const User=model('User',MainSchema);
const Account=model('User',MainSchema)


const UserSchema = new Schema({
    name: String, 

    shippingAddress: AddressSchema,
    invoiceAddress: AddressSchema
})