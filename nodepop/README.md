# NodePop

Deploy:

```sh
npm install
```

Load initial data to database:

```sh
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

Product list:
GET /apiv1/products

{
    "results": [
        {
            "_id":"63b48a9ce99ad13a065f1350",
            "name":"bici",
            "onSale":true,
            "price":120,
            "image":"bici.png",
            "tags":[
                "lifestyle","outdoors"
                ]
            },
        ]}