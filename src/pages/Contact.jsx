import "./Contact.scss";

function Contact(props) {
  function submitHandler(e) {
    e.preventDefault();
    alert("submitted!");
  }

  return (
    <div className="contacts mb-6" data-testid="contact-container">
      <div className="left-side" data-testid="image-container"></div>
      
      <div className="form-container pt-5 pb-5 pl-3 pr-3" data-testid="form-container">
        <h1 className="title">Contact Us!</h1>
        <form aria-label="contact-form" onSubmit={submitHandler}>
          <div className="form-top columns pl-1">
            <div className="field column">
              <label htmlFor="name">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="field column">
              <label htmlFor="email">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  width='400'
                />
              </div>
            </div>
          </div>
          <div className="form-center field">
            <label htmlFor="message">Your message</label>
            <div className="control">
              <textarea className="textarea" name="messsage" id="message" rows="7"></textarea>
            </div>
          </div>
          <div className="content field has-text-centered pt-4">
            <button className="button is-dark is-medium is-responsive">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
