const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/signup',async(req,res)=>{
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send({user})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.status(201).send({user})
    } catch (e) {
        res.status(400).send({ e: 'wrong email or password.' })
    }
})

router.get('/', async (req, res) => {
    const user = new User(req.body)
    res.status(201).send({user})
})


module.exports = router