import styled from "@emotion/styled";

export const Button = styled.button`
  text-transform: capitalize;
  background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  &.good {
       background: linear-gradient(to bottom right, #5AFF15, #00B712);
    }
  &.neutral {
 background: linear-gradient(to bottom right, #FFDD00, #FBB034);   
 }
  &.bad {
    background: linear-gradient(to bottom right, #F56545, #99201C);  
    }
  &:not([disabled]):focus {
  box-shadow: 0 0 .15rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

&:not([disabled]):hover {
  box-shadow: 0 0 .15rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

}`;
export const InlineButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
