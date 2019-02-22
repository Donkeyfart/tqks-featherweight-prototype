// invitations-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const invitations = new Schema(
    {
      email: { type: String, required: true },
      userId: {
        type: Schema.Types.ObjectId,
        required: true,
      }
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model('invitations', invitations);
};
