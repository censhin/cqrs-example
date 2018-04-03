const mongoose = require('mongoose');

const widgetSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    select: false
  },
  name: String,
  description: String
});

export function getWidgets(req, res) {
  let widgetModel = mongoose.model('widgets', widgetSchema);
  return widgetModel.find()
                    .then((data) => res.json(data))
                    .catch((err) => console.log(err));
  }
