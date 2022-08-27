import React, { useState, useEffect } from 'react';
import {Appointment} from './Appointment';

type AptData = {
    StudentName: string;
    TeacherName: string;
    AptDate: string;
    AptNotes: string;
}

function AptManager(){
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
    }, apts);

    return <div>
        <h1>Appointments Manager</h1>
        <ul>
            {apts.map(item =><li key={item.id}>{item.studentName} - {item.teacherName} </li>)}
        </ul>
    </div>;
}

export default AptManager;
