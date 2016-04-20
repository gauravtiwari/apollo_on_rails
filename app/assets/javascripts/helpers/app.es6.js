const App = window.App || (window.App = {});

App.loggedIn = () => {
  if ($('meta[name=logged_in]').attr('authenticated') === "true") {
    return true;
  } else {
    return false;
  }
};

App.csrfToken = () => {
  return $('[name="csrf-token"]').attr('content');
};

module.exports = App;
