import axios from "axios";

(async function () {
    try {
        const { status, data } = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
        if (status == 200)
            data.map(async (param) => {
                const res = await axios.post('http://localhost:3000/articles/', ...param)
            })
    } catch (err) {
        console.log(err.getMessage())
    }

})()

