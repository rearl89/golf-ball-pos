import React, { useEffect, useState } from "react";
import { fetchGolfBalls } from "./api";

const GolfBallsList = () => {
  const [golfBalls, setGolfBalls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGolfBalls = async () => {
      try {
        const data = await fetchGolfBalls();
        // Sort golf balls alphabetically by brand
        const sortedData = data.sort((a, b) => a.brand.localeCompare(b.brand));
        setGolfBalls(sortedData);
      } catch (error) {
        console.error("Failed to load golf balls:", error);
      } finally {
        setLoading(false);
      }
    };

    loadGolfBalls();
  }, []);

  if (loading) return <p>Loading golf balls...</p>;
  if (!golfBalls.length) return <p>No golf balls found!</p>;

  return (
    <div>
      <h2>Available Golf Balls</h2>
      <ul>
        {golfBalls.map((golfBall) => (
          <li key={golfBall._id}>
            <strong>{golfBall.brand}</strong> - {golfBall.model}(
            {golfBall.condition}) - ${golfBall.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GolfBallsList;
