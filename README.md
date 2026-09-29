# AuraDesk

AuraDesk (Focus Space) là ứng dụng desktop đa nền tảng giúp tập trung làm việc và học tập theo phương pháp Pomodoro. Electron mở giao diện HTML hiện có trong cửa sổ riêng, với phong cách glassmorphism, trình phát Spotify và các công cụ âm thanh thư giãn.

## Tính năng

- Bộ đếm Work 25 phút và Short Break 5 phút, có Play/Pause, Reset, Skip và vòng Pomodoro.
- Hiển thị tiến độ bằng vòng tròn; khi phiên Work hoàn tất, ứng dụng cập nhật tổng phút tập trung trong ngày.
- Lưu tổng thời gian tập trung theo ngày trên máy người dùng bằng `localStorage`.
- Phát âm báo khi phiên hoàn tất và âm thanh mưa tạo bằng Web Audio API.
- Trình phát Spotify ở góc dưới bên phải, cùng chế độ Zen và phím tắt.

## Chạy ứng dụng desktop

Yêu cầu Node.js `22.17.0` trở lên và npm. Clone dự án, cài dependency rồi khởi chạy Electron:

```bash
git clone https://github.com/Han2104/AuraDesk.git
cd AuraDesk
npm install
npm start
```

## Đóng gói để phân phối

Tạo thư mục ứng dụng đã đóng gói cho hệ điều hành đang chạy:

```bash
npm run package
```

Tạo một file Windows portable x64 duy nhất (có thể chạy lệnh này từ Linux/macOS):

```bash
npm run package:windows:portable
```

Lệnh tạo `AuraDesk.exe` ngay tại thư mục gốc dự án. Người dùng Windows có thể mở trực tiếp file này; không cần cài app hoặc giữ kèm thư mục runtime. File portable có kích thước lớn vì chứa runtime Electron. Bản hiện tại chưa được ký chứng thư Windows nên SmartScreen có thể hiển thị cảnh báo.

Nếu cần bản thư mục thay vì một file duy nhất, dùng `npm run package:windows`; kết quả nằm trong `out/AuraDesk-win32-x64`.

Để chạy giao diện trong trình duyệt khi phát triển, có thể dùng máy chủ tĩnh từ thư mục gốc:

```bash
python3 -m http.server 8000
```

Sau đó mở `http://localhost:8000/client/code.html`.

## Điều khiển

- **Space**: bắt đầu hoặc tạm dừng timer.
- **R**: đặt lại phiên hiện tại.
- **S**: chuyển sang phiên kế tiếp.
- Chọn tab **Work** hoặc **Short Break** để đổi chế độ và đặt lại thời gian.
- Dùng các nút trên giao diện để bật âm thanh mưa, bật Zen mode, thu gọn player Spotify hoặc xem thông tin phiên.

Các tài nguyên giao diện, font chữ, hình nền và trình phát Spotify hiện được tải từ các dịch vụ bên ngoài. Cần kết nối Internet để sử dụng đầy đủ trải nghiệm trong cả bản Electron và bản trình duyệt.
