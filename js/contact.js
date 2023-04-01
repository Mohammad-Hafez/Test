export class validation {
  constructor() {
    $("#loader").fadeIn(300);
    this.name = $("#name");
    this.email = $("#email");
    this.phone = $("#phone");
    this.age = $("#age");
    this.password = $("#password");
    this.repassword = $("#repassword");
    this.submit = $("#submitBtn");
    this.nameValid;
    this.emailValid;
    this.phoneValid;
    this.ageValid;
    this.passwordValid;
    this.repasswordValid;
    this.name.keyup(() =>       { this.nameValidation();       this.submitValues(); })
    this.email.keyup(() =>      { this.emailValidation();      this.submitValues(); })
    this.phone.keyup(() =>      { this.phoneValidation();      this.submitValues(); })
    this.age.keyup(() =>        { this.ageValidation();        this.submitValues(); })
    this.password.keyup(() =>   { this.passwordValidation();   this.submitValues(); })
    this.repassword.keyup(() => { this.repasswordValidation(); this.submitValues(); })
    $("#loader").fadeOut(300);
  }
  nameValidation() {
    let nameTest = /^(?!\s)[a-zA-Z ]+$/.test(this.name.val());
    this.nameValid = nameTest ;
    if (nameTest == false) {
      $("#nameAlert").css("display", "block");
    } else {
      $("#nameAlert").css("display", "none");
    }
  }
  emailValidation() {
    let emailTest =
      /^(?!\s)(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email.val());
      this.emailValid = emailTest;
      if (emailTest == false) {
      $("#EmailAlert").css("display", "block");
    } else {
      $("#EmailAlert").css("display", "none");
    }
  }
  
  phoneValidation() {
    let phoneTest = /^(?!\s)[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(this.phone.val());
    this.phoneValid = phoneTest ;
    if (phoneTest == false) {
      $("#phoneAlert").css("display", "block");
    } else {
      $("#phoneAlert").css("display", "none");
    }
  }
  ageValidation() {
    let ageTest = /^(?!\s)(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(this.age.val());
    this.ageValid = ageTest;
    if (ageTest == false) {
      $("#ageAlert").css("display", "block");
    } else {
      $("#ageAlert").css("display", "none");
    }
  }
  passwordValidation() {
    let passwordTest = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(this.password.val());
    this.passwordValid = passwordTest ;
    if (passwordTest == false) {
      $("#passwordAlert").css("display", "block");
    } else {
      $("#passwordAlert").css("display", "none");
    }
  }
  repasswordValidation() {
    let repasswordTest = this.repassword.val() == this.password.val();
    this.repasswordValid = repasswordTest ;
    if (repasswordTest == false) {
      $("#repasswordAlert").css("display", "block");
    } else {
      $("#repasswordAlert").css("display", "none");
    }
  }
  submitValues() {
    if (
      this.nameValid &&
      this.emailValid&&
      this.phoneValid&&
      this.ageValid&&
      this.passwordValid&&
      this.repasswordValid
    ) {
      this.submit.removeAttr("disabled", "");
      return true;
    }
    else {
      this.submit.attr("disabled", "disabled");
      return false
    }
  }
}