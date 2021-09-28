function Validation() {
    this.checkEmpty = function (inputVal, ID, message) {
      if (inputVal.trim() === "") {
        document.getElementById(ID).innerHTML = message;
        document.getElementById(ID).style.display = 'block';
        return false;
      } else {
        document.getElementById(ID).innerHTML = "";
        document.getElementById(ID).style.display = 'none';
        return true;
      }
    };
    this.checkID = function (inputVal, ID, message, mang) {
      var isExist = true;
      isExist = mang.some(function (item) {
        return inputVal.trim() === item.taiKhoan;
      });
      if (isExist) {
        document.getElementById(ID).innerHTML = message;
        document.getElementById(ID).style.display = 'block';
  
        return false;
      } else {
        document.getElementById(ID).innerHTML = "";
        return true;
      }
    };
    this.checkName = function (inputval, spanID, message) {
      // RegExp: đối tượng giúp chuyển đổi từ string sang kiêu Regular expressions
      var pattern = new RegExp(
        "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
          "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
          "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$"
      );
      if (pattern.test(inputval)) {
        //hợp lệ
        document.getElementById(spanID).innerHTML = "";
        return true;
      } else {
        // không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        return false;
      }
    };
    this.checkEmail = function (inputVal, ID, message) {
      var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (inputVal.match(pattern)) {
        document.getElementById(ID).innerHTML = "";
        return true;
      } else {
        document.getElementById(ID).innerHTML = message;
        return false;
      }
    };
    this.checkDropdown = function (selID, spanID, message) {
      var optIndex = document.getElementById(selID).selectedIndex;
      // console.log(optIndex);
      if (optIndex != 0) {
        //hợp lệ
        document.getElementById(spanID).innerHTML = "";
        return true;
      } else {
        // không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        return false;
      }
    };
    this.checkPass = function (inputval, spanID, message) {
      var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;
      if (inputval.match(pattern)) {
        //hợp lệ
        document.getElementById(spanID).innerHTML = "";
        return true;
      } else {
        // không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        return false;
      }
    };
    this.checkNumber = function (inputVal, spanID, message) {
      var pattern = /^[0-9]+$/;
      if (inputVal.match(pattern)) {
        //hợp lệ
        document.getElementById(spanID).innerHTML = "";
        return true;
      } else {
        // không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        return false;
      }
    };
    this.checkMoTa=function(inputVal, spanID, message){
      if (inputVal.length <= 60) {
        //hợp lệ
        document.getElementById(spanID).innerHTML = "";
        return true;
      } else {
        // không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        return false;
      }
    }
    
  }
  