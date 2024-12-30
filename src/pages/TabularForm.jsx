import React, {useState , useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
const TabularForm = () => {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(()=>{
        const _getUrlData = async () =>{
            try{
                const fakeUrl = "https://jsonplaceholder.typicode.com/todos";
                const get_Data = await fetch(fakeUrl);
                const url_data = await get_Data.json();
                setFetchedData(url_data);
            }catch(error){
                console.error("error in fetching data - ", error);
            }
        };
        _getUrlData();
    },[]);

  return (
   <>
        <Navbar />
        <br /> <br /> <br />
        <h2>Tabular Form of users data</h2>
        <table>
            <thead>
                <tr>
                    <th>SNO</th>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {fetchedData.length > 0 ? (
                    fetchedData.map((item, index)=>(
                        <tr key={item.id}>
                            <td>{index}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed ? "Completed" : "Not completed"}</td>
                        </tr>
                    ))
                )
                :<tr> 
                    <td>No data to display</td>
                </tr>}
            </tbody>
        </table>
    </>
   )
}

export default TabularForm;
