<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sprint Speed / Acceleration Calculator</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f9f9f9;
      margin: 0;
      padding: 20px;
      color: #141414;
    }

    .sprint-container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      border-radius: 20px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.1);
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
    }

    .sprint-left, .sprint-right {
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

    input {
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
      .sprint-left, .sprint-right {
        flex: 1 1 100%;
      }
    }
  </style>
</head>
<body>
  <div class="sprint-container">
    <div class="sprint-left">
      <h1>Sprint Speed / Acceleration Calculator</h1>
      <p>Enter your timed sprints (in seconds) for each distance. The calculator will provide your average speed and a simple acceleration curve.</p>
      <input type="number" id="sprint10" placeholder="10m Time (seconds)">
      <input type="number" id="sprint20" placeholder="20m Time (seconds)">
      <input type="number" id="sprint40" placeholder="40m Time (seconds)">
      <button id="calculateButton">Calculate Speed & Acceleration</button>
    </div>

    <div class="sprint-right">
      <div class="result-wrapper">
        <div>Results:</div>
        <div class="result" id="sprintResults">--</div>
        <div class="divider"></div>
        <div id="accelNotes">Acceleration values represent average speeds between segments (0–10m, 10–20m, 20–40m).</div>
      </div>
    </div>
  </div>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("calculateButton").addEventListener("click", function () {
        const t10 = parseFloat(document.getElementById('sprint10').value);
        const t20 = parseFloat(document.getElementById('sprint20').value);
        const t40 = parseFloat(document.getElementById('sprint40').value);

        if (!isNaN(t10) && !isNaN(t20) && !isNaN(t40) && t10 > 0 && t20 > t10 && t40 > t20) {
          const v10 = 10 / t10;
          const v20 = 10 / (t20 - t10);
          const v40 = 20 / (t40 - t20);

          const resultText = `
            0–10m: ${v10.toFixed(2)} m/s\n
            10–20m: ${v20.toFixed(2)} m/s\n
            20–40m: ${v40.toFixed(2)} m/s
          `;

          document.getElementById('sprintResults').innerText = resultText;
        } else {
          document.getElementById('sprintResults').innerText = 'Invalid input';
        }
      });
    });
  </script>
</body>
</html>
