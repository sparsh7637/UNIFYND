import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import MetaTags from "./MetaTags"; // Import MetaTags

function Fee() {
  const [increaseRate, setIncreaseRate] = useState(5);
  const [annualCost, setAnnualCost] = useState({
    tuition: "",
    roomBoard: "",
    booksSupplies: "",
    otherExpenses: "",
  });
  const [state, setState] = useState("Alabama");
  const [type, setType] = useState("2 Private");
  const [results, setResults] = useState([]);
  const [totalFees, setTotalFees] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    const fetchDefaultValues = async () => {
      const docRef = doc(db, "fee_db", state);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const selectedTypeData = data[type];
        setAnnualCost({
          tuition: selectedTypeData[0],
          roomBoard: selectedTypeData[1],
          booksSupplies: selectedTypeData[2],
          otherExpenses: selectedTypeData[3],
        });
      }
    };

    fetchDefaultValues();
  }, [state, type]);

  const handleCalculate = (event) => {
    event.preventDefault();
    let rate = parseFloat(increaseRate) / 100;

    let fees = [
      parseFloat(annualCost.tuition),
      parseFloat(annualCost.roomBoard),
      parseFloat(annualCost.booksSupplies),
      parseFloat(annualCost.otherExpenses),
    ];

    let sum = 0;
    let resultArray = [];

    for (let year = 1; year <= parseInt(type.split(" ")[0]); year++) {
      let totalForYear = fees.reduce((a, b) => a + b, 0);
      let feeForYear = Math.floor(totalForYear * 83.52);
      sum += feeForYear;
      resultArray.push({ year, feeForYear });
      fees = fees.map((fee) => fee + fee * rate);
    }

    setResults(resultArray);
    setTotalFees(sum);
    setIsCalculated(true);
  };

  // Use effect to scroll after the table (result) is rendered
  useEffect(() => {
    if (isCalculated) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [isCalculated, results]); // Depend on isCalculated and results

  return (
    <>
      <MetaTags
        title="College Fee Estimator - UNIFYND"
        description="Get detailed insights into college fees and estimate your educational costs with UNIFYND’s comprehensive fee estimator tool."
        keywords="college fees, fee estimator, educational costs, college tuition, international fees"
        url="https://unifynd.in/fee"
        image="https://unifynd.in/path/to/fee-image.jpg" // Update with actual image URL
      />

      <div style={{ width: "100%", height: "100%"}}>
        <div className="container mt-4">
          <h2>College Fee Estimator</h2>
          <form className="form">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Field</th>
                  <th>Input</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>State</td>
                  <td>
                    <select
                      className="form-control"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="Alabama">Alabama</option>
                      <option value="Alaska">Alaska</option>
                      <option value="Arizona">Arizona</option>
                      <option value="Arkansas">Arkansas</option>
                      <option value="California">California</option>
                      <option value="Colorado">Colorado</option>
                      <option value="Connecticut">Connecticut</option>
                      <option value="Delaware">Delaware</option>
                      <option value="Florida">Florida</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Hawaii">Hawaii</option>
                      <option value="Idaho">Idaho</option>
                      <option value="Illinois">Illinois</option>
                      <option value="Indiana">Indiana</option>
                      <option value="Iowa">Iowa</option>
                      <option value="Kansas">Kansas</option>
                      <option value="Kentucky">Kentucky</option>
                      <option value="Louisiana">Louisiana</option>
                      <option value="Maine">Maine</option>
                      <option value="Maryland">Maryland</option>
                      <option value="Massachusetts">Massachusetts</option>
                      <option value="Michigan">Michigan</option>
                      <option value="Minnesota">Minnesota</option>
                      <option value="Mississippi">Mississippi</option>
                      <option value="Missouri">Missouri</option>
                      <option value="Montana">Montana</option>
                      <option value="Nebraska">Nebraska</option>
                      <option value="Nevada">Nevada</option>
                      <option value="New Hampshire">New Hampshire</option>
                      <option value="New Jersey">New Jersey</option>
                      <option value="New Mexico">New Mexico</option>
                      <option value="New York">New York</option>
                      <option value="North Carolina">North Carolina</option>
                      <option value="North Dakota">North Dakota</option>
                      <option value="Ohio">Ohio</option>
                      <option value="Oklahoma">Oklahoma</option>
                      <option value="Oregon">Oregon</option>
                      <option value="Pennsylvania">Pennsylvania</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Rhode Island">Rhode Island</option>
                      <option value="South Carolina">South Carolina</option>
                      <option value="South Dakota">South Dakota</option>
                      <option value="Tennessee">Tennessee</option>
                      <option value="Texas">Texas</option>
                      <option value="Utah">Utah</option>
                      <option value="Vermont">Vermont</option>
                      <option value="Virginia">Virginia</option>
                      <option value="Washington">Washington</option>
                      <option value="Washington DC">Washington DC</option>
                      <option value="West Virginia">West Virginia</option>
                      <option value="Wisconsin">Wisconsin</option>
                      <option value="Wyoming">Wyoming</option>
                    </select>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>
                    <select
                      className="form-control"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="2 Private">2 Private</option>
                      <option value="4 Private">4 Private</option>
                      <option value="2 Public">2 Public</option>
                      <option value="4 Public">4 Public</option>
                    </select>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Tuition</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={annualCost.tuition}
                      onChange={(e) =>
                        setAnnualCost({
                          ...annualCost,
                          tuition: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>$</td>
                </tr>
                <tr>
                  <td>Room and Board</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={annualCost.roomBoard}
                      onChange={(e) =>
                        setAnnualCost({
                          ...annualCost,
                          roomBoard: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>$</td>
                </tr>
                <tr>
                  <td>Books and Supplies</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={annualCost.booksSupplies}
                      onChange={(e) =>
                        setAnnualCost({
                          ...annualCost,
                          booksSupplies: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>$</td>
                </tr>
                <tr>
                  <td>Other Expenses</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={annualCost.otherExpenses}
                      onChange={(e) =>
                        setAnnualCost({
                          ...annualCost,
                          otherExpenses: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>$</td>
                </tr>
                <tr>
                  <td>College cost increase rate</td>
                  <td>
                    <input
                      value={increaseRate}
                      type="text"
                      className="form-control"
                      onChange={(e) => setIncreaseRate(e.target.value)}
                    />
                  </td>
                  <td>%</td>
                </tr>
              </tbody>
            </table>
            <button
              id="submit"
              className="btn btn-success"
              onClick={handleCalculate}
            >
              Calculate
            </button>
            &nbsp;
            <button
              type="reset"
              className="btn btn-primary"
              onClick={() => {
                setAnnualCost({
                  tuition: "",
                  roomBoard: "",
                  booksSupplies: "",
                  otherExpenses: "",
                });
                setIncreaseRate(5);
                setResults([]);
                setTotalFees(0);
                setIsCalculated(false);
              }}
            >
              Clear
            </button>
          </form>
        </div>
        {isCalculated && (
          <div className="container mt-5">
            <table className="table table-bordered" id="resultTable">
              <thead className="thead-dark">
                <tr>
                  <th className="text-center">Year</th>
                  <th className="text-center">Fees in Rupees</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index}>
                    <td className="text-center">{result.year}</td>
                    <td className="text-center">
                      {result.feeForYear.toLocaleString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4 className="text-center mt-4">
              Total College Fee - {totalFees.toLocaleString("en-IN")} Rs
            </h4>
          </div>
        )}
      </div>
    </>
  );
}

export default Fee;
