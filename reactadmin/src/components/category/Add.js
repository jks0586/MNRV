/* eslint-disable no-dupe-class-members */
import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import Select from "react-select";
import CategoryService from "../../services/category";
const STATUSOPTION = [
  { value: 0, label: "Disable" },
  { value: 1, label: "Enable" },
];
class CategoryAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      description: "",
      imagePreviewUrl: "",
      parent_id: "",
      order: "",
      imagePreview: "",
      parents: [],
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleParentChange = this.handleParentChange.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(this.state);
    const senddata={};
    senddata.name=this.state.name;
    senddata.description=this.state.description;
    senddata.image=this.state.imagePreviewUrl;
    senddata.order=this.state.order;
    senddata.parent_id=this.state.parent_id;
    senddata.status=this.state.status;
    // console.log(senddata);
    CategoryService.creteCategory(senddata).then(response=>{
      console.log(response);
    }).catch(error=>{
      console.log(error);
    })
}

  handleStatusChange=(status)=>{
    this.setState({ status:status.value }, () =>
      console.log(`Option selected:`, status.value)
    );
  }
  handleOrderChange = (e) => {
    this.setState({
      order: e.target.value,
    });
  };
  handleParentChange = (parent_id) => {
    this.setState({ parent_id:parent_id.value }, () =>
        console.log(`Option selected:`, parent_id.value)
    );
  }
  handleDescriptionChange=(e)=>{
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  handleNameChange=(e)=>{
    e.preventDefault();
    this.setState({ name: e.target.value });
  }
  handleImageChange=(e)=>{
    e.preventDefault();
    let filereader = new FileReader();
    let file = e.target.files[0];
    this.setState({
      image: file,
    });
    // console.log(e.target.files[0]);
    filereader.onloadend = () => {
      let imagePreview = null;
      if (filereader.result) {
        imagePreview = (
          <img src={filereader.result} width="100" height="100" alt="" />
        );
      } else {
        imagePreview = (
          <div className="previewText">Please select an Image for Preview</div>
        );
      }

      this.setState({
        imagePreviewUrl: filereader.result,
        imagePreview: imagePreview,
      });
    };
    filereader.readAsDataURL(file);
  }

  render() {
    const { parent_id,status} = this.state;
    return (
      <>
        <Card bg="dark" text="white">
          <div className="text-start m-2">Category Add</div>
          <Card bg="dark p-2">
            <Form method="POST" onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="text-start">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Category Name"
                  name="name"
                  onChange={this.handleNameChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label className="text-start">Description</Form.Label>
                <Form.Control
                  name="description"
                  as="textarea"
                  rows={3}
                  onChange={this.handleDescriptionChange}
                />
              </Form.Group>
              <Form.Group controlId="formImage" className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={this.handleImageChange}
                />
                <div className="imgPreview">{this.state.imagePreview}</div>
              </Form.Group>
              <Form.Group controlId="formparentId" className="mb-3">
                <Form.Label>Parent Id</Form.Label>
                <Select
                  value={parent_id}
                  placeholder="Select Parent"
                  onChange={this.handleParentChange}
                  options={this.state.parents}
                  required={true}
                  name="parent_id"
                />
              </Form.Group>

               <Form.Group controlId="formOrder" className="mb-3">
                <Form.Label>Order</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Order"
                  name="order"
                  required={true}
                  value={this.state.value}
                  onChange={this.handleOrderChange}
                />
              </Form.Group>
              <Form.Group controlId="formparentId" className="mb-3">
                <Form.Label>Status</Form.Label>
                <Select
                value={status}
                placeholder="Select Status"
                onChange={this.handleStatusChange}
                options={STATUSOPTION}
                required={true}
                name="status"
            />
              </Form.Group>
              

              <Button className="text-center" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Card>
      </>
    );
  }
}

export default CategoryAdd;
