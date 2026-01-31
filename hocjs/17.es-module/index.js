// import a, { b, c, getMessage as getMsg } from "./utils/home.js";
// console.log(a);
// console.log(b);
// console.log(c);
// getMsg();

// import * as home from "./utils/home.js";
// console.log(home);
// console.log(home.default);
// console.log(home.b);
// console.log(home.c);

// import { post } from "./services/post.js";
// import { user } from "./services/user.js";
// import { product } from "./services/product.js";
import { post, user, product } from "./services/index.js";
console.log(post);
console.log(user);
console.log(product);

//index.js -> a -> b -> c -> d
