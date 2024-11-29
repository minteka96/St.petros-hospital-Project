const api_url = import.meta.env.VITE_API_URL;

const createJob = async (data) => {
  const response = await fetch(`${api_url}/api/vacancies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `HTTP error! Status: ${response.status}, Details: ${errorText}`
    );
  }
};

const job = {
  createJob,
};

export default job;
