import React from "react";
import { Form, Card, Button } from "react-bootstrap";
class CategoryAdd extends React.Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            image:"",
            description:"",
            imagePreviewUrl:"",
            parent_id:"",
            order:"",
            imagePreview:"",
            parents:[],
        }
        this.handleNameChange=this.handleNameChange.bind(this);

    }


    handleNameChange(e){
        e.preventDefault();
        this.setState({name:this.value});
    }

  render() {
    return (
      <>
        <Card bg="dark" text="white">
          <div className="text-start m-2">Category Add</div>
          <Card bg="dark p-2">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="text-start">Name</Form.Label>
                <Form.Control type="text" placeholder="Category Name"  onChange={this.handleNameChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label className="text-start">Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group controlId="formImage" className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Button className="text-center" variant="primary" type="submit">Submit</Button>
            </Form>
          </Card>
        </Card>
      </>
    );
  }
}

export default CategoryAdd;
