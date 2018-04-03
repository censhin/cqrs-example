const mongoose = require('mongoose');

const widgetSchema = new mongoose.Schema(
  {
    name: String,
    description: String
  },
  {
    versionKey: false
  }
);

export function createWidget(req, res) {
  let Widget = mongoose.model('widgets', widgetSchema);
  let widget = new Widget({
    name: req.body.name,
    description: req.body.description
  });
  widget.save()
        .then((data) => res.json(data))
        .catch((e) => console.log(e))
}
