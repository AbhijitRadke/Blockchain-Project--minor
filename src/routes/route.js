const express = require("express")
const router = express.Router();
const cryptoController = require("../controllers/cryptoController")


router.get("/crypto", cryptoController.getCrypto )




module.exports = router;