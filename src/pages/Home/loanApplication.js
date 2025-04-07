import React, { useRef, useState, useEffect } from "react";

function LoanApplication() {
  // function LoanApplication() {
  const nextRef = useRef(null);

  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    officerName: "",
    FullName: "",
    AlternateName: "",
    ApplicantDateOfBirth: "",
    Citizenship1: "",
    TypeOfCredit: "",
    TotalNumberOfBorrowers: "",
    JointCreditInitials: "",
    ListNamesOfOtherBorrower: "",
    MaritalStatus: "",
    UnmarriedStatus: "",
    eveningPhone: "",
    cellPhone: "",
    workPhone: "",
    email: "",
    Street1: "",
    Unit1: "",
    City1: "",
    State1: "",
    zipCode1: "",
    currentAddressYear: "",
    currentAddressMonth: "",
    Housing: "",
    PerMonth1: "",
    EmployerOrBusinessName1: "",
    EmployerOrBusinessNo1: "",
    Street2: "",
    Unit2: "",
    City2: "",
    State2: "",
    zipCode2: "",
    PositionOrTitle2: "",
    StartDate2: "",
    workingYear2: "",
    workingmonth2: "",
    lessThanOrMoreThan25_1: "",
    PerMonth2: "",
    EmployerOrBusinessName2: "",
    EmployerOrBusinessNo2: "",
    Street3: "",
    Unit3: "",
    City3: "",
    State3: "",
    zipCode3: "",
    PositionOrTitle3: "",
    StartDate3: "",
    workingYear: "",
    workingMonth: "",
    lessThanOrMoreThan25_2: "",
    PerMonth3: "",
    EmployerOrBusinessName3: "",
    EmployerOrBusinessNo3: "",
    Street4: "",
    Unit4: "",
    City4: "",
    State4: "",
    zipCode4: "",
    PositionOrTitle4: "",
    StartDate4: "",
    EndDate: "",
    PerMonth4: "",
    EmployerOrBusinessName4: "",
    Street5: "",
    Unit5: "",
    City5: "",
    State5: "",
    zipCode5: "",
    NumberOfUnits: "",
    PropertyValue: "",
    propertyWillBe: "",

    _id: "",
    subject: "Uniform Residential Loan Application: ",
  });

  // Function to generate the custom _id
  function generateId() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const date = String(now.getDate()).padStart(2, "0");
    const day = now.toLocaleString("en-US", { weekday: "short" }).toUpperCase();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${year}${month}${date}${day}${hours}${minutes}${seconds}`;
  }

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      _id: generateId(),
    }));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const formElement = event.target;
    formElement.classList.add("submitting");

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxKqR-2reW1-qNQUtVhtsUbBYuwQR3EqiuPcoeyI5PlVW65EkZ77mwJc_S0sTxGehSz/exec";

    fetch(scriptURL, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error("Error!", error.message);
      })
      .finally(() => {
        formElement.classList.remove("submitting");
      });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleNextStep = () => {
    // Check for missing required fields in Step 0
    const requiredFields = [
      "FullName",
      "AlternateName",
      "ApplicantDateOfBirth",
      "Citizenship1",
      "TypeOfCredit",
      "TotalNumberOfBorrowers",
      "JointCreditInitials",
      "ListNamesOfOtherBorrower",
      "MaritalStatus",
      "eveningPhone",
      "email",
      "zipCode1",
      "currentAddressYear",
      "currentAddressMonth",
      "Housing",
    ];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
      }
    });

    // setErrors(newErrors);

    // If there are no errors, move to the next step
    if (Object.keys(newErrors).length === 0) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // const handleNextStep = () => {
  //   setCurrentStep((prev) => prev + 1);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    console.log("Current Step:", currentStep);
  }, [currentStep]);

  return (
    <div className="loanApplicationformParent">
      <div className="loanApplicationformLoginSignuplinksDiv">
        <a href="/">Login/SignUp</a>
      </div>
      <div className="loanApplicationformBox">
        <form
          className="loanApplicationform"
          target="_self"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="_subject"
            id="subject"
            value={formData.subject + formData.FullName}
          />
          <input type="hidden" name="id" value={formData._id} />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            ref={nextRef}
            value="https://google.com"
          />
          <input type="hidden" name="_captcha" value="false" />

          <div
            className={`loanApplicationformBoxDiv ${
              currentStep === 0 ? "active" : ""
            }`}
          >
            <p>
              <h1 className="loanApplicationformheading1">
                Personal Information
              </h1>
            </p>
            <label className="loanApplicationformLabelText">
              <h3>Select Loan Officer</h3>
              <select
                className="loanApplicationformSelect"
                id="officerName"
                name="officerName"
                required
                value={
                  formData.officerName === "No" ? "" : formData.officerName
                } // Conditional value
                onChange={(e) => {
                  // Only allow selection if "Yes" is selected for working_with_a_Loan_Officer
                  if (formData.working_with_a_Loan_Officer !== "No") {
                    handleChange(e);
                  }
                }}
              >
                <option value="" disabled>
                  -Please Select-
                </option>
                <option value="Ramesh Nagarajan">Ramesh Nagarajan</option>
                <option value="Sridhar Parepalli">Sridhar Parepalli</option>
                <option value="Visvesh Balasubramanian">
                  Visvesh Balasubramanian
                </option>
                <option value="Jegadheesan Jayavel">Jegadheesan Jayavel</option>
                <option value="not require">Not require</option>
                {/* {[...Array(10)].map((_, i) => (<option key={i} value={`Loan Officer ${i + 1}`}> Loan Officer {i + 1}     </option>))} */}
              </select>
            </label>

            <label className="loanApplicationformLabelText">
              <label>
                <span>
                  <b>Name</b> (First, Middle, Last, Suffix)
                </span>
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="FullName"
                  name="FullName"
                  placeholder="Your Full Name"
                  value={formData.FullName}
                  onChange={handleChange}
                  autocomplete="true"
                  required
                />
              </label>

              <label>
                <span>
                  <b>Alternate Names</b> – List any names by which you are known
                  or any names under which credit was previously received
                  (First, Middle, Last, Suffix
                </span>
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="AlternateName"
                  name="AlternateName"
                  placeholder="Provide Your Alternate Names"
                  value={formData.AlternateName}
                  onChange={handleChange}
                  autocomplete="true"
                  required
                />
              </label>

              <label>
                <b>Date of Birth</b>
                <input
                  className="loanApplicationformInputDate"
                  type="date"
                  id="ApplicantDateOfBirth"
                  name="ApplicantDateOfBirth"
                  placeholder="Enter your DOB"
                  value={formData.ApplicantDateOfBirth}
                  onChange={handleChange}
                  autocomplete="true"
                  required
                />
              </label>
            </label>

            <label className="loanApplicationformLabelRadio">
              <b>Citizenship</b>
              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  name="Citizenship1"
                  value="U.S. Citizen"
                  checked={formData.Citizenship1 === "U.S. Citizen"}
                  onChange={handleChange}
                  required
                />{" "}
                U.S. Citizen
              </label>

              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  name="Citizenship1"
                  value="Permanent Resident Alien"
                  checked={formData.Citizenship1 === "Permanent Resident Alien"}
                  onChange={handleChange}
                />{" "}
                Permanent Resident Alien
              </label>

              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  name="Citizenship1"
                  value="Non-Permanent Resident Alien"
                  checked={
                    formData.Citizenship1 === "Non-Permanent Resident Alien"
                  }
                  onChange={handleChange}
                />{" "}
                Non-Permanent Resident Alien
              </label>
            </label>

            <label className="loanApplicationformLabelRadio">
              <b>Type of Credit</b>
              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  name="TypeOfCredit"
                  value="Individual Credit"
                  checked={formData.TypeOfCredit === "Individual Credit"}
                  onChange={handleChange}
                  required
                />{" "}
                I am applying for <b>individual credit.</b>
              </label>

              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  name="TypeOfCredit"
                  value="Joint Credit"
                  checked={formData.TypeOfCredit === "Joint Credit"}
                  onChange={handleChange}
                />{" "}
                I am applying for <b>joint credit.</b>
              </label>

              <label>
                Total Number of Borrowers:
                <input
                  className="loanApplicationformInputNumber"
                  type="number"
                  id=". TotalNumberOfBorrowers"
                  name="TotalNumberOfBorrowers"
                  value={formData.TotalNumberOfBorrowers}
                  onChange={handleChange}
                  autocomplete="true"
                  required
                />
              </label>

              <label>
                Each Borrower intends to apply for joint credit.{" "}
                <b>Your initials:</b>
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  cols="30"
                  rows="3"
                  placeholder=""
                  id="JointCreditInitials"
                  name="JointCreditInitials"
                  value={formData.JointCreditInitials}
                  onChange={handleChange}
                  autocomplete="true"
                  required
                />
              </label>

              <label>
                <b>List Name(s) of Other Borrower(s) Applying for this Loan</b>
                <br />
                <span>
                  (First, Middle, Last, Suffix) – Use a separator between names
                </span>
                <br />
                <textarea
                  className="loanApplicationformTextarea"
                  cols="30"
                  rows="3"
                  placeholder=""
                  id="ListNamesOfOtherBorrower"
                  name="ListNamesOfOtherBorrower"
                  value={formData.ListNamesOfOtherBorrower}
                  onChange={handleChange}
                  autocomplete="true"
                  required
                ></textarea>
              </label>
            </label>

            <label className="loanApplicationformLabelRadio">
              <b>Marital Status</b>
              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  name="MaritalStatus"
                  value="Married"
                  checked={formData.MaritalStatus === "Married"}
                  onChange={handleChange}
                  required
                />{" "}
                Married
              </label>

              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  name="MaritalStatus"
                  value="Separated"
                  checked={formData.MaritalStatus === "Separated"}
                  onChange={handleChange}
                />{" "}
                Separated
              </label>

              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  name="MaritalStatus"
                  value="Unmarried"
                  checked={formData.MaritalStatus === "Unmarried"}
                  onChange={handleChange}
                />{" "}
                Unmarried{" "}
                <select
                  className="loanApplicationformSelect"
                  id="UnmarriedStatus"
                  name="UnmarriedStatus"
                  value={formData.UnmarriedStatus}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    -Please Select-
                  </option>
                  <option value="Single">Single</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Civil Union">Civil Union</option>
                  <option value="Domestic Partnership">
                    Domestic Partnership
                  </option>
                  <option value="Registered Reciprocal Beneficiary Relationship">
                    Registered Reciprocal Beneficiary Relationship
                  </option>
                </select>
              </label>
            </label>

            <label className="loanApplicationformLabelTel">
              <h4 className="loanApplicationformheading4">
                {" "}
                Contact Information:
              </h4>
              <label>
                <span>
                  <b>Home</b> Phone
                </span>
                <input
                  className="loanApplicationformInputTel"
                  type="tel"
                  id="eveningPhone"
                  name="eveningPhone"
                  placeholder="Home #"
                  value={formData.eveningPhone}
                  onChange={handleChange}
                  maxlength="10"
                  minlength="10"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  autocomplete="true"
                  required
                />
              </label>
              <label>
                {" "}
                <span>
                  <b>Cell</b> Phone
                </span>
                <input
                  className="loanApplicationformInputTel"
                  type="tel"
                  id="cellPhone"
                  name="cellPhone"
                  placeholder="Cell #"
                  value={formData.cellPhone}
                  onChange={handleChange}
                  maxlength="10"
                  minlength="10"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  autocomplete="true"
                />
              </label>
              <label>
                <span>
                  <b>Work</b> Phone
                </span>
                <input
                  className="loanApplicationformInputTel"
                  type="tel"
                  id="workPhone"
                  name="workPhone"
                  placeholder="Work #"
                  value={formData.workPhone}
                  onChange={handleChange}
                  maxlength="10"
                  minlength="10"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  autocomplete="true"
                />
              </label>
              <label>
                <b>Email</b>
                <input
                  className="loanApplicationformInputEmail"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Id"
                  value={formData.email}
                  onChange={handleChange}
                  autocomplete="true"
                  required
                />
              </label>
            </label>

            <label className="loanApplicationformLabelText">
              <h4 className="loanApplicationformheading4">Current Address:</h4>
              <label>
                Street
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="Street1"
                  name="Street1"
                  placeholder="Street"
                  value={formData.Street1}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                Unit #
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="Unit1"
                  name="Unit1"
                  placeholder="Unit #"
                  value={formData.Unit1}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                City
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="City1"
                  name="City1"
                  placeholder="Enter city"
                  value={formData.City1}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                State:
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="State1"
                  name="State1"
                  placeholder="Enter State"
                  value={formData.State1}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                ZIP Code:
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="zipCode1"
                  name="zipCode1"
                  placeholder="Enter your location ZIP Code"
                  value={formData.zipCode1}
                  onChange={handleChange}
                  maxlength="6"
                  minlength="5"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  autocomplete="true"
                  required
                />
              </label>
              <label>
                How Long at Current Address? <br />
                <span>
                  <input
                    className="loanApplicationformInputNumber"
                    type="number"
                    id="currentAddressYear"
                    name="currentAddressYear"
                    placeholder="No. of Year(s)"
                    value={formData.currentAddressYear}
                    onChange={handleChange}
                    autocomplete="true"
                    required
                  />
                  Year(s){" "}
                  <input
                    className="loanApplicationformInputNumber"
                    type="number"
                    id="currentAddressMonth"
                    name="currentAddressMonth"
                    placeholder="No. of Month(s)"
                    value={formData.currentAddressMonth}
                    onChange={handleChange}
                    autocomplete="true"
                    required
                  />
                  Month(s)
                </span>
              </label>
            </label>
            <label className="loanApplicationformLabelRadio">
              <b>Housing</b>
              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  name="Housing"
                  value="No primary housing expense"
                  checked={formData.Housing === "No primary housing expense"}
                  onChange={handleChange}
                  required
                />{" "}
                No primary housing expense
              </label>
              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  name="Housing"
                  value="Own"
                  checked={formData.Housing === "Own"}
                  onChange={handleChange}
                />{" "}
                Own
              </label>
              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  name="Housing"
                  value="Rent"
                  checked={formData.Housing === "Rent"}
                  onChange={handleChange}
                />{" "}
                Rent {" ("}$
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  name="PerMonth1"
                  checked={formData === "PerMonth1"}
                  onChange={handleChange}
                />
                /month{")"}
              </label>
            </label>

            <div className="loanApplicationButtonBox">
              <button
                type="submit"
                className="loanApplicationContinueButton"
                onClick={handleNextStep}
              >
                Continue
              </button>
            </div>
          </div>

          <div
            className={`loanApplicationformBoxDiv ${
              currentStep === 1 ? "active" : ""
            }`}
          >
            <p>
              <h3 className="loanApplicationformheading3">
                Current Employment/Self-Employment and Income
              </h3>
            </p>
            <label className="loanApplicationformLabelText">
              <label>
                <b>Employer or Business Name</b>
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="EmployerOrBusinessName1"
                  name="EmployerOrBusinessName1"
                  placeholder=""
                  value={formData.EmployerOrBusinessName1}
                  onChange={handleChange}
                  autocomplete="true"
                  required
                />
              </label>
              <label>
                Phone
                <input
                  className="loanApplicationformInputTel"
                  type="tel"
                  id="EmployerOrBusinessNo1"
                  name="EmployerOrBusinessNo1"
                  placeholder="#"
                  value={formData.EmployerOrBusinessNo1}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                Street
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="Street2"
                  name="Street2"
                  placeholder="Street"
                  value={formData.Street2}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                Unit #
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="Unit2"
                  name="Unit2"
                  placeholder="Unit #"
                  value={formData.Unit2}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                City
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="City2"
                  name="City2"
                  placeholder="Enter city"
                  value={formData.City2}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                State:
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="State2"
                  name="State2"
                  placeholder="Enter State"
                  value={formData.State2}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                ZIP Code:
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="zipCode2"
                  name="zipCode2"
                  placeholder="Enter your location ZIP Code"
                  value={formData.zipCode2}
                  onChange={handleChange}
                  maxlength="6"
                  minlength="5"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  autocomplete="true"
                  required
                />
              </label>
              <label>
                <b>Position Or Title</b>
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="PositionOrTitle2"
                  name="PositionOrTitle2"
                  placeholder=""
                  value={formData.PositionOrTitle2}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                <b>Start Date</b>
                <input
                  className="loanApplicationformInputDate"
                  type="date"
                  id="StartDate2"
                  name="StartDate2"
                  placeholder=""
                  value={formData.StartDate2}
                  onChange={handleChange}
                  autocomplete="true"
                  required
                />
              </label>
              <label>
                How long in this line of work?
                <span>
                  <input
                    className="loanApplicationformInputNumber"
                    type="number"
                    id="workingYear2"
                    name="workingYear2"
                    placeholder="No. of year(s)"
                    value={formData.workingYear2}
                    onChange={handleChange}
                    autocomplete="true"
                    required
                  />
                  Year(s){" "}
                  <input
                    className="loanApplicationformInputNumber"
                    type="number"
                    id="workingmonth2"
                    name="workingmonth2"
                    placeholder="No. of month(s)"
                    value={formData.workingmonth2}
                    onChange={handleChange}
                    autocomplete="true"
                    required
                  />
                  Month(s)
                </span>
              </label>
            </label>
            <label className="loanApplicationformLabelRadio">
              <b>If you are the Business Owner or Self-Employed</b>
              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  id="lessThanOrMoreThan25_1"
                  name="lessThanOrMoreThan25_1"
                  value="lessThan25"
                  checked={formData.lessThanOrMoreThan25_1 === "lessThan25"}
                  onChange={handleChange}
                />{" "}
                I have an ownership share of less than 25%.
              </label>
              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  id="lessThanOrMoreThan25_1"
                  name="lessThanOrMoreThan25_1"
                  value="moreThan25"
                  checked={formData.lessThanOrMoreThan25_1 === "moreThan25"}
                  onChange={handleChange}
                  required
                />{" "}
                I have an ownership share of 25% or more.
              </label>
              <label>
                Gross Monthly Income
                {" $"}
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  name="PerMonth2"
                  checked={formData.PerMonth2 === "PerMonth2"}
                />
              </label>
            </label>

            <p>
              <h3 className="loanApplicationformheading3">
                IF APPLICABLE, Complete Information for Additional
                Employment/Self-Employment and Income
              </h3>
            </p>
            <label className="loanApplicationformLabelText">
              <label>
                <b>Employer or Business Name</b>
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="EmployerOrBusinessName2"
                  name="EmployerOrBusinessName2"
                  placeholder=""
                  value={formData.EmployerOrBusinessName2}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                Phone
                <input
                  className="loanApplicationformInputTel"
                  type="tel"
                  id="EmployerOrBusinessNo2"
                  name="EmployerOrBusinessNo2"
                  placeholder="#"
                  value={formData.EmployerOrBusinessNo2}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                Street
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="Street3"
                  name="Street3"
                  placeholder="Street"
                  value={formData.Street3}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                Unit #
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="Unit3"
                  name="Unit3"
                  placeholder="Unit #"
                  value={formData.Unit3}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                City
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="City3"
                  name="City3"
                  placeholder="Enter city"
                  value={formData.City3}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                State:
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="State3"
                  name="State3"
                  placeholder="Enter State"
                  value={formData.State3}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                ZIP Code:
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="zipCode3"
                  name="zipCode3"
                  placeholder="Enter your location ZIP Code"
                  value={formData.zipCode3}
                  onChange={handleChange}
                  maxlength="6"
                  minlength="5"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  autocomplete="true"
                  required
                />
              </label>
              <label>
                <b>Position Or Title</b>
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="PositionOrTitle3"
                  name="PositionOrTitle3"
                  placeholder=""
                  value={formData.PositionOrTitle3}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                <b>Start Date</b>
                <input
                  className="loanApplicationformInputDate"
                  type="date"
                  id="StartDate3"
                  name="StartDate3"
                  placeholder=""
                  value={formData.StartDate3}
                  onChange={handleChange}
                  autocomplete="true"
                  required
                />
              </label>
              <label>
                How long in this line of work?
                <span>
                  <input
                    className="loanApplicationformInputNumber"
                    type="number"
                    id="workingYear"
                    name="workingYear"
                    placeholder="##"
                    value={formData.workingYear}
                    onChange={handleChange}
                    autocomplete="true"
                    required
                  />
                  Year(s){" "}
                  <input
                    className="loanApplicationformInputNumber"
                    type="number"
                    id="workingMonth"
                    name="workingMonth"
                    placeholder="##"
                    value={formData.workingMonth}
                    onChange={handleChange}
                    autocomplete="true"
                    required
                  />
                  Month(s)
                </span>
              </label>
            </label>
            <label className="loanApplicationformLabelRadio">
              <b>If you are the Business Owner or Self-Employed</b>
              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  id="lessThanOrMoreThan25_2"
                  name="lessThanOrMoreThan25_2"
                  value="lessThan25"
                  checked={formData.lessThanOrMoreThan25_2 === "lessThan25"}
                  onChange={handleChange}
                />{" "}
                I have an ownership share of less than 25%.
              </label>
              <label>
                <input
                  className="loanApplicationformInputRadio"
                  type="radio"
                  id="lessThanOrMoreThan25_2"
                  name="lessThanOrMoreThan25_2"
                  value="moreThan25"
                  checked={formData.lessThanOrMoreThan25_2 === "moreThan25"}
                  onChange={handleChange}
                  required
                />{" "}
                I have an ownership share of 25% or more.
              </label>
              <label>
                Gross Monthly Income
                {" $"}
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  name="PerMonth3"
                  checked={formData === "PerMonth3"}
                  onChange={handleChange}
                />
              </label>
            </label>

            <p>
              {" "}
              <h3 className="loanApplicationformheading3">
                IF APPLICABLE, Complete Information for Previous
                Employment/Self-Employment and Income
              </h3>
              <b>
                Provide at least 2 years of current and previous employment and
                income.
              </b>
            </p>
            <label className="loanApplicationformLabelText">
              <label>
                <b>Employer or Business Name</b>
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="EmployerOrBusinessName3"
                  name="EmployerOrBusinessName3"
                  placeholder=""
                  value={formData.EmployerOrBusinessName3}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                {" "}
                Phone
                <input
                  className="loanApplicationformInputTel"
                  type="tel"
                  id="EmployerOrBusinessNo3"
                  name="EmployerOrBusinessNo3"
                  placeholder="#"
                  value={formData.EmployerOrBusinessNo3}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                Street
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="Street4"
                  name="Street4"
                  placeholder="Street"
                  value={formData.Street4}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                {" "}
                Unit #
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="Unit4"
                  name="Unit4"
                  placeholder="Unit #"
                  value={formData.Unit4}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                City
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="City4"
                  name="City4"
                  placeholder="Enter city"
                  value={formData.City4}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                State:
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="State4"
                  name="State4"
                  placeholder="Enter State"
                  value={formData.State4}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                ZIP Code:
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="zipCode4"
                  name="zipCode4"
                  placeholder="Enter your location ZIP Code"
                  value={formData.zipCode4}
                  onChange={handleChange}
                  maxlength="6"
                  minlength="5"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  autocomplete="true"
                  required
                />
              </label>
              <label>
                <b>Position Or Title</b>
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="PositionOrTitle4"
                  name="PositionOrTitle4"
                  placeholder=""
                  value={formData.PositionOrTitle4}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                <b>Start Date</b>
                <input
                  className="loanApplicationformInputDate"
                  type="date"
                  id="StartDate4"
                  name="StartDate4"
                  placeholder=""
                  value={formData.StartDate4}
                  onChange={handleChange}
                  autocomplete="true"
                  required
                />
              </label>
              <label>
                <b>End Date</b>
                <input
                  className="loanApplicationformInputDate"
                  type="date"
                  id="EndDate"
                  name="EndDate"
                  placeholder=""
                  value={formData.EndDate}
                  onChange={handleChange}
                  autocomplete="true"
                  required
                />
              </label>
              <label>
                <span>
                  Previous Gross Monthly Income
                  {" $"}
                  <input
                    className="loanApplicationformInputText"
                    type="text"
                    name="PerMonth4"
                    checked={formData === "PerMonth4"}
                    onChange={handleChange}
                  />
                </span>
              </label>
            </label>

            <h2 className="loanApplicationformheading2">
              Loan and Property Information
            </h2>
            <p>
              This section asks about the loan’s purpose and the property you
              want to purchase or refinance.
            </p>
            <label className="loanApplicationformLabelText">
              <label>
                <b>Loan Amount $</b>
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="EmployerOrBusinessName4"
                  name="EmployerOrBusinessName4"
                  placeholder=""
                  value={formData.EmployerOrBusinessName4}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                {" "}
                <b>Property Address</b>
                Street
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="Street5"
                  name="Street5"
                  placeholder="Street"
                  value={formData.Street5}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                Unit #
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="Unit5"
                  name="Unit5"
                  placeholder="Unit #"
                  value={formData.Unit5}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                City
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="City5"
                  name="City5"
                  placeholder="Enter city"
                  value={formData.City5}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                State:
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="State5"
                  name="State5"
                  placeholder="Enter State"
                  value={formData.State5}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                ZIP Code:
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="zipCode5"
                  name="zipCode5"
                  placeholder="Enter your location ZIP Code"
                  value={formData.zipCode5}
                  onChange={handleChange}
                  maxlength="6"
                  minlength="5"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  autocomplete="true"
                  required
                />
              </label>
              <label>
                {" "}
                Number of Units
                <input
                  className="loanApplicationformInputNumber"
                  type="number"
                  id="NumberOfUnits"
                  name="NumberOfUnits"
                  placeholder=""
                  value={formData.NumberOfUnits}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                <b>Property Value $</b>
                <input
                  className="loanApplicationformInputText"
                  type="text"
                  id="PropertyValue"
                  name="PropertyValue"
                  placeholder=""
                  value={formData.PropertyValue}
                  onChange={handleChange}
                  autocomplete="true"
                />
              </label>
              <label>
                <b>Occupancy</b>{" "}
                <select
                  className="loanApplicationformSelect"
                  id="propertyWillBe"
                  name="propertyWillBe"
                  value={formData.propertyWillBe}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    -Please Select-
                  </option>
                  <option value="Primary Residence">Primary Residence</option>
                  <option value="Secondary Residence">
                    Secondary Residence
                  </option>
                  <option value="Investment Property">
                    Investment Property
                  </option>
                </select>
              </label>
            </label>

            <div className="loanApplicationButtonBox">
              <button type="submit" className="loanApplicationSubmitButton">
                Submit
              </button>
              <span
                className="loanApplicationGoBack"
                onClick={handlePreviousStep}
              >
                Go BACK
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoanApplication;
