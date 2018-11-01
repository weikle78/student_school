// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const Student = require('../models/Student')
const School = require('../models/School')

router.get('/student', (req, res) => {
	
	let filters = req.query
	if (req.query.grade != null){
		filters = {
			grade: {$gt: req.query.grade}
		}
	}
	
	
	Student.find(filters)
	.then(students => {
		res.json({
			confirmation: 'success',
			data: students
		})
	})
	.catch(err => {
		res.json({
			conformation: 'fail',
			message: err.message
		})
	})
})

router.get('/student/update', (req, res) => {
	const query = req.query // require: id, key=val
	const studentId = query.id
	delete query['id']

	Student.findByIdAndUpdate(studentId, query, {new:true})
	.then(student => {
		res.json({
			confirmation: 'success',
			data: student
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})	

router.get('/student/remove', (req, res) => {
	const query = req.query

	Student.findByIdAndRemove(query.id)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: 'Student ' +query.id+' successfully removed.'
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/student/:id', (req, res) => {
	const id = req.params.id

	Student.findById(id)
	.then(student => {
		res.json({
			confirmation: 'success',
			data: student
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'Profile ' + id + ' not found.'
		})
	})
})




router.post('/student', (req, res) => {

	Student.create(req.body)
	.then(student => {
		res.json({
			confirmation: 'success',
			data: student
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

//final of student

router.get('/school', (req, res) => {
	
	let filters = req.query
	if (req.query.grade != null){
		filters = {
			grade: {$gt: req.query.grade}
		}
	}
	
	
	School.find(filters)
	.then(schools => {
		res.json({
			confirmation: 'success',
			data: schools
		})
	})
	.catch(err => {
		res.json({
			conformation: 'fail',
			message: err.message
		})
	})
})

router.get('/school/update', (req, res) => {
	const query = req.query // require: id, key=val
	const schoolId = query.id
	delete query['id']

	School.findByIdAndUpdate(schoolId, query, {new:true})
	.then(school => {
		res.json({
			confirmation: 'success',
			data: school
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/school/remove', (req, res) => {
	const query = req.query

	School.findByIdAndRemove(query.id)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: 'School ' +query.id+' successfully removed.'
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/school/:id', (req, res) => {
	const id = req.params.id

	School.findById(id)
	.then(school => {
		res.json({
			confirmation: 'success',
			data: school
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'School ' + id + ' not found.'
		})
	})
})

router.post('/school', (req, res) => {

	School.create(req.body)
	.then(school => {
		res.json({
			confirmation: 'success',
			data: school
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})


module.exports = router