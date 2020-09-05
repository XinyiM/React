import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


class Dishdetail extends Component{

    renderDish(dish){
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

    
    renderComments(comments){
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

    

    render(){
        
        const {dish} = this.props;
        // check if there is a selected dish, if not, then return a null div.
        // if there is a selected dish => this.props.dish is not null  then return dishDetail
        if (dish != null){
        return(
            <div class = 'container'>
                <div class = "row">
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h4> Comments</h4>
                        {this.renderComments(dish.comments)}
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
}

export default  Dishdetail;