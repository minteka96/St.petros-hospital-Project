const api_url = import.meta.env.VITE_API_URL;

const createNews = async (formData) => {
  const requestOptions = {
    method: "POST",
    body: formData,
  };

  try {
    const response = await fetch(`${api_url}/api/news`, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating news:", error);
    throw error;  // Throw error to be caught in the component
  }
};

// export default { createNews };




// A function to send GET request to get all news entries
const getAllNews = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${api_url}/api/news`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (data.status !== "success") {
      throw new Error(
        "Failed to fetch news: " + (data.message || "Unknown error")
      );
    }
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

// A function to send GET request to get a specific news item by its ID
const getNewsById = async (news_id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "x-access-token": token,
    },
  };
  try {
    const response = await fetch(
      `${api_url}/api/news/${news_id}`,
      requestOptions
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    const data = await response.json();
    if (!data || !data.data) {
      throw new Error(
        `Failed to fetch news: ${data.message || "Unknown error"}`
      );
    }
    return data.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

// Function to update a specific news item
// const updateNews = async (news_id, formData) => {
//   const requestOptions = {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       // "x-access-token": token,
//     },
//     body: JSON.stringify(formData),
//   };

//   try {
//     const response = await fetch(
//       `${api_url}/api/news/${news_id}`,
//       requestOptions
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(
//         `HTTP error! Status: ${response.status}, Details: ${errorText}`
//       );
//     }
//     const data = await response.json();
//     if (data.status === "success") {
//       return data;
//     } else {
//       throw new Error(
//         `Failed to update news: ${data.message || "Unknown error"}`
//       );
//     }
//   } catch (error) {
//     console.error("Error updating news:", error);
//     throw error;
//   }
// };

const updateNews = async (news_id, formData) => {
  const requestOptions = {
    method: "PUT",
    body: formData, // FormData includes files and text data
  };
  try {
    const response = await fetch(
      `${api_url}/api/news/${news_id}`,
      requestOptions
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating news:", error);
    throw error;
  }
};



// A function to send DELETE request to delete a specific news item
const deleteNews = async (news_id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // "x-access-token": token,
    },
  };

  try {
    const response = await fetch(
      `${api_url}/api/news/${news_id}`,
      requestOptions
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }
    const data = await response.json();
    if (data.status === "success") {
      return data;
    } else {
      throw new Error(
        `Failed to delete news: ${data.message || "Unknown error"}`
      );
    }
  } catch (error) {
    console.error("Error deleting news:", error);
    throw error;
  }
};

// Export all the functions
const newsService = {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
};

export default newsService;
