import { Outlet, NavLink } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>Yapa yapa yapa </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default HelpLayout;
