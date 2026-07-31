import Avatar from "./Avatar";
import Title from "./Title";
import Bio from "./Bio";
import Links from "./Links";

function Card() {
  return (
    <main className="card">
      <Avatar
        imageUrl="photo.jpg"
        alt="Abubakar Rabiu Baba"
      />

      <Title
        name="Abubakar Rabiu Baba"
        role="Frontend Developer"
      />

      <Bio
        text="I am a frontend developer with a particular interest in making things simple."
      />

      <Links />
    </main>
  );
}

export default Card;