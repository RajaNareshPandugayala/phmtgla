import React, { useState } from "react";

function LoanApplicationNew() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    ssn: "",
    borrowers: "",
    // Employment
    employmentStatus: "",
    employer: "",
    jobTitle: "",
    yearsAtJob: "",
    income: "",
    // Property
    propertyType: "",
    propertyValue: "",
    downPayment: "",
    // Loan
    loanPurpose: "",
    loanAmount: "",
    loanTerm: "",
    creditScore: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (formData.firstName.length < 2)
        newErrors.firstName = "First name must be at least 2 characters.";
      if (formData.lastName.length < 2)
        newErrors.lastName = "Last name must be at least 2 characters.";
      if (!formData.email.includes("@"))
        newErrors.email = "Please enter a valid email address.";
      if (formData.phone.length < 10)
        newErrors.phone = "Please enter a valid phone number.";
      if (formData.dob.length < 5) newErrors.dob = "Date of birth is required.";
      if (formData.ssn.length < 9 || formData.ssn.length > 11)
        newErrors.ssn = "SSN must be 9-11 characters.";
      if (!formData.borrowers) newErrors.borrowers = "Number required.";
    } else if (step === 2) {
      if (!formData.employmentStatus)
        newErrors.employmentStatus = "Please select employment status.";
      if (formData.employmentStatus === "Employed") {
        if (!formData.employer) newErrors.employer = "Employer required.";
        if (!formData.jobTitle) newErrors.jobTitle = "Job title required.";
        if (!formData.yearsAtJob) newErrors.yearsAtJob = "Years required.";
      }
      if (!formData.income) newErrors.income = "Monthly income is required.";
    } else if (step === 3) {
      if (!formData.propertyType)
        newErrors.propertyType = "Please select property type.";
      if (!formData.propertyValue)
        newErrors.propertyValue = "Property value is required.";
      if (!formData.downPayment)
        newErrors.downPayment = "Down payment is required.";
    } else if (step === 4) {
      if (!formData.loanPurpose)
        newErrors.loanPurpose = "Please select loan purpose.";
      if (!formData.loanAmount)
        newErrors.loanAmount = "Loan amount is required.";
      if (!formData.loanTerm) newErrors.loanTerm = "Please select loan term.";
      if (!formData.creditScore)
        newErrors.creditScore = "Please select credit score range.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
      setErrors({});
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = () => {
    if (validateStep()) {
      console.log("Form Submitted", formData);
      alert("Form submitted successfully! Check console for JSON.");
    }
  };

  return (
    <div className="loanApplicationformParent">
      <div className="loanApplicationformLoginSignuplinksDiv">
        <a href="/phmtgla" className="signOut">
          SignOut
        </a>
      </div>
      <div className="loanApplicationformBox">
        <div className="container loanApplicationform">
          <h1>Loan Application</h1>
          <p>
            Please provide accurate information to process your loan
            application.
          </p>

          <div className="steps">
            <span className={step === 1 ? "active" : ""}>Personal</span>
            <span className={step === 2 ? "active" : ""}>Employment</span>
            <span className={step === 3 ? "active" : ""}>Property</span>
            <span className={step === 4 ? "active" : ""}>Loan</span>
          </div>

          {step === 1 && (
            <div className="section">
              <h2>Personal Information</h2>
              <Input
                label="First Name"
                name="firstName"
                placeholder="RajaNaresh"
                value={formData.firstName}
                error={errors.firstName}
                onChange={handleChange}
              />
              <Input
                label="Last Name"
                name="lastName"
                placeholder="Pandugayala"
                value={formData.lastName}
                error={errors.lastName}
                onChange={handleChange}
              />
              <Input
                label="Email"
                name="email"
                placeholder="rajanaresh.pandugayala@example.com"
                value={formData.email}
                error={errors.email}
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                name="phone"
                placeholder="(980) 292-1918"
                value={formData.phone}
                error={errors.phone}
                onChange={handleChange}
              />
              <Input
                label="Date of Birth"
                name="dob"
                placeholder="mm/dd/yyyy"
                value={formData.dob}
                error={errors.dob}
                onChange={handleChange}
              />
              <Input
                label="Social Security Number"
                name="ssn"
                placeholder="XXX-XX-XXXX"
                value={formData.ssn}
                error={errors.ssn}
                onChange={handleChange}
              />
              <Input
                label="Total Number of Borrowers"
                name="borrowers"
                placeholder="__"
                value={formData.borrowers}
                error={errors.borrowers}
                onChange={handleChange}
              />
            </div>
          )}

          {step === 2 && (
            <div className="section">
              <h2>Employment Information</h2>
              <Select
                label="Employment Status"
                name="employmentStatus"
                value={formData.employmentStatus}
                error={errors.employmentStatus}
                onChange={handleChange}
                options={["Employed", "Self-employed", "Unemployed", "Retired"]}
              />
              {formData.employmentStatus === "Employed" && (
                <>
                  <Input
                    label="Current Employer"
                    name="employer"
                    placeholder="Company name"
                    value={formData.employer}
                    error={errors.employer}
                    onChange={handleChange}
                  />
                  <Input
                    label="Job Title"
                    name="jobTitle"
                    placeholder="Your position"
                    value={formData.jobTitle}
                    error={errors.jobTitle}
                    onChange={handleChange}
                  />
                  <Input
                    label="Years at Current Job"
                    name="yearsAtJob"
                    placeholder="Years"
                    value={formData.yearsAtJob}
                    error={errors.yearsAtJob}
                    onChange={handleChange}
                  />
                </>
              )}
              <Input
                label="Monthly Income"
                name="income"
                placeholder="5000"
                value={formData.income}
                error={errors.income}
                onChange={handleChange}
              />
            </div>
          )}

          {step === 3 && (
            <div className="section">
              <h2>Property Information</h2>
              <Select
                label="Property Type"
                name="propertyType"
                value={formData.propertyType}
                error={errors.propertyType}
                onChange={handleChange}
                options={[
                  "Single-Family Home",
                  "Condominium",
                  "Townhouse",
                  "Multi-Family Home",
                  "Other",
                ]}
              />
              <Input
                label="Estimated Property Value"
                name="propertyValue"
                placeholder="250000"
                value={formData.propertyValue}
                error={errors.propertyValue}
                onChange={handleChange}
              />
              <Input
                label="Down Payment Amount"
                name="downPayment"
                placeholder="50000"
                value={formData.downPayment}
                error={errors.downPayment}
                onChange={handleChange}
              />
            </div>
          )}

          {step === 4 && (
            <div className="section">
              <h2>Loan Information</h2>
              <Select
                label="Loan Purpose"
                name="loanPurpose"
                value={formData.loanPurpose}
                error={errors.loanPurpose}
                onChange={handleChange}
                options={[
                  "Purchase Home",
                  "Refinance",
                  "Cash-Out Refinance",
                  "Home Equity",
                ]}
              />
              <Input
                label="Loan Amount"
                name="loanAmount"
                placeholder="200000"
                value={formData.loanAmount}
                error={errors.loanAmount}
                onChange={handleChange}
              />
              <Select
                label="Loan Term"
                name="loanTerm"
                value={formData.loanTerm}
                error={errors.loanTerm}
                onChange={handleChange}
                options={["15 Years", "20 Years", "30 Years"]}
              />
              <div>
                <label>Estimated Credit Score Range</label>
                <div className="radio-group">
                  {[
                    "Excellent (720+)",
                    "Good (680-719)",
                    "Fair (620-679)",
                    "Poor (580-619)",
                    "Very Poor (below 580)",
                  ].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="creditScore"
                        value={option}
                        checked={formData.creditScore === option}
                        onChange={handleChange}
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {errors.creditScore && (
                  <p className="error">{errors.creditScore}</p>
                )}
              </div>
            </div>
          )}

          <div className="buttons">
            {step > 1 && <button onClick={handlePrev}>Previous</button>}
            {step < 4 && <button onClick={handleNext}>Continue</button>}
            {step === 4 && (
              <button onClick={handleSubmit}>Submit Application</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Input = ({ label, name, placeholder, value, error, onChange }) => (
  <div>
    <label>{label}</label>
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error && <p className="error">{error}</p>}
  </div>
);

const Select = ({ label, name, value, error, onChange, options }) => (
  <div>
    <label>{label}</label>
    <select name={name} value={value} onChange={onChange}>
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <p className="error">{error}</p>}
  </div>
);

export default LoanApplicationNew;
