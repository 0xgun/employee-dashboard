import React, { useState, useEffect } from "react";
import { PolarArea, Radar, Bar, Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import axios from "axios";

Chart.register(CategoryScale);
export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const age = data.map((item) => item.age);
  const salary = data.map((item) => item.salary);

  const state = {
    labels: age,
    datasets: [
      {
        label: "Salary",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 2,
        data: salary,
      },
    ],
  };

  return (
    <div>
      <div className="d-flex p-2">
        <div
          className="card"
          style={{
            width: "50%",
          }}
        >
          <div className="card-body">
            <h5 className="card-title ">Employee Salary </h5>
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Average Salary by Age",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
          <div
            className="card"
            style={{
              width: "50%",
            }}
          ></div>
        </div>

        <div
          className="card"
          style={{
            width: "50%",
          }}
        >
          <div className="card-body">
            <h5 className="card-title ">Radar Chart for Average Salary by Age </h5>
            <Radar
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Average Salary by Age",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
          <div
            className="card"
            style={{
              width: "50%",
            }}
          ></div>
        </div>
        <div
          className="card"
          style={{
            width: "50%",
          }}
        >
          <div className="card-body">
            <h5 className="card-title ">Employee Salary </h5>
            <PolarArea
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Average Salary by Age",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
          <div
            className="card"
            style={{
              width: "50% ",
            }}
          ></div>
        </div>
      </div>
      <div>
        <div
          className="card"
          style={{
            width: "50%",
          }}
        >
          <div className="card-body">
            <h5 className="card-title ">Employee Salary by Age </h5>
            <Doughnut
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Average Salary by Age",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
