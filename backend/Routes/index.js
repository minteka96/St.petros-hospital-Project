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
const newsRouter = require("./news.routes");
const cpdRouter = require("./cpd.routes");
const cpdScheduleRouter = require("./cpdSchedule.routes");
// Import the video router
const videoRouter = require("./videos.routes");
// Import the cpd news router
const cpdNewsRouter = require("./cpd_news.routes");
// Import the trainees sign-up route
const traineesSignUpRouter = require("./traineesSignUp.routes.js");
// Import the trainees sign-in route
const traineesSignInRouter = require("./traineesSignIn.routes.js");

const certificatRouter = require("./certificate.routes.js");
const traineeRouter = require("./trainee.toutes.js");
const traineesInfoRouter = require('./trainees_info.routes.js');
const trainCourseStatusRouter = require("./trainCourseStatus.routes");

// Import the contact router
const contactRouter = require("./contact.routes");  // <-- Add this line
const researchPublicationRouter = require('./researchPublication.routes')
// Use the routers in the main router
// Use the sign-up route
router.use(traineesSignUpRouter);
// Use the sign-in route
router.use(traineesSignInRouter);
router.use('/', traineesInfoRouter);
router.use(loginRouter);
router.use(userRouter);
router.use(cpdRouter);
router.use(cpdScheduleRouter);
router.use(applicantRouter);
router.use(traineeRouter);
router.use(trainCourseStatusRouter);
// Add the install router to the main router
router.use(installRouter);
router.use(jobsRouter);
router.use(newsRouter);
router.use(videoRouter);
router.use(healthtipRouter);
router.use(certificatRouter);

// Use the contact routes for the /api/contact path // Ensure correct path
router.use('/api', researchPublicationRouter);
// Use the routes
router.use('/api', contactRouter); // <-- Add this line
router.use(cpdNewsRouter);

// Export the router to be used in the main application file
module.exports = router;
