// const ChildrenData = require("../model/childrenModel")
const UserAccount = require("../model/userModel")
const ChildrenData = require("../model/childrenModel")


const addDetails = async (req, res) => {
    try {
        const data = new UserAccount({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            city: req.body.city,
            profilephoto: req.body.profilephoto,
            galleryphoto: req.body.galleryphoto,
            children_id: req.body.children_id,
        })
        const dataToSave = await data.save();
        // console.log(data);
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const Children = async (req, res) => {
    try {
        console.log(req.body);
        const data = new ChildrenData({
            user_id:req.body.user_id,
            name: req.body.name,
            age:  req.body.age,
            profile_photo: req.body.profile_photo,
            notes:req.body.notes,
        })
        const dataToSave = await data.save();
        console.log(dataToSave);
        const data1 = await UserAccount.findByIdAndUpdate(req.body.user_id, { children_id: dataToSave.id });
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
const UserData = async(req, res)=>{
    try {
        const data = await UserAccount.find().populate('children_id');
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const Update = async(req, res)=>{
    try {
        const { children_id } = req.body
        const data = await UserAccount.findByIdAndUpdate({ children_id });
        console.log(User);
        res.send()

    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports = {
    addDetails,
    Children,
    UserData,
    Update
}