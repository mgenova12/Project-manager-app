import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects:[
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Moble Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  handleAddProject(project){
    // console.log(project)
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }

  render() {
    return (
      <div className="App">
        <AddProject AddProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
