import React from "react";
import CategoryService from "../../services/category";
import {Card} from 'react-bootstrap';
import LetscmsTable from "../common/Table";
class CategoryList extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        columns:[{label:'#Id'},{label:'name'},{label:'description'},{label:'created'},{label:'updated'},{label:'Action'}],
        categories:'',
        action:{'edit':'categories/edit/','view':'categories/view/'},
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
     <div className="text-start"><h3>Manage Category</h3></div>
     <Card bg="dark p-2">
     <LetscmsTable action={this.state.action} columns={this.state.columns} data={this.state.categories} />
  </Card>
  </Card>
     </>
    );
  }
}

export default CategoryList;
