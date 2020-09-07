import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';


//Basic structure of a component
class Menu extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            selectedDish: null 
        };
        console.log("Menu Component constructor is invoked!");
    }

    componentDidMount(){
        console.log("Menu Component componentDidMount is invoked!");
    }
    

    render(){

        const menu = this.props.dishes.map((dish) => {
            // for every item in a list requires a key attribute
            // key helps react to recognize each elements and when it's 
            // updating the screen -> identify every item uniquely.
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name}/>
                        <CardImgOverlay className='ml-5'>
                            <CardTitle> {dish.name} </CardTitle>
                        
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log("Menu Component reder is invoked!");
        return( 
            <div className="container">
                <div className='row'>
                    {menu} 
                </div>
                    {/* {this.renderDish(this.state.selectedDish)} */}
            </div>
        );
    }
}

export default Menu;