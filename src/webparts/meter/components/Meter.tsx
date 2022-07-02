import * as React from "react";
import styles from "./Meter.module.scss";
import { IMeterProps } from "./IMeterProps";
import { escape } from "@microsoft/sp-lodash-subset";
import Hello from "./Hello";
import UploadButton from "./Button";
import Conversion from "./topic1/Conversion";

type MyState={
  name:string;
}
export default class Meter extends React.Component<IMeterProps, MyState> {
  state: MyState = {
    name: 'AP',
  };

  public render(): React.ReactElement<IMeterProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,test,test1,test2,test3
    } = this.props;


    return (
      <Conversion/>
    );
  }
}
