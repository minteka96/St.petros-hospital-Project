const userAuthHeader = async (userType) => {
  try {
    const tokenKey =
      userType === "admin" ? "access-token" : "zaccess-token";
    const token = sessionStorage.getItem(tokenKey);

    if (token) {
      const decodedToken = decodeTokenPayload(token);
      const { role, username, email } = decodedToken;

      console.log(`${userType} Token Info:`, { role, username, email });
      return token;
    } else {
      console.warn(`No token found for ${userType}.`);
      return null;
    }
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
