import ThemeToggle from "./ThemeToggle";
// import { useTheme } from "./ThemeContext";
import { Outlet } from "react-router-dom";
import Menu from "./Menu.jsx";

function App() {
  return (
    <div className="app">
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;




// function App() {
//   return (
//     <>
//       <div className={styles.app}>
//         <h1>Hello React</h1>
//         <ThemeToggle />
//         <div className={styles.card}>Themed content box</div>
//       </div>
//       <Outlet/>
//     </>
//   );
// }