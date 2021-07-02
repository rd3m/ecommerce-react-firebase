import { useState } from "react";

import styles from "./CreateCard.module.scss";

const defaultColleague = {
    firstName: "",
    lastName: "",
    age: 0,
};

const CreateCard = ({ onSubmit }) => {
    const [colleague, setColleague] = useState(defaultColleague);

    const handleChange = (event) => {
        const attribute = event.target.name;
        const copy = { ...colleague };
        copy[attribute] = event.target.value;
        setColleague(copy);
    };

    const handleAgeChange = (event) => {
        const attribute = event.target.name;
        const copy = { ...colleague };
        if (!isNaN(event.target.value)) {
            copy[attribute] = parseInt(event.target.value);
        } else {
            copy.age = 0;
        }

        setColleague(copy);
    };

    const handleSubmit = (event) => {
        onSubmit({
            ...colleague,
            brownies: 0,
        });
        setColleague(defaultColleague);
    };

    return (
        <div className={styles.CreateCard}>
            <div>
                <label for="firstName">Firstname: </label>
                <input
                    id="firstName"
                    type="text"
                    value={colleague.firstName}
                    onChange={handleChange}
                    name="firstName"
                />
            </div>
            <div>
                <label for="lastName">Lastname: </label>
                <input
                    id="lastName"
                    type="text"
                    value={colleague.lastName}
                    onChange={handleChange}
                    name="lastName"
                />
            </div>
            <div>
                <label for="age">Age: </label>
                <input
                    id="age"
                    type="number"
                    value={colleague.age}
                    onChange={handleAgeChange}
                    name="age"
                />
            </div>
            <div>
                <button onClick={handleSubmit}>Add User</button>
            </div>
        </div>
    );
};

export default CreateCard;
