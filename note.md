# Lộ trình

1. Front-End:

- HTML - CSS
- SCSS: Ngôn ngữ tiền xử lý CSS
- JavaScript
- Framework: ReactJS, NextJS
- Dự án

2. Back-End

- TypeScript
- Database: MySQL / MariaDB
- Framework: NestJS
- Dự án

3. Deploy

- Deploy lên VPS + tên miền
- Docker

## Ngôn ngữ đánh dấu siêu văn bản HTML

- Cấu tạo bởi các thẻ (tag)
- Số lượng > 100 thẻ (Chỉ cần học khoảng 30 thẻ)
- Ví dụ: <p>Nội dung</p> (Thẻ đầy đủ), <input /> (Thẻ tự đóng)
- Trong HTML 2 nhóm thẻ:

* Nhóm thẻ block
* Nhóm thẻ inline

### Nhóm thẻ Block

- Luôn ở 1 hàng mới
- Kích thước chiều rộng mặc định bằng với chiều rộng của thẻ cha
- Thay đổi được width, height bằng css

### Nhóm thẻ Inline

- Kích thước chiều rộng mặc định bằng kích thước của nội dung
- Các thẻ inline đứng cạnh nhau sẽ nằm trên 1 hàng
- Không thể thay đổi được width, height bằng css

### Danh sách các thẻ block

1. Thẻ heading

- Thể hiện các tiêu đề trên trang web
- 6 thẻ heading: h1 -> h6

Quy tắc:

- Trên 1 trang web chỉ có 1 thẻ h1
- Các thẻ heading phải liên tiếp nhau

2. Thẻ đoạn văn (p)

- Thể hiện đoạn văn bản
- Không chứa những nội dung khác ngoài văn bản

Semantic (Ngữ nghĩa)

3. Thẻ định dạng danh sách

3.1. Danh sách không sắp xếp

```
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
```

3.1. Danh sách sắp xếp

```
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ol>
```

4. Thẻ phân chia khu vực (div)

- Là thẻ non-semantic (Không có ngữ nghĩa)
- Dùng các nhóm các thẻ khác -> Phục vụ cho việc css
- Không thay đổi định dạng của trang web (Trừ phi có sự tác động của css)

5. Thẻ gạch ngang (hr)

### Các thẻ trong nhóm inline

1. Thẻ chèn liên kết (a)

```
<a href="dia-chi-trang-web">Nội dung hiển thị</a>
```

2. Thẻ chèn hình ảnh (img)

```
<img src="dia-chi-anh" alt="Nội dung thay thế" title="Tiêu đề khi trỏ chuột" width="chieu rong" height="chieu cao"/>
```

## CSS

- Ngôn ngữ định dạng cho trang web
- Tác dụng: Làm đẹp, tạo bố cục cho trang web

### Cách thêm css vào trang web html

1. Tạo thẻ style trong trang html (Internal CSS)

```
<style>
    Code CSS
</style>
```

Lưu ý: Thường thẻ <style> đặt trước thẻ </head>

2. Tạo file css sau đó liên kết với file html (External CSS)

```
<link href="duong-dan-toi-file-css" rel="stylesheet" />
```

3. Thêm css trực tiếp trong thẻ html thông qua thuộc tính style (Inline CSS)

### Selector (Bộ chọn)

- Chọn các phần tử html muốn định dạng trong trang web
- Trong tất cả các thẻ html luôn có 2 thuộc tính là id và class

Class được phép đặt nhiều trong cùng 1 thẻ html (Mỗi class cách nhau bởi dấu cách)
Id chỉ được phép đặt 1

Lưu ý: Không được đặt id, class bắt đầu bằng số và nên sử dụng Tiếng việt, dùng danh tù

1. id, class, tagname

id ==> #id
class ==> .class
tagname ==> tagname

2. Kết hợp selector

2.1. Kết hợp nằm trong

```
selector1 selector2 selector3 {
    code css
}

```

2.2. Kết hợp cha con

```
selector1 > selector2 > selector3 {
    code css
}
```

2.3. Kết hợp cùng cấp

```
selector1selector2selector3 {
    code css
}
```

2.4. Kết hợp kế thừa

```
selector1, selector2, selector3 {
    code css
}
```

2.5. Kết hợp ngang hàng nằm sau

```
selector1 ~ selector2 ~ selector3 {
    code css
}
```

2.6. Kết hợp ngang hàng liền kề

```
selector1 + selector2 + selector3 {
    code css
}
```

2.7. Attribute selector (Chọn theo thuộc tính của thẻ html)

tenthe[tenthuoctinh] --> Chọn thẻ html có thuộc tính
tenthe[tenthuoctinh="giatri"] --> Chọn thẻ html có thuộc tính bằng giá trị (So sánh tuyệt đối)
tenthe[tenthuoctinh^="giatri"] --> Chọn thẻ html có thuộc tính bắt đầu bằng giá trị
tenthe[tenthuoctinh*="giatri"] --> Chọn thẻ html có thuộc tính chứa giá trị
tenthe[tenthuoctinh$="giatri"] --> Chọn thẻ html có thuộc tính cuối cùng bằng giá trị
