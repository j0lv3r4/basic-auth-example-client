_.templateSettings.interpolate = /\{\{(.*?)\}\}/g;

var Templates = {};

// "form-login" or "form-signup"
Templates.form = [
  "<a href='/'>Home</a>",
  "<h2>{{ title }}</h2>",
  "<form id='{{ form }}'>",
    "<fieldset>",
      "<div class='field-group'>",
        "<label for='email'>Email</label>",
        "<input type='email' placeholder='user@domain.com'>",
      "</div> <!-- .field-group -->",
      "<div class='field-group'>",
        "<label for='password'>Password</label>",
        "<input type='password' placeholder='yourpassword'>",
      "</div> <!-- .field-group -->",
      "<div class='field-group'>",
        "<input type='submit' value='Submit'>",
      "</div> <!-- .field-group -->",
    "</fieldset>",
  "</form>"
].join('');

Templates.index = [
  "<p><a class='btn' href='#login'>Login</a></p>",
  "<p><a class='btn' href='#signup'>Signup</a></p>"
].join('');

for (var temp in Templates) {
  if (Templates.hasOwnProperty(temp)) {
    Templates[temp] = _.template(Templates[temp]);
  }
}
