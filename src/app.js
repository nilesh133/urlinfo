const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const urlMetadata = require('url-metadata')
var cors = require('cors')

app.use(express.json());

app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get('/urlInfo/:id', async (req, res) => {
    try {
        const linkId = req.query.url;
        console.log(req.query);
        
        urlMetadata(linkId).then(
            function (metadata) {
                res.status(201).send(metadata);
            },
            function (error) {
                console.log(error)
            })

    } catch (error) {
        res.status(404).send("Invalid URL");
    }
})

app.listen(port, () => {
    console.log(`Successfully running at port ${port}`);
})




// Project Name: Url-Info
// Cluster-name: url-info-cluster
// username: urlinfo
// password: urlinfopassword

// mongodb+srv://urlinfo:<password>@url-info-cluster.4lvj9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//f9b66f4f1baf40e2cde932366646c241