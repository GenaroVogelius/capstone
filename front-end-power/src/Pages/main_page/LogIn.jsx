import LogInForm from "../../components/LogIn/LogInForm";

import React from "react";
import useScrollToTop from "../../Utils/CustomsHooks";

function LogIn() {
  useScrollToTop();

  return (
    <>
      <LogInForm />
    </>
  );
}

export default LogIn;
