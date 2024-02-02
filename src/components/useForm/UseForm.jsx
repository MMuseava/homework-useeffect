import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './useForm.style.css';

const UseForm = ({ addUserHandler }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    phone: '',
    email: '',
    salary: '',
    maritalStatus: '',
  });
  const [isUserFormOpen, setIsUserFormOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      addUserHandler(formData);

      setFormData({
        id: '',
        name: '',
        phone: '',
        email: '',
        salary: '',
        maritalStatus: '',
      });
      setIsUserFormOpen(false);
      setCurrentStep(1);
    }
  };

  return (
    <div>
      <button onClick={() => setIsUserFormOpen(true)}>Add User</button>

      {isUserFormOpen && (
        <form onSubmit={onSubmitHandler}>
          {currentStep === 1 ? (
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={onInputChange}
                name="name"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={onInputChange}
                name="phone"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={onInputChange}
                name="email"
                required
              />
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Salary"
                value={formData.salary}
                onChange={onInputChange}
                name="salary"
              />
              <label htmlFor="maritalStatus">Marital Status:</label>
                <select
                  id="maritalStatus"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={onInputChange}
                >
                  <option value="">Select Marital Status</option>
                  <option value="married">Married</option>
                  <option value="single">Single</option>
                </select>
            </div>
          )}
          <button type="submit">{currentStep === 1 ? 'Next' : 'Submit'}</button>
        </form>
      )}
    </div>
  );
};

UseForm.propTypes = {};

export default UseForm;
