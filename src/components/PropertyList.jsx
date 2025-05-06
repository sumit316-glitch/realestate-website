import React from "react";
import "../App.css";

export default function PropertyList() {
  return (
    <form className="property-search">
      <div>
        <label>Keywords</label>
        <input type="text" placeholder="Keywords" />
      </div>
      <div>
        <label>Price Min</label>
        <select><option>-- Select Price --</option></select>
      </div>
      <div>
        <label>Price Max</label>
        <select><option>-- Select Price --</option></select>
      </div>
      <div>
        <label>Type</label>
        <select><option>-- Select a Type --</option></select>
      </div>
      <div>
        <label>Category</label>
        <select><option>-- Select a category --</option></select>
      </div>
      <div>
        <label>Agent</label>
        <select><option>-- Select an agent --</option></select>
      </div>
      <div>
        <label>From</label>
        <input type="date" />
      </div>
      <div>
        <label>To</label>
        <input type="date" />
      </div>
      <div>
        <label>Bedrooms</label>
        <input type="number" min="0" />
      </div>
      <div>
        <label>Bathrooms</label>
        <input type="number" min="0" />
      </div>
      <div>
        <label>SOFT</label>
        <input type="text" />
      </div>
      <div>
        <label>Lot size</label>
        <input type="text" />
      </div>
      <button className="search-btn" type="submit">SEARCH</button>
    </form>
  );
}
