const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const Ajv = require("ajv");
const ajv = new Ajv();
// const ajv = new Ajv({allErrors: true});

const showPage = (req, res) => {
  res.render('index');
};

const validator = (req, res, next) => {
  
  
  const schema = {
    "type" : "object",
    "properties" : {
    	"login" : {
        	"type" : "string",
            "maxLength" : 10,
            "minLength" : 3,
            "pattern" : "/^[a-z0-9]{3,10}$/",
        },
          "quantity" : {
        	  "type" : "number",
            "maximum": 1,
     		    "minimum": 10,
        },
          "email" : {
        	  "type" : "string",
            // "minItems" : 5,
            "pattern" : "/^[a-z0-9]+@[a-z0-9]+.+.[A-Z]{2,4}$/",
        }
    }
  };
  
  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  if (!valid) console.log(validate.errors);
};

router.get('/', upload.none(), validator, showPage);
router.post('/valid', (req, res) => {
  res.send('OK');
});

module.exports = router;