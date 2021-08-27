import React from 'react';

class Teachers extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      dummy: 'mummy',
    };
  }

  render() {
    return (
      <div className="teacherContainer">
        <div className="teachersRow1">
          <div className="teacherProfile">Mr.Dingle</div>
          <div className="teacherProfile">Mrs.Bang</div>
        </div>
        <div className="teachersRow2">
          <div className="teacherProfile">Mr.Dope</div>
          <div className="teacherProfile">Mrs.Chit</div>
        </div>
      </div>
    );
  }
}
export default Teachers;
