import { useState } from "react";

export default function Check() {
  const [isComplete, setisComplete] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
    setisComplete((current) => !current);
  };

  return (
    <div>
    <label>
        <input
          type="checkbox"
          value={isComplete}
          onChange={handleChange}
          id="completed"
          name="completed"
        />
        
        </label>
     
      <hr />
      {isComplete}
    </div>
  );
}
