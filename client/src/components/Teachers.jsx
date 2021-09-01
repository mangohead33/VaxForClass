/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import MyClass from './MyClass';

class Teachers extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      displayClass: false,
      classData: [],
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    axios.get('/math')
      .then((data) => {
        this.setState({
          classData: data.data,
        });
      })
      .catch((err) => {
        console.log('Error in handling request: ', err);
      });
  }

  onClick() {
    this.setState({
      displayClass: true,
    });
  }

  render() {
    const { displayClass, classData } = this.state;
    console.log(classData, ' empty');
    return (
      <>
        {
!displayClass
&& (
<div className="teacherContainer">
  <div className="teachersRow1">
    <div className="teacherProfile" onClick={this.onClick}>Mr.Dingle</div>
    <div className="teacherProfile">Mrs.Bang</div>
  </div>
  <div className="teachersRow2">
    <div className="teacherProfile">Mr.Dope</div>
    <div className="teacherProfile">Mrs.Chit</div>
  </div>
</div>
)
      }
        {
  displayClass
  && <MyClass classData={classData} />
}
      </>
    );
  }
}
export default Teachers;
