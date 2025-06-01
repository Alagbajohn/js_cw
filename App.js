fetch('https://fakestoreapi.com/products')S).then((response) => response.json).then((data) =>{
    console.log(data);

    data.ForEach((product) => {
        const cardcontainer = document.createElement("div");
        card.classList.add("card");

        const produuction = document.createElement('img');
        produuction.src = product.image;
        produuction.alt = product.title;
        produuction.style.width =200px
        produuction.style.height = 200px

        card.append(productionImg);
        card.append(productionImg);
        cardcontainer.append(card);
        const title = document.createElement("Img");
        title.textContent = product.title;
        card.append(title);
        const price = document.createElement("p");
        price.textContent = `${product.price}`;
        card.append(price);
        ;

        const description = document.createElement("p");
        description.textContent = product.description;
        

        card.append(description, Production, Img, title, price, categorie, id );
        cardcontainer.append(card);
        cardcontainer.classList.add("card-container");
        
        document.body.append(cardcontainer);
    
    }
}).catch((error) => console.log(error));