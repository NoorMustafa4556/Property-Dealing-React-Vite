import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({
    property_type: "",
    size: "",
    nature: "",
    owner_name: "",
    price: "",
    email: "",
    demand: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);

 
  const fetchProperties = async () => {
    try {
      const response = await axios.get("http://localhost:3001/");
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
      
        await axios.put(`http://localhost:3001/update/${editId}`, formData);
        setIsEditing(false);
        setEditId(null);
      } else {
       
        await axios.post("http://localhost:3001/add", formData);
      }
      fetchProperties();
      setFormData({
        property_type: "",
        size: "",
        nature: "",
        owner_name: "",
        price: "",
        email: "",
        demand: "",
      });
    } catch (error) {
      console.error("Error submitting property:", error);
    }
  };

 
  const handleEdit = (property) => {
    setFormData(property);
    setIsEditing(true);
    setEditId(property.id);
  };

 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
      fetchProperties();
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  return (
    <div className="App">
      <h1>Online Property Dealing</h1>

      <form onSubmit={handleSubmit}>
        
        <input
        
          type="text"
          placeholder="Property Type"
          value={formData.property_type}
          onChange={(e) =>
            setFormData({ ...formData, property_type: e.target.value })
          }
          required
        />
        <br />
        <input
        
          type="text"
          placeholder="Size"
          value={formData.size}
          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
          required
        />
        <br />
       
        <input
        
          type="text"
          placeholder="Nature (For Sale/Rent)"
          value={formData.nature}
          onChange={(e) => setFormData({ ...formData, nature: e.target.value })}
          required
        />
        <br />
        <input
        
          type="text"
          placeholder="Owner Name"
          value={formData.owner_name}
          onChange={(e) =>
            setFormData({ ...formData, owner_name: e.target.value })
          }
          required
        />
        <br />
        <input
        
        type="text"
        placeholder="country"
        value={formData.country}
        onChange={(e) =>
          setFormData({ ...formData, country: e.target.value })
        }
        required
      />
<br />
        <input
        
          type="text"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <br />
        <input
        
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Demand"
          value={formData.demand}
          onChange={(e) => setFormData({ ...formData, demand: e.target.value })}
          required
        />
        <br />
        <button type="submit">{isEditing ? "Update Property" : "Add Property"}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Property Type</th>
            <th>Size</th>
            <th>Nature</th>
            <th>Owner Name</th>
            <th>Price</th>
            <th>Email</th>
            <th>country</th>
            <th>Demand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.property_type}</td>
              <td>{property.size}</td>
              <td>{property.nature}</td>
              <td>{property.owner_name}</td>
              <td>{property.price}</td>
              <td>{property.email}</td>
              <td>{property.country}</td>
              <td>{property.demand}</td>
              <td>
                <button onClick={() => handleEdit(property)}>Edit</button>
                <button onClick={() => handleDelete(property.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
