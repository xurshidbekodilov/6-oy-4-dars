import { useState } from "react";
import "./App.css";

function App() {
  const initialFormData = {
    companyName: "",
    email: "",
    telNumber: "",
    address: "",
    comment: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = (event) => {
    event.preventDefault();

    if (formData.companyName.length < 3) {
      alert("Kompaniya nomi kamida 3 ta belgidan iborat bo'lishi kerak.");
      return;
    }

    if (formData.address.trim() === "") {
      alert("Xatolik yuz berdi. Iltimos formani to'g'ri to'diring!");
      return;
    }

    if (formData.comment.trim() === "") {
      alert("Izoh yozilishi majburiy.");
      return;
    }
    setSubmittedData([
      ...submittedData,
      {
        name: formData.companyName,
        email: formData.email,
        address: formData.address,
        contact: formData.telNumber,
        comment: formData.comment,
      },
    ]);

    setFormData({
      companyName: "",
      email: "",
      telNumber: "",
      address: "",
      comment: "",
    });
  };

  return (
    <>
      <div className="header">
        <div className="header-container">
          <h3>Doktor22</h3>
          <ul>
            <li>Vakansiyalar</li>
            <li>Kandidatlar</li>
            <li>Kompaniyalar</li>
            <li>Xizmatlar</li>
            <li>Ta'lim</li>
          </ul>
          <select>
            <option value="">O'zb</option>
            <option value="">Eng</option>
            <option value="">RU</option>
          </select>
          <button>Boshlash</button>
        </div>
      </div>

      <form onSubmit={validateForm}>
        <h3>Kompaniya ma'lumotlari</h3>
        <p>Kompaniya haqidagi ma'lumotlarni kiriting</p>
        <div className="company-name">
          <label>
            Kompaniya nomi<span>*</span>
          </label>
          <br />
          <input
            type="text"
            placeholder="Kompaniya nomi"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </div>
        <div className="email">
          <label>
            Email<span>*</span>
          </label>
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="tel-number">
          <label>
            Telefon raqami<span>*</span>
          </label>
          <div>
            <span>Uz</span>
            <input
              type="text"
              placeholder="+998"
              name="telNumber"
              value={formData.telNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="adress">
          <label>
            Yashash joyi<span>*</span>
          </label>
          <br />
          <input
            type="text"
            placeholder="Joy"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="comment">
          <label>
            Izoh<span>*</span>
          </label>
          <br />
          <textarea
            placeholder="Kompaniya haqida izoh qoldiring"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="buttons">
          <button type="button" disabled className="ortga">
            ORTGA
          </button>
          <button type="submit" className="keyingisi">
            KEYINGISI
          </button>
        </div>
      </form>

      <div className="card-sec">
        {submittedData.map((data, index) => (
          <div className="card" key={index}>
            <h3>Submitted Data {index + 1}</h3>
            <p><strong>Kompaniya nomi:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Yashash joyi:</strong> {data.address}</p>
            <p><strong>Telefon raqami:</strong> {data.contact}</p>
            <p><strong>Izoh:</strong> {data.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
