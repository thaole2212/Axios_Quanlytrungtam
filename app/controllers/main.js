var NDServices = new NguoiDungServices();
var validation = new Validation();
function layDSND() {
  NDServices.layDS()
    .then(function (response) {
      console.log(response.data);
      hienThi(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
layDSND();
function hienThi(mangND) {
  var content = "";
  mangND.map(function (item) {
    content += `<tr>
    <td>${item.id}</td>
    <td>${item.taiKhoan}</td>
    <td>${item.matKhau}</td>
    <td>${item.hoTen}</td>
    <td>${item.email}</td>
    <td>${item.ngonNgu}</td>
    <td>${item.loaiND}</td>
    <td><img src="${item.hinhAnh}" alt=""></td>
    <td>${item.moTa}</td>
    <td>
    <button class="btn-danger" onclick="xoa('${item.id}')">Xóa Người Dùng</button>
    <button class="btn btn-info" data-toggle="modal"
    data-target="#myModal" onclick="xemChiTiet('${item.id}')" >Xem</button>
    </td>
    </tr>
    `;
  });
  document.getElementById("tblDanhSachNguoiDung").innerHTML = content;
}
function themND() {
  // var id=document.getElementById("TaiKhoan").value;
  var tk = document.getElementById("TaiKhoan").value;
  var ten = document.getElementById("HoTen").value;
  var email = document.getElementById("Email").value;
  var mk = document.getElementById("MatKhau").value;
  var loaiND = document.getElementById("loaiNguoiDung").value;
  var ngonNgu = document.getElementById("loaiNgonNgu").value;
  var moTa = document.getElementById("MoTa").value;
  var hinh = document.getElementById("HinhAnh").value;

  var isValid = true;


    NDServices.layDS()
      .then(function (response) {
        isValid &=
          validation.checkEmpty(tk, "tbTK", "Tai khoản không được để trống") &&
          validation.checkID(
            tk,
            "tbTK",
            "Tai khoản không được trùng",
            response.data
          );
        isValid &=
          validation.checkName(
            ten,
            "tbHoTen",
            "Tên không đúng định dạng chữ"
          ) && validation.checkEmpty(ten, "tbHoTen", "Tên không được để trống");
        isValid &=
          validation.checkEmail(
            email,
            "tbEmail",
            "Email không đúng định dạng"
          ) &&
          validation.checkEmpty(email, "tbEmail", "Email không được để trống");
        isValid &=
          validation.checkPass(mk, "tbMK", "mật khẩu không đúng định dạng") &&
          validation.checkEmpty(mk, "tbMK", "mật khẩu không được để trống");
        isValid &= validation.checkEmpty(
          hinh,
          "tbAnh",
          "Hình ảnh không được để trống"
        );
        isValid &= validation.checkDropdown(
          "loaiNguoiDung",
          "tbND",
          "Bạn chưa chọn người dùng"
        );
        isValid &= validation.checkDropdown(
          "loaiNgonNgu",
          "tbNN",
          "Bạn chưa chọn ngôn ngữ"
        );
        isValid &=
          validation.checkMoTa(
            moTa,
            "tbMota",
            "Mô tả không được vượt quá 60 từ"
          ) &&
          validation.checkEmpty(moTa, "tbMota", "Mô tả không được để trống");

        if (isValid) {
          var nd = new NguoiDung(
            tk,
            ten,
            mk,
            email,
            loaiND,
            ngonNgu,
            moTa,
            hinh
          );
          NDServices.them(nd)
            .then(function (response) {
              console.log(response.data);
              layDSND();
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

function xemChiTiet(id) {
  NDServices.laychitiet(id)
    .then(function (response) {
      console.log(response.data);
      document.getElementById("TaiKhoan").value = response.data.taiKhoan;
      document.getElementById("HoTen").value = response.data.hoTen;
      document.getElementById("idnhanvien").value = response.data.id;
      document.getElementById("Email").value = response.data.email;
      document.getElementById("MatKhau").value = response.data.matKhau;
      document.getElementById("loaiNguoiDung").value = response.data.loaiND;
      document.getElementById("loaiNgonNgu").value = response.data.ngonNgu;
      document.getElementById("MoTa").value = response.data.moTa;
      document.getElementById("HinhAnh").value = response.data.hinhAnh;
    })
    .catch(function (error) {
      console.log(error);
    });
}
function capNhatND() {
  var tk = document.getElementById("TaiKhoan").value;
  var id = document.getElementById("idnhanvien").value;
  var ten = document.getElementById("HoTen").value;
  var email = document.getElementById("Email").value;
  var mk = document.getElementById("MatKhau").value;
  var loaiND = document.getElementById("loaiNguoiDung").value;
  var ngonNgu = document.getElementById("loaiNgonNgu").value;
  var moTa = document.getElementById("MoTa").value;
  var hinh = document.getElementById("HinhAnh").value;
 
  var isValid = true;


  NDServices.layDS()
    .then(function (response) {
      isValid &=
        validation.checkEmpty(tk, "tbTK", "Tai khoản không được để trống") &&
        validation.checkID(
          tk,
          "tbTK",
          "Tai khoản không được trùng",
          response.data
        );
      isValid &=
        validation.checkName(
          ten,
          "tbHoTen",
          "Tên không đúng định dạng chữ"
        ) && validation.checkEmpty(ten, "tbHoTen", "Tên không được để trống");
      isValid &=
        validation.checkEmail(
          email,
          "tbEmail",
          "Email không đúng định dạng"
        ) &&
        validation.checkEmpty(email, "tbEmail", "Email không được để trống");
      isValid &=
        validation.checkPass(mk, "tbMK", "mật khẩu không đúng định dạng") &&
        validation.checkEmpty(mk, "tbMK", "mật khẩu không được để trống");
      isValid &= validation.checkEmpty(
        hinh,
        "tbAnh",
        "Hình ảnh không được để trống"
      );
      isValid &= validation.checkDropdown(
        "loaiNguoiDung",
        "tbND",
        "Bạn chưa chọn người dùng"
      );
      isValid &= validation.checkDropdown(
        "loaiNgonNgu",
        "tbNN",
        "Bạn chưa chọn ngôn ngữ"
      );
      isValid &=
        validation.checkMoTa(
          moTa,
          "tbMota",
          "Mô tả không được vượt quá 60 từ"
        ) &&
        validation.checkEmpty(moTa, "tbMota", "Mô tả không được để trống");

      if (isValid) {
        var nd = new NguoiDung(
          tk,
          ten,
          mk,
          email,
          loaiND,
          ngonNgu,
          moTa,
          hinh
        );
        NDServices.capnhat(nd, id)
    .then(function (response) {
      console.log(response.data);
      layDSND();
    })
    .catch(function (error) {
      console.log(error);
    });

      }
    })
    .catch(function (error) {
      console.log(error);
    });

  
}
function xoa(id) {
  NDServices.xoaND(id)
    .then(function (response) {
      console.log(response.data);
      layDSND();
    })
    .catch(function (error) {
      console.log(error);
    });
}
