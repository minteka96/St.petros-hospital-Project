const api_url = import.meta.env.VITE_API_URL;
const signup = async (formData) => {
  try {
    const response = await fetch(`${api_url}/api/trainee/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), // Serialize formData
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(
        `HTTP error! Status: ${response.status}. Message: ${
          errorDetails.message || "Unknown error"
        }`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error in signupService.signup:", error);
    throw error;
  }
};

const signin = async (formData) => {
  try {
    const response = await fetch(`${api_url}/api/trainee/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Convert formData to JSON
    });

    // Handle HTTP error
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse and return the JSON response
    return await response.json();
  } catch (error) {
    console.error("Error in signinService.signin:", error);
    throw error;
  }
};



export default { signup, signin };
