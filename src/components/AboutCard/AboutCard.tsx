import "./AboutCard.css";

type AboutCardProps = {
  img: string;
  alt: string;
  title: string;
  text: string;
};

function AboutCard({ img, alt, title, text }: AboutCardProps) {
  return (
    <div className="aboutCardContainer">
      <img draggable={false} src={img} alt={alt} />
      <h2 className="textBold">{title}</h2>
      <span className="text">{text}</span>
    </div>
  );
}

export default AboutCard;
