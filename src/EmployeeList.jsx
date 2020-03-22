import React from "react";
import {Link} from 'react-router-dom'
import "./App1.scss";
import elist from './json/elist'

export class EmployeeList extends React.Component {


  render() {
    return (
      <div className="elist">
            {elist.map((empdata,index)=> {
              return<div>
                <span>{empdata.name}</span>
                <span>{empdata.age}</span>
                <span>{empdata.gender}</span>
                <span>{empdata.email}</span>
                <div>{empdata.phoneNo}</div>
        </div>
        }
      )}       

      </div>
    );
  }
}
export default EmployeeList