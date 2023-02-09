import { TalentAccount } from '../models/talentAccount.js'
import { Profile } from '../models/profile.js'

const index = async (req, res) => {
  try {
    const profiles = await Profile.find({}).populate('talentAccount')
    const talent = profiles.filter((profile) => profile.talentAccount)
    res.json(talent)
  } catch (error) {
    console.log(error);
  }
}

const update = async (req, res) => {
  try {
      console.log(req.body)
      const talentAccount = await TalentAccount.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        )
      res.status(200).json(talentAccount)
  } catch (error) {
      res.status(500).json(error)
      console.log(error);
  }
}

const show = async (req, res) => {
  try {
    const talentAccount = await TalentAccount.findById(req.params.id)
    res.json(talentAccount)
  } catch (error) {
    console.log(error);
  }
}

const createExperience = async (req, res) => {
  try {
    const talentAccount = await TalentAccount.findById(req.params.id)
    talentAccount.experience.push(req.body)
    talentAccount.save()
    res.json(talentAccount)
  } catch (error) {
    console.log(error);
  }
}

const createEducation = async (req, res) => {
  console.log(req.body)
  try {
    const talentAccount = await TalentAccount.findById(req.params.id)
    talentAccount.education.push(req.body)
    talentAccount.save()
    res.json(talentAccount)
  } catch (error) {
    console.log(error);
  }
}

const createTraining = async (req, res) => {
  console.log(req.body)
  try {
    const talentAccount = await TalentAccount.findById(req.params.id)
    talentAccount.training.push(req.body)
    talentAccount.save()
    res.json(talentAccount)
  } catch (error) {
    console.log(error);
  }
}

const showExperience = async (req, res) => {
  try {
    const talent = await TalentAccount.findById(req.params.id)
    const exp = talent.experience.id(req.params.experienceId)
    res.json(exp)
  } catch (error) {
    console.log(error);
  }
}

const showEducation = async (req, res) => {
  try {
    const talent = await TalentAccount.findById(req.params.id)
    const edu = talent.education.id(req.params.educationId)
    res.json(edu)
  } catch (error) {
    console.log(error);
  }
}

const showTraining = async (req, res) => {
  try {
    const talent = await TalentAccount.findById(req.params.id)
    const trn = talent.training.id(req.params.trainingId)
    res.json(trn)
  } catch (error) {
    console.log(error);
  }
}

const updateExperience = async (req, res) => {
  try {
    const talentAccount = await TalentAccount.findById(req.params.id)
    const experience = talentAccount.experience.id(req.params.experienceId)
    experience.set(req.body)
    talentAccount.save()
    res.json(talentAccount)
  } catch (error) {
    console.log(error);
  }
}

const updateEducation = async (req, res) => {
  try {
    const talentAccount = await TalentAccount.findById(req.params.id)
    const education = talentAccount.education.id(req.params.educationId)
    education.set(req.body)
    talentAccount.save()
    res.json(talentAccount)
  } catch (error) {
    console.log(error);
  }
}

const updateTraining = async (req, res) => {
  try {
    const talentAccount = await TalentAccount.findById(req.params.id)
    const training = talentAccount.training.id(req.params.trainingId)
    training.set(req.body)
    talentAccount.save()
    res.json(talentAccount)
  } catch (error) {
    console.log(error);
  }
}

const deleteExperience = async (req, res) => {
  try {
    const talent = await TalentAccount.findById(req.params.id)
    const exp = talent.experience.id(req.params.experienceId)
    talent.experience.remove(exp)
    talent.save()
    res.json(talent)
  } catch (error) {
    console.log(error);
  }
}

const deleteEducation = async (req, res) => {
  try {
    const talent = await TalentAccount.findById(req.params.id)
    const edu = talent.education.id(req.params.educationId)
    talent.education.remove(edu)
    talent.save()
    res.json(talent)
  } catch (error) {
    console.log(error);
  }
}

const deleteTraining = async (req, res) => {
  try {
    const talent = await TalentAccount.findById(req.params.id)
    const trn = talent.training.id(req.params.trainingId)
    talent.training.remove(trn)
    talent.save()
    res.json(talent)
  } catch (error) {
    console.log(error);
  }
}

export {
  index,
  update,
  show,
  createExperience,
  createEducation,
  createTraining,
  showExperience,
  showEducation,
  showTraining,
  updateExperience,
  updateEducation,
  updateTraining,
  deleteExperience,
  deleteEducation,
  deleteTraining,
}
