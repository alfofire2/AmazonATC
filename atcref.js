function btn(){
    const item = document.getElementById("outOfStock");
    if (item === null){
        const err = "You have to run this script on Amazon's not available item page.\nThen the add to cart button will appear.";
        alert(err);
        throw new Error(err);
    }
    else{
        const refTag = "alfodaniell0d-21";
        const currentUrl = window.location.href;
        
        if (!currentUrl.includes('tag=')) {
            const newUrl = currentUrl + (currentUrl.includes('?') ? '&' : '?') + 'ref=' + refTag;
            window.location.href = newUrl;
        } else {
            createAddToCartButton(item);
        }
    }
}

function createAddToCartButton(item) {
    const btn = document.createElement("button");
    btn.setAttribute("href","#addToCart");
    btn.setAttribute("style","background-color: #34a4eb !important; border-radius: 10px; border: 0px; padding: 10px;");
    btn.setAttribute("id","addToCart");
    btn.innerText = "Add to Cart | t.me/alfo_daniello\n\nClick here to add the item to your cart";
    item.prepend(btn);
}

btn();
