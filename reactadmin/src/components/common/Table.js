/* eslint-disable no-useless-constructor */
import React from "react";
import { Table } from "react-bootstrap";
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen,faEye } from '@fortawesome/free-solid-svg-icons';

class LetscmsTable extends React.Component {
constructor(props) {
    super(props);
    // this.state={
    //     data:[]
    // }
}

capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
componentDidMount(){
    // console.log(this.props.data.length);
    // this.setState={data:this.props.data}
    // console.log(this.state.data);

}

  render() {
    return (
     <>
    <Table striped bordered hover variant="dark">
    
    <thead>
      <tr>
      {this.props.columns && 
            this.props.columns.length > 0 && 
            this.props.columns.map((item,index) => (
                <th key={index}>{this.capitalizeFirstLetter(item.label)}</th>
            ))}
        
      </tr>
    </thead>
    <tbody>
        {this.props.data && 
            this.props.data.length > 0 && 
            this.props.data.map((item,index) => (
            <tr key={index}>
            <td>1</td><td>{item.name}</td>
            <td>{item.description}</td>
            <td>{moment(item.createdAt).format("DD MMM,YYYY")}</td>
            <td>{moment(item.updatedAt).format("DD MMM,YYYY")}</td>
            <td><a className="text-white" href={this.props.action.edit+`${item._id}`}> <FontAwesomeIcon icon={faPen} /></a> | <a  className="text-white" href={this.props.action.view+`${item._id}`}> <FontAwesomeIcon icon={faEye} /></a></td>
            </tr>))}
    </tbody>
  </Table>  
     </>
    );
  }
}

export default LetscmsTable;
