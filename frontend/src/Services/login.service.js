const api_url = import.meta.env.VITE_API_URL;

const logIn = async (formData) => {
  try {
    const response = await fetch(`${api_url}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    return await response.json();
  } catch (error) {
    console.error("Error in loginService.logIn:", error);
    throw error;
  }
};




// Export the functions
export default {
  logIn,

};
