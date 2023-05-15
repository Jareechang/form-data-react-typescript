// form.tsx

import {
  FC,
  FormEvent,
} from 'react';

const Form: FC = () => {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    /* Handle submission logic */
    const form: HTMLFormElement = (event.target as HTMLFormElement);
    if (form) {
      const formData = new FormData(form);
      for (let [formKey, formValue] of formData.entries()) {
        console.log(`formKey: ${formKey}, formValue: ${formValue}`);
      }
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <select name="favoriteColor">
            <option value="">Favorite Color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="pink">Pink</option>
            <option value="orange">orange</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" name="hobbies[]" value="reading" />
            Reading
          </label>
          <br />
          <label>
            <input type="checkbox" name="hobbies[]" value="hiking" />
            Cooking
          </label>
          <br />
          <label>
            <input type="checkbox" name="hobbies[]" value="gardening" />
            Gardening
          </label>
          <br />
          <label>
            <input type="checkbox" name="hobbies[]" value="cooking" />
            Cooking
          </label>
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
