/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const MyClass = ({ classData }) => {
  const rows = classData.map((student) => {
    const {
      id, firstname, lastname, vaccinated,
    } = student;
    let icon = '☠️';
    if (vaccinated) {
      icon = '💉';
    }
    return (
      <div className="txn-row" key={id}>
        <div className="txn-data">{id}</div>
        <div className="txn-data">{firstname}</div>
        <div className="txn-data">{lastname}</div>
        <div className="txn-data">{icon}</div>
      </div>
    );
  });
  return (
    <>
      <h2>Mr.Dingles Math Class</h2>
      <div className="txn-table">
        <div className="txn-header txn-row">
          <div className="txn-data">Student ID</div>
          <div className="txn-data">First Name</div>
          <div className="txn-data">Last Name</div>
          <div className="txn-data">Vaccination Status</div>
        </div>
        {rows}
      </div>
    </>
  );
};

export default MyClass;
