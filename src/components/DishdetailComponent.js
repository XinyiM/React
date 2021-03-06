import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb} from 'reactstrap';
import { Link } from 'react-router-dom';
import  CommentForm  from './CommentFormComponent'

    function RenderDish({dish}){
        return(
		<Card>			
             <CardImg width="100%" src={dish.image} alt={dish.name}/>	     
            <CardBody>	            
                <CardTitle>{dish.name}</CardTitle>	               
                <CardText>{dish.description}</CardText>	               
            </CardBody>	           
        </Card>	        
        );
    }	    

    
    function RenderComments({comments}){
        if(comments != null){
            return comments.map((comment) => (
                    <ul key={comment.id} className="list-unstyled">
                        <li className='mb-2'>{comment.comment}</li>
                        <li>
                            -- {comment.author}{","}
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </li>
                    </ul>
            ));
        }else{
            return <div/>;
        }

    }

     

    const DishDetail = (props) => {
        // check if there is a selected dish, if not, then return a null div.
        // if there is a selected dish => this.props.dish is not null  then return dishDetail
        if (props.dish != null){
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments} />
                        <CommentForm/>
                    </div>
                </div>
                
                </div>
            );
        }else{
            return(
                <div></div>
            )
        }

    }


export default  DishDetail;