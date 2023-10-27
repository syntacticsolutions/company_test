import styled from "styled-components"

export const Container = styled.div<{ selectedIndex: number }>`
  border: 1px solid #ccc;
  background: rgba(151,206,76, 0.2);
  height: 90vh;
  position: relative;

  li {
    list-style-type: none;
    padding: 15px 20px;
    color: #333;

    &:hover {
        background: rgba(232,154,199, 0.2);
    }
  }

  li:nth-child(${({ selectedIndex }) => selectedIndex + 1}) {
    background: rgba(68,40,29, 0.8);
    color: white;
  }

  hr,
  p {
    color: #222
    width: calc(100% - 30px);
    text-align: center;
    font-size: 20px;
    margin: 15px;
  }

  ul {
    height: calc(90vh - 80px);
    border-radius: 6px;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0px;
    overflow: scroll;
  }
`
