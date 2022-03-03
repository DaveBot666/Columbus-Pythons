import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions";
import LinkList from "./components/LinkList";


const config = {
initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },

 widgets: [
     {
     	widgetName: "learningOptions",
    	widgetFunc: (props) => <LearningOptions {...props} />,
     },
     {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Top Runningbacks for 2022",
            url:
              "https://www.pff.com/news/fantasy-football-2022-running-back-rankings-erickson",
            id: 1,
          },
          {
            text: "Potential Sleeper RBs",
            url: "https://profootballmania.com/2022/01/07/3-sleeper-rbs-to-target-in-2022/",
            id: 2,
          },
          {
            text: "RB Comparisons",
            url: "https://www.si.com/fantasy/2022/02/14/jonathan-taylor-christian-mccaffrey-2022-fantasy-football",
            id: 3,
          },
        ]
        },
     },
 ],
}

export default config