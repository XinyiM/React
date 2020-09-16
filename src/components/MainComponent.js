import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
// 'withRouter' is required for configuring my React Component to connect to Redux
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import { connect } from 'react-redux';

// To connect the main component with the redux store.

// this const will map Redux Store's state into props
// that will become available to my component 
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders

  }
    
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId});
  }

  render() {

    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion = {this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
      );
    }
// the route will pass three props - match, loation and history here.
// only using match props here

    const DishWithId = ({match}) => {
      return(
        // use a filter to select all the dishes which dish.id equals to the match.params.dishId(parse it to integer with base 10),
        // choose the first element of the dishes array. 
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
        comments = {this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}/>
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              {/* Above should be the exact menu with nothing following. 
              if no 'exact' added, the route will matches /menu and will never come down to dishWithId part*/}
              <Route path='/contactus'component={Contact} />
              <Route path='/aboutus' component={() => <About leaders={this.props.leaders}/>}/>
              <Redirect to="/home" />
          </Switch>
        <Footer/>
      </div>
    );
  }
}

// connect your component with the react router
export default withRouter(connect(mapStateToProps)(Main));