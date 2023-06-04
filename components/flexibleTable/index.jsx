'use client'

import { useEffect, useState } from "react";
import "./styles.css";

const data1 = [
  { month: "April", quantity: 20, quality: "good" },
  { month: "May", quantity: 22, quality: "great" },
  { month: "January", quantity: 12, quality: "norm" },
  { month: "February", quantity: 17, quality: "poor" },
  { month: "March", quantity: 21, quality: "good" },
  { month: "June", quantity: 23, quality: "great" },
  { month: "July", quantity: 25, quality: "good" },
  { month: "August", quantity: 28, quality: "great" }
];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Table data={data1} />
    </div>
  );
}

function Table({ data }) {
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    setShowData(!!Array.isArray(data) && typeof data[0] === "object");
  }, [data]);

  return (
    <>
      {showData && (
        <table>
          <thead>
            {Object.keys(data[1]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                {Object.entries(item).map(([key, value]) => (
                  <td key={key}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
