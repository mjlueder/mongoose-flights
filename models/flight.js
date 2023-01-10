import mongoose from "mongoose";

const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: String,
  airport: {type: String, default: 'DEN'},
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function(){
      return new Date(Date.now() + 365*24*60*60000)
    }
  }
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}