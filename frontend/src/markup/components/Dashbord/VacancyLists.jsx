import React, { useEffect, useState } from "react";
import { fetchVacancies, deleteVacancy } from "../../../Util/api/api";
import { FaTrash, FaInfoCircle, FaPen } from "react-icons/fa"; // Adding pen icon for editing

const VacancyList = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirmDelete, setShowConfirmDelete] = useState(null); // For showing delete confirmation
  const [error, setError] = useState(null); // For handling errors

  useEffect(() => {
    const getVacancies = async () => {
      try {
        const response = await fetchVacancies();
        console.log("API response:", response); // Log the response
        if (Array.isArray(response.data)) {
          setVacancies(response.data);
        } else {
          console.error(
            "Expected an array of vacancies, but got:",
            response.data
          );
        }
      } catch (error) {
        setError("Error fetching vacancies.");
        console.error("Error fetching vacancies:", error);
      } finally {
        setLoading(false);
      }
    };

    getVacancies();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteVacancy(id);
      setVacancies(vacancies.filter((vacancy) => vacancy.id !== id));
      setShowConfirmDelete(null); // Close confirmation dialog after deletion
    } catch (error) {
      console.error("Error deleting vacancy:", error);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(null); // Close the confirmation dialog
  };

  const handleConfirmDelete = (id) => {
    setShowConfirmDelete(id); // Open the confirmation dialog for the specific vacancy
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Vacancy List</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {loading ? (
        <div className="text-center">Loading vacancies...</div>
      ) : (
        <div className="row">
          {vacancies.length > 0 ? (
            vacancies.map((vacancy) => (
              <div key={vacancy.id} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{vacancy.job_title}</h5>
                    <p className="card-text">
                      <strong>Qualifications:</strong> {vacancy.qualifications}
                    </p>
                    <p className="card-text">
                      <strong>Experience:</strong> {vacancy.job_experience}
                    </p>
                    <p className="card-text">
                      <strong>Job Grade:</strong> {vacancy.job_grade}
                    </p>
                    <p className="card-text">
                      <strong>Terms:</strong> {vacancy.terms}
                    </p>
                    <p className="card-text">
                      <strong>Salary:</strong> {vacancy.salary}
                    </p>
                    <p className="card-text">
                      <strong>Address:</strong> {vacancy.address}
                    </p>
                    <p className="card-text">
                      <strong>Application Link:</strong>
                      <a
                        href={vacancy.application_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply Now
                      </a>
                    </p>
                    <p className="card-text">
                      <strong>Location:</strong> {vacancy.location}
                    </p>
                    <p className="card-text">
                      <strong>Deadline:</strong>{" "}
                      {new Date(vacancy.deadline).toLocaleString()}
                    </p>

                    {/* Action Buttons */}
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          alert("Viewing details of " + vacancy.job_title)
                        }
                        title="View Details"
                      >
                        <FaInfoCircle />
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => alert("Edit functionality coming soon!")}
                        title="Edit Vacancy"
                      >
                        <FaPen />
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleConfirmDelete(vacancy.id)}
                        title="Delete Vacancy"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-warning" role="alert">
                No vacancies available
              </div>
            </div>
          )}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showConfirmDelete !== null && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCancelDelete}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this vacancy?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancelDelete}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(showConfirmDelete)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VacancyList;
