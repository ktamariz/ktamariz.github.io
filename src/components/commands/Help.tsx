import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Help.styled";
import { commands } from "../Terminal";
import { generateTabs } from "../../utils/funcs";

const Help: React.FC = () => {
  return (
    <HelpWrapper data-testid="help">
      {commands.map(({ cmd, desc, tab }) => (
        <CmdList key={cmd}>
          <Cmd>{cmd}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {desc}</CmdDesc>
        </CmdList>
      ))}
      <KeyContainer>
        <div>Tab o Ctrl + i&nbsp; =&gt; Autocompleta el comando</div>
        <div>Fleca hacia arriba {generateTabs(5)} =&gt; Va hacia comandos anteriores</div>
        <div>Ctrl + l {generateTabs(5)} =&gt; Limpiar la terminal</div>
      </KeyContainer>
    </HelpWrapper>
  );
};

export default Help;
