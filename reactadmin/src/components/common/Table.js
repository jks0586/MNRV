/* eslint-disable no-useless-constructor */
import React from "react";
import { Table } from "react-bootstrap";
class LetscmsTable extends React.Component {
constructor(props) {
    super(props);
    // this.state={
    //     data:[]
    // }
}

capitalizeFirstLetter(string) {
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
        <th>#</th>
        <th>{this.capitalizeFirstLetter(this.props.columns.name)}</th>
        <th>{this.capitalizeFirstLetter(this.props.columns.description)}</th>
        <th>{this.capitalizeFirstLetter(this.props.columns.created)}</th>
      </tr>
    </thead>
    <tbody>
        {this.props.data && 
            this.props.data.length > 0 && 
            this.props.data.map((item,index) => (<tr key={index}><td>1</td><td>{item.name}</td><td>{item.description}</td><td>{item.createdAt}</td></tr>))}
    </tbody>
  </Table>  
     </>
    );
  }
}

export default LetscmsTable;
