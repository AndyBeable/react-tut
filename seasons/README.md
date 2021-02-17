## Rules of State

- Only usuable with class components / but can be used with function components if you use hooks
- Not to be confused with props
- State is a JS object that contains data relative to a component
- Updating State on a component causes the component to almost instantly rerender
- State must be initialized when a component is created
- State can only be updated using the function setState

## Initializing State

class App extends React.Component { // this allows us to take all the methods from React component and use them in our app

constructor(props) { // has to be the first thing passed so is good place to set state

super(props); // must be included, tells react to keep the props from react as well as our own

    this.state = { lat: null }; // initializing state

}

## App Lifecycle walkthrough

- Loaded up our index.html in the browser, which then requested our JS inside of it
- Instance of of App component created
- App components 'constructor' function gets called
- State obj is created and assigned to this.state property
- We call geolocation service
- React calls the components render method
- App returns JSX, gets rendered to page as HTML
  ....... wait........
- We get results of geolocation
- We update out state obj with a call to this.setState
- React sees that we updated the state of a component
- React calls our render method a second time
- Render methods returns some updated JSX

## Lifecycle Methods

A component lifecycle method is a function that we can define inside our class based components

- constructor (good place to do one-time setup, also do initial data loaded (request to API for eg). Not recommended. Put data-loading in componentDidMount)
- render (avoid doing anything besides returning jsx)
  .......content becomes visible on screen.......
- componentDidMount (good place to do data-loading)
  .......sit and wait for updates.........
- componentDidUpdate (good place to do more data-loading when state/props change)
  .......sit and wait until this component is no longer shown.....
- componentWillUnmount (good place to do cleanup)

Other Lifecycle methods (rarely used)

- shouldComponentUpdate
- getDerviedStateFromProps
- getSnapshotBeforeUpdate
