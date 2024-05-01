import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitante</User>@<WebsiteName>terminal.ktamariz</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
