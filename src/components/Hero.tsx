import profile from "../assets/profile.jpg";

function Hero() {
  const developer = {
    name: "MarvelGB",
    role: "Front-End Dev",
    nationality: "Burundian",
    phone: "(+257) 66059426",
    passion: "Building the web",
  };

  return (
    <section className="hero" id="home">
      <img src={profile} alt="profile" />
      <h1>Hi, I'm {developer.name}</h1>
      <p>{developer.role} | {developer.passion}</p>
    </section>
  );
}

export default Hero;