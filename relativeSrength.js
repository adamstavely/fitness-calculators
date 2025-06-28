<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Relative Strength Calculator</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f9f9f9;
      margin: 0;
      padding: 20px;
      color: #141414;
    }

    .rs-container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      border-radius: 20px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.1);
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
    }

    .rs-left, .rs-right {
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

    .rs-result-wrapper {
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

    .rs-result {
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
      .rs-left, .rs-right {
        flex: 1 1 100%;
      }
    }
  </style>
</head>
<body>
  <div class="rs-container">
    <!-- Left Input Area -->
    <div class="rs-left">
      <h1>Relative Strength</h1>
      <p>Relative Strength is your 1RM divided by your body weight. It helps gauge how strong you are for your size. Higher values reflect better relative strength performance.</p>
      <input type="number" id="maxInput" placeholder="Enter 1RM (lbs)">
      <input type="number" id="bwInput" placeholder="Enter bodyweight (lbs)">
      <button onclick="calculateRS()">Calculate</button>
    </div>

    <!-- Right Output Area -->
    <div class="rs-right">
      <div class="rs-result-wrapper">
        <div>Your Relative Strength is:</div>
        <div class="rs-result" id="rsOutput">--</div>
        <div class="divider"></div>
        <div>How to Interpret Relative Strength:</div>
        <table>
          <tr><td>Below 1.0</td><td>Needs Improvement</td></tr>
          <tr><td>1.0 - 1.5</td><td>Average</td></tr>
          <tr><td>1.5 - 2.0</td><td>Strong</td></tr>
          <tr><td>2.0+</td><td>Elite</td></tr>
        </table>
      </div>
    </div>
  </div>

  <script>
    function calculateRS() {
      const max = parseFloat(document.getElementById('maxInput').value);
      const bw = parseFloat(document.getElementById('bwInput').value);

      if (!isNaN(max) && !isNaN(bw) && bw > 0) {
        const rs = max / bw;
        document.getElementById('rsOutput').innerText = rs.toFixed(2);
      } else {
        document.getElementById('rsOutput').innerText = '--';
      }
    }
  </script>
</body>
</html>
