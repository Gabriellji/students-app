import React, { Component } from 'react';
import './App.css';
import { students } from './data/Students';
import Student from './Components/Student';
class App extends Component {

  state = {
    students,
    showStudents: true,
    showSchool: false,
    showProjects: false
  };

  showStudentsSection = () => {
    this.setState({
      showStudents: true,
      showSchool: false,
      showProjects: false
    });
  };

  showStudentsSchool = () => {
    this.setState({
      showSchool: true,
      showStudents: false,
      showProjects: false
    });
  };

  showStudentsProjects = () => {
    this.setState({
      showProjects: true,
      showSchool: false,
      showStudents: false
    });
  }

  render() {
    return(
      <div>
        <nav>
          <div onClick={this.showStudentsSection}>
            Show Students
          </div>
          <div onClick={this.showStudentsSchool}>
            Show School
          </div>
          <div onClick={this.showStudentsProjects}>
            Show Projects
          </div>
          </nav>
          {
            this.state.showStudents && 
            <div className="students"
          >{
            this.state.students.map((student, index ) => (
              <Student
              key={index} 
              user={student}
              />
            ))
          }</div>
          }
          {
            this.state.showSchool && 
            <div>Show School</div>
          }
          {
            this.state.showProjects && 
            <div>Show Projects</div>
          }
      </div>
    )
  }
}

export default App;