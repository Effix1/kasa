import { Outlet } from "react-router-dom";

export default function Layout() {

    return <>
      <h1>Noëlie et Éloïse</h1>
      <div>
        <ul>
          <li>coucou</li>
          <li>salut</li>
          <li>ça roule</li>
        </ul>
      </div>
      <Outlet />
    </>;
  }