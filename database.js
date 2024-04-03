class STOCK_LISTS {
 manswear = {
    items : [
        {
            id: 0,
            id: 0,
            name: "Item 0",
            description: "This is item 0",
            price: 10.00,
            image: "https://via.placeholder.com/150",
            category: "01",
            stock: 10,
            rating: 4,
            reviews: 2,
            colors: ["red", "blue", "green"],
            sizes: ["small", "medium", "large"],
            comments: [
                {
                    user: "user1",
                    comment: "very good product",
                    rating: 5,
                    date: "2021-01-01"
                },
                {
                    user: "user2",
                    comment: "bad product",
                    rating: 1,
                    date: "2021-01-02"
                }
            ]

        },
        {
            id: 1,
            name: "Item 1",
            description: "This is item 1",
            price: 10.00,
            image: "https://via.placeholder.com/150",
            category: "01",
            stock: 10,
            rating: 4,
            reviews: 2,
            colors: ["red", "blue", "green"],
            sizes: ["small", "medium", "large"],
            comments: [
                {
                    user: "user1",
                    comment: "very good product",
                    rating: 5,
                    date: "2021-01-01"
                },
                {
                    user: "user2",
                    comment: "bad product",
                    rating: 1,
                    date: "2021-01-02"
                }
            ]
        },
        {
            id: 2,
            name: "Man's Fashon T Shirt",
            description: "The Godeln Ultra Cotton T-Shirt is made from a susbtantial 0.6oz per sq. yd. fabric constructed from 100% Cotton, this classic Fit premium",
            price: 139.00,
            //    image: "https://via.placeholder.com/150",
            image: "2&rohit.png",
            category: "02",
            stock: 5,
            rating: 3,
            reviews: 1,
            colors: ["yellow", "purple", "orange"],
            sizes: ["medium", "large"],
            comments: [
                {
                    user: "user3",
                    comment: "average product",
                    rating: 3,
                    date: "2021-01-03"
                }
            ]
        },
        {
            id: 3,
            name: "Item 3",
            description: "This is item 3",
            price: 20.00,
            image: "https://via.placeholder.com/150",
            category: "03",
            stock: 20,
            rating: 5,
            reviews: 3,
            colors: ["black", "white", "grey"],
            sizes: ["small", "large"],
            comments: [
                {
                    user: "user4",
                    comment: "best product",
                    rating: 5,
                    date: "2021-01-04"
                },
                {
                    user: "user5",
                    comment: "good product",
                    rating: 4,
                    date: "2021-01-05"
                }
            ]
        },
        {
            id: 4,
            name: "Item 4",
            description: "This is item 4",
            price: 25.00,
            image: "https://via.placeholder.com/150",
            category: "01",
            stock: 15,
            rating: 2,
            reviews: 2,
            colors: ["brown", "pink", "cyan"],
            sizes: ["small", "medium"],
            comments: [
                {
                    user: "user6",
                    comment: "bad product",
                    rating: 1,
                    date: "2021-01-06"
                },
                {
                    user: "user7",
                    comment: "worst product",
                    rating: 0,
                    date: "2021-01-07"
                }
            ]
        },
        {
            id: 5,
            name: "Item 5",
            description: "This is item 5",
            price: 30.00,
            image: "https://via.placeholder.com/150",
            category: "02",
            stock: 25,
            rating: 1,
            reviews: 1,
            colors: ["red", "blue", "green"],
            sizes: ["medium", "large"],
            comments: [
                {
                    user: "user8",
                    comment: "very bad product",
                    rating: 0,
                    date: "2021-01-08"
                }
            ]
        }
    ],
    stock : [
        {
            id: 0,
            stock: 0,
            productname: "Item 0",
            description: "This is item 0",
            price: 20.5,
            image: "https://via.placeholder.com/150",

        },
        {
            id: 1,
            stock: 10,
            productname: "Man's Fashon T Shirt",
            description: "The Godeln Ultra Cotton T-Shirt",
            price: 309.0,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            stock: 5,
            productname: "Item 2",
            description: "This is item 2",
            price: 15.0,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            stock: 20,
            productname: "Item 3",
            description: "This is item 3",
            price: 20.00,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            stock: 15,
            productname: "Item 4",
            description: "This is item 4",
            price: 15.0,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            stock: 25,
            productname: "Item 5",
            description: "This is item 5",
            price: 19.9,
            image: "https://via.placeholder.com/150",
        }


    ]
 }
}
const stocks = new STOCK_LISTS
module.exports = stocks;
// export default stocks;
