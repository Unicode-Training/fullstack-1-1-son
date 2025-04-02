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

### Pseudo

- Phần tử giả (Pseudo Element)
  Cú pháp: selector::tenphantu
  - before
  - after
  - first-line
  - first-letter
  - selection
  - placeholder
- Lớp giả (Pseudo Class)
  Cú pháp: selector:tenlop

* hover, active, focus (Chỉ áp dụng với form)
* checked (Radio, Checkbox)
* disabled (Áp dụng với form)
* not --> loại trừ selector
* first-child --> Chọn phần tử con đầu tiên
* last-child --> Chọn phần tử con cuối cùng
* nth-child --> Chọn phần tử bất kỳ theo số thứ tự
* valid --> Thẻ input có nội dung (Kết hợp với required)

### Các thuộc tính định dạng văn bản

1. Thuộc tính color

- Thay đổi màu văn bản

2. Thuộc tính font-size

- Thay đổi cỡ chữ của văn bản
- Đơn vị:

* Tuyệt đối: px
* Tương đối: em, rem

Đơn vị em: Tỷ lệ với font-size của thẻ cha
Đơn vị rem: Tỷ lệ với font-size của mặc định trình duyệt

3. Thuộc tính line-height

- Thay đổi chiều cao của dòng văn bản
- Tỷ lệ với font-size của chính nó

4. Thuộc tính font-family

- Thay đổi font chữ của văn bản

5. Thuộc tính font-weight

- Thay đổi độ dày của văn bản

6. Thuộc tính font-style

- Thiết lập chữ nghiêng

7. Thuộc tính letter-spacing

- Thay đổi khoảng cách giữa các ký tự

8. Thuộc tính word-spacing

- Thay đổi khoảng cách giữa các từ

9. Thuộc tính word-wrap

- Wrap văn bản bị tràn

10. Thuộc tính text-indent

- Tạo khoảng cách của dòng đầu tiên trong văn bản so với lề trái

11. Thuộc tính text-align

- Căn chỉnh văn bản theo chiều ngang

* left
* center
* right
* justify

### Thuộc tính background

Thay đổi nền của phần tử html: màu, ảnh

1. background-color

Thay đổi màu nền

2. background-image

Thay đổi hình nền

3. background-repeat

Thay đổi chế độ lặp của hình nền

4. background-position

Thay đổi vị trí của background

5. background-size

Thay đổi kích thước của ảnh nền

6. background-attachment

Cố định hình nền khi kéo thanh cuộn

7. background

background: color image repeat position / size attachment

### Thuộc tính border

Tạo đường viền cho phần tử html

Border = width + style + color

- border-width --> Độ dày của bordeer
- border-style --> Kiểu (solid, dashed, dotted, double)
- border-color --> Màu của border (Mặc định màu đen)

Thuộc tính mở rộng (của 3 thuộc tính trên)

border-{side}-width
border-{side}-style
border-{side}-color

side: cạnh (top, left, right, bottom)

- border-top-width
- border-left-width
- border-right-width
- border-bottom-width

- border-top-style
- border-left-style
- border-right-style
- border-bottom-style

- border-top-color
- border-left-color
- border-right-color
- border-bottom-color

Thuộc tính viết tắt

- border: width style color
- border-{side}: width style color

side: cạnh (top, left, right, bottom)

==>

- border-top
- border-left
- border-right
- border-bottom

### Thuộc tính border-radius

Bo góc các phần tử html

border-radius: giatri

Nếu hình vuông và border-radius >= 50% ==> Tạo thành hình tròn

### Thuộc tính width - height

- width: Chiều rộng
- height: Chiều cao
- Đơn vị: px, % (Tỷ lệ theo width, height của thẻ cha), vw, vh

Lưu ý: width, height chỉ tác dụng với các thẻ block

inline không thay đổi được width, height. Muốn thay đổi phải chuyển thành block (đổi thẻ html, display: block hoặc display: inline-block)

Đơn vị vw = viewport width
Đơn vị vh = viewport height

### padding - margin

- padding: Tạo khoảng cách đệm giữa border và nội dung của thẻ html
- margin: Tạo khoảng cách lề bên ngoài border so với thẻ html khác

Lưu ý:

- padding, margin không có tác dụng top và bottom với thẻ inline
- Nếu dùng đơn vị % --> Tỷ lệ với width của thẻ cha

Các thuộc tính mở rộng

- padding-top
- padding-left
- padding-right
- padding-bottom

- margin-top
- margin-left
- margin-right
- margin-bottom

Lưu ý margin

- Cho phép giá trị âm
- Có giá trị auto

### Box model

- Mặc định khi set width, height --> Kích thước của content
- Muốn đổi theo kích thước của border dùng thuộc tính box-sizing

### Reset CSS

- Mặc định các trình duyệt sẽ có sẵn css để tác động với các thẻ html --> Vỡ layout
- Nên reset tất cả các thẻ html về mặc định:

* padding: 0;
* margin: 0;
* box-sizing: border-box
* border: 0;

### Display

- block
- inline
- inline-block
- none

### Flex (Flexible Box Module)

- Kỹ thuật chia layout (bố cục) trang web một cách linh hoạt và mềm dẻo (Giải quyết các nhược điểm của các cách cũ: inline-block, float)
- Cấu tạo flex

* Trục: Trục chính và trục vuông góc, vị trí trục (start, center, end)
* Flex container và Flex item

1. Các thuộc tính trong nhóm flex container

- display: flex --> Kích hoạt flexbox
- flex-direction: Chọn hướng cho trục chính (Mặc định row = nằm ngang)

* row: Nằm ngang theo chiều từ trái sang phải
* row-reserse: Nằm ngang theo chiều từ phải sang trái (Đảo ngược)
* column: Nằm dọc theo chiều từ trên xuống dưới
* column-reverse: Nằm dọc theo chiều từ dưới lên trên

- justify-content: Căn chỉnh các item theo hướng song song với trục chính

* flex-start
* center
* flex-end
* space-around
* space-between
* space-evenly

- align-items: Căn chỉnh các item theo hướng song song với trục cross (Vuông góc với trục chính)

* stretch
* flex-start
* center
* baseline
* flex-end

- flex-wrap: Wrap các item khi vượt quá ra khỏi kích thước container (Xuống dòng)

* nowrap
* wrap
* wrap-reverse

- gap: Căn chỉnh khoảng cách giữa các item
- row-gap: Căn chỉnh gap theo hàng
- column-gap: Căn chỉnh gap theo cột

2. Các thuộc tính trong nhóm flex item

- flex-grow: Tính toán tỉ lệ của item để lấp đầy khoảng cách còn trống của container
- flex-shrink: Tính toán tỉ lệ để tự động co lại các item khi bị tràn ra ngoài container
- flex-basis: Thiết lập kích thước ban đầu cho các item
- order: Sắp xếp vị trí các item theo mong muốn
