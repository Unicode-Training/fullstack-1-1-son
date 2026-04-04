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
