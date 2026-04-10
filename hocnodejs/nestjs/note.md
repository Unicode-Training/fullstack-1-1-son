# CLI

Tạo module

nest generate module ten-module

Tạo controller

nest generate controller ten-module

Tạo service

nest generate service ten-module

Tạo resource

nest generate resource ten-module

# Queue

Luồng chính --> add job --> Đẩy công việc vào hàng đợi, chờ worker lấy ra xử lý

Luồng worker (Luồng riêng) --> Lấy job trong hàng đợi ra để xử lý --> Sau khi xử lý tự xóa job khỏi hàng đợi

# Quên mật khẩu

Form quên mật khẩu: Trường email

Khi user nhập email, bấm submit --> Gọi api POST /auth/forgot-password

- Kiểm tra email có tồn tại trong bảng users hay không?
- Tạo mã OTP --> Lưu vào redis (Đặt thời gian 1p) --> Gửi email cho user
- Trả về response cho front-end: Yêu cầu user check mail

Front-end: Render form mới có trường nhập OTP => Khi user nhập OTP ==> Gọi API POST /auth/verify-otp

- Kiểm tra otp trên redis
- Trả về Response cho front-end

Front-end: Render form có 2 trường: Mật khẩu mới và nhập lại mật khẩu mới ==> Khi user nhập mật khẩu và submit ==> gọi API PUT /auth/reset-password

- Check 2 mật khẩu khớp nhap
- Cập nhật vào bảng users mật khẩu mới (Mã hóa mật khẩu trước khi update)
- Gửi cho user email
- Xóa otp trên redis
