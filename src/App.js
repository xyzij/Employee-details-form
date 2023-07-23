import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  return (
    <div className="container">
      <form>
        <h1>Employee Details Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className ="field">
            <label>Employee Id</label>
            <input type="text" name="employee Id" placeholder="Employee Id" />
          </div>
          <div className ="field">
            <label>Full Name</label>
            <input type="text" name="full name" placeholder="Full Name" />
          </div>
          <div className ="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email"  />  
          </div>
          <div className ="field">
            <label>Date of Birth</label>
            <input type="text" name="date of birth" placeholder="Date of Birth"  />
          </div>
          <div className ="field">
            <label>Department</label>
            <input type="text" name="department" placeholder="Department"  />
          </div>
          <div className ="field">
            <label>Contact No</label>
            <input type="text" name="contact no" placeholder="Contact No"/>
          </div>
          <button className="fluid ui button">Submit</button>


        </div>
      </form>
    </div>
  );
}

export default App;
