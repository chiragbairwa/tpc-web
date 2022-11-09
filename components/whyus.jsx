import Image from "next/image";

const Recruit = () => {
  
  const Card = (props) => {
    let color = props.color ? props.color : "lightpink" ;
    
    return (
    <div className="recruit-card">
      <div style={{backgroundColor: `${color}`}}>
        <Image
          src={props.src}
          height="48"
          width="48"
          alt={props.heading + " Logo"}
        />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.content}</p>
    </div>
  ) };

  return (
    <div className="recruit" id="whyus">
      {/* Banner */}
      <div className="recruit-banner">
        <h2>Why Recruit at DCSA, Panjab University?</h2>
      </div>

      {/* Cards */}
      <div className="recruit-card-container">
        <Card
          src="/motto.svg"
          heading="Our Motto"
          content="The Department of Computer Science and Application, PU has been setup with an objective to produce best-in-class human resources in IT and to harness the multidimensional facets of IT in various domains. DCSA-PU strives to evolve into a world-class academic institution with the highest quality of education and research facilities."
        />
        <Card
          src="/mission.svg"
          heading="Our Mission"
          color="lightblue"
          content="The Institute aligns all its activities to serve national interest and seeks To provide broad-based education, helping students hone their professional skills and acquire the best-in-class capabilities in their respective disciplines To draw the best expertise in science, technology, management and law so as to equip students with the skills to visualize, synthesize and execute projects."
        />
        <Card
          src="/vision.svg"
          heading="Our Vision"
          color="lightgreen"
          content="To be a center of excellence in education and research, producing global leaders in science, technology and management To be a hub of knowledge creation that priorities the frontier areas of national and global importance DCSA,PU will not only create industry ready IT Graduates to feed the demand of the industry, but it will also act as a catalyst."
        />
        <Card
          src="/industry.svg"
          heading="Strong Industry Interface"
          color="silver"
          content="DCSA-PU has a strong, active and growing interface with business and industry, with experts from a range of leading companies and thought leaders of IT Industry delivering regular guest lectures and serving as members of various advisory boards."
        />
        <Card
          src="/projects.svg"
          heading="Projects"
          color="lightblue"
          content="Students are encouraged to take up projects on contemporary topics as a part of their independent study. Arrangements will be made for practical training on live projects in conjunction with leading companies in the industry."
        />
        <Card
          src="/trophy.svg"
          heading="Achievements"
          color="#DD9BDB"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque dolore temporibus saepe modi ipsam officiis atque consectetur facere magnam, earum ipsa impedit, asperiores tenetur possimus quasi consequuntur libero aliquam."
        />
      </div>
    </div>
  );
};

export default Recruit;
