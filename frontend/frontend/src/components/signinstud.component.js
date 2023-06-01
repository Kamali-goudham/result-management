import React, { useEffect, useState } from 'react';

function SignInstud() {
  const [result, setResult] = useState(null);
  const [id, setId] = useState('');
  const [cgpa, setCGPA] = useState(null);

  const getResultById = () => {
    fetch(`http://localhost:9999/api/results/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch result');
        }
        return response.json();
      })
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const calculateCGPA = () => {
    if (result) {
      const totalGradePoints = result.mark1 + result.mark2 + result.mark3 + result.mark4 + result.mark5;
      const cgpa = (totalGradePoints / 50 * 10).toFixed(2); // Calculate CGPA and round to 0 decimal places
      setCGPA(cgpa);
    }
  };

  const printResult = () => {
    window.print();
  };

  return (
    <div>
      <label>
        Enter Result ID:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <button onClick={getResultById}>Fetch Result</button>

      {result ? (
        <div>
          <h2 style={{ color: 'green' }}>RESULT:</h2>
          <table style={{ width: '100%', border: '0.5cm grey', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', fontWeight: 'bold', width: '120px' }}>mark1:</td>
                <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{result.mark1}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', fontWeight: 'bold', width: '120px' }}>mark2:</td>
                <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{result.mark2}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', fontWeight: 'bold', width: '120px' }}>mark3:</td>
                <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{result.mark3}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', fontWeight: 'bold', width: '120px' }}>mark4:</td>
                <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{result.mark4}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', fontWeight: 'bold', width: '120px' }}>mark5:</td>
                <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{result.mark5}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd', fontWeight: 'bold', width: '120px' }}>total:</td>
                <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{result.total}</td>
              </tr>
              <tr>
                <td colSpan="2" style={{ padding: '8px', textAlign: 'left', borderTop: '1px solid #ddd' }}>
                  <button onClick={calculateCGPA}>Calculate CGPA</button>
                </td>
              </tr>
              {cgpa && (
                <tr>
                  <td style={{ padding: '8px', textAlign: 'left', borderTop: '1px solid #ddd', fontWeight: 'bold', width: '120px' }}>CGPA:</td>
                  <td style={{ padding: '8px', textAlign: 'left', borderTop: '1px solid #ddd' }}>{cgpa}</td>
                </tr>
              )}
            </tbody>
          </table>
          <button onClick={printResult}>Print Result</button>
        </div>
      ) : null}
    </div>
  );
}

export default SignInstud;
