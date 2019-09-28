import React, { useState } from 'react';

const Form = props => {
  console.log(props);

  const [newSmurf, setNewSmurf] = useState({ name: '', age: '', height: '' });

  const handleChange = event => {
    setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const aNewSmurf = {
      ...newSmurf,
      id: Date.now()
    };
    setNewSmurf({
      name: '',
      age: '',
      height: ''
    });
    // props.addTeam(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add a team member</legend>
        <label>
          {' '}
          Name:
          <input
            type="text"
            name="name"
            placeholder="name"
            value={newSmurf.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          {' '}
          Age:
          <input
            type="text"
            name="age"
            placeholder="age"
            value={newSmurf.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          {' '}
          Role:
          <input
            type="text"
            name="height"
            placeholder="height"
            value={newSmurf.height}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">add</button>
      </fieldset>
    </form>
  );
};

export default Form;
