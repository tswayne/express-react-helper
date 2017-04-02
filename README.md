# Express React Helper
### Easily add react to your express or sails app
Express React Helper sets up [React Helper](https://github.com/tswayne/react-helper#react-helper) and adds some convenience methods to make it even easier to add react to your app and bypass all of the setup.

## How to use it
`npm install -g react-helper`

`npm install express-react-helper --save`

`react-helper init -w`

**Wherever your middleware is setup**

`app.use(expressReactHelper.setup());`

**In the Controller**

_req.renderComponent will make the rendered component accessible in the view by the component's name_ 
```javascript
  function(req, res) {
    req.renderComponent('SignUp')
    res.render('view-to-render')
  }
```

**In the View**: _example using handlebars templating engine_
      
```html
   <h1>This view has react in it</h1>
   {{{SignUp}}}
```

**Javascript entry point**

_This is compiled by webpack and what tells the browser to render the react component you've specified in your controller/view.  Read more about setting up webpack [here](https://github.com/tswayne/react-helper#setup)_ 
 
 ```javascript
  const reactHelper = require('reactHelper');
  const SomeComponent = require('./path/to/a/component');
    
  reactHelper.register({SignUp});
 ```

## Features
* Express React Helper has a few added features, but it can also do anything else React Helper can do.  
  * You can check out React Helper's feature list [here](https://github.com/tswayne/react-helper/blob/master/README.md#features)
* Context - Add data to context to be available in every react component rendered with ReactHelper
  * This can be a helpful way to pass server side configs to your react components, login state, or any other props multiple components will need that you don't feel like added to every controllers renderComponent. 
  
  
  _You can add to context like this:_
  
  **Wherever your middleware is setup**
  
  ```javascript
      app.use(expressReactHelper.addToReactContext({baseUrl: 'www.myapp.com'}))
  ```

  _Or by adding to req.reactHelperContext:_
 
  **Anywhere you have access to req**
  
  ```javascript
    req.reactHelperContext.userName = req.user.userName;
  ```

## Example
Check out an example app generated with the react-helper cli using the library - https://github.com/tswayne/react-helper-example.

You can see how express-react-helper is setup [here](https://github.com/tswayne/react-helper-example/blob/master/index.js#L13) and usage in a controller [here](https://github.com/tswayne/react-helper-example/blob/master/src/controllers/ExpressReactHelperExampleController.js).

 
## Contributing
Feel free to open issues or pull requests!