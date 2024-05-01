import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`                                                            

██╗  ██╗███████╗██╗   ██╗██╗███╗   ██╗    ████████╗ █████╗ ███╗   ███╗ █████╗ ██████╗ ██╗███████╗
██║ ██╔╝██╔════╝██║   ██║██║████╗  ██║    ╚══██╔══╝██╔══██╗████╗ ████║██╔══██╗██╔══██╗██║╚══███╔╝
█████╔╝ █████╗  ██║   ██║██║██╔██╗ ██║       ██║   ███████║██╔████╔██║███████║██████╔╝██║  ███╔╝ 
██╔═██╗ ██╔══╝  ╚██╗ ██╔╝██║██║╚██╗██║       ██║   ██╔══██║██║╚██╔╝██║██╔══██║██╔══██╗██║ ███╔╝  
██║  ██╗███████╗ ╚████╔╝ ██║██║ ╚████║       ██║   ██║  ██║██║ ╚═╝ ██║██║  ██║██║  ██║██║███████╗
╚═╝  ╚═╝╚══════╝  ╚═══╝  ╚═╝╚═╝  ╚═══╝       ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`

██╗  ██╗███████╗██╗   ██╗██╗███╗   ██╗    ████████╗ █████╗ ███╗   ███╗ █████╗ ██████╗ ██╗███████╗
██║ ██╔╝██╔════╝██║   ██║██║████╗  ██║    ╚══██╔══╝██╔══██╗████╗ ████║██╔══██╗██╔══██╗██║╚══███╔╝
█████╔╝ █████╗  ██║   ██║██║██╔██╗ ██║       ██║   ███████║██╔████╔██║███████║██████╔╝██║  ███╔╝ 
██╔═██╗ ██╔══╝  ╚██╗ ██╔╝██║██║╚██╗██║       ██║   ██╔══██║██║╚██╔╝██║██╔══██║██╔══██╗██║ ███╔╝  
██║  ██╗███████╗ ╚████╔╝ ██║██║ ╚████║       ██║   ██║  ██║██║ ╚═╝ ██║██║  ██║██║  ██║██║███████╗
╚═╝  ╚═╝╚══════╝  ╚═══╝  ╚═╝╚═╝  ╚═══╝       ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝
                                                                                                 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Bienvenidos a mi pagina web!, encontraras una terminal interactiva</div>
        <Seperator>----</Seperator>
        <div>
          Para una lista de los comandos disponibles, escribe `<Cmd>help</Cmd>`.
        </div>
        <Seperator>----</Seperator>
      </div>
      <div className="illu-section">
        <PreImg>
          {`

         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
