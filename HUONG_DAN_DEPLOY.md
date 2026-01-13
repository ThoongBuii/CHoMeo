# 🚀 Hướng Dẫn Deploy Website Chò Méo - Từng Bước Chi Tiết

## 📋 Tổng Quan
Bạn sẽ thực hiện 3 bước chính:
1. ✅ Khởi tạo Git và push code lên GitHub
2. ✅ Deploy lên Vercel
3. ✅ Kiểm tra website đã hoạt động

---

## BƯỚC 1: Push Code Lên GitHub

### 1.1. Mở Terminal trong thư mục project

Mở Terminal và chạy lệnh:
```bash
cd "/Users/buiminhthong/Documents/Pet School"
```

### 1.2. Khởi tạo Git Repository (nếu chưa có)

```bash
git init
```

### 1.3. Thêm tất cả files vào Git

```bash
git add .
```

### 1.4. Tạo commit đầu tiên

```bash
git commit -m "Initial commit: Chò Méo website"
```

### 1.5. Đổi tên branch thành main

```bash
git branch -M main
```

### 1.6. Kết nối với GitHub Repository

Bạn đã có repository: `https://github.com/ThoongBuii/CHoMeo`

Chạy lệnh:
```bash
git remote add origin https://github.com/ThoongBuii/CHoMeo.git
```

### 1.7. Push code lên GitHub

```bash
git push -u origin main
```

**Lưu ý:** Nếu lần đầu, GitHub sẽ yêu cầu đăng nhập. Bạn có thể:
- Sử dụng Personal Access Token (khuyến nghị)
- Hoặc đăng nhập qua browser

**Nếu gặp lỗi authentication:**
1. Vào GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Chọn quyền: `repo`
4. Copy token và dùng thay cho password khi push

---

## BƯỚC 2: Deploy Lên Vercel

### 2.1. Truy cập Vercel

1. Mở browser và vào: [https://vercel.com](https://vercel.com)
2. Click **"Sign Up"** hoặc **"Log In"** nếu đã có tài khoản
3. Chọn **"Continue with GitHub"** để đăng nhập bằng GitHub

### 2.2. Tạo Project Mới

1. Sau khi đăng nhập, bạn sẽ thấy Dashboard
2. Click nút **"Add New..."** hoặc **"New Project"**
3. Bạn sẽ thấy danh sách repositories từ GitHub

### 2.3. Import Repository

1. Tìm repository **"CHoMeo"** trong danh sách
2. Click vào repository **"CHoMeo"**
3. Vercel sẽ tự động detect Next.js và cấu hình

### 2.4. Cấu Hình Project (Quan trọng!)

Trước khi deploy, kiểm tra các settings:

**Project Name:**
- Để mặc định hoặc đổi thành: `chomeo` hoặc `cho-meo`

**Framework Preset:**
- ✅ Phải là: **Next.js** (Vercel tự detect)

**Root Directory:**
- ✅ Để mặc định: `./` (nếu code ở root)
- Nếu code trong subfolder, chỉnh thành: `./Pet School`

**Build Command:**
- ✅ Mặc định: `npm run build` (đúng rồi)

**Output Directory:**
- ✅ Mặc định: `.next` (đúng rồi)

**Install Command:**
- ✅ Mặc định: `npm install` (đúng rồi)

### 2.5. Environment Variables (Nếu có)

Nếu project có biến môi trường (`.env`), thêm vào đây.
**Hiện tại project không có, nên bỏ qua bước này.**

### 2.6. Deploy!

1. Click nút **"Deploy"** (màu xanh)
2. Đợi Vercel build và deploy (thường mất 2-5 phút)
3. Bạn sẽ thấy progress bar và logs

---

## BƯỚC 3: Kiểm Tra Website

### 3.1. Lấy URL Website

Sau khi deploy thành công:
1. Vercel sẽ hiển thị: **"Congratulations! Your project has been deployed"**
2. Bạn sẽ thấy URL: `https://chomeo.vercel.app` (hoặc tên bạn đặt)
3. Click vào URL để mở website

### 3.2. Kiểm Tra Website Hoạt Động

1. ✅ Website load được
2. ✅ Tất cả pages hoạt động
3. ✅ Responsive trên mobile
4. ✅ Không có lỗi trong console

### 3.3. Share Website

Bạn có thể share URL này cho mọi người:
```
https://chomeo.vercel.app
```

---

## 🔄 Tự Động Deploy (Sau Này)

Sau lần deploy đầu tiên, mỗi khi bạn:
1. Push code mới lên GitHub
2. Vercel sẽ **tự động** deploy lại
3. Website sẽ được cập nhật tự động!

---

## 🎨 Tùy Chỉnh Domain (Tùy chọn)

### Thêm Domain Riêng:

1. Vào Vercel Dashboard
2. Chọn project **"CHoMeo"**
3. Vào tab **"Settings"** → **"Domains"**
4. Thêm domain của bạn (ví dụ: `chomeo.com`)
5. Cấu hình DNS theo hướng dẫn của Vercel

---

## ❌ Xử Lý Lỗi Thường Gặp

### Lỗi: "Build Failed"

**Nguyên nhân:**
- Thiếu dependencies
- Lỗi TypeScript
- Lỗi trong code

**Giải pháp:**
1. Kiểm tra logs trong Vercel
2. Chạy `npm run build` local để test
3. Sửa lỗi và push lại

### Lỗi: "Repository not found"

**Nguyên nhân:**
- Repository chưa được push lên GitHub
- Repository là private và chưa authorize Vercel

**Giải pháp:**
1. Đảm bảo đã push code lên GitHub
2. Vào GitHub Settings → Applications → Authorized OAuth Apps
3. Authorize Vercel

### Lỗi: "Module not found"

**Nguyên nhân:**
- Thiếu dependencies trong `package.json`

**Giải pháp:**
1. Chạy `npm install` local
2. Kiểm tra `package.json` có đầy đủ dependencies
3. Push lại code

---

## 📝 Checklist Trước Khi Deploy

Trước khi deploy, đảm bảo:

- [ ] Code đã được test local (`npm run dev`)
- [ ] Không có lỗi TypeScript (`npm run build`)
- [ ] Tất cả files quan trọng đã được commit
- [ ] `.gitignore` đã có (để không push `node_modules`)
- [ ] `package.json` có đầy đủ dependencies
- [ ] Repository đã được push lên GitHub

---

## 🎉 Hoàn Thành!

Sau khi hoàn thành các bước trên, website của bạn sẽ:
- ✅ Có thể truy cập công khai
- ✅ Có HTTPS tự động
- ✅ Tự động deploy khi có code mới
- ✅ CDN toàn cầu (load nhanh)

**Chúc bạn thành công! 🚀**
