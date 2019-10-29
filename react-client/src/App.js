import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import JournalTable from './JournalTable';
import Request from "./Services/Request"
class App extends Component {
  constructor() {
    super();
    this.state = {
        activeGroup: 0
    };
}
componentDidMount() {
  Request.getStudents().then((students) => {
      this.setState({students: students});
  });
}


  render() {
    const students = [
      [
          {name: 'Иванов Иван Иванович', markPrIS: 5, markSII: 4},
          {name: 'Петров Пётр Петрович', markPrIS: 3, markSII: 2}
      ],
      [
          {name: 'Валиева Лидия Павловна', markPrIS: 3, markSII: 5},
          {name: 'Илюшин Игорь Витальевич', markPrIS: 5, markSII: 5}
      ],
      [
          {name: 'Голутвин Семён Юрьевич', markPrIS: 4, markSII: 2},
          {name: 'Сёмина Анна Николаевна', markPrIS: 3, markSII: 5}
      ]
  ];


    return (
      <div className="App">
      <JournalTable students={students[this.state.activeGroup]}/>
      <button onClick={() => {
          this.setState({activeGroup: 0});
      }}>Группа 1</button>
      <button onClick={() => {
          this.setState({activeGroup: 1});
      }}>Группа 2</button>
      <button onClick={() => {
          this.setState({activeGroup: 2});
      }}>Группа 3</button>
  </div>
  
    );
  }
}


export default App;
