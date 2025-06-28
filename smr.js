<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Strength-to-Mass Ratio Calculator</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f9f9f9;
      margin: 0;
      padding: 20px;
      color: #141414;
    }

    .smr-container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      border-radius: 20px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.1);
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
    }

    .smr-left, .smr-right {
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

    input[type="number"] {
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

    .smr-result-wrapper {
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

    .smr-result {
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

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th, td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    @media (max-width: 800px) {
      .smr-left, .smr-right {
        flex: 1 1 100%;
      }
    }
  </style>
</head>
<body>
  <div class="smr-container">
    <!-- Left Input Area -->
    <div class="smr-left">
      <h1>Strength-to-Mass Ratio</h1>
      <p>Your Strength-to-mass ratio (SMR) is a measure of how much force a person can exert relative to their mass. The higher the number the better. A higher number indicates a stronger more injury-resistant body.</p>
      <input type="number" id="imtpInput" placeholder="Enter IMTP in lbs">
      <input type="number" id="weightInput" placeholder="Enter bodyweight in lbs">
      <button onclick="calculateSMR()">Calculate SMR</button>
    </div>

    <!-- Right Output Area -->
    <div class="smr-right">
      <div class="smr-result-wrapper">
        <div>Your Strength-to-Mass Ratio is:</div>
        <div class="smr-result" id="smrOutput">--</div>
        <div class="divider"></div>
        <div>How to Interpret Your SMR:</div>
        <table>
          <tr><td>< 1</td><td>Poor, needs improvement</td></tr>
          <tr><td>1</td><td>Average</td></tr>
          <tr><td>1.5</td><td>Good</td></tr>
          <tr><td>2 &gt;</td><td>Athletic</td></tr>
        </table>
      </div>
    </div>
  </div>

  <script>
    function calculateSMR() {
      const imtp = parseFloat(document.getElementById('imtpInput').value);
      const weight = parseFloat(document.getElementById('weightInput').value);

      if (!isNaN(imtp) && !isNaN(weight) && weight > 0) {
        const smr = imtp / weight;
        document.getElementById('smrOutput').innerText = smr.toFixed(2);
      } else {
        document.getElementById('smrOutput').innerText = '--';
      }
    }
  </script>
</body>
</html>
