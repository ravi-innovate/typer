

 // <canvas id="customBarChart" width="450" height="300"></canvas>


    function make_graph(data) {

      // Get the canvas element and its context
      var canvas = document.getElementById('customBarChart');
      var ctx = canvas.getContext('2d');

      // Set up graph properties
      var graph = {
        width: canvas.width - 50,
        height: canvas.height - 50,
        margin: 30,
        data: data
      };

      // Calculate scales
      var xScale = 25; // Fixed bar width
      var yScale = graph.height / 120;

      // Draw X and Y axes
      ctx.beginPath();
      ctx.moveTo(graph.margin, graph.height + graph.margin);
      ctx.lineTo(graph.width + graph.margin, graph.height + graph.margin);
      ctx.moveTo(graph.margin, graph.margin);
      ctx.lineTo(graph.margin, graph.height + graph.margin);
      ctx.strokeStyle = 'grey';
      ctx.stroke();

      // Draw horizontal lines for speed categories
      drawHorizontalLine(ctx, graph.margin, graph.height - 15 * yScale + graph.margin, graph.width + graph.margin, 'Beginner');
      drawHorizontalLine(ctx, graph.margin, graph.height - 30 * yScale + graph.margin, graph.width + graph.margin, 'Intermediate');
      drawHorizontalLine(ctx, graph.margin, graph.height - 60 * yScale + graph.margin, graph.width + graph.margin, 'Professional');
      drawHorizontalLine(ctx, graph.margin, graph.height - 100 * yScale + graph.margin, graph.width + graph.margin, 'Expert');

      // Draw bars based on data with a little space
      ctx.fillStyle = 'grey';
      for (var i = 0; i < data.length; i++) {
        var x = i * (xScale + 5) + graph.margin; // Add space to x-coordinate
        var y = graph.height - data[i] * yScale + graph.margin;
        var barHeight = data[i] * yScale;
        ctx.fillRect(x+5, y, xScale, barHeight);
      }

      // Draw X-axis labels
      ctx.fillStyle = 'grey';
      ctx.textAlign = 'center';
      for (var i = 0; i < data.length; i++) {
        var xLabel = (i+1).toString();
        var x = i * (xScale + 5) + graph.margin + xScale / 2;
        ctx.fillText(xLabel, (x), graph.height + graph.margin + 15);
      }

      // Draw Y-axis labels
      ctx.textAlign = 'right';
      for (var i = 0; i <= 120; i += 15) {
        var yLabel = i.toString();
        var y = graph.height - i * yScale + graph.margin;
        ctx.fillText(yLabel, graph.margin - 5, y + 5);
      }

      // Function to draw a horizontal line and label
      function drawHorizontalLine(context, startX, startY, endX, label) {
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX-70, startY);
        context.strokeStyle = '#e74c3c'; // Red color for the lines
        context.stroke();

        // Draw label
        context.fillStyle = '#e74c3c';
        context.textAlign = 'left';
        context.font = '14px Arial'
        context.fillText(label, endX - 65, startY);
      }
    }
 