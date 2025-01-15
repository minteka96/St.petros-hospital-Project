//getTraineesByScheduleId;
const traineeService= require("../Services/trainee.service");

//getTraineesByScheduleId
const getTraineesByScheduleId = async ( req, res ) => {
 const scheduleId = req.params.schedule_id;
 console.log("scheduleId", scheduleId);
 try {
  const trainees = await traineeService.getTraineesByScheduleId(scheduleId);
  if (!trainees) {
   return res.status(404).json({ error: "Trainees not found" });
  }
  res.status(200).json(trainees);
  // return trainees;
 } catch (err) {
  throw new Error("Error fetching trainees by schedule ID: " + err.message);
 }
};



 // get Trainees Status By TraineeId and course_name
 const getTraineesStatus = async ( req, res ) => {
  const traineeId = req.params.trainee_id;
  const course_name = req.params.course_name;
  try {
   const trainees = await traineeService.getTraineesStatus(
     traineeId,
     course_name
   );
   if (!trainees) {
    return res.status(404).json({ error: "Trainees not found" });
   }
   res.status(200).json(trainees);
   // return trainees; 
  } catch (err) { 
   throw new Error("Error fetching trainees by schedule ID: " + err.message);
  }
 };
 
//update Trainees Status By TraineeId and course_name
const updateTraineesStatus = async (req, res) => {
  const traineeId = req.params.trainee_id;
  const course_name = req.params.course_name;
  const status = req.body;
  try {
    const trainees = await traineeService.updateTraineesStatus(
      traineeId,
      course_name,
      status
    );
    if (!trainees) {
      return res.status(404).json({ error: "Trainees not found" });
    }
    res.status(200).json(trainees);
    // return trainees;
  } catch (err) {
    throw new Error("Error fetching trainees by schedule ID: " + err.message);
  }
};



module.exports = {
  getTraineesByScheduleId,
  getTraineesStatus,
  updateTraineesStatus,
};