const api_url = "http://localhost:3001"; // Adjust as needed

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

// const getTraineeInfoById = async (id, token) => {
//   const requestOptions = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "x-access-token": token,
//     },
//   };

//   try {
//     const response = await fetch(
//       `${api_url}/api/trainees-info/${id}`,
//       requestOptions
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching trainee:", error);
//     throw error;
//   }
// };

// const deleteTraineeInfo = async (id, token) => {
//   const requestOptions = {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       "x-access-token": token,
//     },
//   };

//   try {
//     const response = await fetch(
//       `${api_url}/api/trainees-info/${id}`,
//       requestOptions
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error deleting trainee:", error);
//     throw error;
//   }
// };

// const addTrainee = async (traineeData, token) => {
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-access-token": token,
//       },
//       body: JSON.stringify(traineeData),
//     };
  
//     try {
//       const response = await fetch(`${api_url}/api/trainees-info`, requestOptions);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Error adding trainee:", error);
//       throw error;
//     }
//   };
  
//   // Add this to your existing trainInfoService object
//   const trainInfoService = {
//     getAllTraineesInfo,
//     getTraineeInfoById,
//     deleteTraineeInfo,
//     addTrainee, // Add this line
//   getAllTraineesInfo,
//   getTraineeInfoById,
//   deleteTraineeInfo,
// };

// export default trainInfoService;
// const api_url = import.meta.env.VITE_API_URL || 'http://localhost:3001';

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

const getTraineeInfoById = async (id, token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/trainees-info/${id}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching trainee:", error);
    throw error;
  }
};

const deleteTraineeInfo = async (id, token) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/trainees-info/${id}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting trainee:", error);
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
//     body: JSON.stringify(traineeData),
//   };

//   try {
//     const response = await fetch(`${api_url}/api/trainees-info`, requestOptions);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error adding trainee:", error);
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
//     body: JSON.stringify(traineeData),
//   };

//   const response = await fetch(`${api_url}/api/trainees-info`, requestOptions);
//   if (!response.ok) {
//     const errorData = await response.text();
//     throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorData}`);
//   }
//   return response.json();
// };

const addTrainee = async (traineeData, token) => {
    // Structure the data according to the API requirements
    const formattedData = {
      traineeAccount: {
        email: traineeData.email,
        password: "DefaultPass123!" // You can modify this as needed
      },
      traineeInfo: {
        first_name: traineeData.first_name,
        last_name: traineeData.last_name,
        middle_name: traineeData.middle_name || "",
        sex: traineeData.sex,
        phone: traineeData.phone,
        profession: traineeData.profession,
        account_number: traineeData.account_number
      }
    };
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(formattedData)
    };
  
    const response = await fetch(`${api_url}/api/trainees-info`, requestOptions);
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorData}`);
    }
    return response.json();
  };
  
  
const trainInfoService = {
  getAllTraineesInfo,
  getTraineeInfoById,
  deleteTraineeInfo,
  addTrainee
};

export default trainInfoService;
