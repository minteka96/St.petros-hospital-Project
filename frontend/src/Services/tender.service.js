const api_url = import.meta.env.VITE_API_URL;

const createTender = async (formData) => {
  const requestOptions = {
    method: "POST",
    body: formData,
  };

  try {
    const response = await fetch(`${api_url}/api/tenders`, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating tender:", error);
    throw error;
  }
};

export default {
  createTender,
};
