<div style="max-width: 900px; margin: 40px auto; background: white; border-radius: 20px; box-shadow: 0 6px 24px rgba(0,0,0,0.1); overflow: hidden; font-family: 'Segoe UI', sans-serif; color: #141414;">
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
