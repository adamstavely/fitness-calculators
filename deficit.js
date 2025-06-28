<div style="max-width: 900px; margin: 40px auto; background: white; border-radius: 20px; box-shadow: 0 6px 24px rgba(0,0,0,0.1); overflow: hidden; font-family: 'Segoe UI', sans-serif; color: #141414;">
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
