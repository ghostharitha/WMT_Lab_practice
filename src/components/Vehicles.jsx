const vehicles = [
  {
    id: 1,
    name: "Toyota Prius 2021",
    type: "Hybrid Car",
    price: "$24,500",
    mileage: "39,000 km",
    fuel: "Hybrid",
  },
  {
    id: 2,
    name: "Honda Vezel 2020",
    type: "SUV",
    price: "$27,900",
    mileage: "42,500 km",
    fuel: "Petrol",
  },
  {
    id: 3,
    name: "Nissan Leaf 2022",
    type: "Electric Car",
    price: "$29,700",
    mileage: "18,000 km",
    fuel: "Electric",
  },
  {
    id: 4,
    name: "Yamaha FZ-S V3",
    type: "Motorbike",
    price: "$2,100",
    mileage: "11,200 km",
    fuel: "Petrol",
  },
  {
    id: 5,
    name: "Mitsubishi L300 2019",
    type: "Van",
    price: "$19,600",
    mileage: "66,000 km",
    fuel: "Diesel",
  },
  {
    id: 6,
    name: "Suzuki Alto 2018",
    type: "Compact Car",
    price: "$8,900",
    mileage: "74,000 km",
    fuel: "Petrol",
  },
];

export default function Vehicles() {
  return (
    <div className="page-card">
      <h2>Available Vehicles</h2>
      <p className="vehicles-subtitle">Browse our latest stock.</p>

      <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
          <article key={vehicle.id} className="vehicle-card">
            <h3>{vehicle.name}</h3>
            <p>
              <strong>Type:</strong> {vehicle.type}
            </p>
            <p>
              <strong>Price:</strong> {vehicle.price}
            </p>
            <p>
              <strong>Mileage:</strong> {vehicle.mileage}
            </p>
            <p>
              <strong>Fuel:</strong> {vehicle.fuel}
            </p>
            <button type="button">Contact Seller</button>
          </article>
        ))}
      </div>
    </div>
  );
}
