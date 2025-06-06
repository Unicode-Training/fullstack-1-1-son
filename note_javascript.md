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
