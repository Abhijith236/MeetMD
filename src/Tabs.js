
import { useState,useEffect } from 'react';
import './Tabs.css';
import data from './mock-data.json';
import data1 from './mock-data1.json';
import Modal from './Modal';

function Tabs(){

   
    /*const table = document.getElementById("tab1");
    const rowCount = table.rows.length;
    const button = document.getElementById("count");
    
    if (rowCount === 1) {
        button.innerText = "1";
    } 
    else {
    button.innerText = `${rowCount}`;
    }
    const handleClick=()=>{

    }   */

    
    const [rowCount, setRowCount] = useState(0);
    const[openModal,setOpenModal]=useState(false);
    const[Index,setIndex]=useState(0)
    const[Request,setRequest]=useState(data)
    const[History,setHistory]=useState(data1) 
    
    
    useEffect(() => {
        const table = document.getElementById("tab1");
        setRowCount(table.rows.length);
      }, []);    
    
    
      return(
            <div className="container">
            <header className='head'>Meet MD</header>
            <button className='rto'>Request Time Off</button>
           
            <div className='tabs'>
                <div className='tablist'>
                    <button className='tabhead' onClick={()=>{setIndex(0)}}>
                        Request <div className='count'>{rowCount-1}</div>
                    </button>
                    <button className='tabhead' onClick={()=>{setIndex(1)}}>
                        History
                    </button>
                </div>
                <div className='tabcontent1' hidden={Index!==0}>
                    <table className='tab1' id='tab1'>
                        <thead className='th1'>
                            <tr className='tr1'>
                                <th width="32px">DATE</th>
                                <th width='150px'>NAME</th> 
                                <th >PHONE</th> 
                                <th >REQ_DATE</th> 
                                <th >REQ_TIME</th> 
                                <th width="300px">PURPOSE OF MEET</th> 
                                <th >ACTION</th>     
                            </tr>
                        </thead>
                        <tbody className='tb1'>
                            {Request.map((r)=>(
                            <tr className='tc1'>
                                <td >{r.date}</td>
                                <td >{r.name}</td>
                                <td >{r.phone}</td>
                                <td >{r.req_date}</td>
                                <td >{r.req_time}</td>
                                <td >{r.purposeofmeet}</td>
                                <td >
                                    <button className='taction' onClick={()=>setOpenModal(true)} id='btn'>Take Action</button>
                                    <Modal open={openModal}/>
                
                                </td>
                            </tr>
                            ))} 
                        </tbody>    
                    </table>
                </div>
                <div className='tabcontent2' hidden={Index!==1}>
                    <label className='Sorting'>Sort By</label>
                    <select className='sort1' name='Sort By1' >
                        <option value="blank" disabled selected hidden>Status</option>
                        <option value='acpt'>Accepted</option>
                        <option value='dec'>Declined</option>
                    </select>
                    <select className='sort2' name='Sort By2' >
                        <option value='Date'>Date</option>
                        <option value='Name'>Name</option>
                    </select>
                    <table className='tab1' >
                        <thead className='th2'>
                            <tr className='tr2'>
                                <th width="32px">DATE</th>
                                <th width="150px">NAME</th> 
                                <th>PHONE</th> 
                                <th>REQ_DATE</th> 
                                <th>REQ_TIME</th> 
                                <th width="300px">PURPOSE OF MEET</th> 
                                <th>STATUS</th>     
                            </tr>
                        </thead>
                        <tbody>
                        {History.map((h)=>(
                            <tr className='tc2'>
                                <td>{h.date}</td>
                                <td>{h.name}</td>
                                <td>{h.phone}</td>
                                <td>{h.req_date}</td>
                                <td>{h.req_time}</td>
                                <td>{h.purposeofmeet}</td>
                                <td>
                                    <button className='accept' onClick={()=>setOpenModal(true) }>Accepted</button>
                                    <Modal open={openModal}/>
                                </td>
                            </tr>
                            ))} 
                        </tbody>
                    </table>
                </div>
            </div>
            </div>


        )
  
}

export default Tabs;