const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World from IPI classes!')
})

app.get('/users', (req, res) => {
    let users = [
        {
            name: "Jan",
            surname: "Kowalski"
        },
        {
            name: "Anna",
            surname: "Kowalska"
        },
        {
            name: "Barbara",
            surname: "Kowalska"
        },
        {
            name: "Celina",
            surname: "Kowalska"
        },
        {
            name: "Danuta",
            surname: "Kowalska"
        }
    ]
    res.send(users)
  })
///Bardzo istotne jest app.listen w takiej formie!!!
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})