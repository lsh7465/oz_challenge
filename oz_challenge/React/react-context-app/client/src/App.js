import "./App.css";
import SummaryPage from "./pages/SummaryPage";
import OrderPage from "./pages/OrderPage/index";

function App() {
  return (
    <div style={{ padding: "4rem" }}>
      <OrderPage />
      <SummaryPage />
    </div>
  );
}

export default App;
