const router=require("express").Router();
const user=require("../controllers/user")


router.post('/newUser',user.newUser);
router.get('/getAllUsers',user.getAllUsers)
// router.post('/CreateWeather/:city',weather.CreateWeather)


module.exports=router;