import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const username = localStorage.getItem("currentUser");
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("serviceRequests") || "{}");
    setRequests(data[username] || []);
  }, [username]);

  // Statistics
  const total = requests.length;
  const pending = requests.filter((r) => r.status === "Pending").length;
  const completed = requests.filter((r) => r.status === "Completed").length;

  // Chart Data
  const barData = {
    labels: ["Total", "Pending", "Completed"],
    datasets: [
      {
        label: "Requests",
        data: [total, pending, completed],
        backgroundColor: ["#3b82f6", "#facc15", "#10b981"],
        borderRadius: 8,
      },
    ],
  };

  const pieData = {
    labels: ["Pending", "Completed"],
    datasets: [
      {
        data: [pending, completed],
        backgroundColor: ["#f59e0b", "#22c55e"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "auto",
        padding: "2rem",
        color: "#374151",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: 36,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 24,
        }}
      >
        Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT: ORDERS LIST */}
        <div style={{ flex: 2 }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Your Service Requests
          </h2>
          {requests.length === 0 ? (
            <p>No service requests found.</p>
          ) : (
            requests.map((r) => (
              <article
                key={r.id}
                style={{
                  backgroundColor: "#f9fafb",
                  padding: 16,
                  borderRadius: 12,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  marginBottom: 16,
                }}
              >
                <p>
                  <strong>Service:</strong> {r.service}
                </p>
                <p>
                  <strong>Name:</strong> {r.name}
                </p>
                <p>
                  <strong>Email:</strong> {r.email}
                </p>
                <p>
                  <strong>Details:</strong> {r.details}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    style={{
                      color: r.status === "Completed" ? "green" : "orange",
                      fontWeight: "bold",
                    }}
                  >
                    {r.status}
                  </span>
                </p>
                <p>
                  <small>
                    <em>Submitted on {r.dateSubmitted}</em>
                  </small>
                </p>
              </article>
            ))
          )}
        </div>

        {/* RIGHT: STATISTICS + CHARTS */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#f3f4f6",
            padding: "1.5rem",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginBottom: 12,
              color: "#111827",
            }}
          >
            Statistics
          </h2>
          <ul style={{ listStyle: "none", padding: 0, fontSize: 18 }}>
            <li>
              <strong>Total Requests:</strong> {total}
            </li>
            <li>
              <strong>Pending:</strong> {pending}
            </li>
            <li>
              <strong>Completed:</strong> {completed}
            </li>
          </ul>

          <div style={{ marginTop: 24 }}>
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>Bar Chart</h3>
            <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </div>

          <div style={{ marginTop: 24 }}>
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>Pie Chart</h3>
            <Pie data={pieData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
