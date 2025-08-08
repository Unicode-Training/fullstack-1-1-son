# Ngôn ngữ lập trình JavaScript

- Ngôn ngữ lập trình
- Chạy đa nền tảng: Trình duyệt, Server, App mobile,...
- Để js chạy trên trình duyệt --> Thông qua html

## Các cách viết js

1. Viết trực tiếp js trong file html thông qua thẻ <script></script>

```
<script>
    Code js
</script>
```

2. Tách file js và gọi vào file html thông qua thẻ <script></script>

```
<script src="duong-dan-toi-file-js"></script>
```

## Biến (Variable)

- Dùng để trữ dữ liệu tạm thời
- Trong js không cần khai báo kiểu dữ liệu
- Cú pháp khai báo biến

```js
let tenbien;
let tenbien = giatri;
let tenbien1, tenbien2, tenbien3;
```

Quy tắc đặt tên:

- Không được bắt đầu bằng số
- Cho phép: chữ thường, hoa, số, gạch dưới, và $
- Nên đặt tên biến bằng Tiếng Anh và rõ ràng (Tường minh)
- Quy tắc camelCase

Ví dụ: user, userId, customerShippingAddress

Lưu ý khi khai báo biến

- Trong cùng 1 phạm vi, không được khai báo 1 biến nhiều lần
- Biến mà không gán giá trị --> Tự động được gán giá trị undefined

Hằng số

- Cách khai báo: Thay let thành const
- Quy tắc đặt tên giống như biến
- Không được gán lại
- Khi khai báo phải gán luôn

## Toán tử

1. Toán tử số học

```
+, -, *, /
** --> Lũy thừa
% --> Chia lấy dư
++ --> Tăng 1 đơn vị
-- --> Giảm 1 đơn vị
```

2. Toán tử so sánh

- Kết quả của toán tử so sánh luôn là true / false (Boolean)
- Danh sách toán tử so sánh:

```
>, <, >=, <=
==
===
!=
!==
```

Lời khuyên:

- Không thực phép so sánh: >, <, >=, <= với null và undefined --> Tránh các lỗi phi lý
- Ưu tiên sử dụng so sánh === và !== --> Tránh các lỗi phi lý

3. Toán tử gán (=)

```
+=
-=
/=
*=
%=
**=
```

4. Toán tử kết hợp (&&, ||, !)

&&: Chỉ đúng nếu tất cả biểu thức con đều đúng
||: Đúng khi 1 biểu thức con đúng
!: Chuyển boolean sau để trả về kết quả phủ định

5. Toán tử 3 ngôi (toán tử điều kiện)

```
dieukien ? giatridung : giatrisai
```

6. Toán tử nullish (??)

```
a ?? b
```

- Kiểm tra a xem giá trị có phải là undefined hoặc null không?
- Nếu đúng trả về giá trị b
- Nếu sau trả về giá trị a

## Câu lệnh rẽ nhánh if else

1. Câu lệnh if thiếu

```
if (dieukien) {
    Cau lenh
}
```

2. Câu lệnh if else đầy đủ

```
if (dieukien) {
    Câu lệnh nếu đúng
} else {
    Câu lệnh nếu sai
}
```

3. Câu lệnh if else nhiều nhánh

```
if (dieukien1) {
    Câu lệnh 1
} else if (dieukien2) {
    Câu lệnh 2
} else if (dieukien3) {
    Câu lệnh 3
}
...else {
    Câu lệnh n
}
```

4. Câu lệnh if else lồng nhau

```
if (dieukien) {
    if (dieukien) {

    } else {

    }
} else {

}
```

## Câu lệnh rẽ nhánh switch case

```
switch (variable) {
    case value1:
        Code
        break;
    case value2:
        Code
        break;
    case value3:
        Code
        break;
    default:
        Code
        break;
}
```

## Vòng lặp for

- Vòng lặp giúp lặp chương trình với số lần lặp xác định trước

```
for (bienchay; dieukienchay; buocnhay) {
    Code
}
```

## Vòng lặp while

- Vòng lặp không biết trước số lần lặp mà sẽ dựa biểu thức

```
while (dieukien) {
    Code
}
```

```
do {
     Code
} while (dieukien)
```

## Hàm

- Dùng nhóm các đoạn chương trình con
- Tái sử dụng

Cú pháp

```js
function tenham() {
  Code;
}

function tenham(thamso1, thamso2) {
  Code;
}
```

Ví dụ: getMessage

Hàm return

- Có giá trị trả về
- Sử dụng từ khóa return

Hàm không return (Void)

- Trả về undefined

Hàm ẩn danh (Hàm không tên)

```js
function() {
    Code
}
```

- Đưa vào tham số của hàm khác (Callback Function)
- Gán vào 1 biến (Expression Function)

Arrow function (Hàm mũi tên)

```
const tenham = () => {
    Code
}
```

Tham số còn lại (Rest parameter)

```js
const tenham = (thamso1, thamso2, ...thamsoconlai) => {};
```

Hàm closure

- Hàm được định nghĩa bên trong 1 hàm khác
- Có quyền truy cập vào các biến nằm ngoài phạm vi của nó

Giải thuật đệ quy
