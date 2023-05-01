import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        products: Model,
        users: Model,
    },


    seeds(server) {
        server.create("product", { id: "1", name: "Crater IV HS Hooded Jacket Men", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://static.mammut.com/cdn-cgi/image/width=512,quality=85,f=auto,metadata=none/master/1010-30150-0001_main-grey_246105.jpg", allimg: { image2: "https://static.mammut.com/cdn-cgi/image/width=512,quality=50,f=auto,metadata=none/master/1010-30150-0001_mod-back-hf-png_245251.png", image3: "https://static.mammut.com/cdn-cgi/image/width=512,quality=85,f=auto,metadata=none/master/1010-30150-0001_mod-main-hf-png_245252.png" }, type: "climbing", gender: "Men", hostId: "123",style:"clothing", sec_style:"Jackets" })
        server.create("product", { id: "2", name: "Aenergy TR HS Hooded Jacket Women", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://static.mammut.com/cdn-cgi/image/width=512,quality=85,f=auto,metadata=none/master/1010-30010-0047_main-grey_232593.jpg", allimg: { image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKibRWcA2y_vBcu5h2GByeBN_fWUxL8Sohg&usqp=CAU", image3: "https://cdn.vanclan.co/wp-content/uploads/2019/05/bestvan.jpeg" }, type: "climbing", gender: "Women" , style:"clothing" , sec_style:"Jackets"  })
        server.create("product", { id: "3", name: "Sertig II Low Women", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://static.mammut.com/cdn-cgi/image/width=512,quality=85,f=auto,metadata=none/master/3030-04310-00231_main-grey_186472.jpg", type: "climbing", gender: "Women", hostId: "456", style:"footwear" , sec_style:"Hiking Shoes" })
        server.create("product", { id: "4", name: "Rime IN Flex Hooded Jacket Men", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://static.mammut.com/cdn-cgi/image/width=512,quality=85,f=auto,metadata=none/master/1013-02150-40239_main-grey_233327.jpg", type: "climbing", gender: "Men" ,style:"clothing", sec_style:"Jackets" , relatedproduct:"homepage" })
        server.create("product", { id: "5", name: "Madris Light ML Hooded Jacket Men", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://static.mammut.com/cdn-cgi/image/width=512,quality=85,f=auto,metadata=none/master/1014-03841-40135_main-grey_232613.jpg", type: "climbing", gender: "Men", style:"clothing" , sec_style:"Jackets" })
        server.create("product", { id: "6", name: "Zinal Hybrid Shorts Men", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://static.mammut.com/cdn-cgi/image/width=512,quality=85,f=auto,metadata=none/master/1023-00920-0001_main-grey_231647.jpg", type: "climbing", gender: "Men", style:"clothing", sec_style:"Pants & Shorts" })
        server.create("product", { id: "7", name: " Mammut ML Hooded Jacket Men", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://static.mammut.com/cdn-cgi/image/width=512,quality=85,f=auto,metadata=none/master/1014-05030-0001_main-grey_232631.jpg", type: "climbing", gender: "Men", style:"clothing" , sec_style:"Jackets" })
        server.create("product", { id: "8", name: " WOMEN'S FELIK ALPINE LEGGINGS", price: 170.00, description: "When making reachy moves on the mountain, you need complete unrestricted movement. That's what the Felik Alpine Leggings provide. With built-in stretch, the water-repellent fabric delivers next-to-skin comfort, allowing you to ascend the toughest rock faces with light and agile speed.", imageUrl: "https://images.thenorthface.com/is/image/TheNorthFaceEU/825H_MN8_hero?$262x306$", allimg: { image2: "https://s7d2.scene7.com/is/image/TheNorthFaceEU/825H_MN8_alt3?wid=1250&hei=1250&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0", image3: "https://s7d2.scene7.com/is/image/TheNorthFaceEU/825H_MN8_alt2?wid=1250&hei=1250&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0" }, type: "climbing", gender: "Women", style:"clothing" , sec_style:"Pants & Shorts" })
        server.create("product", { id: "9", name: "WOMEN'S VECTIV™ EXPLORIS II HIKING BOOTS", price: 170.00, description: "Combining an ultra-light yet supportive footplate, midsole rocker geometry and SurfaceCTRL™ grip, our VECTIV™ technology is designed to maximise energy on the trail. And for the Exploris, that translates into hiking boots engineered to go the distance. But while this iteration is loaded with the same great details as the original, we've made a few changes. The platform below the foot is broader to provide greater stability. The stack height is 2 mm higher for improved comfort and support. And the rockered midsole offers a forked heel and forefoot and a TPU plate for increased lateral displacement and stability. Designed with input from The North Face® athletes, the FUTURELIGHT™.", imageUrl: "https://images.thenorthface.com/is/image/TheNorthFaceEU/7W6B_9Z3_hero?$262x306$", allimg: { image2: "https://s7d2.scene7.com/is/image/TheNorthFaceEU/7W6B_9Z3_alt6?wid=1250&hei=1250&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0", image3: "https://s7d2.scene7.com/is/image/TheNorthFaceEU/7W6B_9Z3_alt5?wid=1250&hei=1250&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0" }, type: "climbing", gender: "Women", style:"footwear" , sec_style:"Hiking Shoes" , relatedproduct:"homepage" })
        server.create("product", { id: "10", name: "WOMEN'S ECOACTIVE DUNE SKY TANKLETTE", price: 45.00, description: "Our buttery soft, sweat-wicking Dune Sky Tanklette provides long-lasting comfort on dirt trails and city strolls. ", imageUrl: "https://images.thenorthface.com/is/image/TheNorthFaceEU/7QD2_EVP_hero?$262x306$", allimg: { image2: "https://s7d2.scene7.com/is/image/TheNorthFaceEU/7QD2_EVP_alt6?wid=1250&hei=1250&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0", image3: "https://s7d2.scene7.com/is/image/TheNorthFaceEU/7QD2_EVP_alt20?wid=1250&hei=1250&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0" }, type: "climbing", gender: "Women", style:"clothing", sec_style:"Pants & Shorts" , relatedproduct:"homepage"})
        server.create("product", { id: "11", name: "TRAIL LITE BACKPACK 65L", price: 265, description: "A high-spec technical backpack with a sleek design, the Trail Lite Backpack lives for day hikes, tough scrambles and fast-and-light ascents.", imageUrl: "https://images.thenorthface.com/is/image/TheNorthFaceEU/81CE_KT0_hero?$262x306$", type: "hiking", gender: "Men" , style:"equipment" , sec_style:"Backpacks & Bags"})
        server.create("product", { id: "12", name: "BASIN BACKPACK 36L", price: 150, description: "The hiking-specific Basin Backpack isn't for fair-weather explorers. It's rugged, durable and ready for whatever nature throws at you.", imageUrl: "https://s7d2.scene7.com/is/image/TheNorthFaceEU/52CX_SK8_alt1?wid=1250&hei=1250&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0", type: "hiking", gender: "Women" ,style:"equipment" ,sec_style:"Backpacks & Bags" })
        server.create("product", { id: "13", name: "Ducan 24", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette.", imageUrl: "https://static.mammut.com/cdn-cgi/image/width=1024,quality=85,f=auto,metadata=none/master/2530-00350-40242_main-grey_232533.jpg", type: "hiking", gender: "Men" ,style:"equipment", sec_style:"Backpacks & Bags"  , relatedproduct:"homepage"})
        server.create("product", { id: "14", name: "Nordic Down 3-Season", price: 150, description: "New Down 3-Season and Spring Nordic versions H-box construction Perfect linkable zipper to connect any size and version of Nordic together Perfor.", imageUrl: "https://static.mammut.com/cdn-cgi/image/width=512,quality=85,f=auto,metadata=none/master/2410-02410-0128_main-grey_51474.jpg", type: "hiking", gender: "Unisex",style:"equipment", sec_style:"Sleeping Bags" })
        server.create("product", { id: "15", name: "GREEN KAZOO SLEEPING BAG", price: 450, description: "When you're conscious about how much space you have to spare on your travels, the Green Kazoo Sleeping Bag is the perfect blend of insulated warmth.", imageUrl: "https://s7d2.scene7.com/is/image/TheNorthFaceEU/52E2_4L0_hero?wid=1250&hei=1250&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0", type: "hiking", gender: "Unisex",style:"equipment", sec_style:"Sleeping Bags" })
        server.create("product", { id: "16", name: "First Zip", price: 50, description: "Comfortable thanks to the anatomically shaped, soft padded shoulder straps Internal mesh zipper pocket 2 external zipper pockets for valuables Daisy chain loop", imageUrl: "https://static.mammut.com/cdn-cgi/image/width=1024,quality=85,f=auto,metadata=none/master/2510-01542-0001_main-grey_232562.jpg", type: "hiking", gender: "Unisex" ,style:"equipment" , sec_style:"Mini Bags" })
        server.create("product", { id: "17", name: "Smart Case Light", price: 10, description: "The lightweight, robust Smart Case Light is made from a waterproof material and has a watertight zipper. It is ideal for organizing clothing or other personal items. The semi-transparent windows on the front and back help you to easily recognize your personal items inside", imageUrl: "https://static.mammut.com/cdn-cgi/image/width=1024,quality=85,f=auto,metadata=none/master/2810-00100-2181_main-grey_55123.jpg", type: "hiking", gender: "Unisex" ,style:"equipment", sec_style:"Mini Bags"})
        server.create("user", { id: "123", email: "hamza@gmail.com", password: "hamza123", name: "Hamza" })
    },


    routes() {
        this.namespace = "api"
        this.logging = false


        this.get("/", (schema, request) => {
            //return new Response(400, {}, {error: "Error fetching data"})
            return schema.products.where({ relatedproduct:"homepage" })
        })
        this.get("/:id", (schema, request) => {
            const id = request.params.id
            return schema.products.find(id)
        })

        this.get("/shop", (schema, request) => {
            //return new Response(400, {}, {error: "Error fetching data"})
            return schema.products.all()
        })
        this.get("/shop/:id", (schema, request) => {
            const id = request.params.id
            return schema.products.find(id)
        })
        this.get("/hiking", (schema, request) => {
            //return new Response(400, {}, {error: "Error fetching data"})
            return schema.products.where({ type:"hiking" })
        })

        this.get("/hiking/:id", (schema, request) => {
            const id = request.params.id
            return schema.products.find(id)
        })
        this.get("/climbing", (schema, request) => {
            //return new Response(400, {}, {error: "Error fetching data"})
            return schema.products.where({ type:"climbing" })
        })

        this.get("/climbing/:id", (schema, request) => {
            const id = request.params.id
            return schema.products.find(id)
        })
        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            // This is an extremely naive version of authentication. Please don't
            // do this in the real world, and never save raw text passwords
            // in your database 😇
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            // At the very least, don't send the password back to the client 😅
            //  foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
    }
})