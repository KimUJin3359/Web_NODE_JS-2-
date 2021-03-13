const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8080;

//app.use(express.static(__dirname + "/views"));
//기본 경로를 views로 설정해두는 것과 비슷한 역할
app.set('view engine', 'ejs');
//version이 다를 수 있어서 사용하는 방어코드
//post에 필요함
app.use(express.urlencoded({ extended: true }));
//json을 사용하기 위함
app.use(express.json());

//render -> 화면에 그려달라는 말
app.get("/", async (req, res) => {
    try {
        // axios : 비동기로 가져옴
        // ejs 전달 정보 
        //1. 촐 글 갯수 
        const allPosts = await axios.get("https://jsonplaceholder.typicode.com/posts/");
        const count = allPosts.data.length;
        //2. page 수
        const page = req.query.page;
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/", {
            params: {
                _start: (page && page > 0) ? 6 * (page - 1) : 0,
                _limit: 6
            }
        })
        res.render("index", { data: response.data, count: count, page: page ? page : 1 });
    } catch (error) {
        res.render("error");
    }
});

app.get("/:id", async (req, res) => {
    const { id } = req.params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    res.render("detail", { post: response.data });
});

app.listen(PORT, () => console.log(`this server listening on ${PORT}`))