import axios from "axios";

(async function () {
    try {
        const { status, data } = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
        data.map(async (param) => {

            const res = await axios.post('http://localhost:3000/articles/', ...param)
            console.log(res.status)
        })
    } catch (err) {
        console.log(err.getMessage())
    }

})()

