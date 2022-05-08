import React from "react";
import CategoryService from "../../services/category";
import {Card} from 'react-bootstrap';
import LetscmsTable from "../common/Table";
class CategoryList extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        columns:{name:'name',description:'description',created:'created'},
        categories:'',
    }
    
}
componentDidMount(){
    CategoryService.allCategories().then((response) => {
        // console.log(response.data);
        this.setState({
            categories: response.data,
        });

        console.log(this.state.categories);
    });
    }


  render() {
    return (
     <>
     <Card bg="dark" text="white">
     <div className="text-start">Category List</div>
     <Card bg="dark p-2">
     <LetscmsTable columns={this.state.columns} data={this.state.categories} />
  </Card>
  </Card>
     </>
    );
  }
}

export default CategoryList;
