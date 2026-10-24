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
    
    updateData.picture = {
      data: file.buffer,
      contentType: file.mimetype
    };
  }

  

  await userModel.findByIdAndUpdate(userId, updateData, {returnDocument : "after",})
}