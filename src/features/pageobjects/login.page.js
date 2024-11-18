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

  async login(username, password) {
      await this.usernameField.setValue(username);
      await this.passwordField.setValue(password);
      await this.loginButton.click();
  }
  
  async clearFields() {
    await this.usernameField.clearValue();
    await this.passwordField.clearValue();
  }
  async clearPassword() {
    await this.passwordField.clearValue();
}
}

module.exports = new LoginPage();