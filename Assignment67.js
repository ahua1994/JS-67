// Assignment-JS-67:

async function displayProducts() {
    // 1. fetch products data from https://fakestoreapi.com/products/
    let apiFetch = fetch("https://fakestoreapi.com/products/");
    let data = await apiFetch.then((x) => x.json());
    console.log(data);

    // 2. apply a filter to list products that has price lower than $50
    console.log(data.filter((x) => x.price < 50));

    // 3. apply a filter to list products that has rating over 4
    console.log(data.filter((x) => x.rating.rate > 4));

    // 4. filter the products according to a category
    console.log(data.filter((x) => x.category === "electronics"));

    // 5. list the name of categories
    console.log(new Set(data.map((x) => x.category)));

    // 6. search item by given text
    console.log(data.filter((x) => x.title.split(" ").includes("Jacket")));
    console.log(data.filter((x) => x.description.search("jacket") > 0));

    // 7. find the index of a product that has price $15.99
    console.log(
        data.filter((x) => x.price === 15.99).forEach((x) => data.indexOf(x))
    );

    // 8. generate a html card for products
    let products = ``;
    data.forEach((product) => {
        products += `<div class="col-4">
                        <div class="card" style="height: 100%">
                            <img src=${product.image} class="card-img-top" alt="pic" style="height:450px">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <h5 class="card-title">$ ${product.price}</h5>
                                <p class="card-text">${product.description}</p> 
                            </div>
                        </div>    
                    </div> `;
    });

    // 9. generate a card container to display all of the products
    let cardGroup = document.createElement("div");
    cardGroup.classList.add("row");
    document.body.prepend(cardGroup);
    document.body.classList.add("w-100");
    cardGroup.innerHTML = products;
}

displayProducts();
