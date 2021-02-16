# Rules of State

- Only usuable with class components / but can be used with function components if you use hooks
- Not to be confused with props
- State is a JS object that contains data relative to a component
- Updating State on a component causes the component to almost instantly rerender
- State must be initialized when a component is created
- State can only be updated using the function setState

# Initializing State

class App extends React.Component { // this allows us to take all the methods from React component and use them in our app

constructor(props) { // has to be the first thing passed so is good place to set state

super(props); // must be included, tells react to keep the props from react as well as our own

    this.state = { lat: null }; // initializing state

}
