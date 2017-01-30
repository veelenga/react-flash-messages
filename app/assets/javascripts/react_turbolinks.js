// https://github.com/reactjs/react-rails/issues/607
ReactRailsUJS.handleEvent('turbolinks:before-cache', () => window.ReactRailsUJS.unmountComponents());
