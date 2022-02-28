import axios from "axios";

const getData = (async (number) => {
    const {data:user_id} = await axios (`https://jsonplaceholder.typicode.com/users/${number}`);

    const {data:posts} = await axios (`https://jsonplaceholder.typicode.com/posts?userId=${number}`);

    console.log("users:",user_id)
    console.log("posts:",posts)
})

export default getData