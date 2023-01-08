# NodeApp

Deploy:

```sh
npm install
```

Load initial data to database:

```
npm run init-db
```

Start the application in production with:

```sh
npm start
```

Start the application in development with:

```sh
npm run dev
```

## API Documentation

Advertisements list:

GET /api/v1/advertisements/

QueryParams:

- name (opt): name of the advertisements
- sellOrBuy (opt): true if it's a product on sale and false if someone is looking for it
- priceBottom (opt): bottom of the price range
- priceTop (opt): top of the price range
- tags (opt): tag o tags contained by the product. Tags must be added separately

Responses:

200: 
 body: array of advertisements

"docs": [
        {
            "_id": "63baaf953808689b70158f2b",
            "name": "auriculares",
            "sellOrBuy": true,
            "price": 25,
            "image": "auriculares.png",
            "tags": [
                "lifestyle"
            ],
            "createAt": "2023-01-08T11:57:09.361Z",
            "__v": 0
        }]

POST /api/v1/advertisements

Query Schema:

{
    name: String,
    sellOrBuy: Boolean,
    price: Number,
    image: String,
    tags: [String],
    createAt: {
        type: Date, 
        default: Date.now,
}
