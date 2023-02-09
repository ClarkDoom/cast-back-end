import { CDAccount } from '../models/cdAccount.js'
import { TalentAccount } from '../models/talentAccount.js'

const update = async (req, res) => {
  try {
    console.log("ATTENTION", req.body)
    const cdAccount = await CDAccount.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
      )
    res.status(200).json(cdAccount)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const createList = async (req, res) => {
  try {
    const cdAccount = await CDAccount.findById(req.params.id)
    cdAccount.lists.push(req.body)
    cdAccount.save()
    res.json(cdAccount)
  } catch (error) {
    console.log(error);
  }
}

const indexLists = async (req, res) => {
  try {
    const cd = await CDAccount.findById(req.params.id)
    console.log(cd);
    const lists = cd.lists
    res.json(lists)
  } catch (error) {
    console.log(error);
  }
}

const showList = async (req, res) => {
  try {
    const cd = await CDAccount.findById(req.params.id).populate('lists.talent')
    const list = cd.lists.id(req.params.listId)
    res.json(list)
  } catch (error) {
    console.log(error);
  }
}

const addToList = async (req, res) => {
  try {
    const cd = await CDAccount.findById(req.params.id)
    const list = cd.lists.id(req.params.listId)
    list.talent.push(req.params.talentId)
    await list.save()
    res.json(list)
  } catch (error) {
    console.log(error);
  }
}

const updateList = async (req, res) => {
  try {
    const cd = await CDAccount.findById(req.params.id)
    const list = cd.lists.id(req.params.listId)
    list.set(req.body)
    cd.save()
    res.json(list)
  } catch (error) {
    console.log(error);
  }
}

const addToBlacklist = async (req, res) => {
  try {
    const blacklistTalent = await TalentAccount.findById(req.params.talentId)
    const cd = await CDAccount.findByIdAndUpdate(
      req.params.id,
      { $push: { blacklist: blacklistTalent } },
      { new: true }
      )
    res.json(cd)
  } catch (error) {
    console.log(error);
  }
}

const showBlacklist = async (req, res) => {
  try {
    const cd = await CDAccount.findById(req.params.id)
    const blacklist = cd.blacklist
    res.json(blacklist)
  } catch (error) {
    console.log(error);
  }
}

const deleteList = async (req, res) => {
  try {
    const cd = await CDAccount.findById(req.params.id)
    const list = cd.lists.id(req.params.listId)
    cd.lists.remove(list)
    cd.save()
    res.json(cd)
  } catch (error) {
    console.log(error);
  }
}

const removeFromBlacklist = async (req, res) => {
  try {
    const cd = await CDAccount.findById(req.params.id)
    cd.blacklist.remove(req.params.talentId)
    res.json(cd.blacklist)
  } catch (error) {
    console.log(error);
  }
}

const removeFromList = async (req, res) => {
  try {
    const cd = await CDAccount.findById(req.params.id)
    const list = cd.lists.id(req.params.listId)
    list.talent.remove({_id: req.params.talentId})
    await cd.save()
    res.json(list)
  } catch (error) {
    console.log(error);
  }
}


export {
  indexLists,
  update,
  createList,
  showList,
  addToList,
  updateList,
  addToBlacklist,
  deleteList,
  showBlacklist,
  removeFromBlacklist,
  removeFromList,
}
