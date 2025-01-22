import axios from "axios"
import { useEffect, useState } from "react"

const UseEffectAPI = () => {
    var [posts, setPost] = useState([])
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/")
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch((err) => console.log(err))

    }, [])
    return (
        <div>
            <h1>this page is meant for useEffect with API.</h1>
            <h3>The contents inside the my jsonplaceholder API posts</h3>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} style={{ listStyleType: "number" }}>{post.title}</li>
                ))}
            </ul>
        </div>
    )

}
export default UseEffectAPI