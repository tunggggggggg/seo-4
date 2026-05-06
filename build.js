const fs = require('fs');

const base_html = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Meow Harmony</title>
    <meta name="description" content="Meow Harmony - 頂級貓咪美容、貓舍與貓咪用品">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <nav class="navbar">
        <div class="container nav-container">
            <a href="index.html" class="logo">
                <img src="assets/images/brand_logo_1778046811545.png" alt="Meow Harmony Logo" id="nav-logo">
            </a>
            <ul class="nav-links">
                <li><a href="index.html">首頁</a></li>
                <li><a href="about.html">公司簡介</a></li>
                <li><a href="supplies.html">貓咪用品</a></li>
                <li><a href="food.html">貓咪食品</a></li>
                <li><a href="grooming.html">美容預約</a></li>
                <li><a href="adoption.html">找尋家人</a></li>
                <li><a href="contact.html">聯絡我們</a></li>
            </ul>
            <div class="mobile-menu-btn"><i class="fas fa-bars"></i></div>
        </div>
    </nav>

    <main>
        {content}
    </main>

    <footer>
        <div class="container footer-container">
            <div class="footer-col">
                <img src="assets/images/brand_logo_1778046811545.png" alt="Meow Harmony Logo" class="footer-logo" id="footer-logo">
                <p>為您的愛貓提供最頂級的呵護與最優質的生活。</p>
            </div>
            <div class="footer-col">
                <h3>快速連結</h3>
                <ul>
                    <li><a href="about.html">公司簡介</a></li>
                    <li><a href="supplies.html">貓咪用品</a></li>
                    <li><a href="food.html">貓咪食品</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>服務項目</h3>
                <ul>
                    <li><a href="grooming.html">美容預約</a></li>
                    <li><a href="adoption.html">幫貓咪找家人</a></li>
                    <li><a href="contact.html">聯絡我們</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>聯絡資訊</h3>
                <p><i class="fas fa-map-marker-alt"></i> 台北市大安區貓咪路100號</p>
                <p><i class="fas fa-phone"></i> (02) 2345-6789</p>
                <p><i class="fas fa-envelope"></i> hello@meowharmony.tw</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Meow Harmony. All rights reserved.</p>
        </div>
    </footer>
    <script src="assets/js/data.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>`;

const pages = {
    "index.html": {
        "title": "首頁",
        "content": `
        <section class="hero">
            <div class="hero-content">
                <h1>極致呵護，為愛而生</h1>
                <p>Meow Harmony 提供頂級貓咪美容、精選貓咪用品及專業貓舍服務，讓您的愛貓享受最優質的生活體驗。</p>
                <a href="grooming.html" class="btn btn-primary">預約美容</a>
                <a href="supplies.html" class="btn btn-secondary">探索商品</a>
            </div>
        </section>
        <section class="features container">
            <div class="feature-card">
                <i class="fas fa-cut"></i>
                <h3>專業美容</h3>
                <p>使用頂級洗劑與溫柔手法，讓貓咪享受無壓力的SPA時光。</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-shopping-bag"></i>
                <h3>精選用品</h3>
                <p>嚴選全球優質貓咪用品，兼具美感與實用性。</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-heart"></i>
                <h3>尋找家人</h3>
                <p>專業培育與認養媒合，為每一隻貓咪找到溫暖的家。</p>
            </div>
        </section>
        <section class="featured-products container" id="home-products">
            <div class="section-header">
                <h2>熱門推薦</h2>
                <a href="supplies.html" class="view-all">查看全部 <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="product-grid" id="featured-product-grid">
                <!-- Products injected by JS -->
            </div>
        </section>
        `
    },
    "about.html": {
        "title": "公司簡介",
        "content": `
        <section class="page-header">
            <div class="container">
                <h1>關於 Meow Harmony</h1>
                <p>用心了解貓咪的需求，提供最專業的服務</p>
            </div>
        </section>
        <section class="about-content container">
            <div class="about-text">
                <h2>我們的理念</h2>
                <p>Meow Harmony 創立的初衷，是因為我們深知每一隻貓咪都是獨一無二的生命，值得被溫柔對待與細心呵護。</p>
                <p>我們結合了專業的貓咪美容、優良的貓舍培育，以及品味獨具的貓咪用品，打造出一個全方位的貓咪生活美學品牌。我們相信，好的設計與優質的服務，能讓貓咪與主人的生活更加和諧美好。</p>
                <h2>專業團隊</h2>
                <p>我們的美容師皆擁有專業認證，並具備豐富的貓咪行為學知識，能用最溫和的方式降低貓咪的緊張感。我們的選品團隊則嚴格把關每一項產品，確保安全、舒適且符合現代居家美學。</p>
            </div>
        </section>
        `
    },
    "supplies.html": {
        "title": "貓咪用品",
        "content": `
        <section class="page-header">
            <div class="container">
                <h1>貓咪用品</h1>
                <p>兼具美學與實用的優質貓咪生活用品</p>
            </div>
        </section>
        <section class="products-section container">
            <div class="product-grid" id="supplies-grid">
                <!-- Products injected by JS -->
            </div>
        </section>
        `
    },
    "food.html": {
        "title": "貓咪食品",
        "content": `
        <section class="page-header">
            <div class="container">
                <h1>貓咪食品</h1>
                <p>天然、健康、營養的頂級貓咪美食</p>
            </div>
        </section>
        <section class="products-section container">
            <div class="product-grid" id="food-grid">
                <!-- Products injected by JS -->
            </div>
        </section>
        `
    },
    "grooming.html": {
        "title": "美容預約",
        "content": `
        <section class="page-header">
            <div class="container">
                <h1>美容預約</h1>
                <p>為您的愛貓提供頂級 SPA 級的美容服務</p>
            </div>
        </section>
        <section class="grooming-section container">
            <div class="grooming-info">
                <h2>服務項目</h2>
                <ul class="service-list">
                    <li><i class="fas fa-check"></i> 基礎洗護（含剪甲、清耳朵、擠肛門腺）</li>
                    <li><i class="fas fa-check"></i> 頂級 SPA 泥浴護理</li>
                    <li><i class="fas fa-check"></i> 專業手剪造型</li>
                    <li><i class="fas fa-check"></i> 局部修剪（腳底毛、肚子毛）</li>
                </ul>
                <div class="gallery" id="grooming-gallery">
                    <!-- Images injected by JS -->
                </div>
            </div>
            <div class="reservation-form">
                <h2>線上預約</h2>
                <form id="bookingForm" onsubmit="event.preventDefault(); alert('預約已送出！我們會盡快與您聯絡。');">
                    <div class="form-group">
                        <label>您的姓名</label>
                        <input type="text" required>
                    </div>
                    <div class="form-group">
                        <label>聯絡電話</label>
                        <input type="tel" required>
                    </div>
                    <div class="form-group">
                        <label>貓咪名字/品種</label>
                        <input type="text" required>
                    </div>
                    <div class="form-group">
                        <label>預約服務</label>
                        <select required>
                            <option value="">請選擇服務</option>
                            <option value="basic">基礎洗護</option>
                            <option value="spa">頂級 SPA 護理</option>
                            <option value="cut">專業剪毛</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>預約日期</label>
                        <input type="date" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">送出預約</button>
                </form>
            </div>
        </section>
        `
    },
    "adoption.html": {
        "title": "幫貓咪找家人",
        "content": `
        <section class="page-header">
            <div class="container">
                <h1>幫貓咪找家人</h1>
                <p>遇見命中注定的那個牠，開啟一段美好的緣分</p>
            </div>
        </section>
        <section class="adoption-section container">
            <div class="product-grid" id="adoption-grid">
                <!-- Adoption cats injected by JS -->
            </div>
        </section>
        `
    },
    "contact.html": {
        "title": "聯絡我們",
        "content": `
        <section class="page-header">
            <div class="container">
                <h1>聯絡我們</h1>
                <p>有任何問題或建議，歡迎隨時與我們聯繫</p>
            </div>
        </section>
        <section class="contact-section container">
            <div class="contact-info">
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <h3>門市地址</h3>
                        <p>台北市大安區貓咪路100號</p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <div>
                        <h3>聯絡電話</h3>
                        <p>(02) 2345-6789</p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <h3>電子信箱</h3>
                        <p>hello@meowharmony.tw</p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <div>
                        <h3>營業時間</h3>
                        <p>週二至週日 11:00 - 20:00 (週一公休)</p>
                    </div>
                </div>
            </div>
            <div class="contact-form">
                <h2>留言給我們</h2>
                <form id="contactForm" onsubmit="event.preventDefault(); alert('訊息已送出！我們會盡快回覆您。');">
                    <div class="form-group">
                        <label>姓名</label>
                        <input type="text" required>
                    </div>
                    <div class="form-group">
                        <label>電子信箱</label>
                        <input type="email" required>
                    </div>
                    <div class="form-group">
                        <label>訊息內容</label>
                        <textarea rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">送出訊息</button>
                </form>
            </div>
        </section>
        `
    },
    "product.html": {
        "title": "產品詳情",
        "content": `
        <section class="product-detail-section container" id="product-detail">
            <!-- Product details injected by JS based on URL param -->
        </section>
        `
    }
};

for (const [filename, data] of Object.entries(pages)) {
    fs.writeFileSync(filename, base_html.replace('{title}', data.title).replace('{content}', data.content));
    console.log("Generated " + filename);
}
