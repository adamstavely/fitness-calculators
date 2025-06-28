<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IMTP %1RM Breakdown</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f9f9f9;
      margin: 0;
      padding: 20px;
      color: #141414;
    }

    .imtp-container {
      max-width: 1100px;
      margin: 0 auto;
      background: white;
      border-radius: 20px;
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
    }

    .imtp-left, .imtp-right {
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

    .imtp-result-wrapper {
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

    .imtp-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    .imtp-table th, .imtp-table td {
      padding: 10px;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }

    .imtp-table th {
      background-color: #EF5607;
      color: white;
    }

    .imtp-output-label {
      margin-top: 0;
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: 600;
      color: #141414;
    }

    @media (max-width: 800px) {
      .imtp-left, .imtp-right {
        flex: 1 1 100%;
      }
    }
  </style>
</head>
<body>
  <div class="imtp-container">
    <div class="imtp-left">
      <h1>IMTP %1RM Breakdown</h1>
      <label class="imtp-output-label" for="imtpInput">Enter your IMTP value (lbs):</label>
      <input type="number" id="imtpInput" placeholder="Enter IMTP value in pounds" />
      <button onclick="generateIMTPTable()">Generate Breakdown</button>
    </div>
    <div class="imtp-right">
      <div class="imtp-result-wrapper">
        <div class="imtp-output-label">Estimated Loads by Reps (%1RM)</div>
        <table class="imtp-table" id="imtpTable">
          <thead>
            <tr><th>Reps</th><th>Estimated %1RM</th><th>Estimated Load</th></tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>

  <script>
    function generateIMTPTable() {
      const imtp = parseFloat(document.getElementById("imtpInput").value);
      const tableBody = document.querySelector("#imtpTable tbody");
      tableBody.innerHTML = "";

      if (isNaN(imtp) || imtp <= 0) {
        tableBody.innerHTML = '<tr><td colspan="3">Please enter a valid IMTP value.</td></tr>';
        return;
      }

      for (let reps = 1; reps <= 15; reps++) {
        let percent = Math.max(100 - (reps - 1) * 2.5, 0);
        let estimatedLoad = (imtp * (percent / 100)).toFixed(1);

        let row = `<tr><td>${reps}</td><td>${percent.toFixed(1)}%</td><td>${estimatedLoad} lbs</td></tr>`;
        tableBody.innerHTML += row;
      }
    }
  </script>
</body>
</html>
