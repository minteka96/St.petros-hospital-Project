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
    } else if (tokenKey === "zaccess-token") {
      const { id, email } = decodedToken;
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
