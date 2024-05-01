import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hola, mi nombres es <HighlightSpan>Kevin Tamariz Lopez</HighlightSpan>!
      </p>
      <p>
        Soy <HighlightAlt>un DevOps Engineer</HighlightAlt> viviendo en Veracruz, Mexico
      </p>
      <p>
        Me apasiona el Cloud Computing, GNU/Linux y<br />
        Desarrollar aplicaciones altamente escalables y confiables<br />
        Utilizando herramientas como Docker, Kubernetes, Terraform
      </p>
    </AboutWrapper>
  );
};

export default About;
