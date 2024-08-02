import { Menu } from "antd";
import {
  MoneyCollectOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
  StockOutlined,
} from "@ant-design/icons";

const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? "dark" : "light"} className="menu-bar">
      {/* Menu Home */}

      <Menu.SubMenu key="subestoque" icon={<StockOutlined />} title="Estoque">
        <Menu.Item key="atualizar">Atualizar produtos</Menu.Item>
        <Menu.Item key="movimentacoes">Movimentações</Menu.Item>
        <Menu.Item key="registrar">Registrar produtos</Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        key="financeiro"
        icon={<MoneyCollectOutlined />}
        title="Financeiro"
      >
        <Menu.SubMenu key="contaspagar" title="Contas à pagar">
          <Menu.Item key="cadastro">Cadastro despesas</Menu.Item>
          <Menu.Item key="cadastro">Cadastro fornecedores</Menu.Item>
          <Menu.Item key="despesas">Despesas</Menu.Item>
          <Menu.Item key="fornecedores">Fornecedores</Menu.Item>
          <Menu.Item key="pagamentos">Pagamentos</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="contasreceber" title="Contas à receber">
          <Menu.Item key="cadastrocliente">Cadastro cliente</Menu.Item>
          <Menu.Item key="fluxo">Fluxo de caixa</Menu.Item>
          <Menu.Item key="receitas">Receitas</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="planoconta" title="Plano conta">
          <Menu.Item key="balancete">Balancete</Menu.Item>
          <Menu.Item key="dre">DRE</Menu.Item>
          <Menu.Item key="razao">Razão</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="impostos" title="Impostos">
          <Menu.Item key="cadimpostos">Cadastrar impostos</Menu.Item>
          <Menu.Item key="cofins">Cofins</Menu.Item>
          <Menu.Item key="csll">Csll</Menu.Item>
          <Menu.Item key="icms">Icms</Menu.Item>
          <Menu.Item key="ipi">Ipi</Menu.Item>
          <Menu.Item key="irpj">Irpj</Menu.Item>
          <Menu.Item key="iss">Iss</Menu.Item>
          <Menu.Item key="pis">Pis</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      {/* Menu Progresso */}

      <Menu.SubMenu key="vendas" icon={<AreaChartOutlined />} title="Vendas">
        <Menu.SubMenu key="notafiscal" title="Nota fiscal">
          <Menu.Item key="cadastro">Cadastro</Menu.Item>
          <Menu.Item key="emissao">Emissão nf</Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="pedidos" icon={<PayCircleOutlined />}>
          Pedidos
        </Menu.Item>

        <Menu.Item key="historico" icon={<PayCircleOutlined />}>
          Histórico vendas
        </Menu.Item>

        <Menu.Item key="preco" icon={<PayCircleOutlined />}>
          Preço final
        </Menu.Item>
      </Menu.SubMenu>

      {/* Menu Payment */}

      {/* Menu Setting */}
      <Menu.Item key="setting" icon={<SettingOutlined />}>
        Setting
      </Menu.Item>
    </Menu>
  );
};
export default MenuList;
