import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Projects from "../pages/projects/Projects";

export default (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/sde" />} />
        <Route path="/#/sde" element={<Navigate to="/sde" />} />
        <Route path="/#/ds" element={<Navigate to="/ds" />} />
        <Route path="/:role" element={<Home />} />
        <Route path="/:role/experience" element={<Experience {...props} />} />
        <Route path="/:role/education" element={<Education {...props} />} />
        <Route path="/:role/projects" element={<Projects {...props} />} />
      </Routes>
    </BrowserRouter>
  );
};

// export default function Main(propss) {
//   return (
//     <div>
//       <HashRouter basename="/">
//         <Switch>
//           <Route path="/" exact render={(props) => <Redirect to="/sde" />} />
//           {/* <Route
//               path="/:role"
//               exact
//               render={(props) => {
//                 const { role = "sde" } = props.match.params;
//                 return <Redirect to={`/${role}/home`} />
//               }}
//             /> */}
//           <Route
//             path="/:role"
//             exact
//             render={(props) => (
//               <Home
//                 {...props}
//                 theme={propss.theme}
//                 setTheme={propss.setTheme}
//               />
//             )}
//           />
//           <Route
//             path="/:role/experience"
//             exact
//             render={(props) => (
//               <Experience
//                 {...props}
//                 theme={propss.theme}
//                 setTheme={propss.setTheme}
//               />
//             )}
//           />
//           <Route
//             path="/:role/education"
//             render={(props) => (
//               <Education
//                 {...props}
//                 theme={propss.theme}
//                 setTheme={propss.setTheme}
//               />
//             )}
//           />
//           <Route
//             path="/contact"
//             render={(props) => (
//               <Contact
//                 {...props}
//                 theme={propss.theme}
//                 setTheme={propss.setTheme}
//               />
//             )}
//           />
//           <Route
//             path="/projects"
//             render={(props) => <Redirect to="/sde/projects" />}
//           />
//           <Route
//             path="/:role/projects"
//             render={(props) => (
//               <Projects
//                 {...props}
//                 theme={propss.theme}
//                 setTheme={propss.setTheme}
//               />
//             )}
//           />
//         </Switch>
//       </HashRouter>
//     </div>
//   );
// }
