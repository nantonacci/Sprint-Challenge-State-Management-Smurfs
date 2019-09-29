1. What problem does the context API help solve?

Context API allows passing of props without prop drilling. This makes state management easier.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions establish the basic functions or assignments of variables. Reducers do the heavy lifting, executing these functions and performing more complex operations to scale down data. The store holds everything together and is the "single source of truth" because it holds the state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is when state is held in the store. Component state is when state lives on each individual component. Application state would be useful when it is important that a global state is update that will be utilized by many components. Component state makes sense for smaller scale uses of state

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It provides the ability to handle asynchronous operations inside action creators

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I don't have a favorite. I don't understand any of them well enough to choose.
