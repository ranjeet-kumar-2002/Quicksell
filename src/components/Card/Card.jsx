import React from "react";
import "./Card.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Icon } from "../../Actions/icon-utils";
const Card = ({ id, title, tag, status, priority }) => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const statusOrder = ["Backlog", "Todo", "In progress", "Done"];
  const getStatusIndex = (status) => {
    return statusOrder.indexOf(status);
  };
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
          <img
            style={{ width: "95%", height: "95%", borderRadius: "50%" }}
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        {!isStatus &&
          (status === "Backlog" ? (
            <Icon name="backlog" />
          ) : status === "Todo" ? (
            <Icon name="toDo" />
          ) : status === "In progress" ? (
            <Icon name="inProgress" />
          ) : status === "Done" ? (
            <Icon name="done" />
          ) : (
            <IoMdCloseCircleOutline />
          ))}
        <span style={{ margin: "0.2px" }}>{title}</span>
      </div>
      <div className="cardTags">
        {!isPriority ? (
          <div className="tags color-grey">
            {priority === 1 ? (
              <Icon name="lowPriority" />
            ) : priority === 2 ? (
              <Icon name="mediumPriority" />
            ) : priority === 3 ? (
              <Icon name="highPriority" />
            ) : priority === 4 ? (
              <Icon name="urgentPriorityGrey" />
            ) : (
              <Icon name="noPriority" />
            )}
          </div>
        ) : null}
        {tag?.map((element, index) => {
          return (
            <div key={index} className="tags color-grey">
              <span>•</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
