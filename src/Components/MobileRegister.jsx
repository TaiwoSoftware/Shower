const MobileRegister = ({ toggle }) => {
  return (
    <div className="formContainer">
      <div className={toggle}>
        <form className="form" id="form">
          <input type="text" id="fname" placeholder="First Name" required />
          <input type="text" id="lname" placeholder="Last name" required />
          <input type="email" id="email" placeholder="email" required />
          <input type="tel" id="telephone" placeholder="Telephone" />
          <label htmlFor="text-message">Text message</label>
          <input type="radio" name="verify" id="text-message" />
          <label htmlFor="call">Call</label>
          <input type="radio" name="verify" id="call" />
          <label htmlFor="instant">Instant</label>
          <input type="radio" name="verify" id="instant" />
          <input type="password" id="password" placeholder="Password" />
          <textarea
            required
            id="comment"
            placeholder="Write a comment...."
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MobileRegister;
