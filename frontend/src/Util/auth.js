const api_url = import.meta.env.VITE_API_URL;

const checkTraineeExists = async (email) => {
  try {
    const response = await fetch(`${api_url}/api/trainee/email/${email}`);
    if (response.ok) {
      const data = await response.json();
      return !!data; // Returns true if the trainee exists
    }
    return false;
  } catch (error) {
    console.error("Error checking trainee existence:", error);
    return false;
  }
};

const checkAdminExists = async (email, token) => {
  try {
    const response = await fetch(`${api_url}/api/user/${email}`, {
      headers: {
        "x-access-token": token,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return !!data; // Returns true if the admin exists
    }
    return false;
  } catch (error) {
    console.error("Error checking admin existence:", error);
    return false;
  }
};

const userAuthHeader = async (userType) => {
  try {
    // Determine the token key based on the user type
    const tokenKey = userType === "admin" ? "access-token" : "zaccess-token";
    const token = sessionStorage.getItem(tokenKey);

    if (!token) {
      console.warn(`No token found for ${userType}.`);
      return null;
    }

    // Decode the token
    const decodedToken = decodeTokenPayload(token);

    if (tokenKey === "access-token") {
      const { role, username, email } = decodedToken;
      const adminExists = await checkAdminExists(email, token);
      if (!adminExists) {
        console.warn(`Admin with email ${email} does not exist.`);
        return null;
      }
      // console.log(`Admin Token Info:`, { role, username, email });
    } else if (tokenKey === "zaccess-token") {
      const { id, email } = decodedToken;

      // Check if the trainee exists
      const traineeExists = await checkTraineeExists(email);
      if (!traineeExists) {
        console.warn(`Trainee with ID ${email} does not exist.`);
        return null;
      }

      console.log(`Trainee Token Info:`, { id, email });
    }

    return token;
  } catch (error) {
    console.error(`Error retrieving ${userType} token:`, error);
    return null;
  }
};

export const decodeTokenPayload = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = atob(base64);
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Error decoding token payload:", error);
    throw new Error("Invalid token format.");
  }
};

export default userAuthHeader;
