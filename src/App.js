import React, { useState } from "react";
import './App.css';

function MembershipForm() {
    const [data, setData] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newData = {
            name: formData.get("name"),
            email: formData.get("email"),
            dob: formData.get("DOB"),
            gender: formData.get("gender"),
            education: formData.get("education"),
        };
        console.log(newData);
        setData([...data, newData]);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Enter Name - </label>
                <input type="text" name="name" placeholder="Enter Name" />
                <br/>
                <label>Enter Mail - </label>
                <input type="email" name="email" placeholder="Enter Email" />
                <br/>
                <label>Date Of Birth - </label>
                <input type="date" name="DOB"/>
                <br/>
                <label>Gender - </label>
                <br/>
                Male -   <input type="radio" className="radiobtn" id="male" name="gender" value="Male" required></input>
                <br/>
                Female - <input type="radio" className="radiobtn" id="female" name="gender" value="Female" required></input>
                <br/>
                Other - <input type="radio" className="radiobtn" id="other" name="gender" value="Other" />
                <br/>
                <label>Qualification - </label>
                <select id="education" name="education" required>
                    <option value="">Select</option>
                    <option value="10"> 10th </option>
                    <option value="12"> 12th </option>
                    <option value="bachelors"> Bachelor's </option>
                    <option value="masters"> Master's </option>
                </select>
                <button type="submit">Add Member</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Qualification</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.dob}</td>
                            <td>{item.gender}</td>
                            <td>{item.education}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MembershipForm;