import styled from 'styled-components';

export const Span = styled.span`
  color: #fff;
  font-size: 14px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;

  .container-select {
    width: 100%;
    display:flex;
    margin:10px 0;
  }

  .container-time{
    display: flex;
    flex-direction: column;
    flex-basis: 100%;

    border: 1px solid rgb(61, 84, 102);
    border-radius: 5px;

    &+div{
      margin-left: 8px;
    }

  }
`;

export const Title = styled.span`
  margin-left: 5px;
  font-size: 13px;
  color: rgb(118, 118, 118);
  display: block;

  &:active{
    color: #1da1f2;
  }
`;

export const Select = styled.select`
  width: 100%;
  color: #fff;
  background: #15202b;
  border: 0 none;
  outline: 0;
  font-size: 20px;

  &:active {
    border-color: #1da1f2;
    color: #1da1f2;
  }

  option{
    font-weight: normal;
    color: #fff;
  }
`;