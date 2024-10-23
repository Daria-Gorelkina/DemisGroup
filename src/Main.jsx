import { useEffect, useState } from "react";
import axios from "axios";


const Main = () => {
    const [news, setNews] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:81/mainnews.php");
            setNews(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {news.map((n, index) => (
                <article key={n.id}>
                    <h3>{n.name}</h3>
                    <p>{n.text.split(".").slice(0, 1).join("") + "."}</p>
                    <p>{n.date}</p>
                </article>
            ))}
        </div>
    );
};

export default Main;
