const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

<<<<<<< HEAD
=======
router.use('/comments', commentRoutes);
>>>>>>> feature/comment-model
router.use('/pizzas', pizzaRoutes);

module.exports = router;
