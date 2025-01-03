// const api_url = import.meta.env.VITE_API_URL;

// const getAllTraineesInfo = async (token) => {
//   const requestOptions = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "x-access-token": token,
//     },
//   };

//   try {
//     const response = await fetch(`${api_url}/api/trainees-info`, requestOptions);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching trainees:", error);
//     throw error;
//   }
// };


// const addTrainee = async (traineeData, token) => {
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "x-access-token": token,
//     },
//     body: JSON.stringify({
//       ...traineeData,
//       middle_name: traineeData.middle_name || "" // Handle optional middle name
//     }),
//   };

//   try {
//     const response = await fetch(`${api_url}/api/trainees-info`, requestOptions);
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}, Details: ${JSON.stringify(data)}`);
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
// // const addTrainee = async (traineeData, token) => {
// //   const requestOptions = {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //       "x-access-token": token,
// //     },
// //     body: JSON.stringify({
// //       trainee_id: traineeData.trainee_id,
// //       first_name: traineeData.first_name,
// //       middle_name: traineeData.middle_name || "",
// //       last_name: traineeData.last_name,
// //       sex: traineeData.sex,
// //       phone: traineeData.phone,
// //       profession: traineeData.profession,
// //       account_number: traineeData.account_number
// //     }),
// //   };

// //   const response = await fetch(`${api_url}/api/trainees-info`, requestOptions);
// //   const data = await response.json();

// //   if (!response.ok) {
// //     throw new Error(data.error || "Failed to add trainee");
// //   }

// //   return data;
// // };


// // const trainInfoService = {
// //   getTraineeInfoById,
// //   deleteTraineeInfo,
// //   addTrainee
// // };

// // export default trainInfoService;



const api_url = import.meta.env.VITE_API_URL;

const getAllTraineesInfo = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${api_url}/api/trainees-info`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching trainees:", error);
    throw error;
  }
};

const getTraineeById = async (id, token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${api_url}/api/trainees-info/${id}`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching trainee:", error);
    throw error;
  }
};

// const addTrainee = async (traineeData, token) => {
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "x-access-token": token,
//     },
//     body: JSON.stringify({
//       ...traineeData,
//       middle_name: traineeData.middle_name || ""
//     }),
//   };

//   try {
//     const response = await fetch(`${api_url}/api/trainees-info`, requestOptions);
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}, Details: ${JSON.stringify(data)}`);
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
const addTrainee = async (traineeData, token) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(traineeData),
  };

  const response = await fetch(`${api_url}/api/trainees-info`, requestOptions);
  const data = await response.json();
  
  if (!response.ok) {
    throw { response: { data: { message: data.message || "Failed to register trainee" } } };
  }
  
  return data;
};

const updateTrainee = async (id, traineeData, token) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify({
      ...traineeData,
      middle_name: traineeData.middle_name || ""
    }),
  };

  try {
    const response = await fetch(`${api_url}/api/trainees-info/${id}`, requestOptions);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${JSON.stringify(data)}`);
    }
    
    return data;
  } catch (error) {
    throw error;
  }
};

const deleteTrainee = async (id, token) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${api_url}/api/trainees-info/${id}`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

const trainInfoService = {
  getAllTraineesInfo,
  getTraineeById,
  addTrainee,
  updateTrainee,
  deleteTrainee
};

export default trainInfoService;
