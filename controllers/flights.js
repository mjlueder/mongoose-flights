import { Flight } from '../models/flight.js'

function index(req, res){
  res.render('flights/index', {
    title: 'All Flights'
  })
}

function newFlight(req, res){

}

function create(req, res){

}

function edit(req, res){

}

function update(req, res){

}

function deleteFlight(req, res){

}

export {
  index,
  newFlight as new,
  create,
  edit,
  update,
  deleteFlight as delete,
}