import React, { useState, useEffect } from 'react';
import {Appointment} from './Appointment';
import {FaTimes} from 'react-icons/fa';
import './Appointments.css';

type AptData = {
    StudentName: string;
    TeacherName: string;
    AptDate: string;
    AptNotes: string;
}

function AptManager(){
    function removeApt(item: Appointment){
        setApts(apts.filter(apt => apt.id!==item.id))
    }

    const [apts, setApts] = useState<Appointment[]>([]);
    useEffect(()=>{
        fetch('data.json')
        .then(response=>response.json())
        .then(data=>{
            let totalApts = 0;
            let apts = data.map((aptData: AptData) =>
                new Appointment(totalApts++, aptData.StudentName, aptData.TeacherName, new Date(aptData.AptDate), aptData.AptNotes));
            setApts(apts);
        });
    }, []);

    return <div className="container">
        <h1>Appointments Manager</h1>
        <table className='hoverable'>
            <thead>
                <tr>
                    <th>Student</th>
                    <th>Teacher</th>
                    <th>Date</th>
                    <th>Notes</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {apts.map(item =>
                <tr key={item.id}>
                    <td data-label="Student">{item.studentName}</td>
                    <td data-label="Teacher">{item.teacherName}</td>
                    <td data-label="Date">{item.date.toLocaleString()}</td>
                    <td data-label="Notes">{item.notes}</td>
                    <td>
                        <button className='remove-btn' onClick={()=>removeApt(item)}>
                            <FaTimes />
                        </button>
                    </td>
                </tr>)
                }
            </tbody>
        </table>
        <ul>
            
        </ul>
    </div>;
}

export default AptManager;
