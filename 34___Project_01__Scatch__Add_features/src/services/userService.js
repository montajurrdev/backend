const userModel = require("../models/user-model")

module.exports.getMyAccount = async (userId) => {
  let user = await userModel.findById(userId);

  return { user };
};

module.exports.updateProfile = async (userId, data, file) => {

  const {fullname, contact} = data;

  const updateData = {
    fullname,
    contact,
  }

  if(file){
    updateData.picture = file.buffer;
  }

  await userModel.findByIdAndUpdate(userId, updateData, {new: true})
}