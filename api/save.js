const fetch = require("node-fetch");
const AWS = require("aws-sdk");

module.exports = (req, res) => {
    const token = req.headers.authorization;

    fetch("https://v1.userbase.com/v1/admin/auth-tokens/" + token, {
            headers: {
                Authorization: "Bearer " + process.env.UB_KEY,
            },
        })
        .then((res) => res.json())
        .then(function(json) {
            console.log(json);

            const { body } = req;
            const jsondata = body.title;
            console.log(jsondata);

            // Configure client for use with Spaces
            const spacesEndpoint = new AWS.Endpoint(process.env.S3_ENDPOINT);
            const s3 = new AWS.S3({
                endpoint: spacesEndpoint,
                accessKeyId: process.env.S3_KEY,
                secretAccessKey: process.env.S3_SECRET,
            });

            if (jsondata.type == "json") {
                let filename = "data.json";
                var params = {
                    Body: JSON.stringify(jsondata.data),
                    Bucket: process.env.S3_BUCKET,
                    Key: filename,
                    ContentType: "application/json",
                    ACL: "public-read",
                };
            } else if (jsondata.type == "image") {
                let base64 = jsondata.data;
                let base64data = new Buffer.from(
                    base64.replace(/^data:image\/\w+;base64,/, ""),
                    "base64"
                );
                let imgtype = base64.split(";")[0].split("/")[1];
                let filename =
                    "img/" +
                    Math.random().toString(36).substring(2, 15) +
                    Math.random().toString(36).substring(2, 15) +
                    "." +
                    imgtype;
                var params = {
                    Body: base64data,
                    Bucket: process.env.S3_BUCKET,
                    Key: filename,
                    ContentEncoding: "base64",
                    ContentType: `image/${imgtype}`,
                    ACL: "public-read",
                };
            }

            s3.putObject(params, function(err, data) {
                if (err) res.json({ ok: false, msg: "error uploading: " + err.stack });
                else console.log(data);
                res.json({ ok: true, msg: "File sucessfully uploaded" });
            });
        })
        .catch(function(err) {
            res.json({ ok: false, msg: "error before uploading: " + err });
        });
};