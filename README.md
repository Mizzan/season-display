# classBasedComponents rules

- Must be a JavaScript class
- Must extend (subclass) React.Components
- Must define a 'render' method that returns some amount of jsx

# rules of state

- only usable with class components ( in functional components with hook )
- props and state different
- update state causes components instantly rerender
- state must be inside the component where it was created
- state can be updated with only setState() method function

# Benefits of classbasedComponents

- Easier code organization
- can use 'state'
- easier to handle user input
- understands lifecycle events
- easier to do things when the app first starts

# components lifecycle

- constructor
- render
- ( components visible on the screen )
- componentDidMount
- ( sit and wait for updates )
- componentDidUpdate
- ( sit and wait until this component is no longer shown )
- componentWillUnmount
