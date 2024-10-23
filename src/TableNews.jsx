import { useEffect, useState } from "react";
import axios from "axios";

const TableNews = () => {
    const [news, setNews] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:81/fornews.php");
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
                    <h2>{n.name}</h2>
                    <p>{n.text}</p>
                    <p>{n.date}</p>
                </article>
            ))}
        </div>
    );
};

export default TableNews;
