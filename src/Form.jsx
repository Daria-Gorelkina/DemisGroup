import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import InputMask from "react-input-mask";


const Form = ({ onDataSubmitted }) => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    useEffect(() => {
        document.body.classList.add("forform");
        return () => {
            document.body.classList.remove("forform");
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/index.php", formData);
            onDataSubmitted();
            console.log("Success:", response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 form-container">
            <legend>Заполните форму</legend>

            <div className="mb-3 input-container">
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    onChange={handleChange}
                    placeholder="Ваше ФИО *"
                />
                <label htmlFor="name" className="floating-label">Введите ваше ФИО</label>
            </div>

            <div className="mb-3 input-container">
                <input
                    type="text"
                    className="form-control"
                    id="address"
                    required
                    onChange={handleChange}
                    placeholder="Ваш адрес *"
                />
                <label htmlFor="address" className="floating-label">Введите ваш адрес</label>
            </div>

            <div className="mb-3 input-container">
                <InputMask
                    type="tel"
                    mask="+9 (999) 999-99-99"
                    className="form-control"
                    id="phone"
                    required
                    onChange={handleChange}
                    placeholder="Ваш контактный телефон *"
                />
                <label htmlFor="phone" className="floating-label">Введите телефон</label>
            </div>

            <div className="mb-3 input-container">
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    onChange={handleChange}
                    placeholder="Ваш email *"
                />
                <label htmlFor="email" className="floating-label">Введите ваш email</label>
            </div>

            <button type="submit" className="btn btn-custom">Отправить</button>
        </form>
    );
};

export default Form;

