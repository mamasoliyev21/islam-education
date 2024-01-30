import React from "react";
import { TextProps } from "..";
import styles from "./text.module.css";
import cn from "classnames";

export const Text = ({ size = "m", children }: TextProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size == "l",
      })}
    >
      {children}
    </p>
  );
};