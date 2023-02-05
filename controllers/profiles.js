import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

// function getProfile(req, res) {
//   Profile.findById(req.params.id)
//   .then(profile => {
//     console.log("profile", profile)
//     res.json(profile)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id)
    res.json(profile)
  } catch (error) {

  }
}

function addPhoto(req, res) {
  const imageFile = req.files.photo.path
  Profile.findById(req.params.id)
  .then(profile => {
    cloudinary.uploader.upload(imageFile, {tags: `${req.user.email}`})
    .then(image => {
      profile.photo = image.url
      profile.save()
      .then(profile => {
        res.status(201).json(profile.photo)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  })
}

const update = async (req, res) => {
  try {
    const profileData = await Profile.findByIdAndUpdate(
      req.params.id,
      req.body
    )
    res.json(profileData)
  } catch (error) {
    console.log(error)
  }
  
}


export { index, getProfile, addPhoto, update }
