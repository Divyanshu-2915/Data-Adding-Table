import * as React from 'react'
import { useState } from 'react';


export default function Member(){
    const [memberData, setMemberData] = useState({
        Fullname: "",
        Age: "",
        EmailID: "",
        Mobile: "",
        Gender: "",
        Qualification: ""
      });
      const handleChange=(event)=>{
        debugger;
        setMemberData({...memberData,[event.target.name]: event.target.value})
            };
      const handleSubmit = (event) => {
       event.preventDefault();
        console.log(memberData);
        userDisplay();
      };
return (
<div>
    <form onSubmit={handleSubmit}>
        <div>
            <h1>Club Membership Form</h1>
        </div>
        <div>
            <table>
                <tr>
                    <td>
                        Fullname
                    </td>
                    <td>
                        <input id="txtFullname" name="Fullname"
                        placeholder="Member Fullname" value={memberData.Fullname}
                        onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Age
                    </td>
                    <td>
                        <input id="txtAge" name="Age"
                         placeholder="Member Age" value={memberData.Age}
                         onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Email ID
                    </td>
                    <td>
                        <input id="txtEmailID" name="EmailID"
                         placeholder="Member Email ID" value={memberData.EmailID}
                         onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Mobile
                    </td>
                    <td>
                        <input id="txtMobile" name="Mobile"
                        placeholder="Member Mobile" value={memberData.Mobile}
                        onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Gender
                    </td>
                    <td>
                    <input id="txtGender" name="Gender"
                        placeholder="Gender Here" value={memberData.Gender}
                        onChange={handleChange}/>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        Qualification
                    </td>
                    <td>
                    <input id="txtQuali" name="Qualification"
                        placeholder="Qualification Here " value={memberData.Qualification}
                        onChange={handleChange}/>
                        
                    </td>
                </tr>
                <tr>
                    <td colSpan ="2">
                        <button onClick={handleSubmit}>Submit</button>
                    </td>
                </tr>
            </table>
        </div>
      </form>
      <div>
        <table id='table1'>
            <thead>
                <th>Name</th>
                <th>Mail</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Education</th>
                <th>Mobile</th>
            </thead>
            <tbody>

            </tbody>
        </table>
      </div>
   </div>
  );
}

function userDisplay()
{
    debugger;
  console.log("Hii");
  let arr = [];
  let arr1 = [{
    Fullname: "",
        Age: "",
        EmailID: "",
        Mobile: "",
        Gender: "",
        Qualification: ""
  }];

  const a = document.getElementById("txtFullname").value;
  const b = document.getElementById("txtAge").value;
  const c = document.getElementById("txtEmailID").value;
  const d = document.getElementById("txtMobile").value;
  const e = document.getElementById("txtGender").value;
  const f = document.getElementById("txtQuali").value;

  arr1 = [{
        Fullname: a,
        Age: b,
        EmailID: c,
        Mobile: d,
        Gender: e,
        Qualification: f
  }];

  arr.push(arr1);
  console.log(arr);


  const aplha = document.getElementById('table1');
  aplha.style.display='block';
  aplha.style.border='2px black';
    var row = aplha.insertRow(0);
    var name = row.insertCell(0);
    var mail = row.insertCell(1);
    var age = row.insertCell(2);
    var gender = row.insertCell(3);
    var edu = row.insertCell(4);
    var mobile = row.insertCell(5);
  
name.innerHTML = a.value;
mail.innerHTML=c.value ;  
age.innerHTML=b.value;
gender.innerHTML=e.value;
edu.innerHTML=f.value;
mobile.innerHTML=d.value;
}