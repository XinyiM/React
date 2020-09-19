---
typora-copy-images-to: ../../../../Desktop/屏幕快照 2020-09-12 上午10.44.54.png
typora-root-url: ../confusion
---

# Week 1

## Lec : Lifecycle Methods Part1



# Week 2

## React Component Types

### Lec 1 : Presentational and Container Components

#### Presentational Components

- How things look  - markup and styles
- Do not maintain own local state

#### Container Components

- making things work - fetching the data and state updates
- make use of presentational components for rendering 
  - Wrap presentational components in wrapping divs

- Provide data to presentational components - in the form of **Props**

### Lec 2 : Lifecycle Methods Part2 

#### Updating

`shouldComponentUpdate()` 

Return: Whether the Component is updated during the process

`render()`

everytime the props of the stage for the component is updated, it is called.

`getSnapshotBeforeUpdate()`

Save the information of snapshot of last time when you re-render component 

`componentDidUpdate()`

It will be invoked when the component is updated. 

### Lec 3 : Functional Components

A much simple way of define React Components.

Define a JS function that returns a React Element. 

**Parameter:** `props`

**Return:** React Element

**Limitations:** Cannot have local state or access lifecycle hooks



## React Router

### Lec 1 : React Virtual DOM

Virtual DOM is a React object 

- A lightweight representation of Browser DOM
- In-memory tree data structure of plain JS objects
- Manipulations extremely fast compared to modifying the browser DOM
- Created completely from scratch on every **setState**

### Lec 2: React Router

-  A collection of navigation components

### Lec 3: Single Page Applications

### Lec 4: React Router: Parameters

Paths specified as a URL

Path: `menu/:id`

#### Route Parameters

`<Link to{'menu/${dish.id}'}>`

- Route passes three props to the component:
- **Match, location, history**

#### match Object

match object provides information about how a <Routepath> matched the URL.

- if path is specified as  `/menu/:id`  then a path like `/menu/42` will result in `match.params.id` being equal to **42**. 

# Week 3

## Lec 1: Controlled Forms

### Exercise 1: Controlled Forms

#### Function.propotype.bind()

`bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

**Example:**

```javascript
this.handleSubmit = this.handleSubmit.bind(this);
```

在浏览器中，`this`指的是全局的"windows"对象。

把`this.handleSubmit()`函数绑定到`this`对象, 然后重新赋给`this.handleSubmit()`.

### Exercise 2: Controlled Form Validation

A pure client side form validation to check to see if the users has input the values in a suitable map.

## Lec 2: Uncontrolled Components

Uncontrolled component approach allows you to handle the form data by the DOM itself.

## Lec 3: The Model-View-Controller Framework

**Design Patterns:** Well-documented solution to a recurring problem

### Model

- manages the behavior and data of the application domain

- responds to requests for information about its state <=== view
- responds to instructions to change state <=== controller

### View

renders the model into a from suitable for interaction typically a user interface element

### Controller

receive user input and initiates a response by making calls on a model objects 

accepts inputs from the **user** and instructs the model and viewport perform actions based on that input.



## Lec 4: The Flux Architecture

![](/flux.png)

## Lec 5: Introduction to Redux

###  Main Principles of Redux

- Sinigle source of truth - Single store and Single state tree 
- State is read-only - only getter, no setters
  - Changes only be done through actions

- Changes are made with **pure functions** - **Reducer Functions**
  - Take previous state -> action -> return next state
  - No mutation of the previous state.

![](/redux.png)

### Redux Concepts

#### State

 Stored in plain JS object

#### Action

plain JS object with a type filed that specifies how to change something in the state

#### Reducer

pure functions that take the current state and action and return a new state 

- Update data immutably do not modify inputs

### Redux Store

holds the current state value

Created using `createStore()`

### React with Redux

 `connect()`: generates a wrapper `container` component that subscribes to the store.

surround your App root with <Provider>

- Takes the store as an attribute
- Makes store accessible to all the components in the container

## Lec 6: React Redux Form

Provide a collection of reducer creators and action creators. 

Form data stored in Redux store in a model.

Validation support for forms.























