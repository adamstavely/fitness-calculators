<div style="max-width: 900px; margin: 40px auto; background: white; border-radius: 20px; box-shadow: 0 6px 24px rgba(0,0,0,0.1); overflow: hidden; font-family: 'Segoe UI', sans-serif; color: #141414;">
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
