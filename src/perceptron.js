var synaptic = require('synaptic');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Achitect = synaptic.Architect;


module.exports = function (input, hidden, output) {

    // spin up some layers:
    var inputLayer = new Layer(input);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(output);

    // then we connect them:
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    // set the layers onto the perceptron:
    this.layers = {
        input: inputLayer,
        hidden: hiddenLayer,
        output: outputLayer
    };

    /*this.set({
        input: inputLayer,
        hidden: hiddenLayer,
        output: outputLayer
    });*/

    // extending the prototype of perceptron:
    Perceptron.prototype = new Network();
    Perceptron.prototype.constructor = Perceptron();
};
