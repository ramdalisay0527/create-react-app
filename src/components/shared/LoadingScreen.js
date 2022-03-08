import React from "react";
import { useLoadingScreenStyles } from "../../styles";
import { LogoLoadingIcon} from '../../icons'
import { mergeClasses } from "@material-ui/core/node_modules/@material-ui/styles";
function LoadingScreen() {
  useLoadingScreenStyles();

  return (
    <section className={mergeClasses.section}>
      <span>
        <LogoLoadingIcon />
      </span>

    </section>
  )
}

export default LoadingScreen;
