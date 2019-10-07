var myGauge = Gauge(document.getElementById("gauge-demo"),{
    dialRadius: 40,
    dialStartAngle: 135,
    dialEndAngle: 45,
    value: 70,
    max: 100,
    min: 0,
    valueDialClass: "value",
    valueClass: "value-text",
    dialClass: "dial",
    gaugeClass: "gauge",
    showValue: true,
    gaugeColor: null,
    label: function(val) {return Math.round(val);} // returns a string label that will be rendered in the center
});