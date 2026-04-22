import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-card">
      <h2>Welcome to Vehicle Sale</h2>
      <p>
        Buy and sell trusted cars, SUVs, bikes, and vans with confidence. Explore listings,
        compare prices, and find your next vehicle quickly.
      </p>

      <div className="home-highlight-grid">
        <div className="highlight-box">
          <h3>Verified Listings</h3>
          <p>Browse quality vehicles with clear details and pricing.</p>
        </div>
        <div className="highlight-box">
          <h3>Fast Search</h3>
          <p>Filter by budget, model, year, and mileage with ease.</p>
        </div>
        <div className="highlight-box">
          <h3>Secure Contact</h3>
          <p>Connect with sellers directly through trusted channels.</p>
        </div>
      </div>

      <Link className="primary-link" to="/vehicles">
        View Vehicles
      </Link>
    </div>
  );
}
