const express = require('express');
const router = express.Router();
const { getPrompt } = require('../controllers/askPrompt');

/* Prompt Route */
router.post('/get-prompt', getPrompt);

module.exports = router;