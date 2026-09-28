CV LÊ HUY HOÀNG · WEBSITE HỒ SƠ ỨNG VIÊN
=========================================

1. CÁCH MỞ
   Mở trực tiếp file index.html bằng trình duyệt (Chrome, Edge, Safari).
   Không cần cài đặt hay chạy server. Cần Internet để tải font chữ Google Fonts;
   khi offline trang vẫn chạy nhưng dùng font hệ thống thay thế.

2. CẤU TRÚC THƯ MỤC
   index.html        Nội dung và bố cục trang (các khối theo mẫu firewatchgame.com)
   css/style.css     Giao diện. Phần 1: bố cục, màu sắc, font. Phần 2: animation
   js/app.js         Dữ liệu 4 chặng kinh nghiệm, parallax, cửa sổ chi tiết,
                     đếm số, hiệu ứng cuộn
   assets/           Hình ảnh
     portrait.jpg          Ảnh chân dung (khối Tóm tắt và chân trang)
     hero-workspace.jpg    Ảnh nền đầu trang
     role-presales.jpg     Ảnh thẻ Pre-Sale (Mục tiêu nghề nghiệp)
     role-pm.jpg           Ảnh thẻ Project Manager
     role-ba.jpg           Ảnh thẻ Business Analyst
     exp-aits.jpg          Chặng 1 · AITS
     exp-fsi.jpg           Chặng 2 · FSI
     exp-onehealth.jpg     Chặng 3 · OneHealth
     exp-drai.jpg          Chặng 4 · DrAI
     quote-code.jpg        Nền khối trích dẫn

3. CÁCH CẬP NHẬT NHANH
   - Đổi màu chủ đạo:   css/style.css, khối :root ở đầu file
                        (--blue, --cyan, --amber, --ink ...)
   - Đổi font chữ:      thẻ <link> Google Fonts trong index.html
                        và biến --sans, --mono trong :root
   - Sửa kinh nghiệm:   js/app.js, mảng JOBS (time, title, org, duties, projects)
   - Sửa chi tiết vị trí: js/app.js, mảng ROLES (goals, proof, tags)
   - Sửa số liệu:       index.html, khối class="stats"; con số đếm lấy từ
                        thuộc tính data-count
   - Đổi ảnh:           thay file trong assets/ và giữ nguyên tên,
                        hoặc sửa đường dẫn tương ứng
   - Liên hệ cá nhân:   index.html, thẻ <footer id="contact">
   - Tắt animation:     xóa Phần 2, Phần 3, Phần 4 trong style.css và 2 khối
                        "ANIMATION" cuối app.js
   - Đổi chữ gõ tự động: app.js, mảng words (vai trò ở ảnh bìa)
                        và biến cmd (lệnh terminal ở chân trang)

4. ĐƯA LÊN MẠNG (tùy chọn)
   Tải nguyên thư mục lên GitHub Pages, Netlify hoặc Vercel; file chính là index.html.

5. NGUỒN ẢNH
   Ảnh minh họa lấy từ bộ ảnh Unsplash (giấy phép dùng miễn phí) trong các mẫu
   web mã nguồn mở StartBootstrap và Themefisher. Ảnh chân dung từ CV gốc.
