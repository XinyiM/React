# Week 1

## Lec : Lifecycle Methods Part1



# Week 2

## Lec 1 : Presentational and Container Components

### Presentational Components

- How things look  - markup and styles
- Do not maintain own local state

### Container Components

- making things work - fetching the data and state updates
- make use of presentational components for rendering 
  - Wrap presentational components in wrapping divs

- Provide data to presentational components - in the form of **Props**

## Lec 2 : Lifecycle Methods Part2 

### Updating

`shouldComponentUpdate()` 

Return: Whether the Component is updated during the process

`render()`

everytime the props of the stage for the component is updated, it is called.

`getSnapshotBeforeUpdate()`

Save the information of snapshot of last time when you re-render component 

`componentDidUpdate()`

It will be invoked when the component is updated. 















