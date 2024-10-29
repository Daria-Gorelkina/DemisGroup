import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const TableNews = () => {
    const [news, setNews] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("/fornews.php");
            setNews(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row h-100">
            {news.map((n, index) => (
                <div className="col-xs-12 col-md-12" key={n.id}>
                    <div className="serviceBox mx-2 style-for-table-news">
                        <h2 className="style-for-table-news-title">{n.name}</h2>
                        <p className="description style-for-table-news-description">{n.text}</p>
                        <p className="style-for-table-news-time">{n.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TableNews;
