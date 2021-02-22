## App Flow

- User types in input
- Callback gets invovked
- We call setState with the new value
- Component rerenders
- Input it told what its value is (coming from state)

Understanding 'this' in classes
To find out what 'this' is referring to, look at where the function is being invoked. Look to the left of the dot. Eg, truck.driveMyTruck()

## Retrieving data from API

React App is only about showing content to users/handling user interactions. It is not repsonsible for getting data (making an ajax request) is done by a separate piece of code in our app.

AJAX client (is what gets us the data back)

- AXIOS - 3rd party package. NPM install
- Fetch - function built in to modern browsers. Not installation.

## Request flow

- Component renders itself one time with no list of images
- onSearchSubmit method called
- Request made to unsplash
  ..........wait...........
- Request complete
- set image data on state of App component
- App component rerenders to show images

## React Refs

System to give you direct access to a single DOM element that is rendered by a component.
