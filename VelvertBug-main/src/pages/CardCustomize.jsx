// src/WeddingInviteForm.js
import "./CardCustomize.css";
import React, { useState } from 'react';

const CardCustomize = () => {
  const [formData, setFormData] = useState({
    weddingDate: '',
    numFunctions: '',
    inviteType: '',
    loveStory: '',
    weddingLogo: '',
    additionalReq: '',
    likedDesigns: '',
    budgetRestriction: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p className="cardcustomize-text">When’s the wedding?</p>
        <input
          type="date"
          name="weddingDate"
          value={formData.weddingDate}
          onChange={handleChange}
        />
      </label>
      <label>
        <p className="cardcustomize-text">How many functions do you want to include in the invite?</p>
        <input
          type="number"
          name="numFunctions"
          value={formData.numFunctions}
          onChange={handleChange}
        />
      </label>
      <label>
        <p className="cardcustomize-text">Do you want the invite to be motion (video) or still (pdf)?</p>
        <select
          name="inviteType"
          value={formData.inviteType}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="motion">Motion (Video)</option>
          <option value="still">Still (PDF)</option>
        </select>
      </label>
      <label>
       <p className="cardcustomize-text"> Do you want to include any love story in the invite? (as the commercials will vary)</p>
        <textarea
          name="loveStory"
          value={formData.loveStory}
          onChange={handleChange}
        />
      </label>
      <label>
        <p className="cardcustomize-text">Do you require a wedding logo/monogram?</p>
        <select
          name="weddingLogo"
          value={formData.weddingLogo}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label>
        <p className="cardcustomize-text">Any additional requirements? If yes, please mention the same.</p>
        <textarea
          name="additionalReq"
          value={formData.additionalReq}
          onChange={handleChange}
        />
      </label>
      <label>
        <p className="cardcustomize-text">Did you like any previous designs?</p>
        <textarea
          name="likedDesigns"
          value={formData.likedDesigns}
          onChange={handleChange}
        />
      </label>
      <label>
       <p className="cardcustomize-text"> If you have budget restrictions, please mention.</p>
        <textarea
          name="budgetRestriction"
          value={formData.budgetRestriction}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CardCustomize;
