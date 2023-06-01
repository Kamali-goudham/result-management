import React, {useEffect, useState} from 'react'
import { FaPen, FaTrash, FaMinusCircle, FaPlus } from "react-icons/fa";

function Showstud() {
  const [resultData, setresultData] = useState([{}])
  const [popup, setPopup] = useState(false)
  const [isCreate, setisCreate] = useState(true)
  const [resultid, setID] = useState("");
  const [name, setName] = useState("");
  const [mark1, setMark1] = useState("");
  const [mark2, setMark2] = useState("");
  const [mark3, setMark3] = useState("");
  const [mark4, setMark4] = useState("");
  const [mark5, setMark5] = useState("");
  const [total, setTotal] = useState("");
  
 
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {};
    if(isCreate){
      data = {
        name,  mark1,mark2,mark3,mark4,mark5,total
      }
    }
    else {
      data = {
        resultid, name,  mark1,mark2,mark3,mark4,mark5,total
      }
    }
    createresults(data, isCreate);
  }
 
//The useEffect Hook allows you to perform side effects in your components : data fetch and update Dom
useEffect(() => {
  getresults();
}, [])

//Getresults API call
const getresults = () => {
  fetch('http://localhost:8085/results').then(
    response => response.json()
  )
  .then(data => {
    console.log(data)
    setresultData(data)
  }, (e) =>{
    console.log(e);
  })
}

//React-async provides a declarative API to perform any REST API calls using a single React component.
//It takes care of handling errors, promise resolution, and retrying promises, and deals with local asynchronous state.

// await fetch(URL):  the asynchronous function is paused until the request completes.
//When the request completes, response is assigned with the response object of the request

// const createresults = async(data, insert) => {
//   try {
//     let URL = 'http://localhost:8085/result'
//     if(insert) URL = 'http://localhost:8085/result'
//     const response = await fetch(URL, {
//       method: "POST", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     console.log("Success:", result);
//     EditPopup();
//     getresults();
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
const createresults = async (data, isCreate) => {
  try {
    let URL = 'http://localhost:8085/result';
    let method = 'POST'; // Default to create a result

    if (!isCreate) {
      // Update the URL and method for updating a result
      URL = 'http://localhost:8085/result/${id}';
      method = 'PUT';
    }

    const response = await fetch(URL, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Success:', result);
    EditPopup();
    getresults();
  } catch (error) {
    console.error('Error:', error);
  }
};

// const deleteresults = async(data) => {
//   try {
//     let URL = 'http://localhost:8085/result/${id}';
   
//     const response = await fetch(URL, {
//       method: "DELETE", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     console.log("Success:", result);
  
//     getresults();
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
const deleteresults = async (result) => {
  try {
    const URL = `http://localhost:9999/result/${result.id}`;
   
    const response = await fetch(URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const deletedResult = await response.json();
    console.log('Success:', deletedResult);

    getresults();
  } catch (error) {
    console.error('Error:', error);
  }
};


const EditPopup = () => {
 
  setPopup(!popup)
}

const SetCreateValues = () => {
  setID("");
  setisCreate(true);
  setName("");
  setMark1("");
  setMark2("");
  setMark3("");
  setMark4("");
  setMark5("");
  setTotal("");
  EditPopup();
}
const SetEditValues = (results) => {
  setID(results.resultid);
  setisCreate(false);
  setName(results.name);
  setMark1(results.mark1);
  setMark2(results.mark2);
  setMark3(results.mark3);
  setMark4(results.mark4);
  setMark5(results.mark5);
  setTotal(results.total);

  EditPopup();
}

  return (
    <div>
      <div style={{
               
                margin: 10,
                backgroundColor: '#E7B10A',
                padding: 10,
                width: 100
              }}  onClick={SetCreateValues}> <FaPlus />  Add result</div>

   

      {(typeof resultData === 'undefined') ? (
        <p>Loading...</p>
            ) : (
              <div style={{
                display : 'flex',
                flexDirection: 'column',
               
               
                padding: "10px",
                fontFamily: "Arial" }}>
                  <div style={{
                display : 'flex',
                padding: 10,
                backgroundColor: '#BFDB38',
                flexDirection: 'row',
                margin: 10,
             
                justifyContent: 'space-between'
              }}>
                  <div>Id</div>
                  <div>Name</div>
                  <div>mark1</div>
                  <div>mark2</div>
                  <div>mark3</div>
                   <div>mark4</div>
                   <div>mark5</div>
                   <div>total</div>
                  <div></div>
                  <div></div>
                  </div>
                  { resultData.map((result, i) => {
                 return(
                  <div style={{
                display : 'flex',
                margin: 10,
                backgroundColor: '#E4C988',
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <div>{result.resultid}</div>
                <br></br>
                  <div>{result.name}</div>
                  <br></br>
                  <div>{result.mark1}</div>
                  <div>{result.mark2}</div>
                   <div>{result.mark3}</div>
                    <div>{result.mark4}</div>
                    <div>{result.mark5}</div>
                    <div>{result.total}</div>
                    <br></br>
                    <br></br>
                    <br></br><br></br>
                    
                  <div onClick={() => SetEditValues(result)}><FaPen/></div>
                  <div onClick={() => deleteresults(result)}><FaTrash/></div>
                 
                  </div> )
                  })}
                 
              </div>
             
            )  }
      {popup && (
     <div style={{
          position: "absolute",
         
          backgroundColor: "#84D2C5",
          height: "100%",
          width: "100%",
          top: 0
         
        }}>

          <div style={{backgroundColor: "#e0e0e0",
          width: "50%",
          height: "50%",
          margin: "auto",
          top: 20}}>
           
<FaMinusCircle style={{padding: 10}} onClick={EditPopup} />
<form onSubmit={handleSubmit}>
  <br></br><br></br><br></br>
  <div style={{flexDirection : "row", padding: 10}}>
  <label>Enter  name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      
  </div>
  <div style={{flexDirection : "row",  padding: 10}}>
      <label>Enter  mark1:
        <input
          type="text"
          value={mark1}
          onChange={(e) => setMark1(e.target.value)}
        />
      </label>
      </div>
      <div style={{flexDirection : "row",  padding: 10}}>
      <label>Enter mark2:
        <input
          type="text"
          value={mark2}
          onChange={(e) => setMark2(e.target.value)}
        />
      </label>
      </div>
      <div style={{flexDirection : "row",  padding: 10}}>
      <label>Enter mark3:
        <input
          type="text"
          value={mark3}
          onChange={(e) => setMark3(e.target.value)}
        />
      </label>
      </div>
       <div style={{flexDirection : "row",  padding: 10}}>
      <label>Enter mark4:
        <input
          type="text"
          value={mark4}
          onChange={(e) => setMark4(e.target.value)}
        />
      </label>
      </div>
      <div style={{flexDirection : "row",  padding: 10}}>
      <label>Enter mark5:
        <input
          type="text"
          value={mark5}
          onChange={(e) => setMark5(e.target.value)}
        />
      </label>
      </div>
      <div style={{flexDirection : "row",  padding: 10}}>
      <label>Enter total:
        <input
          type="text"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
      </label>
      </div>
      <div style={{flexDirection : "row",  padding: 10}}><input type="submit" /></div>
     
    </form>
          </div>
        </div>
        )}
    </div>
  );
}



export default Showstud;