AccountsUi.config({
  login: {
    onSuccess: () => Router.go('home')
  },
  signUp: {
    enabled: false
  },
  forgot: {
    enabled: false
  }
});
