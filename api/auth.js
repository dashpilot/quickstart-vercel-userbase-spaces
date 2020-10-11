const fetch = require('node-fetch')

module.exports = (req, res) => {

  const token = req.header('authorization');

  fetch("https://v1.userbase.com/v1/admin/auth-tokens/"+token, {
    headers: {
      Authorization: "Bearer "+process.env.UB_KEY
    }
  })

  res.send(`Hello ${name}!`)

}
