var toolbox = {
  slugify: function(s) {
    var from = 'àáäãâèéëêìíïîòóöôõùúüûñç·/_,:;@.',
    to = 'aaaaaeeeeiiiiooooouuuunc--------',
    i = from.length;

    while( --i >= 0 ) {
    s = s.replace(new RegExp(from.charAt(i), 'gi'), to.charAt(i));
    }

    return s.replace(/^\s+|\s+$/g, '') //trim
    .replace(/[^-a-zA-Z0-9\s]+/ig, '')
    .replace(/\s/gi, "-")
    .replace('---', '-')
    .replace('--', '-')
    .toLowerCase();
  },

  passhash: function(username, password) {
    if (password) {
      return SHA256(toolbox.slugify(username) + ":" + password);
    }
  },

  saveToken: function(id, token) {
    if (_.isString(token) && _.isString(id)) {
      localStorage.set(id, token);
    }             
  },

  getToken: function(id) {
    if (_.isString(id)) {
      var token = localStorage.get(id);
      return token;
    } else {
      throw "Invalid ID";
    }
  }
};
