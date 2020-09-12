---
typora-copy-images-to: ../../../../Desktop/屏幕快照 2020-09-12 上午10.44.54.png
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

![](/Users/maxinyi/Desktop/屏幕快照 2020-09-12 上午10.44.54.png)

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























