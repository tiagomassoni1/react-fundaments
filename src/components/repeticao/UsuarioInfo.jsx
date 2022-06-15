import React from "react";
import If from "./If";

export default (props) => {
  const user = props.user || {};

  return (
    <div>
      <If test={user && user.name}>
        <div>
          Seja bem vindo <strong>{user.name}</strong>
        </div>
      </If>
      <If test={!user || !user.name}>
        <div>
          Seja bem vindo <strong>Amigão</strong>
        </div>
      </If>
    </div>
  );
};
