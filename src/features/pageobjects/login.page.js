const Page = require('./page'); 

class LoginPage extends Page{
  get usernameField() {
      return $('#user-name');
  }

  get passwordField() {
      return $('#password');
  }

  get loginButton() {
      return $('#login-button');
  }

  get errorMessage() {
      return $('.error-message-container');
  }

  get pageTitle() {
    return browser.getTitle();
}

  login(username, password) {
      this.usernameField.setValue(username);
      this.passwordField.setValue(password);
      this.loginButton.click();
  }
  
  clearFields() {
      this.usernameField.clearValue();
      this.passwordField.clearValue();
  }
}

module.exports = new LoginPage();