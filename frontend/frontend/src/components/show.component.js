import React, { useEffect, useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Show() {
  const [resultData, setresultData] = useState([]);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    getresults();
  }, []);

  const getresults = () => {
    fetch('http://localhost:9999/api/results')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch results');
        }
        return response.json();
      })
      .then((data) => {
        setresultData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const EditPopup = (result) => {
    setPopup(result);
  };

  return (
    <div>
      <div
        style={{
          margin: 10,
          backgroundColor: '#E7B10A',
          padding: 10,
          width: 100,
        }}
      >
        Results
      </div>

      <Link
        to="/add"
        style={{
          margin: 10,
          backgroundColor: '#E7B10A',
          padding: 10,
          width: 100,
          textDecoration: 'none',
          color: 'white',
        }}
      >
        Add Result
      </Link>
      

      {typeof resultData === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            fontFamily: 'Arial',
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: 10,
              backgroundColor: '#BFDB38',
              flexDirection: 'row',
              margin: 10,
              justifyContent: 'space-between',
            }}
          >
            <div>Id</div>
            <div>mark1</div>
            <div>mark2</div>
            <div>mark3</div>
            <div>mark4</div>
            <div>mark5</div>
            <div>total</div>
            <div></div>
          </div>
          {resultData.map((result, i) => {
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  margin: 10,
                  backgroundColor: '#E4C988',
                  padding: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div>{result.id}</div>
                <div>{result.mark1}</div>
                <div>{result.mark2}</div>
                <div>{result.mark3}</div>
                <div>{result.mark4}</div>
                <div>{result.mark5}</div>
                <div>{result.total}</div>
                <div onClick={() => EditPopup(result)}>
                  <FaPen />
                </div>
              </div>
            );
          })}
        </div>
      )}
      {popup && (
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#84D2C5',
            height: '100%',
            width: '100%',
            top: 0,
          }}
        >
          <div
            style={{
              backgroundColor: '#e0e0e0',
              width: '50%',
              height: '50%',
              margin: 'auto',
              top: 20,
            }}
          >
            <form>
              <label>
                mark1:
                <input type="text" value={popup.mark1} readOnly />
              </label>
              <br />
              <label>
                mark2:
                <input type="text" value={popup.mark2} readOnly />
              </label>
              <br />
              <label>
                mark3:
                <input type="text" value={popup.mark3} readOnly />
              </label>
              <br />
              <label>
                mark4:
                <input type="text" value={popup.mark4} readOnly />
              </label>
              <br />
              <label>
                mark5:
                <input type="text" value={popup.mark5} readOnly />
              </label>
              <br />
              <label>
                total:
                <input type="text" value={popup.total} readOnly />
              </label>
              <br />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Show;