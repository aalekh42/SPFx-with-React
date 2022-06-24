import * as React from "react";
import styles from "./Meter.module.scss";
import { IMeterProps } from "./IMeterProps";
import { escape } from "@microsoft/sp-lodash-subset";
import Hello from "./Hello";
import Button from "./Button";

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
      <section
        className={`${styles.meter} ${hasTeamsContext ? styles.teams : ""}`}
      >
        <div className={styles.welcome}>
          <img
            alt=""
            src={
              isDarkTheme
                ? require("../assets/welcome-dark.png")
                : require("../assets/welcome-light.png")
            }
            className={styles.welcomeImage}
          />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>
            Web part property value: <strong>{escape(description)}</strong>
            <p>Multiline Text:{escape(test)}</p>
            <p>checkbox:{test1}</p>
            <p>Dropdown:{escape(test2)}</p>
            <p>Toggle:{test3}</p>
          </div>
          
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Welcome to SharePoint Framework! Aalekh Bhai</h3>
          <input type="input" value={this.state.name} placeholder="Enter your Name" onChange={(e)=>this.setState({ name: e.currentTarget.value })}/><br/>
          <Hello name={this.state.name}/>
          <Button btnName='Upload'/>
        </div>
      </section>
    );
  }
}
