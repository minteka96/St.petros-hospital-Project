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

module.exports = {
 getTraineesByScheduleId,
};