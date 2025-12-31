import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return <div className="py-32">Eoghan McCarthy</div>;
}
