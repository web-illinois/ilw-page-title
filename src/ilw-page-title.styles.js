import { css } from 'lit';

export default css` 
  :host {
    display: block;
    container-type: inline-size;
    contain: layout;
  }
  .page-title {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: var(--ilw-page--padding-left);
    padding-right: var(--ilw-page--padding-right);
  }
  .page-title.fixed,
  .page-title.page {
    left:50%;
    margin-left:-50vw;
    margin-right:-50vw;
    padding-left:0;
    padding-right:0;
    position:relative;
    right:50%;
    width:100vw;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .inner {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    min-height: 12.5rem;
    margin: 0 auto;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .text {
    box-sizing: border-box;
    position: relative;
    z-index: 100;
    color: var(--ilw-page-title--text-color);
    text-align: left;
    font: 700 2.5em var(--il-font-sans);
    padding: 16px 14px 20px;
    margin: 0;
  }
  .page-title.fixed .text {
    margin: var(--ilw-page-title--main-margin);
  }
  .page-title.page .text {
    margin: 0;
  }
  @media (max-width: 1200px) {
    .text {
      margin: var(--ilw-page-title--main-margin);
    }
  }
  @media (max-width: 800px) {
    .text {
      font-size: 2em;
      margin: var(--ilw-page-title--main-margin);
    }
  }
  @media (max-width: 600px) {
    .text {
      font-size: 1.5em;
      margin: var(--ilw-page-title--main-margin);
    }
  }
  .text::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: var(--ilw-page-title--background-color);
    opacity: .85;
  }
`;