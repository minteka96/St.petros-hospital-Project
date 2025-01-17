import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const api_url = import.meta.env.VITE_API_URL;

function CheckExam() {
  const { schedule_id, courseName } = useParams();
  const [trainees, setTrainees] = useState([]);
  const [checkboxState, setCheckboxState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainees = async () => {
      try {
        const traineeResponse = await axios.get(
          `${api_url}/api/trainees/${schedule_id}`
        );
        const traineesData = traineeResponse.data;

        const statusPromises = traineesData.map(async (trainee) => {
          const statusResponse = await axios.get(
            `${api_url}/api/trainee/status/${trainee.trainee_id}/${courseName}`
          );
          return {
            traineeId: trainee.trainee_id,
            status: statusResponse.data[0] || {},
          };
        });

        const statusesData = await Promise.all(statusPromises);

        const initialCheckboxState = {};
        statusesData.forEach(({ traineeId, status }) => {
          initialCheckboxState[traineeId] = {
            priTest: status.pri_test === "1",
            postTest: status.post_test === "1",
            certificate: status.certificate === "1",
          };
        });

        traineesData.forEach((trainee, index) => {
          trainee.status = statusesData[index]?.status || {};
        });

        setTrainees(traineesData);
        setCheckboxState(initialCheckboxState);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trainees or statuses:", error);
        setError("Failed to load trainees or statuses.");
        setLoading(false);
      }
    };

    fetchTrainees();
  }, [schedule_id, courseName]);

  const handleCheckboxChange = (traineeId, field) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [traineeId]: {
        ...prevState[traineeId],
        [field]: !prevState[traineeId]?.[field],
      },
    }));
  };

  const handleSelectAll = (field, isChecked) => {
    setCheckboxState((prevState) => {
      const updatedState = { ...prevState };
      Object.keys(updatedState).forEach((traineeId) => {
        updatedState[traineeId][field] = isChecked;
      });
      return updatedState;
    });
  };

  const updateStatus = async () => {
    try {
      const updatePromises = Object.entries(checkboxState).map(
        ([traineeId, status]) => {
          const trainee = trainees.find((t) => t.trainee_id === traineeId);
          if (!trainee) return null;

          const currentStatus = trainee.status;

          // Determine pri_test payload value
          const priTestPayload =
            currentStatus.pri_test === "1" || currentStatus.pri_test === "0"
              ? status.priTest
                ? "1"
                : "0"
              : currentStatus.pri_test;

          // Determine post_test payload value
          const postTestPayload =
            currentStatus.post_test === "1" || currentStatus.post_test === "0"
              ? status.postTest
                ? "1"
                : "0"
              : currentStatus.post_test;

          return axios.put(
            `${api_url}/api/trainee/status/${traineeId}/${courseName}`,
            {
              pri_test: priTestPayload,
              post_test: postTestPayload,
            }
          );
        }
      );

      await Promise.all(updatePromises.filter((promise) => promise !== null));
      alert("Trainee statuses updated successfully!");
    } catch (error) {
      console.error("Error updating trainee statuses:", error);
      alert("Failed to update trainee statuses.");
    }
  };

  const getCheckboxStyle = (status, isDisabled) => {
    if (isDisabled) {
      return { borderColor: "gray", backgroundColor: "#f0f0f0" };
    }
    if (status !== "1" && status !== "0") {
      return { borderColor: "red", backgroundColor: "#ffe6e6" };
    }
    return {};
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h1>Check Trainees Exam</h1>
      <table
        className="table table-bordered table-hover table-striped mx-auto"
        style={{ width: "80%" }}
      >
        <thead>
          <tr>
            <th>S/N</th>
            <th>Full Name</th>
            <th>Sex</th>
            <th>Phone</th>
            <th>
              <input
                type="checkbox"
                onChange={(e) => handleSelectAll("priTest", e.target.checked)}
              />
              Pre-Test
            </th>
            <th>
              <input
                type="checkbox"
                onChange={(e) => handleSelectAll("postTest", e.target.checked)}
              />
              Post-Test
            </th>
          </tr>
        </thead>
        <tbody>
          {trainees.map((trainee, index) => (
            <tr key={trainee.trainee_id}>
              <td>{index + 1}</td>
              <td>{`${trainee.first_name} ${trainee.last_name} ${trainee.middle_name}`}</td>
              <td>{trainee.sex}</td>
              <td>{trainee.phone}</td>
              <td>
                <input
                  type="checkbox"
                  checked={checkboxState[trainee.trainee_id]?.priTest || false}
                  onChange={() =>
                    handleCheckboxChange(trainee.trainee_id, "priTest")
                  }
                  disabled={
                    trainee.status?.pri_test !== "1" &&
                    trainee.status?.pri_test !== "0"
                  }
                  style={getCheckboxStyle(
                    trainee.status?.pri_test,
                    trainee.status?.pri_test !== "1" &&
                      trainee.status?.pri_test !== "0"
                  )}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={checkboxState[trainee.trainee_id]?.postTest || false}
                  onChange={() =>
                    handleCheckboxChange(trainee.trainee_id, "postTest")
                  }
                  disabled={
                    trainee.status?.post_test !== "1" &&
                    trainee.status?.post_test !== "0"
                  }
                  style={getCheckboxStyle(
                    trainee.status?.post_test,
                    trainee.status?.post_test !== "1" &&
                      trainee.status?.post_test !== "0"
                  )}
                />
              </td>
            </tr>
          ))}
        </tbody>
      <button className="btn btn-primary my-4" onClick={updateStatus}>
        Update
      </button>
      </table>
    </div>
  );
}

export default CheckExam;
