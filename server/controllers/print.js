const Resume = require('../models/resume')

const templates = [
  {
    isActive: true,
    name: 'classic',
    img: '/images/templates/classic.jpg',
    view: 'templates/classic'
  },
  {
    isActive: true,
    name: 'modern',
    img: '/images/templates/modern.jpg',
    view: 'templates/modern'
  },
  {
    isActive: false,
    name: 'soon',
    img: '/images/templates/soon.jpg',
    view: 'templates/soon'
  }
]


exports.templates = async (req, res, next) => {
  res.render('templates', {
    pageTitle: "CONST",
    user: req.session.user,
    templates: templates
  }); 
}

exports.template = async (req, res, next) => {
    const { name } = req.params
    let template = templates.find(o => o.name === name);

    if(!template){
      return res.status(404).render('errors/404', {
        user: req.session.user,
      }); 
    }

    if(template.isActive !== true){
      return res.status(403).render('errors/403', {
        user: req.session.user,
      }); 
    }

    const { user } = req.session
    const resumes = await Resume.find({ owner: user._id })
    // console.log("\n\n\n\n", resumes)

    res.render('template', {
    user: user,
    template: template,
    resumes: resumes
  }); 
}


exports.print = async (req, res, next) => {
  const { template_name, resume_id } = req.params
  let template = templates.find(o => o.name === template_name);

  if(!template){
    return res.status(404).render('errors/404', {
      user: req.session.user,
    }); 
  }

  if(template.isActive !== true){
    return res.status(403).render('errors/403', {
      user: req.session.user,
    }); 
  }

  const { user } = req.session

  const resume = await Resume.findOne({ owner: user._id, _id: resume_id })
  if(!resume){
    return res.status(404).render('errors/404', {
      user: req.session.user,
    }); 
  }
  
  res.render(template.view, {
    user: user,
    resume: resume
  }); 
}