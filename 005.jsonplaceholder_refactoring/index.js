const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
    try {
        // ejs 전달 정보 
        //1. 촐 글 갯수 
        const allPosts = await axios.get("https://jsonplaceholder.typicode.com/albums/");
        const count = allPosts.data.length;
        //2. page 수
        const page = req.query.page;
        const response = await axios.get("https://jsonplaceholder.typicode.com/albums/", {
            params: {
                _start: (page && page > 0) ? 15 * (page - 1) : 0,
                _limit: 15
            }
        })
        res.render("index", { data: response.data, count: count, page: page ? page : 1 });
    } catch (error) {
        res.render("error");
    }
});

app.get("/:id", async (req, res) => {
    const { id } = req.params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
    res.render("detail", { post: response.data });
});

app.listen(PORT, () => console.log(`this server listening on ${PORT}`))