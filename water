<div style="max-width: 900px; margin: 40px auto; background: white; border-radius: 20px; box-shadow: 0 6px 24px rgba(0,0,0,0.1); overflow: hidden; font-family: 'Segoe UI', sans-serif; color: #141414;">
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
