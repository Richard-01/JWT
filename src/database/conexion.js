const mongoose = require('mongoose');
const URI = "mongodb+srv://richardmontoyaa1:3147887840@cluster0.p2vchmy.mongodb.net/";

const connector = async (req, res) => {
    await mongoose.connect(URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
        .then(() => {
            console.log("Connected to MongoDB");
        })

        .catch((err) => {
            console.log(err);
        });

}

module.exports = {connector};