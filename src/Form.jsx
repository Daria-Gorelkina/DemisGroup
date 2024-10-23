import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import InputMask from "react-input-mask"

const Form = ({ onDataSubmitted }) => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:81/index.php", formData);
            onDataSubmitted();
            console.log("Success:", response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 formcenter">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">ФИО</label>
                <input type="text" className="form-control" id="name" required onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address">Адрес</label>
                <input type="text" className="form-control" id="address" required onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone">Номер телефона</label>
                <InputMask type="tel" mask="+7(999)9999999" className="form-control" id="phone" required onChange={handleChange}></InputMask>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-custom">Submit</button>
        </form>
    );
};

export default Form;
