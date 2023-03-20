import { buttonsDefinitions } from "../calculator.utils";
import "./calculator-btns.style.css";

const CalculatorButtons = () => {
  return (
    <div className="calculator-buttons">
      {buttonsDefinitions.map((btn) => {
        return (
          <div key={btn.label}>
            <button
              className={btn.type === "number" ? "number-btn" : "sign-btn"}
            >
              {btn.label}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CalculatorButtons;
