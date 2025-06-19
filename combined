
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fitness Mega Calculator</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Core styles for tabbed navigation and layout */
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f4f4f4;
      color: #141414;
      margin: 0;
      padding: 40px;
    }
    .tabs {
      max-width: 1000px;
      margin: auto;
      background: white;
      border-radius: 20px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .tab-buttons {
      display: flex;
      background-color: #EF5607;
    }
    .tab-buttons button {
      flex: 1;
      padding: 16px;
      background: none;
      border: none;
      font-size: 16px;
      font-weight: bold;
      color: white;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    .tab-buttons button:hover,
    .tab-buttons button.active {
      background-color: #d74b05;
    }
    .tab-content {
      display: none;
      padding: 0;
    }
    .tab-content.active {
      display: block;
    }
  </style>
</head>
<body>
  <div class="tabs">
    <div class="tab-buttons">
      <button class="active" onclick="openTab(event, 'tdee')">TDEE</button>
      <button onclick="openTab(event, 'protein')">Protein</button>
      <button onclick="openTab(event, 'calories')">Calorie Deficit</button>
      <button onclick="openTab(event, 'water')">Water</button>
      <button onclick="openTab(event, 'macros')">Macros</button>
    </div>
    <!-- Calculator Tabs Begin -->
    <!-- Each Calculator Section Will Be Appended Below -->
<!-- TDEE Calculator HTML -->
<div id="tdee" class="tab-content"style="max-width: 900px; margin: 40px auto; background: white; border-radius: 20px; box-shadow: 0 6px 24px rgba(0,0,0,0.1); overflow: hidden; font-family: 'Segoe UI', sans-serif; color: #141414;">
  <style>
    .tdee-container {
      display: flex;
      flex-wrap: wrap;
    }

    .tdee-left, .tdee-right {
      flex: 1 1 50%;
      padding: 30px;
      box-sizing: border-box;
    }

    .tdee-group {
      margin-bottom: 20px;
    }

    .tdee-label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
      font-size: 14px;
    }

    .tdee-input, .tdee-select {
      width: 100%;
      padding: 12px;
      border: 1px solid #CACACA;
      border-radius: 10px;
      font-size: 16px;
      box-sizing: border-box;
    }

    .tdee-flex {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .tdee-half {
      flex: 1 1 100%;
    }

    @media (min-width: 600px) {
      .tdee-half {
        flex: 1;
      }
    }

    .tdee-button {
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

    .tdee-button:hover {
      background-color: #2cbec8;
    }

    .tdee-result {
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

    .tdee-result img {
      max-width: 150px;
      margin-bottom: 20px;
    }

    .tdee-highlight {
      font-size: 40px;
      color: #EF5607;
      font-weight: 700;
      margin-top: 16px;
    }

    .tdee-error {
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

  <div class="tdee-container">
    <!-- Left Side Inputs -->
    <div class="tdee-left">
      <h2 style="font-weight: 700; font-size: 24px; margin-bottom: 24px;">Calculate Your TDEE</h2>

      <form id="tdee-form" aria-label="TDEE Calculator Form" onsubmit="event.preventDefault(); calculateTDEE();">
        <div class="tdee-group">
          <label for="tdee-weight" class="tdee-label">Weight (lbs)</label>
          <input type="number" id="tdee-weight" class="tdee-input" min="1" aria-label="Weight in pounds" placeholder="e.g. 175">
        </div>

        <div class="tdee-group">
          <label class="tdee-label">Height</label>
          <div class="tdee-flex">
            <div class="tdee-half">
              <label for="tdee-height-feet" class="sr-only">Height in feet</label>
              <input type="number" id="tdee-height-feet" class="tdee-input" placeholder="Feet" min="0" aria-label="Height in feet">
            </div>
            <div class="tdee-half">
              <label for="tdee-height-inches" class="sr-only">Height in inches</label>
              <input type="number" id="tdee-height-inches" class="tdee-input" placeholder="Inches" min="0" aria-label="Height in inches">
            </div>
          </div>
        </div>

        <div class="tdee-group">
          <div class="tdee-flex">
            <div class="tdee-half">
              <label for="tdee-age" class="tdee-label">Age</label>
              <input type="number" id="tdee-age" class="tdee-input" min="1" aria-label="Age in years" placeholder="e.g. 30">
            </div>
            <div class="tdee-half">
              <label for="tdee-gender" class="tdee-label">Gender</label>
              <select id="tdee-gender" class="tdee-select" aria-label="Gender">
                <option value="">-- Select --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>

        <div class="tdee-group">
          <label for="tdee-activity" class="tdee-label">Activity Level</label>
          <select id="tdee-activity" class="tdee-select" aria-label="Activity level">
            <option value="">-- Select Activity Level --</option>
            <option value="1.2">Sedentary (little or no exercise)</option>
            <option value="1.375">Lightly Active (1–3 days/week)</option>
            <option value="1.55">Moderately Active (3–5 days/week)</option>
            <option value="1.725">Very Active (6–7 days/week)</option>
            <option value="1.9">Extra Active (intense job or training)</option>
          </select>
        </div>

        <button type="button" class="tdee-button" onclick="calculateTDEE()">Calculate TDEE</button>
        <div id="tdee-error" class="tdee-error" role="alert" style="display:none;"></div>
      </form>
    </div>

    <!-- Right Side Results -->
    <div class="tdee-right">
      <div id="tdee-result" class="tdee-result" aria-live="polite">
        <img src="https://files.oaiusercontent.com/file-0000000016d062468ccfd394c250e76a?Expires=4751938294&Signature=placeholder" alt="Calorie flame graphic" />
        <div>Your Total Daily Energy Expenditure (TDEE) is:</div>
        <div class="tdee-highlight" id="tdee-value">--</div>
        <div style="margin-top: 18px; font-size: 14px; color: #555; line-height: 1.6;">
          This is how many calories you burn each day just by living your life.  
          Use this number to guide your nutrition whether your goal is fat loss, muscle gain, or maintenance.
        </div>
      </div>
    </div>
  </div>

  <script>
    function calculateTDEE() {
      const weight = parseFloat(document.getElementById('tdee-weight').value);
      const heightFeet = parseFloat(document.getElementById('tdee-height-feet').value);
      const heightInches = parseFloat(document.getElementById('tdee-height-inches').value);
      const age = parseFloat(document.getElementById('tdee-age').value);
      const gender = document.getElementById('tdee-gender').value;
      const activity = parseFloat(document.getElementById('tdee-activity').value);

      const resultEl = document.getElementById('tdee-value');
      const errorEl = document.getElementById('tdee-error');

      errorEl.style.display = 'none';
      resultEl.innerText = '--';

      if (!weight || !heightFeet || heightFeet < 0 || heightInches < 0 || !age || !gender || !activity) {
        errorEl.innerText = "⚠️ Please fill in all fields correctly to get your result.";
        errorEl.style.display = 'block';
        return;
      }

      const weightKg = weight * 0.453592;
      const heightCm = (heightFeet * 12 + heightInches) * 2.54;

      const bmr = gender === 'male'
        ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
        : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

      const tdee = Math.round(bmr * activity);
      resultEl.innerText = `${tdee.toLocaleString()} cal/day`;
    }
  </script>
</div>
<!-- Protein Calculator HTML -->
<div id="protein" class="tab-content"style="max-width: 900px; margin: 40px auto; background: white; border-radius: 20px; box-shadow: 0 6px 24px rgba(0,0,0,0.1); overflow: hidden; font-family: 'Segoe UI', sans-serif; color: #141414;">
  <style>
    .protein-container {
      display: flex;
      flex-wrap: wrap;
    }

    .protein-left, .protein-right {
      flex: 1 1 50%;
      padding: 30px;
      box-sizing: border-box;
    }

    .protein-group {
      margin-bottom: 20px;
    }

    .protein-label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
      font-size: 14px;
    }

    .protein-input, .protein-select {
      width: 100%;
      padding: 12px;
      border: 1px solid #CACACA;
      border-radius: 10px;
      font-size: 16px;
      box-sizing: border-box;
    }

    .protein-flex {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .protein-half {
      flex: 1 1 100%;
    }

    @media (min-width: 600px) {
      .protein-half {
        flex: 1;
      }
    }

    .protein-button {
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

    .protein-button:hover {
      background-color: #2cbec8;
    }

    .protein-result {
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

    .protein-result img {
      max-width: 150px;
      margin-bottom: 20px;
    }

    .protein-highlight {
      font-size: 34px;
      color: #EF5607;
      font-weight: 700;
      margin-top: 16px;
    }

    .protein-error {
      color: #EF5607;
      font-size: 14px;
      margin-top: 12px;
    }
  </style>

  <div class="protein-container">
    <!-- Left Inputs -->
    <div class="protein-left">
      <h2 style="font-weight: 700; font-size: 24px; margin-bottom: 24px;">Calculate Your Protein Intake</h2>

      <form id="protein-form" aria-label="Protein Intake Calculator" onsubmit="event.preventDefault(); calculateProtein();">
        <div class="protein-group">
          <label for="protein-gender" class="protein-label">Gender</label>
          <select id="protein-gender" class="protein-select" aria-label="Gender">
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div class="protein-group">
          <label for="protein-activity" class="protein-label">Activity Level</label>
          <select id="protein-activity" class="protein-select" aria-label="Activity level">
            <option value="">-- Select Activity --</option>
            <option value="1">Sedentary</option>
            <option value="2">Lightly Active</option>
            <option value="3">Moderately Active</option>
            <option value="4">Very Active</option>
            <option value="5">Athlete</option>
          </select>
        </div>

        <div class="protein-group">
          <label for="protein-weight" class="protein-label">Current Weight (lbs)</label>
          <input type="number" id="protein-weight" class="protein-input" min="1" placeholder="e.g. 175">
        </div>

        <div class="protein-group">
          <label for="protein-goal-weight" class="protein-label">Goal Weight (lbs)</label>
          <input type="number" id="protein-goal-weight" class="protein-input" min="1" placeholder="e.g. 165">
        </div>

        <div class="protein-group">
          <label for="protein-goal" class="protein-label">Goal</label>
          <select id="protein-goal" class="protein-select">
            <option value="">-- Select Goal --</option>
            <option value="lose">Lose Fat</option>
            <option value="maintain">Maintain</option>
            <option value="gain">Build Muscle</option>
          </select>
        </div>

        <button type="button" class="protein-button" onclick="calculateProtein()">Calculate Protein</button>
        <div id="protein-error" class="protein-error" role="alert" style="display:none;"></div>
      </form>
    </div>

    <!-- Right Results -->
    <div class="protein-right">
      <div id="protein-result" class="protein-result" aria-live="polite">
        <img src="https://chat.openai.com/mnt/data/protein_calculator_graphic.png" alt="Protein intake illustration" />
        <div>Your estimated daily protein target is:</div>
        <div class="protein-highlight" id="protein-value">--</div>
        <div id="protein-per-meal" style="margin-top: 16px; font-size: 14px; color: #555;"></div>
      </div>
    </div>
  </div>

  <script>
    function calculateProtein() {
      const gender = document.getElementById('protein-gender').value;
      const activity = parseInt(document.getElementById('protein-activity').value);
      const weight = parseFloat(document.getElementById('protein-weight').value);
      const goalWeight = parseFloat(document.getElementById('protein-goal-weight').value);
      const goal = document.getElementById('protein-goal').value;
      const errorEl = document.getElementById('protein-error');
      const resultEl = document.getElementById('protein-value');
      const mealEl = document.getElementById('protein-per-meal');

      errorEl.style.display = 'none';
      resultEl.innerText = '--';
      mealEl.innerText = '';

      if (!gender || isNaN(activity) || isNaN(weight) || isNaN(goalWeight) || !goal) {
        errorEl.innerText = "⚠️ Please complete all fields.";
        errorEl.style.display = 'block';
        return;
      }

      const targetWeight = (goal === "maintain") ? weight : goalWeight;

      let multiplier = 0.8;
      if (goal === "lose") multiplier = gender === "male" ? 1.0 : 0.9;
      if (goal === "gain") multiplier = gender === "male" ? 1.1 : 1.0;
      if (goal === "maintain") multiplier = gender === "male" ? 0.8 : 0.7;
      multiplier += (activity - 1) * 0.05;

      const gramsPerDay = Math.round(targetWeight * multiplier);
      resultEl.innerText = `${gramsPerDay}g / day`;

      mealEl.innerHTML = `
        <br><strong>Per meal:</strong><br>
        3 meals/day: ${Math.round(gramsPerDay / 3)}g<br>
        4 meals/day: ${Math.round(gramsPerDay / 4)}g<br>
        5 meals/day: ${Math.round(gramsPerDay / 5)}g<br>
        6 meals/day: ${Math.round(gramsPerDay / 6)}g
      `;
    }
  </script>
</div>
<!-- Calorie Deficit Calculator HTML -->
<div id="calories" class="tab-content"style="max-width: 900px; margin: 40px auto; background: white; border-radius: 20px; box-shadow: 0 6px 24px rgba(0,0,0,0.1); overflow: hidden; font-family: 'Segoe UI', sans-serif; color: #141414;">
  <style>
    .deficit-container {
      display: flex;
      flex-wrap: wrap;
    }

    .deficit-left, .deficit-right {
      flex: 1 1 50%;
      padding: 30px;
      box-sizing: border-box;
    }

    .deficit-group {
      margin-bottom: 20px;
    }

    .deficit-label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
      font-size: 14px;
    }

    .deficit-input, .deficit-select {
      width: 100%;
      padding: 12px;
      border: 1px solid #CACACA;
      border-radius: 10px;
      font-size: 16px;
      box-sizing: border-box;
    }

    .deficit-flex {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .deficit-half {
      flex: 1 1 100%;
    }

    @media (min-width: 600px) {
      .deficit-half {
        flex: 1;
      }
    }

    .deficit-button {
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

    .deficit-button:hover {
      background-color: #2cbec8;
    }

    .deficit-result {
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

    .deficit-result img {
      max-width: 150px;
      margin-bottom: 20px;
    }

    .deficit-highlight {
      font-size: 34px;
      color: #EF5607;
      font-weight: 700;
      margin-top: 16px;
    }

    .deficit-error {
      color: #EF5607;
      font-size: 14px;
      margin-top: 12px;
    }
  </style>

  <div class="deficit-container">
    <!-- Left Inputs -->
    <div class="deficit-left">
      <h2 style="font-weight: 700; font-size: 24px; margin-bottom: 24px;">Calculate Your Calorie Deficit</h2>

      <form id="deficit-form" aria-label="Calorie Deficit Calculator" onsubmit="event.preventDefault(); calculateDeficit();">
        <div class="deficit-group">
          <label for="deficit-weight" class="deficit-label">Current Weight (lbs)</label>
          <input type="number" id="deficit-weight" class="deficit-input" min="1" placeholder="e.g. 180">
        </div>

        <div class="deficit-group">
          <label class="deficit-label">Height</label>
          <div class="deficit-flex">
            <div class="deficit-half">
              <input type="number" id="deficit-height-ft" class="deficit-input" placeholder="Feet" min="0">
            </div>
            <div class="deficit-half">
              <input type="number" id="deficit-height-in" class="deficit-input" placeholder="Inches" min="0">
            </div>
          </div>
        </div>

        <div class="deficit-group">
          <div class="deficit-flex">
            <div class="deficit-half">
              <label for="deficit-age" class="deficit-label">Age</label>
              <input type="number" id="deficit-age" class="deficit-input" min="1" placeholder="e.g. 35">
            </div>
            <div class="deficit-half">
              <label for="deficit-gender" class="deficit-label">Gender</label>
              <select id="deficit-gender" class="deficit-select">
                <option value="">-- Select --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>

        <div class="deficit-group">
          <label for="deficit-activity" class="deficit-label">Activity Level</label>
          <select id="deficit-activity" class="deficit-select">
            <option value="">-- Select Activity Level --</option>
            <option value="1.2">Sedentary</option>
            <option value="1.375">Lightly Active</option>
            <option value="1.55">Moderately Active</option>
            <option value="1.725">Very Active</option>
            <option value="1.9">Extra Active</option>
          </select>
        </div>

        <div class="deficit-group">
          <label for="deficit-goal-weight" class="deficit-label">Goal Weight (lbs)</label>
          <input type="number" id="deficit-goal-weight" class="deficit-input" min="1" placeholder="e.g. 165">
        </div>

        <div class="deficit-group">
          <label for="deficit-rate" class="deficit-label">Desired Weight Loss Rate</label>
          <select id="deficit-rate" class="deficit-select">
            <option value="1">1 lb/week</option>
            <option value="2">2 lbs/week</option>
          </select>
        </div>

        <button type="button" class="deficit-button" onclick="calculateDeficit()">Calculate</button>
        <div id="deficit-error" class="deficit-error" role="alert" style="display:none;"></div>
      </form>
    </div>

    <!-- Right Results -->
    <div class="deficit-right">
      <div id="deficit-result" class="deficit-result" aria-live="polite">
        <img src="https://chat.openai.com/mnt/data/calorie_deficit_graphic.png" alt="Calorie deficit progress illustration" />
        <div style="font-size: 16px;">Maintenance Calories:</div>
        <div class="deficit-highlight" id="deficit-tdee">--</div>
        <div id="deficit-details" style="margin-top: 16px; font-size: 14px; color: #555; line-height: 1.6;"></div>
      </div>
    </div>
  </div>

  <script>
    function calculateDeficit() {
      const weight = parseFloat(document.getElementById('deficit-weight').value);
      const heightFt = parseFloat(document.getElementById('deficit-height-ft').value);
      const heightIn = parseFloat(document.getElementById('deficit-height-in').value);
      const age = parseFloat(document.getElementById('deficit-age').value);
      const gender = document.getElementById('deficit-gender').value;
      const activity = parseFloat(document.getElementById('deficit-activity').value);
      const goalWeight = parseFloat(document.getElementById('deficit-goal-weight').value);
      const rate = parseFloat(document.getElementById('deficit-rate').value);

      const tdeeEl = document.getElementById('deficit-tdee');
      const detailsEl = document.getElementById('deficit-details');
      const errorEl = document.getElementById('deficit-error');

      errorEl.style.display = 'none';
      tdeeEl.innerText = '--';
      detailsEl.innerHTML = '';

      if (!weight || !heightFt || heightFt < 0 || heightIn < 0 || !age || !gender || !activity || !goalWeight || !rate) {
        errorEl.innerText = "⚠️ Please fill in all fields correctly.";
        errorEl.style.display = 'block';
        return;
      }

      const weightKg = weight * 0.453592;
      const heightCm = (heightFt * 12 + heightIn) * 2.54;

      const bmr = gender === "male"
        ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
        : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

      const tdee = Math.round(bmr * activity);
      const deficit1 = tdee - 500;
      const deficit2 = tdee - 1000;

      const poundsToLose = weight - goalWeight;
      const weeks1 = Math.ceil(poundsToLose / 1);
      const weeks2 = Math.ceil(poundsToLose / 2);

      const today = new Date();
      const date1 = new Date(today.getTime() + weeks1 * 7 * 24 * 60 * 60 * 1000);
      const date2 = new Date(today.getTime() + weeks2 * 7 * 24 * 60 * 60 * 1000);

      tdeeEl.innerText = `${tdee.toLocaleString()} cal/day`;
      detailsEl.innerHTML = `
        <strong>To lose 1 lb/week:</strong> ${deficit1} cal/day<br>
        <strong>To lose 2 lbs/week:</strong> ${deficit2} cal/day<br><br>
        <strong>Estimated time to reach ${goalWeight} lbs:</strong><br>
        • 1 lb/week: ${weeks1} weeks (~${date1.toDateString()})<br>
        • 2 lbs/week: ${weeks2} weeks (~${date2.toDateString()})
      `;
    }
  </script>
</div>
<!-- Water Intake Calculator HTML -->
<div id="water" class="tab-content" style="max-width: 900px; margin: 40px auto; background: white; border-radius: 20px; box-shadow: 0 6px 24px rgba(0,0,0,0.1); overflow: hidden; font-family: 'Segoe UI', sans-serif; color: #141414;">
  <style>
    .water-container {
      display: flex;
      flex-wrap: wrap;
    }

    .water-left, .water-right {
      flex: 1 1 50%;
      padding: 30px;
      box-sizing: border-box;
    }

    .water-group {
      margin-bottom: 20px;
    }

    .water-label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
      font-size: 14px;
    }

    .water-input, .water-select {
      width: 100%;
      padding: 12px;
      border: 1px solid #CACACA;
      border-radius: 10px;
      font-size: 16px;
      box-sizing: border-box;
    }

    .water-flex {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .water-half {
      flex: 1 1 100%;
    }

    @media (min-width: 600px) {
      .water-half {
        flex: 1;
      }
    }

    .water-button {
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

    .water-button:hover {
      background-color: #2cbec8;
    }

    .water-result {
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

    .water-result img {
      max-width: 140px;
      margin-bottom: 20px;
    }

    .water-highlight {
      font-size: 34px;
      color: #EF5607;
      font-weight: 700;
      margin-top: 16px;
    }

    .water-error {
      color: #EF5607;
      font-size: 14px;
      margin-top: 12px;
    }
  </style>

  <div class="water-container">
    <!-- Left Inputs -->
    <div class="water-left">
      <h2 style="font-weight: 700; font-size: 24px; margin-bottom: 24px;">Daily Water Intake Calculator</h2>

      <form id="water-form" aria-label="Water Intake Calculator" onsubmit="event.preventDefault(); calculateWater();">
        <div class="water-group">
          <label for="water-gender" class="water-label">Gender</label>
          <select id="water-gender" class="water-select">
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div class="water-group">
          <label for="water-activity" class="water-label">Activity Level</label>
          <select id="water-activity" class="water-select">
            <option value="">-- Select Activity --</option>
            <option value="low">Low (minimal sweating)</option>
            <option value="moderate">Moderate (1–3 workouts/week)</option>
            <option value="high">High (daily intense activity)</option>
          </select>
        </div>

        <div class="water-group">
          <label for="water-weight" class="water-label">Weight (lbs)</label>
          <input type="number" id="water-weight" class="water-input" min="1" placeholder="e.g. 165">
        </div>

        <div class="water-group">
          <label for="water-environment" class="water-label">Environment (Optional)</label>
          <select id="water-environment" class="water-select">
            <option value="">-- Normal --</option>
            <option value="hot">Hot/High Altitude</option>
          </select>
        </div>

        <button type="button" class="water-button" onclick="calculateWater()">Calculate Water Intake</button>
        <div id="water-error" class="water-error" role="alert" style="display:none;"></div>
      </form>
    </div>

    <!-- Right Results -->
    <div class="water-right">
      <div id="water-result" class="water-result" aria-live="polite">
        <img src="https://chat.openai.com/mnt/data/water_intake_graphic.png" alt="Water glass illustration" />
        <div>Your recommended daily water intake is:</div>
        <div class="water-highlight" id="water-ounces">--</div>
        <div id="water-cups" style="margin-top: 16px; font-size: 14px; color: #555;"></div>
      </div>
    </div>
  </div>

  <script>
    function calculateWater() {
      const gender = document.getElementById('water-gender').value;
      const activity = document.getElementById('water-activity').value;
      const weight = parseFloat(document.getElementById('water-weight').value);
      const environment = document.getElementById('water-environment').value;

      const resultOz = document.getElementById('water-ounces');
      const resultCups = document.getElementById('water-cups');
      const errorEl = document.getElementById('water-error');

      errorEl.style.display = 'none';
      resultOz.innerText = '--';
      resultCups.innerText = '';

      if (!gender || !activity || isNaN(weight) || weight <= 0) {
        errorEl.innerText = "⚠️ Please complete all required fields.";
        errorEl.style.display = 'block';
        return;
      }

      let multiplier = gender === 'male' ? 0.5 : 0.45;

      if (activity === 'moderate') multiplier += 0.05;
      if (activity === 'high') multiplier += 0.1;

      if (environment === 'hot') multiplier += 0.05;

      const ounces = Math.round(weight * multiplier);
      const cups = Math.round(ounces / 8);

      resultOz.innerText = `${ounces} oz`;
      resultCups.innerHTML = `<strong>That’s about ${cups} cups per day.</strong>`;
    }
  </script>
</div>
<!-- Macros Calculator HTML -->
<div id="macros" class="tab-content" style="max-width: 900px; margin: 40px auto; background: white; border-radius: 20px; box-shadow: 0 6px 24px rgba(0,0,0,0.1); overflow: hidden; font-family: 'Segoe UI', sans-serif; color: #141414;">
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

  </div>
  <script>
    function openTab(evt, tabId) {
      const tabs = document.querySelectorAll('.tab-content');
      const buttons = document.querySelectorAll('.tab-buttons button');
  
      // Hide all tab contents
      tabs.forEach(tab => tab.classList.remove('active'));
  
      // Remove 'active' from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));
  
      // Show selected tab
      document.getElementById(tabId).classList.add('active');
  
      // Highlight active button
      evt.currentTarget.classList.add('active');
    }
  
    // On page load, show only the first tab
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.tab-buttons button').click();
    });
  </script>
</body>
</html>
