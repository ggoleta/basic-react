import styled from 'styled-components';

export const Content = styled.div`
  max-width: 700px;
  margin: 20px auto 0;
  padding: 0 20px;

  article {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }

  article p {
    font-size: 16px;
    color: #999;
    margin-top: 5px;
    line-height: 24px;
  }

  article a {
    height: 42px;
    border-radius: 5px;
    border: 2px solid #da552f;
    background: none;
    margin-top: 10px;
    color: #da552f;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  article a:hover {
    background: #da552f;
    color: #fff;
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    padding: 10px;
    border-radius: 5px;
    border: 0;
    background: #da552f;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 0.7;
  }
`;
