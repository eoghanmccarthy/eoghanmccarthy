import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return <div className="page-container">Eoghan McCarthy</div>;
}
