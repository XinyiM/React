import React, { Component } from 'react';
import { Button, Label, Col, Row, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'


const required = (val) => val && val.length;
const maxLength = (len) =>  (val) => !(val) || (val.length <= len);
const minLength = (len) =>  (val) => (val) && (val.length >= len);


class CommentForm extends Component{


    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    
    handleSubmit(values){
        this.toggleModal();
        console.log("Current State is:" + JSON.stringify(values));
        alert("Current State is:" + JSON.stringify(values));
    }

    render()  {
        return(
            <>
            <Button outline onClick={this.toggleModal}> <i className="fa fa-pencil fa-lg"></i> Submit comment</Button>
            
            
            
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className='form-group'>
                                {/* this col occupies 6 col,with the offset is 2. */}
                                <Label htmlfor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model='.rating' name='rating'
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlfor="name" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model='.name' id='name' name='name' 
                                    placeholder="Your Name" 
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}/>
                                    <Errors 
                                        className="text-danger" 
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be greater than 2 chars",
                                            maxLength: "Must be 15 chars or less",
                                        }}
                                    />
                                </Col>      
                            </Row>

                            <Row className='form-group'>
                                <Label htmlfor="comments" md={2}>Comments</Label>
                                <Col md={10}>
                                    <Control.textarea model='.comments' id='comments' name='comments' 
                                    rows="12" 
                                    className="form-control"/>
                                </Col>
                            </Row>

                            
                            <Row className='form-group'>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
            </Modal>
                </>
        );
    };
} 

export default CommentForm;