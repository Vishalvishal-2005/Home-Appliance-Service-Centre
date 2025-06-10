import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  const cardStyle = {
    backgroundColor: "#f9fafb",
    borderRadius: "0.75rem",
    padding: "1.5rem 1.75rem",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.05)",
    color: "#111827",
    fontWeight: 600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "0.5rem",
    cursor: "pointer",
    transition: "box-shadow 0.2s ease, transform 0.2s ease",
    minHeight: 250,
  };

  const hoverStyle = {
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)",
    transform: "translateY(-4px)",
  };

  const iconStyle = {
    width: 48,
    height: 48,
    stroke: "#2563eb",
    strokeWidth: 2,
    fill: "none",
    marginBottom: "0.5rem",
  };

  const servicesData = [
  {
    title: "Refrigerator Repair",
    description:
      "Diagnosis, repair, and replacement of refrigerator components and cooling issues.",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle}>
        <rect x="6" y="4" width="12" height="16" rx="2" ry="2" />
        <line x1="9" y1="4" x2="9" y2="20" />
        <line x1="15" y1="4" x2="15" y2="20" />
      </svg>
    ),
  },
  {
    title: "Washing Machine Service",
    description:
      "Maintenance, drum repairs, motor replacement, and troubleshooting.",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle}>
        <circle cx="12" cy="12" r="8" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="12" y1="3" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Air Conditioner Maintenance",
    description:
      "Cleaning, coolant top-up, and system checks for optimal cooling performance.",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle}>
        <rect x="4" y="9" width="16" height="6" rx="3" ry="3" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="6" y1="6" x2="6" y2="18" />
        <line x1="18" y1="6" x2="18" y2="18" />
      </svg>
    ),
  },
  {
    title: "Microwave Oven Repair",
    description:
      "Fix heating and control issues, door seals, and electrical faults.",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle}>
        <rect x="2" y="7" width="20" height="10" rx="2" ry="2" />
        <line x1="8" y1="7" x2="8" y2="17" />
        <line x1="16" y1="7" x2="16" y2="17" />
      </svg>
    ),
  },
  {
    title: "Dishwasher Service",
    description:
      "Resolve drainage, spray arm, and water temperature issues efficiently.",
    svg: (
      <svg viewBox="0 0 24 24" style={iconStyle}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="4" y1="10" x2="20" y2="10" />
        <circle cx="8" cy="14" r="1" />
        <circle cx="12" cy="14" r="1" />
        <circle cx="16" cy="14" r="1" />
      </svg>
    ),
  },
  {
    title: "Geyser Repair",
    description:
      "Hot water issues? We fix thermostat, heating element, and leakage problems.",
    svg: (
      <svg viewBox="0 0 24 24" style={iconStyle}>
        <rect x="6" y="2" width="12" height="20" rx="6" />
        <line x1="12" y1="6" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    title: "Gas Stove Service",
    description:
      "Burner cleaning, ignition troubleshooting, and gas leak inspection.",
    svg: (
      <svg viewBox="0 0 24 24" style={iconStyle}>
        <circle cx="12" cy="12" r="3" />
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: "Water Purifier Maintenance",
    description:
      "Replace filters, check UV/RO systems, and ensure pure drinking water.",
    svg: (
      <svg viewBox="0 0 24 24" style={iconStyle}>
        <path d="M12 3C7 8 7 13 12 21C17 13 17 8 12 3Z" />
        <line x1="12" y1="10" x2="12" y2="14" />
      </svg>
    ),
  },
];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      alert("User not logged in.");
      return;
    }

    const allRequests = JSON.parse(localStorage.getItem("serviceRequests") || "{}");
    const userRequests = allRequests[currentUser] || [];

    const newRequest = {
      id: uuidv4(),
      service: selectedService,
      ...formData,
      status: "Pending",
      dateSubmitted: new Date().toLocaleString(),
    };

    const updatedRequests = {
      ...allRequests,
      [currentUser]: [...userRequests, newRequest],
    };

    localStorage.setItem("serviceRequests", JSON.stringify(updatedRequests));

    alert(`Successfully registered for ${selectedService}!`);

    setFormData({ name: "", email: "", details: "" });
    setSelectedService(null);
    navigate("/dashboard");
  };

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalStyle = {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "0.75rem",
    maxWidth: 400,
    width: "90%",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  };

  return (
    <section
      style={{
        maxWidth: 900,
        margin: "auto",
        paddingTop: 64,
        paddingBottom: 80,
        color: "#6b7280",
        fontSize: 18,
        lineHeight: 1.6,
        userSelect: "none",
        textAlign: "center",
      }}
      aria-labelledby="services-title"
    >
      <h1
        id="services-title"
        style={{
          fontSize: 44,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 20,
        }}
      >
        Our Services
      </h1>
      <p style={{ maxWidth: 650, margin: "0 auto 36px auto" }}>
        We offer a comprehensive range of appliance repair and maintenance services
        to keep your home running smoothly.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
          marginTop: 20,
        }}
      >
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            style={cardStyle}
            onClick={() => setSelectedService(service.title)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedService(service.title);
              }
            }}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
            onMouseOut={(e) =>
              Object.assign(e.currentTarget.style, {
                ...cardStyle,
                boxShadow: cardStyle.boxShadow,
                transform: "none",
              })
            }
            onFocus={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
            onBlur={(e) =>
              Object.assign(e.currentTarget.style, {
                ...cardStyle,
                boxShadow: cardStyle.boxShadow,
                transform: "none",
              })
            }
          >
            {service.svg}
            <div>{service.title}</div>
            <p
              style={{
                fontWeight: 400,
                color: "#6b7280",
                fontSize: 14,
                marginTop: 4,
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {selectedService && (
        <div style={modalOverlayStyle} onClick={() => setSelectedService(null)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginBottom: "1rem" }}>
              Register for {selectedService}
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1rem", textAlign: "left" }}>
                <label htmlFor="name" style={{ display: "block", marginBottom: 4 }}>
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.5rem" }}
                />
              </div>
              <div style={{ marginBottom: "1rem", textAlign: "left" }}>
                <label htmlFor="email" style={{ display: "block", marginBottom: 4 }}>
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.5rem" }}
                />
              </div>
              <div style={{ marginBottom: "1rem", textAlign: "left" }}>
                <label htmlFor="details" style={{ display: "block", marginBottom: 4 }}>
                  Additional Details:
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={3}
                  style={{ width: "100%", padding: "0.5rem" }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#eee",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
