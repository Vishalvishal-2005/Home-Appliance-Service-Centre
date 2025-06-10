import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Appliance Repair",
      description:
        "Expert repair services for all your home appliances to keep them running smoothly and efficiently.",
    },
    {
      title: "Maintenance Services",
      description:
        "Scheduled maintenance to extend the lifespan and performance of your appliances.",
    },
    {
      title: "Installation Services",
      description:
        "Professional installation ensuring your new appliances work safely and optimally.",
    },
    {
      title: "Emergency Repairs",
      description:
        "Quick and reliable emergency repair services when you need them the most.",
    },
    {
      title: "Customer Support",
      description:
        "Friendly and knowledgeable support to assist you throughout your service experience.",
    },
  ];

  return (
    <section
      style={{
        maxWidth: 900,
        margin: "40px auto 80px auto",
        paddingTop: 64,
        paddingBottom: 80,
        textAlign: "center",
        userSelect: "none",
      }}
      aria-labelledby="home-hero-title"
    >
      <h1
        id="home-hero-title"
        style={{
          fontWeight: 700,
          fontSize: 48,
          lineHeight: 1.2,
          marginBottom: 24,
          color: "#111827",
          letterSpacing: "-1px",
        }}
      >
        Welcome to Our Home Appliance Service Center
      </h1>

      <p
        style={{
          fontSize: 18,
          color: "#4B5563",
          maxWidth: 600,
          margin: "0 auto 48px auto",
          lineHeight: 1.7,
        }}
      >
        Hassle-free repair and maintenance for all your appliances. Trusted
        technicians, transparent pricing, and a seamless service experience —
        all in one place.
      </p>
 <button
        onClick={() => navigate("/services")}
        style={{
          marginTop: 40,
          backgroundColor: "#2563eb",
          color: "#fff",
          fontSize: 18,
          padding: "12px 24px",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "#1d4ed8")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "#2563eb")
        }
      >
        Get Started
      </button>
      <h2
        style={{
          fontWeight: 600,
          fontSize: 32,
          marginBottom: 32,
          color: "#111827",
        }}
      >
        
        Our Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {services.map(({ title, description }, idx) => (
          <article
            key={idx}
            tabIndex={0}
            aria-label={title + " service"}
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = hoverShadow;
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = baseShadow;
              e.currentTarget.style.transform = "none";
            }}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = hoverShadow;
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = baseShadow;
              e.currentTarget.style.transform = "none";
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: 20,
                color: "#111827",
                marginBottom: 10,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontWeight: 400,
                color: "#6b7280",
                fontSize: 16,
                lineHeight: 1.5,
              }}
            >
              {description}
            </p>
          </article>
        ))}
      </div>

      <p
        style={{
          fontSize: 18,
          color: "#4B5563",
          maxWidth: 600,
          margin: "60px auto 0 auto",
          lineHeight: 1.7,
        }}
      >
        Contact us today to schedule a service or learn more about how we can
        help you keep your appliances running smoothly.
      </p>

     
    </section>
  );
};

const baseShadow = "0 8px 24px rgba(0, 0, 0, 0.05)";
const hoverShadow = "0 16px 48px rgba(0, 0, 0, 0.08)";

const cardStyle = {
  backgroundColor: "#f9fafb",
  borderRadius: "0.75rem",
  boxShadow: baseShadow,
  padding: "24px 20px",
  userSelect: "none",
  transition: "box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "default",
};

export default Home;
