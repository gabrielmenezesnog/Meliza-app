export default class InputValitation {
  verifyEmail(email: string) {
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      return true;
    } else {
      return false;
    }
  }

  verifyPassword(password: string) {
    if (password != null) {
      if (password.length < 8) {
        return false;
      } else {
        return true;
      }
    }
  }
  confirmPassword(password: string, confirmation: string) {
    if (password === confirmation) {
      return true;
    } else {
      return false;
    }
  }
}
