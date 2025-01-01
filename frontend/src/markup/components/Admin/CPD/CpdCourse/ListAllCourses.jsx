import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useAuth } from "../../../../../contexts/AuthContext";
const api_url = import.meta.env.VITE_API_URL;

const ListAllCourses = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  // Fetch all cpd courses
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${api_url}/api/cpd/courses`, {
          headers: {
            "x-access-token": token,
          },
        });
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching CPD courses:", error);
      }
    };
    
    fetchCourses();
    
    
    
  }, [token, navigate]);
  




  
  return (
    <div className="p-4">
      <h2 className="text-gray">List of All CPD Courses</h2>
      <div className="d-flex justify-content-between mb-3"></div>
      <div id="printable-area">
        <table
          className="table table-bordered table-hover mx-auto"
          style={{ width: "fit-content" }}
        >
          <thead className="table-light">
            <tr>
              <th className="px-3">S/N</th>
              <th className="px-3">course name.</th>
              <th className="px-3">course level</th>
              <th className="px-3">pri-test</th>
              <th className="px-3">post-test</th>
              <th>minimum score to pass post-test</th>
              <th className="px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses?.map((course, index) => (
              <tr key={course.training_id}>
                <td>{index + 1}</td>
                <td>{course.course_name}</td>
                <td>{course.course_level}</td>
                <td
                  className={course.pri_test ? "text-success" : "text-danger"}
                >
                  {course.pri_test ? "attached" : "not attached"}
                </td>
                <td
                  className={course.post_test ? "text-success" : "text-danger"}
                >
                  {course.post_test ? "attached" : "not attached"}
                </td>
                <td>{course.minimum_score}</td>
                <td className="text-center">
                  <button
                    onClick={() =>
                      navigate(`/admin/cpd/course/${course.training_id}`)
                    }
                    className="btn btn-secondary btn-sm"
                    style={{ backgroundColor: "#D2E7E5" }}
                  >
                    <img
                      src="https://img.icons8.com/?size=100&id=47863&format=png&color=000000"
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListAllCourses;

