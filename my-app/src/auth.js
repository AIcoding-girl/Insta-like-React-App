class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  register(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthentificated() {
    return this.authenticated;
  }
}

export default new Auth();

// const fakeAuth = {
//   isAuthentificated: false,
//   authenticate(cb) {
//     this.isAuthentificated = true;
//   },
// };
