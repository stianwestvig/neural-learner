//var Perceptron = require('./perceptron');

var synaptic = require('synaptic');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;


function Perceptron(input, hidden, output) {

    // spin up some layers:
    var inputLayer = new Layer(input, 'input');
    var hiddenLayer = new Layer(hidden, 'hidden');
    var outputLayer = new Layer(output, 'output');



    //console.log(this);

    // set the layers onto the perceptron:
    this.layers = {
        input: inputLayer,
        hidden: hiddenLayer,
        output: outputLayer
    };

    this.inputs = function () {
        return this.layers.input.size;
    };

    this.outputs = function () {
        return this.layers.output.size;
    };

    this.activate = function (input) {
        // then we connect them:
        inputLayer.project(hiddenLayer);
        hiddenLayer.project(outputLayer);
    };


    /*this.layers.input = inputLayer;
    this.layers.hidden = hiddenLayer;
    this.layers.output = outputLayer;*/

    /*this.set({
     input: inputLayer,
     hidden: hiddenLayer,
     output: outputLayer
     });*/

    // extending the prototype of perceptron:
    Perceptron.prototype = new Network();
    Perceptron.prototype.constructor = Perceptron;
}



var myPerceptron = new Perceptron(2, 3, 1);
var myTrainer = new Trainer(myPerceptron);

//console.log('my perceptron: ', myPerceptron);

myTrainer.XOR();

myPerceptron.activate([0,0]);
myPerceptron.activate([1,0]);
myPerceptron.activate([0,1]);
myPerceptron.activate([1,1]);
