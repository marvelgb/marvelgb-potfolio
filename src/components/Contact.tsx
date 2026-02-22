function Contact() {
  const developer = {
    phone: "(+257) 66059426",
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p>Phone: {developer.phone}</p>
      <p>Email: marvelgb64@gmail.com</p>
    </section>
  );
}

export default Contact;