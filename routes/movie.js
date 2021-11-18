const Movie = require('../models/movie')

const router = require('express').Router()

//create new movie
router.post('/', async (req, res) => {
    const newMovie = new Movie(req.body)
    console.log("we are live")
    try {
        console.log(req.body)
        const savedMovie = await newMovie.save()
        res.status(200).json(savedMovie)
    } catch (err) {
        console.log(err)
        res.status(500).json(Error)
    }
})
//update a post
router.put('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        if (movie.userId === req.body.userId) {
            await movie.updateOne({ $set: req.body })
            res.status(200).json("The post has been updated")
            console.log(req.body, "update movie")
        } else { res.status(403).json("You can update only your post") }
    } catch (err) {
        res.status(403).json(err)
    }

})

//get a movie

router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.status(200).json(movie)
    } catch (err) {
        res.status(403).json(err)
    }
})

router.get('/slug/:slug', async (req, res) => {
    try {
        const movie = await Movie.findOne({ slug: req.params.slug })
        res.status(200).json(movie)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        if (movie.userId === req.body.userId) {
            await movie.deleteOne({ $set: req.body })
            res.status(200).json("The post has been deleted")
        } else { res.status(403).json("You can only delete your movie") }
    } catch (err) {
        res.status(403).json(err)
    }

})


module.exports = router