import React from "react";
import { FaPenToSquare, FaPlus, FaTrashCan } from "react-icons/fa6";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

function Despesas() {
  return (
    <main className="main-container">
      {/* Título principal */}
      <div className="main-title">
        <h3>Despesas</h3>
      </div>

      {/* Botões para cadastrar despesas, excluir ou editar */}
      <div className="Button_Despesas">
        <button className="Button-Menu">
          Adicionar
          <FaPlus />
        </button>
        <button className="Button-Menu">
          Editar
          <FaPenToSquare />
        </button>
        <button className="Button-Menu">
          Excluir
          <FaTrashCan />
        </button>
      </div>

      {/* Div com as despesas mais gerais */}
      {/* Um gráfico representativo */}
      <ResponsiveContainer>
        <ComposedChart
          width={200}
          height={100}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#AEDD2B" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#0A5483" stroke="#02416D" />
          <Bar dataKey="pv" barSize={20} fill="#AEDD2B" />
          <Line type="monotone" dataKey="uv" stroke="#02416D" />
        </ComposedChart>
      </ResponsiveContainer>
      {/* Box sobre contas */}
      <div className="despesa-box1">
        <h3>Contas a pagar em aberto</h3>
        <h1>R$ 14.987,93</h1>
      </div>
      <div className="despesa-box2">
        <h3>Contas a pagar em atraso</h3>
        <h1>R$ 1.298,24</h1>
      </div>

      {/* Div para tabela com as despesas detalhadas */}
    </main>
  );
}

export default Despesas;
