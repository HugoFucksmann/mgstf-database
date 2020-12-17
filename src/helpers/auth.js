class Auth {
  constructor() {
    this.authenticated = false;
  }

  get token(){
    return localStorage.getItem('token') || '';
  }

  isAuthenticated() {
    if (this.token.length === 172) {
        return true;
    } else {
      return false;
    }
  }
}


export default new Auth();