import Navigation from "./navigation/Navigation";
import React from "react";

export interface IHeaderProps {
    hideSearchField: boolean
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header>
      <Navigation userFirstName={"Denis"} userProfileUrl={null}  hideSearchField={props.hideSearchField} />
    </header>
  );
};

export default Header;
