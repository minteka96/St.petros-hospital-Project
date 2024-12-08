// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the install router
const installRouter = require("./install.routes");
// Import the jobs router
const jobsRouter = require("./jobs.routes.jsx");
const healthtipRouter = require("./healthtip.routes");
const applicantRouter = require("./applicant.routes");
const loginRouter = require("./logIn.routes");
const userRouter = require("./user.routes");
// Import the news router
const newsRoutes = require("./news.routes");
router.use(loginRouter);
router.use(userRouter);
router.use(applicantRouter);
// Add the install router to the main router
router.use(installRouter);
// Add the jobs router to the main router
router.use(jobsRouter);
// Add the news routes to the main router
router.use(newsRoutes);
router.use(healthtipRouter);
// Export the router
module.exports = router;
