import { FaMobileAlt, FaTools, FaUsersCog } from 'react-icons/fa';

const About = () => (
  <section
    style={{
      maxWidth: 1000,
      margin: 'auto',
      padding: '4rem 1.5rem',
      color: '#374151',
      fontSize: 18,
      lineHeight: 1.75,
      userSelect: 'none',
      fontFamily: 'system-ui, sans-serif',
    }}
    aria-labelledby="about-title"
  >
    <h1
      id="about-title"
      style={{
        fontSize: 48,
        fontWeight: 800,
        color: '#111827',
        marginBottom: 32,
        textAlign: 'center',
      }}
    >
      About Us
    </h1>

    <div style={{ maxWidth: 800, margin: '0 auto', marginBottom: 48, textAlign: 'center' }}>
      <p style={{ marginBottom: 20 }}>
        <strong>Home Appliance Service Portal</strong> offers a quick, reliable, and transparent platform for homeowners to schedule service requests
        for appliances such as refrigerators, washing machines, air conditioners, and more.
      </p>
      <p style={{ marginBottom: 20 }}>
        Our certified professionals ensure that your household devices remain in peak condition through expert repairs, diagnostics, and preventive maintenance.
      </p>
      <p>
        You can easily <strong>book, manage, and track</strong> your service appointments from the comfort of your home—ensuring complete peace of mind.
      </p>
    </div>

    {/* Highlights Section */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        maxWidth: 950,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          backgroundColor: '#f9fafb',
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
          textAlign: 'center',
        }}
      >
        <FaTools size={40} color="#2563EB" style={{ marginBottom: 12 }} />
        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Expert Technicians</h3>
        <p style={{ fontSize: 15, color: '#6b7280', marginTop: 8 }}>
          Our professionals are certified, background-verified, and trained on the latest appliance technologies.
        </p>
      </div>

      <div
        style={{
          backgroundColor: '#f9fafb',
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
          textAlign: 'center',
        }}
      >
        <FaUsersCog size={40} color="#10B981" style={{ marginBottom: 12 }} />
        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Customer First</h3>
        <p style={{ fontSize: 15, color: '#6b7280', marginTop: 8 }}>
          We prioritize transparent pricing, customer satisfaction, and fast resolution to ensure your comfort.
        </p>
      </div>

      <div
        style={{
          backgroundColor: '#f9fafb',
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
          textAlign: 'center',
        }}
      >
        <FaMobileAlt size={40} color="#F59E0B" style={{ marginBottom: 12 }} />
        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Digital Convenience</h3>
        <p style={{ fontSize: 15, color: '#6b7280', marginTop: 8 }}>
          Seamlessly book and manage your services via desktop or mobile from anywhere, anytime.
        </p>
      </div>
    </div>

    <div style={{ maxWidth: 800, margin: '4rem auto 0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: 26, fontWeight: 700, color: '#111827', marginBottom: 12 }}>
        Our Mission
      </h2>
      <p style={{ color: '#6b7280' }}>
        To become India's most trusted name in home appliance services by combining skilled technicians, reliable support, and easy online access.
      </p>
    </div>
  </section>
);

export default About;
