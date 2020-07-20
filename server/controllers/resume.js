const Resume = require('../models/resume')

exports.create = async (req, res, next) => {
  try {
    const { body } = req
    const { user } = res.locals
    const resume = await Resume.create({
      ...body,
      owner: user.id,
    })
    res.send({ resume })
  } catch (e) {
    next(e)
  }
}

exports.get = async (req, res, next) => {
  try {
    const { id } = req.params
    const { user } = res.locals

    // find resume by id and user id
    const resume = await Resume.findOne({
      _id: id,
      owner: user.id,
    })
    if (!resume) {
      let e = new Error("resume not found");
      e.status = 422;
      throw e;
    }
    res.send({ resume })
  } catch (e) {
    next(e)
  }
}

exports.update = async (req, res, next) => {
  try {
    const { body } = req
    const { id } = req.params
    const { user } = res.locals

    // find & update resume by id and user id
    const resume = await Resume.findOneAndUpdate({
      _id: id,
      owner: user.id,
    }, body, {
      new: true // OverRide
    })
    if (!resume) {
      let e = new Error("resume not found");
      e.status = 422;
      throw e;
    }
    res.send({ resume })
  } catch (e) {
    next(e)
  }
}

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params
    const { user } = res.locals

    // find & update resume by id and user id
    const resume = await Resume.remove({
      _id: id,
      owner: user.id,
    })
    if (!resume) {
      let e = new Error("resume not found");
      e.status = 422;
      throw e;
    }
    res.send({ resume })
  } catch (e) {
    next(e)
  }
}

exports.list = async (req, res, next) => {
  try {
    const { user } = res.locals
    
    // Optional: for paging use:
    // const { page = 0, limit = 1000 } = req.params
    // const resumes = await Resume.find({ owner: user.id }).sort({ createdAt: -1 }).skip(page * limit).limit(limit);

    // list resumes by id and user id
    const resumes = await Resume.find({ owner: user.id })
    res.send({ resumes })
  } catch (e) {
    next(e)
  }
}