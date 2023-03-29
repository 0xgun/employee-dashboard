//display the api data in table
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Table() {
  const [searchTerm, setSearchTerm] = useState("");
  const [Sort, setSort] = useState("Ascending");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const lastPage = currentPage * postsPerPage;
  const firstPage = lastPage - postsPerPage;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const records = data.slice(firstPage, lastPage);
  const npage = Math.ceil(data.length / postsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    axios

      .get("http://localhost:3001/employees")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  const sorting = (key) => {
    const sortedData = [...data];
    if (Sort === "Ascending") {
      sortedData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setSort("Descending");
    } else {
      sortedData.sort((a, b) => (a[key] > b[key] ? -1 : 1));
      setSort("Ascending");
    }
    setData(sortedData);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <form className="container">
        <div
          className="form-group"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            margin: "auto",
            marginTop: "30px",
          }}
        >
          <input
            type="search"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Filter.."
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              margin: "auto",
              marginTop: "30px",
            }}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </form>
      <table
        className="table table-striped table-hover "
        style={{
          justifyContent: "center",
          width: "80%",
          margin: "auto",
          marginTop: "30px",
          marginBottom: "60px",
        }}
      >
        <thead>
          <tr className="table-active">
            <th scope="col" onClick={() => sorting("id")}>
              <i className="fa fa-sort"> ID</i>
            </th>

            <th scope="col" onClick={() => sorting("firstName")}>
              <i className="fa fa-sort"> Name</i>
            </th>
            <th scope="col" onClick={() => sorting("email")}>
              <i className="fa fa-sort"> Email</i>
            </th>
            <th scope="col" onClick={() => sorting("contactNumber")}>
              <i className="fa fa-sort"> Phone</i>
            </th>
            <th scope="col" onClick={() => sorting("salary")}>
              <i className="fa fa-sort"> Salary</i>
            </th>
            <th scope="col" onClick={() => sorting("age")}>
              <i className="fa fa-sort"> Department</i>
            </th>
            <th scope="col" onClick={() => sorting("age")}>
              <i className="fa fa-sort"> Age</i>
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {records
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.first_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                val.last_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.department.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
              return false;
            })
            .map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>

                <td>{item.first_name + " " + item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>

                <td>${item.salary}</td>
                <td>{item.department}</td>
                <td>{item.age}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <NavLink to="#" className="page-link" onClick={prevPage}>
              Prev
            </NavLink>
          </li>
          {numbers.map((number) => (
            <li
              key={number}
              className={
                currentPage === number ? "page-item active" : "page-item"
              }
            >
              <NavLink
                to="#"
                className="page-link"
                onClick={() => changePage(number)}
              >
                {number}
              </NavLink>
            </li>
          ))}

          <li className="page-item">
            <NavLink to="#" className="page-link" onClick={nextPage}>
              Next
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
