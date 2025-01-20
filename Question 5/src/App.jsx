import { useState, useEffect } from "react";
import axios from "axios";
const App=()=>{
    const [mydata, setMydata] = useState([]);

    const loadData=()=>{
        let api="http://34.198.81.140/attendance.json";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
    },[])

    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.emp_id} </td>
                <td> {key.name} </td>
                <td> {key.designation} </td>
                <td> {key.department} </td>
                <td> {key.basic_salary} </td>
              </tr>
            </>
        )
    })

    return(
        <>
         <h1 style={{textAlign:"center"}}> Display  data</h1>
         <table border="2px solid " width="100%"> 
      
        <tr style={{backgroundColor:"red", color:"white"}}>
          <td>Empid</td>
          <td>Name</td>
          <td>Designation</td>
          <td>Dapartment</td>
          <td>Base Salart</td>
        </tr>
      {ans}
    </table>
        </>
    )
}

export default App;