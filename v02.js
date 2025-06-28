<div class="calculator-container">
  <div class="calculator-left">
    <h1>VO₂ Max Calculator</h1>
    <p>Estimate your VO₂ Max using the 1.5-mile run test. The higher the VO₂ Max, the better your aerobic endurance.</p>
    <input type="number" id="age" placeholder="Age">
    <select id="gender">
      <option value="" disabled selected>Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <input type="number" id="rhr" placeholder="Resting Heart Rate (bpm)">
    <input type="number" id="runTime" placeholder="1.5 Mile Run Time (minutes)" step="0.1">
    <button onclick="calculateVO2()">Calculate VO₂ Max</button>
  </div>

  <div class="calculator-right">
    <div class="result-wrapper">
      <div>Estimated VO₂ Max:</div>
      <div class="result" id="vo2Result">--</div>
      <div class="divider"></div>
      <div>This value estimates your body's efficiency at consuming oxygen during intense exercise. Higher VO₂ Max means better aerobic capacity.</div>
    </div>
  </div>
</div>

<style>
  .calculator-container {
    max-width: 1100px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    box-shadow: 0 6px 24px rgba(0,0,0,0.1);
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    font-family: 'Segoe UI', sans-serif;
  }

  .calculator-left, .calculator-right {
    flex: 1 1 50%;
    box-sizing: border-box;
    padding: 30px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #141414;
  }

  p {
    font-size: 16px;
    color: #141414;
    margin-bottom: 20px;
  }

  input, select {
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid #CACACA;
    border-radius: 10px;
    font-size: 16px;
  }

  button {
    width: 100%;
    padding: 14px;
    font-size: 16px;
    font-weight: bold;
    background-color: #31D2DC;
    color: #141414;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: #2cbec8;
  }

  .result-wrapper {
    background: #F9FAFB;
    border-left: 6px solid #EF5607;
    border-radius: 12px;
    padding: 40px 30px;
    font-size: 16px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .result {
    font-size: 40px;
    color: #EF5607;
    font-weight: 700;
    margin-top: 16px;
  }

  .divider {
    height: 1px;
    background: #CACACA;
    margin: 40px 0 20px 0;
    width: 100%;
  }

  @media (max-width: 800px) {
    .calculator-left, .calculator-right {
      flex: 1 1 100%;
    }
  }
</style>

<script>
  function calculateVO2() {
    var age = parseFloat(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var rhr = parseFloat(document.getElementById('rhr').value);
    var runTime = parseFloat(document.getElementById('runTime').value);

    if (!age || !rhr || !runTime || !gender) {
      document.getElementById('vo2Result').innerText = "--";
      return;
    }

    var vo2 = (483 / runTime) + 3.5;
    document.getElementById('vo2Result').innerText = vo2.toFixed(1) + " ml/kg/min";
  }
</script>
