import { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateXOR = () => {
  const xs = [];
  const ys = [];
  for (let i = 0; i < 200; i++) {
    const x1 = Math.random();
    const x2 = Math.random();
    const y = (x1 > 0.5) !== (x2 > 0.5) ? 1 : 0;
    xs.push([x1, x2]);
    ys.push(y);
  }
  return { xs: tf.tensor2d(xs), ys: tf.tensor(ys, [200, 1]) };
};

export default function Playground() {
  const [learningRate, setLearningRate] = useState(0.1);
  const [epochs, setEpochs] = useState(20);
  const [lossData, setLossData] = useState<number[]>([]);

  const [model, setModel] = useState<tf.Sequential | null>(null);

  useEffect(() => {
    const newModel = tf.sequential();
    newModel.add(tf.layers.dense({ inputShape: [2], units: 10, activation: 'relu' }));
    newModel.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
    newModel.compile({
      optimizer: tf.train.adam(learningRate),
      loss: 'binaryCrossentropy',
      metrics: ['accuracy'],
    });
    setModel(newModel);
  }, [learningRate]);

  const trainModel = async () => {
    if (!model) return;
    const { xs, ys } = generateXOR();
    const losses: number[] = [];

    await model.fit(xs, ys, {
      epochs,
      callbacks: {
        onEpochEnd: async (epoch, logs) => {
          losses.push(logs!.loss!);
          setLossData([...losses]);
        },
      },
    });
  };

  const chartData = {
    labels: lossData.map((_, i) => i + 1),
    datasets: [
      {
        label: 'Loss per Epoch',
        data: lossData,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">🧠 Hyperparameter Playground</h1>

      <div className="mb-4">
        <label className="block mb-1">Learning Rate: {learningRate}</label>
        <input
          type="range"
          min="0.001"
          max="0.2"
          step="0.001"
          value={learningRate}
          onChange={(e) => setLearningRate(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Epochs: {epochs}</label>
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          value={epochs}
          onChange={(e) => setEpochs(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <button
        onClick={trainModel}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Train Model
      </button>

      <div className="mt-6">
        <Line data={chartData} />
      </div>
    </div>
  );
}
