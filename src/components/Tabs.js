import React from "react"
import Img from "gatsby-image"
import { StyledTabsWrapper, H4, P } from "../elements"
import { StaticImage } from "gatsby-plugin-image"
import { Tab, Tabs, Tablist, TabPanel, TabList } from "react-tabs"

export const ContentTabs = () => {
  //get the featured image

  return (
    <StyledTabsWrapper>
      <Tabs>
        <TabList>
          <Tab>About Me</Tab>
          <Tab>Education</Tab>
          <Tab>Skills and Interests</Tab>
        </TabList>
        <TabPanel className="content">
          <div className="aboutMeContent">
            <div className="featuedImage">
              <StaticImage
                className="portrait"
                src="src/images/gianportrait.png"
                alt="Gian's portrait"
              />
            </div>
            <div>
            <H4>About Me</H4>
            <P>
              {" "}
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </P>
                </div>
           
          </div>
        </TabPanel>
      </Tabs>
    </StyledTabsWrapper>
  )
}

// import React from "react"
// import Img from "gatsby-image"
// import { StyledTabsWrapper, H4, P } from "../elements"
// import { StaticImage } from "gatsby-plugin-image"
// import { Tab, Tabs, Tablist, TabPanel} from 'react-tabs';

// export const Tabs = () => {
//   //get the featured image

//   return (
//     <StyledTabsWrapper>
//       <div className="tabsHeader">
//         <ul>
//           <li className="current">About Me</li>
//           <li>Education</li>
//           <li>Skills & Interests</li>
//         </ul>
//       </div>

//       <div className="content">
//         <div className="aboutMeContent">
//           <div className="featureImage">
//             <StaticImage
//              className="portrait"
//              src="src/images/gianportrait.png"
//              alt="Gian's portrait"
//              />
//           </div>
//           <div>
//             <H4>About Me</H4>
//             <P>
//               {" "}
//               Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
//               consectetur, adipisci velit, sed quia non numquam eius modi
//               tempora incidunt ut labore et dolore magnam aliquam quaerat
//               voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
//               ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
//               consequatur?
//             </P>
//           </div>
//         </div>
//       </div>
//     </StyledTabsWrapper>
//   )
// }
