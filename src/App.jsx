const DASHBOARD_URL =
  "https://ca-shs-clair-monitor-web-dev.gentledune-55d9f3c4.westeurope.azurecontainerapps.io/login";

const modules = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: "/modul_dashboards_40px.png",
    onClick: () => window.open(DASHBOARD_URL, "_blank", "noopener,noreferrer"),
  },
  {
    id: "load-balancing",
    title: "Load Balancing",
    icon: "/modul_load-balancing_40px.png",
  },
  {
    id: "assistant",
    title: "Assistant",
    icon: "/assistant.png",
  },
];

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
      <header className="topbar">
        <div className="topbar__brand">
          <img src="/logo-clair-positiv.png" alt="Clair" />
        </div>
        <button className="topbar__avatar" type="button" aria-label="User menu">
          C
        </button>
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
