class STOCK_LISTS {
    cart_items = [{type:"shirts",name:"Black T-Shirt",id:0,price:5,img:"http://127.0.0.1:3000/assets/shirts/black-tshirt.jpg"},{type:"shirts",name:"White T-Shirt For Men",id:1,price:99,img:"http://127 .0.0.1:3000/assets/shirts/white-tshirt.jpg"}]
    shirts = {
        items: [
            {
                id: 0,
                name: "Black T-Shirt",
                description: "Black T-Shirt Stylish only for Men",
                price: 699,
                image: "http://127.0.0.1:3000/assets/shirts/black-tshirt.jpg",
                category: "01",
                stock: 100,
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
                name: "White T-Shirt For Men",
                description: "The White Stylish and Cool Looking T-Shirt For Men",
                price: 500,
                image: "http://127.0.0.1:3000/assets/shirts/white-tshirt.jpg",
                category: "01",
                stock: 122,
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
                name: "Red T-Shirt For Men",
                description: "The Red T-Shirt is made from a susbtantial 0.6oz per sq. yd. fabric constructed from 100% Cotton, this classic Fit premium",
                price: 999,
                //    image: "https://via.placeholder.com/150",
                image: "http://127.0.0.1:3000/assets/shirts/red-tshirt.jpg",
                category: "02",
                stock: 73,
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
                name: "Black & White T-Shirt",
                description: "This is made for everday use, Stylish and comfortable.",
                price: 700,
                image: "http://127.0.0.1:3000/assets/shirts/black-white-tshirt.jpg",
                category: "03",
                stock:50,
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
                name: "Printed T-Shirt For Men",
                description: "Made with high quality print and Fabric",
                price: 1099,
                image: "http://127.0.0.1:3000/assets/shirts/Printed-tshirt.jpg",
                category: "01",
                stock: 50,
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
                name: "Orange T-Shirt For Men",
                description: "Good For Casual Wear and Indoor Activities",
                price: 788,
                image: "http://127.0.0.1:3000/assets/shirts/orange-tshirt.jpg",
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
            },

            {
                id: 6,
                name: "Marvel's Printed T Shirt",
                description: "Made for Marvel Fans",
                price: 850,
                image: "http://127.0.0.1:3000/assets/shirts/marvel-tshirt.jpg",
                category: "03",
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
                id: 7,
                name: "Green T-Shirt for Men",
                description: "Casual Green Color T-Shirt for Men",
                price: 500,
                image: "http://127.0.0.1:3000/assets/shirts/casual-tshirt.jpg",
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
        stock: [
            {
                id: 0,
                stock: 0,
                productname: "Black T-Shirt For Men",
                description: "Made For Men who loves Black",
                price: 699,
                image: "http://127.0.0.1:3000/assets/shirts/black-tshirt.jpg",

            },
            {
                id: 1,
                stock: 10,
                productname: "White T-Shirt For Men",
                description: "White T-Shirt for White Lovers",
                price: 500,
                image: "http://127.0.0.1:3000/assets/shirts/white-tshirt.jpg",
            },
            {
                id: 2,
                stock: 5,
                productname: "Red T-Shirt For Men",
                description: "Soft and Comfortable",
                price: 999,
                image: "http://127.0.0.1:3000/assets/shirts/red-tshirt.jpg",
            },
            {
                id: 3,
                stock: 20,
                productname: "Black & White T-Shirt For Men",
                description: "Everyday Clothing",
                price: 700,
                image: "http://127.0.0.1:3000/assets/shirts/black-white-tshirt.jpg",
            },
            {
                id: 4,
                stock: 15,
                productname: "Printed T-Shirt For Men",
                description: "Stylish and Fashionable",
                price: 1099,
                image: "http://127.0.0.1:3000/assets/shirts/Printed-tshirt.jpg",
            },
            {
                id: 5,
                stock: 25,
                productname: "Orange Color T-Shirt For Men",
                description: "Comfortable Design",
                price: 788,
                image: "http://127.0.0.1:3000/assets/shirts/orange-tshirt.jpg",
            },
            {
                id: 6,
                stock: 0,
                productname: "Marvel's Printed T-Shirt",
                description: "Made For Marvel Fans",
                price: 850,
                image: "http://127.0.0.1:3000/assets/shirts/marvel-tshirt.jpg",

            },

            {
                id: 7,
                stock: 25,
                productname: "Green Casual T-Shirts",
                description: "Everday T-Shirt For Men",
                price: 500,
                image: "http://127.0.0.1:3000/assets/shirts/casual-tshirt.jpg",
            }

        ]
    }
    hoddies =
        {
            items:
                [
                    {
                        id: 0,
                        name: "Red Hoddie For Men",
                        description: "Hoodie in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. ",
                        price: 800,
                        image: "http://127.0.0.1:3000/assets/hoddies/redhoddie.jpg",
                        category: "01",
                        stock: 28,
                        rating: 4,
                        reviews: 2,
                        colors: ["red", "blue", "green"],
                        sizes: ["small", "medium", "large"]

                    },
                    {
                        id: 1,
                        name: "White Hoddie For Men",
                        description: "Hoodie in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. ",
                        price: 799,
                        image: "http://127.0.0.1:3000/assets/hoddies/whitehoddie.jpg",
                        category: "01",
                        stock: 30,
                        rating: 4,
                        reviews: 2,
                        colors: ["red", "blue", "green"],
                        sizes: ["small", "medium", "large"]

                    },
                    {
                        id: 2,
                        name: "Black hoddie For Men",
                        description: "Hoodie in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. ",
                        price: 778,
                        image: "http://127.0.0.1:3000/assets/hoddies/blackhoddie.jpg",
                        category: "01",
                        stock: 10,
                        rating: 4,
                        reviews: 2,
                        colors: ["red", "blue", "green"],
                        sizes: ["small", "medium", "large"]

                    },
                     {
                        id: 3,
                        name: "Printed Hoodie For Men",
                        description: "Hoodie in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. ",
                        price: 999,
                        image: "http://127.0.0.1:3000/assets/hoddies/printedhoddie.jpg",
                        category: "01",
                        stock: 10,
                        rating: 4,
                        reviews: 2,
                        colors: ["red", "blue", "green"],
                        sizes: ["small", "medium", "large"]

                    },


                ],
            stock: [
                {
                    id: 0,
                    stock: 25,
                    productname: "Red Hoddie For Men",
                    description: "Casual Red Hoodie For Men",
                    price: 800,
                    image: "http://127.0.0.1:3000/assets/hoddies/redhoddie.jpg",
                },
                {
                    id: 1,
                    stock: 25,
                    productname: "White Hoddie For Men",
                    description: "Casual White Hoodie For Men",
                    price: 799,
                    image: "http://127.0.0.1:3000/assets/hoddies/whitehoddie.jpg",
                },
                {
                    id: 2,
                    stock: 25,
                    productname: "Black hoddie For Men",
                    description: "Casual Black Hoodie For Men",
                    price: 778,
                    image: "http://127.0.0.1:3000/assets/hoddies/blackhoddie.jpg",
                }, {
                    id: 3,
                    stock: 25,
                    productname: "Printed Hoodie For Men",
                    description: "Casual Printed Hoodie For Men",
                    price: 999,
                    image: "http://127.0.0.1:3000/assets/hoddies/printedhoddie.jpg",
                },
            ]
        }
        footwear =
        {
            items:
                [
                    {
                        id: 0,
                        name: "Blue Sneakers For Men",
                        description: "This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked. ",
                        price: 900,
                        image: "http://127.0.0.1:3000/assets/shoes/blue-knit-sneaker.webp",
                        category: "01",
                        stock: 10,
                        rating: 4,
                        reviews: 2,
                        colors: ["red", "blue", "green"],
                        sizes: ["small", "medium", "large"]
                      },
                    {
                        id: 1,
                        name: "Green Sneakers For Men",
                        description: "This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked. ",
                        price: 1099,
                        image: "http://127.0.0.1:3000/assets/shoes/greenfootball.webp",
                        category: "01",
                        stock: 10,
                        rating: 4,
                        reviews: 2,
                        colors: ["red", "blue", "green"],
                        sizes: ["small", "medium", "large"]
                      },
                      {
                        id: 2,
                        name: "Red Sneakers For Men",
                        description: "This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked. ",
                        price: 995,
                        image: "http://127.0.0.1:3000/assets/shoes/redfootball.webp",
                        category: "01",
                        stock: 10,
                        rating: 4,
                        reviews: 2,
                        colors: ["red", "blue", "green"],
                        sizes: ["small", "medium", "large"]

                      },{
                        id: 3,
                        name: "White Sneakers For Men",
                        description: "This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked. ",
                        price: 800,
                        image: "http://127.0.0.1:3000/assets/shoes/white-shoes.webp",
                        category: "01",
                        stock: 10,
                        rating: 4,
                        reviews: 2,
                        colors: ["red", "blue", "green"],
                        sizes: ["small", "medium", "large"]

                      },

                ],
            stock:[
                {
                    id: 0,
                    stock: 25,
                    productname: "Blue Sneakers For Men",
                    description: "Fantastic Fit For All Occasions",
                    price: 900,
                    image: "http://127.0.0.1:3000/assets/shoes/blue-knit-sneaker.webp",
                },
                {
                    id: 1,
                    stock: 25,
                    productname: "Green Sneakers For Men",
                    description: "Fantastic Fit For All Occasions",
                    price: 1099,
                    image: "http://127.0.0.1:3000/assets/shoes/greenfootball.webp",
                },
                {
                    id: 2,
                    stock: 25,
                    productname: "Red Sneakers For Men",
                    description: "Fantastic Fit For All Occasions",
                    price: 995,
                    image: "http://127.0.0.1:3000/assets/shoes/redfootball.webp",
                },                {
                    id: 3,
                    stock: 25,
                    productname: "White Sneaker For Men",
                    description: "Fantastic Fit For All Occasions",
                    price: 800,
                    image: "http://127.0.0.1:3000/assets/shoes/white-shoes.webp",
                },
                

            ]
        }


}

const stocks = new STOCK_LISTS
module.exports = stocks;
// export default stocks;
