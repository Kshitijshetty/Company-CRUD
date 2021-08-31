const express = require('express')
const Com = require('../models/company')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/com',async(req,res)=>{
    const com = new Com(req.body)

    try {
        await com.save()
        res.status(201).send(com)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/com', async (req, res) => {
    try {
        const com = await Com.find({})
        res.send(com)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/com/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const com = await Com.findById(_id)

        if (!com) {
            return res.status(404).send()
        }

        res.send(com)
    } catch (e) {
        res.status(500).send()
    }
})


router.patch('/com/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'name']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const com = await Com.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify:false })

        if (!com) {
            return res.status(404).send()
        }

        res.send(com)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/com/:id', async (req, res) => {
    try {
        const com = await Com.findByIdAndDelete(req.params.id)

        if (!com) {
            res.status(404).send()
        }

        res.send(com)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router