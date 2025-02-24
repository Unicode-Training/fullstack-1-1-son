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
