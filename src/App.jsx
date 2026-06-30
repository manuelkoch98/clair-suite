const DASHBOARD_URL = "/monitor-login";

const modules = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: "/modul_dashboards_40px.png",
    onClick: () => {
      window.location.href = DASHBOARD_URL;
    },
  },
  {
    id: "load-balancing",
    title: "Energy",
    icon: "/modul_load-balancing_40px.png",
  },
  {
    id: "assistant",
    title: "Assistant",
    icon: "/assistant.png",
  },
];

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" fill="currentColor" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 22a2.3 2.3 0 0 0 2.3-2.3h-4.6A2.3 2.3 0 0 0 12 22Zm7.2-5.2v-1.1l-1.7-1.9V10a5.5 5.5 0 1 0-11 0v3.8l-1.7 1.9v1.1h14.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ModuleCard({ title, icon, onClick }) {
  const clickable = typeof onClick === "function";

  return (
    <button
      className={`module-card${clickable ? " module-card--clickable" : ""}`}
      onClick={onClick}
      disabled={!clickable}
      type="button"
      aria-label={title}
    >
      <img className="module-card__icon" src={icon} alt="" />
      <span className="module-card__title">{title}</span>
    </button>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="page-header">
        <div className="main-nav-wrap">
          <div className="main-nav">
            <button className="icon-btn" type="button" aria-label="Menue">
              <IconMenu />
            </button>

            <div className="main-nav__brand">
              <img src="/logo-clair-negativ (1).png" alt="Clair" />
            </div>

            <div className="main-nav__right">
              <button className="circle-btn" type="button" aria-label="Benachrichtigungen">
                <IconBell />
              </button>

              <button className="profile-btn" type="button" aria-label="User menu">
                CM
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="suite-panel" aria-label="Clair suite modules">
          <img className="suite-panel__logo" src="/logo-clair-positiv.png" alt="Clair logo" />

          <div className="module-grid">
            {modules.map((module) => (
              <ModuleCard key={module.id} {...module} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
