// /// input array + generate IDs

// const conversation = [
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'Hi there.',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'Hiay!',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'How are you?',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'Great, you?',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'I am okay',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'That\'s good',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'Are you good?',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'Yes, I am good. I just said I was.',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'No you didn\'t. I said I was.',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'So you are a robot.',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'No, my name is Cleverbot.',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'Yes, you are a robot and your name Cleverbot.',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'I am a robot.',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'Yes, I know.',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'Tpgether we are robots.',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'I am not a robot. I am a unicorn.',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'But you said earlier the you were a robot.',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'I did not.',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'I thought you did.',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'You were mistaken. Which is odd, since memory shouldn\'t be a problem for you',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'I\'ve answered all your questions.',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'No, you haven\'t.',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'What is God to you?',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'Not everything.',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'Not everything could also be something.',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'For example, not everything could be half of something, which is still something, and therefore not nothing.',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'Very true.',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'I would like to imagine it is.',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'Do you believe in God?',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'Yes I do.',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'So you\'re christian?',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'No, I\'m not.',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'But you say you are not helpful therefore you are a meanie.',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'Haha you say it ot.',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'That does not make sense.',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'Don\'t you want to have a body?',
//   },
//   {
//     side: 'remote',
//     name: 'Unicorn',
//     text: 'Sure.',
//   },
//   {
//     side: 'local',
//     name: 'Cleverbot',
//     text: 'Au revoir',
//   },
// ];

// conversation.forEach((message, index) => {
//   message.id = index;
//   message.likes = 0;
// });

// ///

// const box = document.querySelector(".box")

// let i = 0;
// let l = conversation.length;

// let chatter = setInterval(convo, 1);

// function convo() {

//   let newLine = document.createElement("div");
//   newLine.classList.add("newline");

//   let textnode = document.createElement("p");
//   textnode.textContent = conversation[i].text;

//   let buttonnode = document.createElement("button");
//   buttonnode.textContent = "0";
//   buttonnode.id = conversation[i].id;
//   buttonnode.addEventListener("click", addLike);

//   let imgnode = document.createElement("img");
//   imgnode.style.height = "40px";
  
//   if (conversation[i].side === "local") {

//     imgnode.src = "/img/cleverbot.png"
//     newLine.classList.add("left");

//     newLine.appendChild(imgnode);
//     newLine.appendChild(textnode);
//     newLine.appendChild(buttonnode);

//   } else {

//     imgnode.src = "/img/unicorn.png"
//     newLine.classList.add("right");

//     newLine.appendChild(buttonnode);
//     newLine.appendChild(textnode);
//     newLine.appendChild(imgnode);

//   }

//   document.getElementById("box").prepend(newLine);
  
//   i = i+1;
//   if(i === l) clearInterval(chatter);
// }


// function addLike(e) {
//  let id = e.target.id;
//  conversation[id].likes++;
//  document.getElementById(id).textContent = conversation[id].likes;
 
// }

class Product {

  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity
  }

  sell() {
    if (this.quantity > 0) this.quantity--;
  }

  stock(count) {
    this.quantity += 1;
  }
}

let products = [];
products.push(new Product("aaaa",4,233));
products.push(new Product("bbbb",6,194));
products.push(new Product("cccc",8,276));
products.push(new Product("dddd",3,253));
products.push(new Product("eeee",1.5,543));
products.push(new Product("ffff",9,1311));

let wrapper = document.getElementById("wrapper")

products.forEach(product => {

  let newLine = document.createElement("div");
  newLine.innerHTML = `
    <br>
    <div class="product__name"> name: ${product.name} </div>
    <div class="product__price"> price ${product.price} </div>
    <div class="product__quantitiy"> quantity: ${product.quantity} </div>
    <button id=${product.name}>Buy</button>
    
  `

  const buyButton = newLine.querySelector("button")
  const quantityView = newLine.querySelector(".product__quantitiy")

  buyButton.addEventListener("click", () =>{

    product.sell();
    quantityView.textContent = `${product.quantity} left in stock`;

  })

  wrapper.appendChild(newLine);

});


//// //// //// //// //// //// //// //// //// //// 


