const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

// Validation middleware for Events
const validateEvent = [
    body('title').notEmpty().withMessage('Title is required'),
    body('date').notEmpty().withMessage('Date is required'),
    body('venueId').notEmpty().withMessage('Venue ID is required')
];

router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', validateEvent, createEvent);
router.put('/:id', validateEvent, updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
