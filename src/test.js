var synaptic = require('synaptic');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Achitect = synaptic.Architect;


function Perceptron(input, hidden, output) {

    // spin up some layers:
    var inputLayer = new Layer(input);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(output);

    // then we connect them:
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    // set the layers onto the perceptron:
    this.set({
        input: inputLayer,
        hidden: hiddenLayer,
        output: outputLayer
    });

    // extending the prototype of perceptron:
    Perceptron.prototype = new Network();
    Perceptron.prototype.constructor = Perceptron();
}

var myPerceptron = new Perceptron(2, 3, 1);
var myTrainer = new Trainer(myPerceptron);

myTrainer.XOR();

myPerceptron.activate([0,0]);
myPerceptron.activate([1,0]);
myPerceptron.activate([0,1]);
myPerceptron.activate([1,1]);
