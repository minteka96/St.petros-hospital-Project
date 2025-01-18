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
const cpdRoute = require("./cpd.routes");
const cpdScheduleRoute = require("./cpdSchedule.routes");
// Import the video router
const videoRouter = require("./videos.routes");
// Import the cpd news router
const cpdNewsRouter = require("./cpd_news.routes");
// Import the trainees sign-up route
const traineesSignUpRoute = require("./traineesSignUp.routes.js");
// Import the trainees sign-in route
const traineesSignInRoute = require("./traineesSignIn.routes.js");
const traineeRouter = require("./trainee.toutes.js");
const traineesInfoRoutes = require('./trainees_info.routes.js');


// Import the contact router
const contactRoutes = require("./contact.routes");  // <-- Add this line
const researchPublicationRouter = require('./researchPublication.routes')
// Import the trainCourseStatus router 
const trainCourseStatus= require('./trainCourseStatus.routes');

// Use the routers in the main router
// Use the sign-up route
router.use(traineesSignUpRoute);
// Use the sign-in route
router.use(traineesSignInRoute);
router.use('/', traineesInfoRoutes);
router.use(loginRouter);
router.use(userRouter);
router.use(cpdRoute);
router.use(cpdScheduleRoute);
router.use(applicantRouter);
router.use(traineeRouter);
// Add the install router to the main router
router.use(installRouter);
router.use(jobsRouter);
router.use(newsRoutes);
router.use(videoRouter);
router.use(healthtipRouter);
router.use(traineesSignUpRoute);
router.use(cpdNewsRouter);
router.use(traineesSignInRoute);

// Use the contact routes for the /api/contact path // Ensure correct path
router.use('/api', researchPublicationRouter);
// Use the routes
router.use('/api', contactRoutes); 
router.use(cpdNewsRouter);
router.use(trainCourseStatus);

// Export the router to be used in the main application file
module.exports = router;
