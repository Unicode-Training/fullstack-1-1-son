let action = "update";
switch (action) {
  case "create":
  //   case "insert":
  case "add":
    console.log("Thêm mới");
    break;

  case "update":
  case "edit":
    console.log("Cập nhật");
    break;

  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");
    break;

  default:
    console.log("Không hợp lệ");
    break;
}
