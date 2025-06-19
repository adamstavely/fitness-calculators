<div style="max-width: 900px; margin: 40px auto; background: white; border-radius: 20px; box-shadow: 0 6px 24px rgba(0,0,0,0.1); overflow: hidden; font-family: 'Segoe UI', sans-serif; color: #141414;">
  <style>
    .macros-container {
      display: flex;
      flex-wrap: wrap;
    }

    .macros-left, .macros-right {
      flex: 1 1 50%;
      padding: 30px;
      box-sizing: border-box;
    }

    .macros-group {
      margin-bottom: 20px;
    }

    .macros-label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
      font-size: 14px;
    }

    .macros-input, .macros-select {
      width: 100%;
      padding: 12px;
      border: 1px solid #CACACA;
      border-radius: 10px;
      font-size: 16px;
      box-sizing: border-box;
    }

    .macros-flex {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .macros-half {
      flex: 1 1 100%;
    }

    @media (min-width: 600px) {
      .macros-half {
        flex: 1;
      }
    }

    .macros-button {
      width: 100%;
      padding: 14px;
      font-size: 16px;
      font-weight: bold;
      background-color: #31D2DC;
      color: #141414;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      margin-top: 10px;
      transition: background 0.3s ease;
    }

    .macros-button:hover {
      background-color: #2cbec8;
    }

    .macros-result {
      background: #F9FAFB;
      border-left: 6px solid #EF5607;
      border-radius: 12px;
      padding: 40px 30px;
      font-size: 18px;
      font-weight: 500;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .macros-result img {
      max-width: 150px;
      margin-bottom: 20px;
    }

    .macros-highlight {
      font-size: 20px;
      color: #141414;
      line-height: 1.8;
    }

    .macros-highlight strong {
      color: #EF5607;
    }

    .macros-error {
      color: #EF5607;
      font-size: 14px;
      margin-top: 12px;
    }

    .sr-only {
      position: absolute;
      left: -9999px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
  </style>

  <div class="macros-container">
    <!-- Left Side Inputs -->
    <div class="macros-left">
      <h2 style="font-weight: 700; font-size: 24px; margin-bottom: 24px;">Macros Calculator</h2>

      <form id="macros-form" aria-label="Macros Calculator Form" onsubmit="event.preventDefault(); calculateMacros();">
        <div class="macros-group">
          <label class="macros-label">Gender</label>
          <select id="macros-gender" class="macros-select" aria-label="Gender">
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div class="macros-group">
          <label class="macros-label">Age</label>
          <input type="number" id="macros-age" class="macros-input" placeholder="e.g. 30">
        </div>

        <div class="macros-group">
          <label class="macros-label">Height</label>
          <div class="macros-flex">
            <div class="macros-half">
              <input type="number" id="macros-height-feet" class="macros-input" placeholder="Feet">
            </div>
            <div class="macros-half">
              <input type="number" id="macros-height-inches" class="macros-input" placeholder="Inches">
            </div>
          </div>
        </div>

        <div class="macros-group">
          <label class="macros-label">Weight (lbs)</label>
          <input type="number" id="macros-weight" class="macros-input" placeholder="e.g. 160">
        </div>

        <div class="macros-group">
          <label class="macros-label">Activity Level</label>
          <select id="macros-activity" class="macros-select" aria-label="Activity level">
            <option value="">-- Select Activity Level --</option>
            <option value="1.2">Sedentary</option>
            <option value="1.375">Lightly Active</option>
            <option value="1.55">Moderately Active</option>
            <option value="1.725">Very Active</option>
            <option value="1.9">Extra Active</option>
          </select>
        </div>

        <div class="macros-group">
          <label class="macros-label">Goal</label>
          <select id="macros-goal" class="macros-select" aria-label="Goal">
            <option value="">-- Select Goal --</option>
            <option value="cut">Lose Fat</option>
            <option value="maintain">Maintain</option>
            <option value="bulk">Build Muscle</option>
          </select>
        </div>

        <button type="submit" class="macros-button">Calculate Macros</button>
        <div id="macros-error" class="macros-error" style="display:none;"></div>
      </form>
    </div>

    <!-- Right Side Results -->
    <div class="macros-right">
      <div id="macros-result" class="macros-result" aria-live="polite">
        <img src="macros_calculator_graphic_final_v2.png" alt="Macros graphic" />
        <div class="macros-highlight" id="macros-output">
          Your macro breakdown will appear here.
        </div>
      </div>
    </div>
  </div>

  <script>
    function calculateMacros() {
      const gender = document.getElementById('macros-gender').value;
      const age = parseInt(document.getElementById('macros-age').value);
      const feet = parseInt(document.getElementById('macros-height-feet').value);
      const inches = parseInt(document.getElementById('macros-height-inches').value);
      const weight = parseFloat(document.getElementById('macros-weight').value);
      const activity = parseFloat(document.getElementById('macros-activity').value);
      const goal = document.getElementById('macros-goal').value;

      const output = document.getElementById('macros-output');
      const error = document.getElementById('macros-error');
      error.style.display = 'none';

      if (!gender || isNaN(age) || isNaN(feet) || isNaN(inches) || isNaN(weight) || isNaN(activity) || !goal) {
        error.innerText = "⚠️ Please fill out all fields.";
        error.style.display = 'block';
        return;
      }

      const heightCm = (feet * 12 + inches) * 2.54;
      const weightKg = weight * 0.453592;
      let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + (gender === 'male' ? 5 : -161);
      let tdee = bmr * activity;

      if (goal === 'cut') tdee -= 500;
      if (goal === 'bulk') tdee += 300;

      const protein = Math.round(weight * (goal === 'cut' ? 1.0 : 0.8));
      const fat = Math.round((tdee * 0.25) / 9);
      const carbs = Math.round((tdee - (protein * 4 + fat * 9)) / 4);

      output.innerHTML = `<strong>Protein:</strong> ${protein}g<br><strong>Carbs:</strong> ${carbs}g<br><strong>Fat:</strong> ${fat}g`;
    }
  </script>
</div>
