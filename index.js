var ReactHelper = require('react-helper');

module.exports.setup = function() {
  return function(req, res, next) {
    req.reactHelperContext = {};
    req.renderComponent = function(componentName, props) {
      if (!props) {
        props = {};
      }
      props.reactHelperContext = req.reactHelperContext;
      res.locals[componentName] = ReactHelper.renderComponent(componentName, props);
    };
    next();
  }
}

module.exports.addToReactContext = function(context) {
  return function(req, res, next) {
    req.reactHelperContext = Object.assign(req.reactHelperContext, req.reactHelperContext, context)
    next();
  }
}