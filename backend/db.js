const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://itsmedontuno123:zo7nNJ092ZnpFGZp@todo.iyoxhrk.mongodb.net/?retryWrites=true&w=majority&appName=Todo`

const mongoDB = async ()=>{
        await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result)=>{
            if (err) {
                console.error('There is an error ra', err); 
            }
            else{
                console.log('connected ra ayya');
            }
        });
        
}

module.exports = mongoDB; 