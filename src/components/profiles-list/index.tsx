import React from "react";

import "./ProfilesList.css";
import { PROFILES_LIST } from "../../constants";

function ProfilesList() {
  return (
    <div className="profiles-list">
      {PROFILES_LIST.map(pf => <Profile {...pf} />)}
    </div>
  );
}

interface ProfileProps {
  name: string;
  longName?: string;
  height: number;
  imgSrc: string;
}

function Profile(props: ProfileProps) {
  const { name, height, imgSrc, longName } = props;
  return (
    <div className="profile">
      <span className="profile__height">{height}mm</span>
      <div className="profile__img">
        <img src={`${imgSrc}`} alt={`key size and structure for ${longName ? longName : name}`} />
      </div>
      <label htmlFor="" className="profile__name">{name}</label>
    </div>
  );
}

export default ProfilesList;