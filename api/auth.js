const fetch = require("node-fetch");

module.exports = (req, res) => {
    const token = req.headers.authorization;

    fetch("https://v1.userbase.com/v1/admin/auth-tokens/" + token, {
            headers: {
                Authorization: "Bearer " + process.env.UB_SECRET,
            },
        })
        .then((result) => result.json())
        .then(function(json) {
            console.log(json);
            res.json({ ok: true, data: json });
        })
        .catch(function(err) {
            res.json({ ok: false, msg: err });
        });
};