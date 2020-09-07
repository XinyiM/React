import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';



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
        
        const {dish} = props;
        // check if there is a selected dish, if not, then return a null div.
        // if there is a selected dish => this.props.dish is not null  then return dishDetail
        if (dish != null){
        return(
            <div className = 'container'>
                <div className = "row">
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish={dish}/>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h4> Comments</h4>
                        <RenderComments comments={dish.comments}/>
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