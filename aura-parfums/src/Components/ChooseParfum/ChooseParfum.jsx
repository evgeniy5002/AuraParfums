import React, { useState } from "react";
import styles from "./ChooseParfum.module.scss";

const ChooseParfum = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [perfumeLikes, setPerfumeLikes] = useState("");
  const [desiredAroma, setDesiredAroma] = useState("");
  const [perfumeEndurance, setPerfumeEndurance] = useState("");
  const [preferredContact, setPreferredContact] = useState("");

  // Validation states
  const [nameValid, setNameValid] = useState(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [nameEmpty, setNameEmpty] = useState(false);
  const [phoneNumberEmpty, setPhoneNumberEmpty] = useState(false);
  const [perfumeLikesEmpty, setPerfumeLikesEmpty] = useState(false);
  const [desiredAromaEmpty, setDesiredAromaEmpty] = useState(false);
  const [perfumeEnduranceEmpty, setPerfumeEnduranceEmpty] = useState(false);
  const [preferredContactEmpty, setPreferredContactEmpty] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    // Validate name (only letters)
    if (!validateName(name)) {
      setNameValid(false);
      isValid = false;
    } else {
      setNameValid(true);
    }

    // Validate phone number (only digits)
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberValid(false);
      isValid = false;
    } else {
      setPhoneNumberValid(true);
    }

    // Check for empty fields
    if (name.trim() === "") {
      setNameEmpty(true);
      isValid = false;
    } else {
      setNameEmpty(false);
    }

    if (phoneNumber.trim() === "") {
      setPhoneNumberEmpty(true);
      isValid = false;
    } else {
      setPhoneNumberEmpty(false);
    }

    if (perfumeLikes.trim() === "") {
      setPerfumeLikesEmpty(true);
      isValid = false;
    } else {
      setPerfumeLikesEmpty(false);
    }

    if (desiredAroma.trim() === "") {
      setDesiredAromaEmpty(true);
      isValid = false;
    } else {
      setDesiredAromaEmpty(false);
    }

    if (perfumeEndurance.trim() === "") {
      setPerfumeEnduranceEmpty(true);
      isValid = false;
    } else {
      setPerfumeEnduranceEmpty(false);
    }

    if (preferredContact.trim() === "") {
      setPreferredContactEmpty(true);
      isValid = false;
    } else {
      setPreferredContactEmpty(false);
    }

    if (!isValid) return;

    // If all validations pass, proceed with form submission
    const formData = {
      name: name,
      phoneNumber: phoneNumber,
      perfumeLikes: perfumeLikes,
      desiredAroma: desiredAroma,
      perfumeEndurance: perfumeEndurance,
      preferredContact: preferredContact,
    };

    // Example: Replace with actual submission logic (e.g., API call, dispatch action)
    console.log("Form data:", formData);

    // Optionally reset form fields after submission
    setName("");
    setPhoneNumber("");
    setPerfumeLikes("");
    setDesiredAroma("");
    setPerfumeEndurance("");
    setPreferredContact("");
  };

  const validateName = (name) => {
    const re = /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ'`-]+$/; // Regular expression to allow letters, apostrophes, and dashes
    return re.test(name);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d+$/; // Regular expression to allow only digits
    return re.test(phoneNumber);
  };

  return (
    <div className={styles.FormContainer}>
      <div className={styles.text}>
        <h2>Підібрати Аромат</h2>
        <p>
          Якщо ви загубилися у нашому каталозі й хочете отримати індивідуальну
          добірку парфумів за вашими вподобаннями - заповніть коротку форму
        </p>
      </div>
      <div className={styles.block}>
        <form className={styles.PrForm} onSubmit={handleSubmit}>
          <div className={styles.namenumber}>
           <div>
           <input
              type="text"
              placeholder="Ім'я та Прізвище"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                borderColor: nameValid || nameEmpty ? "" : "red",
              }}
              
            />
            {!nameValid && (
              <p className={styles["error-message"]}>
                Поле може містити лише букви
              </p>
            )}
            {nameEmpty && (
              <p className={styles["error-message"]}>
                Поле не може бути порожнім
              </p>
            )}
           </div>
           
            
          <div>
          <input
              type="text"
              placeholder="Номер телефону"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{
                borderColor: phoneNumberValid || phoneNumberEmpty ? "" : "red",
              }}
              
            />
            {!phoneNumberValid && (
              <p className={styles["error-message"]}>
                Поле може містити лише цифри
              </p>
            )}
            {phoneNumberEmpty && (
              <p className={styles["error-message"]}>
                Поле не може бути порожнім
              </p>
            )}
          </div>
           
           
            
          </div>
          <div className={styles.other}>
            <input
              type="text"
              placeholder="Які парфуми вам подобаються з тих, якими ви вже користувалися?"
              value={perfumeLikes}
              onChange={(e) => setPerfumeLikes(e.target.value)}
              className={`${styles.input} ${perfumeLikesEmpty ? styles.redBorder : styles.opacity}`}
              
            />
            {perfumeLikesEmpty && (
              <p className={styles["error-message"]}>
                Поле не може бути порожнім
              </p>
            )}
            <input
              type="text"
              placeholder="Який аромат ви б хотіли?"
              value={desiredAroma}
              onChange={(e) => setDesiredAroma(e.target.value)}
              className={`${styles.input} ${desiredAromaEmpty ? styles.redBorder : styles.blackBorder}`}
              
            />
            {desiredAromaEmpty && (
              <p className={styles["error-message"]}>
                Поле не може бути порожнім
              </p>
            )}
            <input
              type="text"
              placeholder="Вкажіть свої вподобання щодо стійкості та шлейфу парфуму"
              value={perfumeEndurance}
              onChange={(e) => setPerfumeEndurance(e.target.value)}
              className={`${styles.input} ${perfumeEnduranceEmpty ? styles.redBorder : styles.opacity}`}
              
            />
            {perfumeEnduranceEmpty && (
              <p className={styles["error-message"]}>
                Поле не може бути порожнім
              </p>
            )}
            <input
              type="text"
              placeholder="Вкажіть, де вам зручно отримати відповідь"
              value={preferredContact}
              onChange={(e) => setPreferredContact(e.target.value)}
              className={`${styles.input} ${preferredContactEmpty ? styles.redBorder : styles.redBorder}`}
              
            />
            {preferredContactEmpty && (
              <p className={styles["error-message"]}>
                Поле не може бути порожнім
              </p>
            )}
          </div>
          <button type="submit">Відправити</button>
        </form>
      </div>
    </div>
  );
};

export default ChooseParfum;
