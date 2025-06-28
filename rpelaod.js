<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RPE / Load Calculator</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f9f9f9;
      margin: 0;
      padding: 20px;
      color: #141414;
    }

    .rpe-container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      border-radius: 20px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.1);
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
    }

    .rpe-left, .rpe-right {
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

    input[type="number"], select {
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

    .rpe-result-wrapper {
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

    .rpe-result {
      font-size: 40px;
      color: #EF5607;
      font-weight: 700;
      margin-top: 16px;
    }

    @media (max-width: 800px) {
      .rpe-left, .rpe-right {
        flex: 1 1 100%;
      }
    }
  </style>
</head>
<body>
  <div class="rpe-container">
    <!-- Left Input Area -->
    <div class="rpe-left">
      <h1>RPE / Load Calculator</h1>
      <p>Estimate the load you should lift based on your RPE (Rate of Perceived Exertion) and reps.</p>
      <input type="number" id="oneRmInput" placeholder="Enter 1RM (lbs)">
      <select id="rpeSelect">
        <option value="">Select RPE</option>
        <option value="10">10</option>
        <option value="9.5">9.5</option>
        <option value="9">9</option>
        <option value="8.5">8.5</option>
        <option value="8">8</option>
        <option value="7.5">7.5</option>
        <option value="7">7</option>
      </select>
      <input type="number" id="repsInput" placeholder="Enter number of reps">
      <button onclick="calculateLoad()">Calculate Load</button>
    </div>

    <!-- Right Output Area -->
    <div class="rpe-right">
      <div class="rpe-result-wrapper">
        <div>Estimated Load:</div>
        <div class="rpe-result" id="rpeOutput">--</div>
      </div>
    </div>
  </div>

  <script>
    // Sample RPE chart for estimating %1RM (simplified)
    const rpeChart = {
      10:  {1: 1.00, 2: 0.96, 3: 0.92, 4: 0.89, 5: 0.86, 6: 0.83, 7: 0.80, 8: 0.77, 9: 0.74, 10: 0.71},
      9.5: {1: 0.97, 2: 0.94, 3: 0.91, 4: 0.88, 5: 0.85, 6: 0.82, 7: 0.79, 8: 0.76, 9: 0.73, 10: 0.70},
      9:   {1: 0.94, 2: 0.91, 3: 0.88, 4: 0.85, 5: 0.82, 6: 0.79, 7: 0.76, 8: 0.73, 9: 0.70, 10: 0.67},
      8.5: {1: 0.91, 2: 0.88, 3: 0.85, 4: 0.82, 5: 0.79, 6: 0.76, 7: 0.73, 8: 0.70, 9: 0.67, 10: 0.64},
      8:   {1: 0.88, 2: 0.85, 3: 0.82, 4: 0.79, 5: 0.76, 6: 0.73, 7: 0.70, 8: 0.67, 9: 0.64, 10: 0.61},
      7.5: {1: 0.85, 2: 0.82, 3: 0.79, 4: 0.76, 5: 0.73, 6: 0.70, 7: 0.67, 8: 0.64, 9: 0.61, 10: 0.58},
      7:   {1: 0.82, 2: 0.79, 3: 0.76, 4: 0.73, 5: 0.70, 6: 0.67, 7: 0.64, 8: 0.61, 9: 0.58, 10: 0.55}
    };

    function calculateLoad() {
      const oneRM = parseFloat(document.getElementById('oneRmInput').value);
      const rpe = document.getElementById('rpeSelect').value;
      const reps = parseInt(document.getElementById('repsInput').value);

      if (!isNaN(oneRM) && rpe && !isNaN(reps) && rpeChart[rpe] && rpeChart[rpe][reps]) {
        const percentage = rpeChart[rpe][reps];
        const estimatedLoad = oneRM * percentage;
        document.getElementById('rpeOutput').innerText = estimatedLoad.toFixed(2) + ' lbs';
      } else {
        document.getElementById('rpeOutput').innerText = '--';
      }
    }
  </script>
</body>
</html>
