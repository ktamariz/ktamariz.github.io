import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Aqui hay algunos proyectos que he realizado. <br />
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "DevOps Project",
    desc: "Proyecto final de un Trainee Program, implementando CI/CD, IaC, GitOps.",
    url: "https://github.com/ktamariz/DevOps-Project",
  },
  {
    id: 2,
    title: "Website - K8s, GCP",
    desc: "Implementar un sitio web sencillo en Kubernetes, desplegando infraestructura en GCP con Terraform.",
    url: "https://github.com/ktamariz/Kubernetes-Website",
  },
  {
    id: 3,
    title: "Taller de contenedores con Docker - FLISOL 2023",
    desc: "Repositorio de un taller impartido por mi en el FLISOL organizado por mi universidad.",
    url: "https://github.com/ktamariz/CursoDocker",
  },
];

export default Projects;
