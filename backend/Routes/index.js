// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();

// Import the necessary routers
const installRouter = require("./install.routes");
const jobsRouter = require("./jobs.routes.js");
const healthtipRouter = require("./healthtip.routes");
const applicantRouter = require("./applicant.routes");
const loginRouter = require("./logIn.routes");
const userRouter = require("./user.routes");
// Import the news router
const newsRoutes = require("./news.routes");
// Import the video router
const videoRouter = require("./videos.routes");
// Import the trainees info router
const traineesInfoRouter = require("./trainees_info.routes");
// Import the cpd news router
const cpdNewsRouter = require("./cpd_news.routes");
// Use the routers in the main router
router.use(loginRouter);
router.use(userRouter);
router.use(applicantRouter);
// Add the install router to the main router
router.use(installRouter);
// Add the jobs router to the main router
router.use(jobsRouter);
// Add the news routes to the main router
router.use(newsRoutes);
// Add the video routes to the main router
router.use(videoRouter);
// Add the health tip routes to the main router
router.use(healthtipRouter);
// Add the trainees info routes to the main router
router.use(traineesInfoRouter);
// Add the cpd news routes to the main router
router.use(cpdNewsRouter);



// Export the router to be used in the main application file
module.exports = router;
