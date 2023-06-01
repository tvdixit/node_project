const express = require('express');
const router = express.Router()

const { addDetails, Children, UserData, Update } = require("../controller/userController")

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const multiple = 5
const Photo = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'upload/profile')
        },
        filename: (req, file, cb) => {
            const fileExtName = file.originalname.substring(file.originalname.lastIndexOf('.'));
            const fileName = `${uuidv4()}${fileExtName}`;
            cb(null, fileName);
        }
    })
}).single('image')

router.post("/profilephoto", Photo, async (req, res) => {
    res.send("file upload")
})
//________________________________________
const Photos = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'upload/gallery')
        },
        filename: (req, file, cb) => {
            const fileExtName = file.originalname.substring(file.originalname.lastIndexOf('.'));
            const fileName = `${uuidv4()}${fileExtName}`;
            cb(null, fileName);
        }
    })
}).array('image')

router.post("/galleryphoto", Photos, async (req, res) => {
    res.send("file upload")
})
//
const childProfile = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'upload/childprofile')
        },
        filename: (req, file, cb) => {
            const fileExtName = file.originalname.substring(file.originalname.lastIndexOf('.'));
            const fileName = `${uuidv4()}${fileExtName}`;
            cb(null, fileName);
        }
    })
}).single('image')

router.post("/Childprofile", childProfile, async (req, res) => {
    res.send("file upload")
})
//
router.post(
    "/addDetail",
    addDetails
)
router.post(
    "/childrenDetail",
    Children
)

router.get(
    "/getuserData",
    UserData
)

router.post(
    "/updateUser",
    Update
)
module.exports = router;