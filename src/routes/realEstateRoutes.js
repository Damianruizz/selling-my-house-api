'use strict';

const express = require('express');
const RealEstateController = require('../controllers/RealEstateController');
const mdRealEstate = require('../middlewares/realEstateMd');

const router = express.Router();

router.route('/realEstates')
  .get(RealEstateController.getAllRealEstates)    
  .post(mdRealEstate.validateParams, RealEstateController.createRealEstate)
  .put(mdRealEstate.validateParamsToUpdate, RealEstateController.updateRealEstate)
  .delete(RealEstateController.deleteRealEstate);

module.exports = router;