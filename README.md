# MERN_Authentication

User Authentication App using ReactJS, JavaScript for frontend and for backend NodeJS, ExpressJS, MongoDB, MongoDB Atlas, 
Mongoose, JWT (Json Web Token), bcrypt (for password hashing) Postman (for Api testing). It is hosted live on the internet.

Live URL: https://mern-stack-user-auth.netlify.app                                                                                                        
backend Products Api link: https://mern-auth-backend-962m.onrender.com/api/friends (we need to pass the Bearer Token in headers)
<img width="960" alt="backend-apis" src="https://github.com/harshitverma-dev/MERN_Authentication/assets/115063708/58d118a1-72c9-453c-8178-e6ad74d55368">

what I have Done :-
1. added user login functionality.
2. added user register functionality and stored registered user data in mongodb.
3. implemented login and logout state through react hooks like useReducer, context API (useContext, createContext);
4. used localstorage to store the token and user information.
5. Done Api integration.
6. used bcrypt for password hashing.
7. used JWT for generating token.
8. created verifiyToken middleware function.
9. used mongoose for writing queries and creating connection between express and mongoDB.
10. hosted backend on render.
11. hosted frontend on netlify.


Login page >>                                                                                                          
<img width="958" alt="products_api_test" src="https://user-images.githubusercontent.com/115063708/235340030-af5ce6f0-5325-435f-8a97-edf86b1b4d0d.PNG">
![login-view](https://github.com/harshitverma-dev/MERN_Authentication/assets/115063708/ff3c65e4-4329-4b37-87d9-f7e90d727b21)

SignUp page >>
<img width="960" alt="shoppingCartProduct_api_test" src="https://user-images.githubusercontent.com/115063708/235340069-8fb034f7-57bd-494a-9dff-c55669441213.PNG">
![signUp-view](https://github.com/harshitverma-dev/MERN_Authentication/assets/115063708/eb0a8129-54bf-4848-9c77-10646efaf5ab)

view inside the application >>
<img width="949" alt="product-skeleton" src="https://user-images.githubusercontent.com/115063708/235340505-2ec65fd2-9ec4-43cd-a141-0e5a2654dad8.PNG">
![home-page-view](https://github.com/harshitverma-dev/MERN_Authentication/assets/115063708/a24d6e90-c1a1-441d-b856-bd8a2619d4a8)

Note :- only authenticated user can access the protected routes, so first you have to register yourself and login with the registered email and password. 
then you can perform the activities ( like delete , create) inside the application.                                                                                                                                  

