const fetch = require("node-fetch");

module.exports = (req, res) => {
    const token = req.headers.authorization;

    fetch("https://v1.userbase.com/v1/admin/auth-tokens/" + token, {
            headers: {
                Authorization: "Bearer " + process.env.UB_KEY,
            },
        })
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.error(err));

    res.json({ ok: true });
};