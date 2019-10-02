import React from "react";
import styled from "styled-components";

const Form = styled.form`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #3d3d3d;
  font-size: 16px;
  letter-spacing: -0.02em;
  line-height: 24px;
  -webkit-font-smoothing: antialiased;
  font-family: SalesforceSans, sans-serif;
  text-align: center;
  box-sizing: border-box;
  display: block;
  position: relative;
  max-width: 487px;
  width: 100%;
  padding: 4px;
  margin: 0 auto;
`;

const Input = styled.input`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font: inherit;
  margin: 0;
  font-family: inherit;
  line-height: 1.5;
  color: #3d3d3d;
  background-image: none;
  box-shadow: none;
  -webkit-appearance: none !important;
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  transition: border-color 0.35s, color 0.35s, background-color 0.35s;
  display: block;
  width: 100%;
  height: auto;
  border-radius: 30px;
  padding: 18px 30px;
  font-size: 16px;

  &:focus {
    outline: 0;
    border-color: #ded6cf;
    color: #59575c;
    box-shadow: none;
  }
`;

const Button = styled.button`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font: inherit;
  margin: 0;
  overflow: visible;
  -webkit-appearance: button;
  outline: none;
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
  user-select: none;
  line-height: 24px;
  border-radius: 26px;
  font-family: Walsheim, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-width: 2px;
  background-image: none !important;
  transition: background-color 0.175s, border-color 0.175s, color 0.175s;
  color: #fff !important;
  background-color: #f27557 !important;
  border-color: #f27557 !important;
  position: absolute;
  float: right;
  right: 10px;
  top: 10px;
  padding: 11px 25px;
  font-size: 12px;
  height: auto;
`;

const SubscribeForm = ({ icon, label, children }) => {
  return (
    <Form>
      <Input />
      <Button> Learn Updates</Button>
    </Form>
  );
};

export default SubscribeForm;
