import React, {useState , useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';

const CheckStatus = () => {
    const [fetchedData, setFetchedData] = useState([]);
    const [inputId, setInputId] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() =>{
        const fetchingData = async() =>{
            try{
                const fakeUrl = "https://jsonplaceholder.typicode.com/todos";
                const getUrl = await fetch(fakeUrl);
                const urlData = await getUrl.json();
                setFetchedData(urlData);
            }catch(error){
                setStatus("Error occured in fetching data - ", error);
            }
        };
        fetchingData();
    },[]);

    const handleCheckStatus = () =>{
        const _data = fetchedData.find((t) => t.id === parseInt(inputId)); 
        if(_data){
           setStatus( _data.completed ? "Completed" : "Not Completed");
        }
        else{
            setStatus("NO ID exists");
        }
    }

  return (
    <div>
        <Navbar />
        <br />
        <h2>Check Status of user</h2>
        <input type='number' placeholder='enter user ID' id='inputId' value={inputId} onChange={(e)=> setInputId(e.target.value)} />
        <br />
        <h3>{status}</h3>
        <br />
        <button onClick={()=> handleCheckStatus()}>Check Status</button>
    </div>
  )
}

export default CheckStatus;
