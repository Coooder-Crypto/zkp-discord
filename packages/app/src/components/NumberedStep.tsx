import styled from "styled-components";
import { CenterAllDiv, Row } from "./Layout";

export const NumberedStep: React.FC<{
  step: number;
  children: React.ReactNode;
}> = ({ step, children }) => {
  return (
    <NumberedStepContainer>
      <NumberedStepLabel>
        <span>{step}</span>
      </NumberedStepLabel>
      <NumberedStepText>{children}</NumberedStepText>
    </NumberedStepContainer>
  );
};

const NumberedStepContainer = styled(Row)`
  background: rgba(255, 255, 255, 0.05);
  width: 100%;
  gap: 1rem;
  border-radius: 4px;
  padding:  8px 0 ;
  color: #fff;
`;

const NumberedStepLabel = styled(CenterAllDiv)`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  width: 24px;
  height: 24px;
  min-width: 24px;
  margin-left:8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const NumberedStepText = styled.span`
  flex:1;
  font-size: 18px;
  padding-left:8px;
  height:auto;
`;
