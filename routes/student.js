const { Router } = require("express");
const { getStudents } = require("../controllers/student");
const router = Router();

router.route("").get(getStudents);

module.exports = router;
