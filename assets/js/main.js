document.addEventListener('DOMContentLoaded', () => {
    // Generate Product Cards
    const createProductCard = (product) => {
        return `
        <a href="product.html?id=${product.id}" class="product-card">
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-category">${product.categoryName}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
            </div>
        </a>
        `;
    };

    // Render Home Products
    const featuredGrid = document.getElementById('featured-product-grid');
    if (featuredGrid) {
        // Show 4 random products on home page
        const featured = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
        featuredGrid.innerHTML = featured.map(createProductCard).join('');
    }

    // Render Supplies
    const suppliesGrid = document.getElementById('supplies-grid');
    if (suppliesGrid) {
        const supplies = products.filter(p => p.category === 'supplies');
        suppliesGrid.innerHTML = supplies.map(createProductCard).join('');
    }

    // Render Food
    const foodGrid = document.getElementById('food-grid');
    if (foodGrid) {
        const food = products.filter(p => p.category === 'food');
        foodGrid.innerHTML = food.map(createProductCard).join('');
    }

    // Render Grooming Gallery
    const groomingGallery = document.getElementById('grooming-gallery');
    if (groomingGallery) {
        groomingGallery.innerHTML = groomingImages.map(img => `<img src="${img}" alt="Grooming">`).join('');
    }

    // Render Adoption
    const adoptionGrid = document.getElementById('adoption-grid');
    if (adoptionGrid) {
        adoptionGrid.innerHTML = adoptionCats.map(cat => `
        <div class="product-card">
            <div class="product-img">
                <img src="${cat.image}" alt="${cat.name}">
            </div>
            <div class="product-info">
                <div class="product-category">${cat.breed} | ${cat.age}</div>
                <h3 class="product-title">${cat.name}</h3>
                <button class="btn btn-primary" style="margin-top:10px; width:100%" onclick="alert('請與我們聯繫預約看貓！')">預約看貓</button>
            </div>
        </div>
        `).join('');
    }

    // Render Product Detail Page
    const productDetail = document.getElementById('product-detail');
    if (productDetail) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const product = products.find(p => p.id === productId);

        if (product) {
            productDetail.innerHTML = `
                <div class="product-detail-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-detail-info">
                    <div class="product-category" style="margin-bottom:10px;">${product.categoryName}</div>
                    <h1>${product.name}</h1>
                    <div class="product-detail-price">${product.price}</div>
                    <p class="product-detail-desc">${product.desc}</p>
                    <button class="btn btn-primary" onclick="alert('已加入購物車！')"><i class="fas fa-shopping-cart"></i> 加入購物車</button>
                    <a href="supplies.html" class="btn btn-secondary" style="margin-left:10px;">繼續購物</a>
                </div>
            `;
        } else {
            productDetail.innerHTML = `<h2>找不到該產品</h2><a href="index.html" class="btn btn-primary">回首頁</a>`;
        }
    }
});
