function updateGraph() {
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);
    const c = parseFloat(document.getElementById('inputC').value);

    drawGraph(a, b, c);
}

function drawGraph(a, b, c) {
    const plot = document.getElementById('plot');
    plot.innerHTML = '';

    const points = [];

    for (let x = -10; x <= 10; x += 0.1) {
        const y = a * x * x + b * x + c;
        points.push({ x, y });
    }

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", points.map(point => `L${point.x * 10 + 150} ${-point.y * 10 + 150}`).join(" "));
    path.setAttribute("stroke", "blue");
    path.setAttribute("fill", "none");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.appendChild(path);

    plot.appendChild(svg);
}

// Initial graph on page load
updateGraph();
