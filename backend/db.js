const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://itsmedontuno123:Pavan%40761@todo.iyoxhrk.mongodb.net/?retryWrites=true&w=majority&appName=Todo`

const mongoDB = async ()=>{
    await mongoose.connect(mongoURI, { useNewURLParser: true }, (err, result)=>{
        if (err) { console.log('There is an error', err) }
        else {
            console.log(`connected ra ayya`);
        }
    })
}

module.exports = mongoDB;