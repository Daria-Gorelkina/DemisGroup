import { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("/index.php");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row d-flex justify-content-center">
            <div className="col style-table-width">
                <table className="table table-dark table-striped mt-3 table-center">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>ФИО</th>
                        <th>Адрес</th>
                        <th>Телефон</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
