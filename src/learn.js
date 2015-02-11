var synaptic = require('synaptic');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

var myPerceptron = new Architect.Perceptron(2,3,1);
var myTrainer = new Trainer(myPerceptron);

console.log('my perceptron: ', myPerceptron);

myTrainer.XOR();

myPerceptron.activate([0,0]);
myPerceptron.activate([1,0]);
myPerceptron.activate([0,1]);
myPerceptron.activate([1,1]);