import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';


//Basic structure of a component

    function RenderMenuItem( { dish, onClick } ){
        return(
            <Card key={dish.id}
            onClick={() => onClick(dish.id)}>
            <CardImg width='100%' src={dish.image} alt={dish.name}/>
            <CardImgOverlay className='ml-5'>
                <CardTitle> {dish.name} </CardTitle>
            </CardImgOverlay>
            </Card>
        );
    }


// Another way to implement Menu 
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            // for every item in a list requires a key attribute
            // key helps react to recognize each elements and when it's 
            // updating the screen -> identify every item uniquely.
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );
        });

        console.log("Menu Component render is invoked!");
        return( 
            <div className="container">
                <div className='row'>
                    {menu} 
                </div>
            </div>
        );

    }

        

export default Menu;