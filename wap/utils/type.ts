// Generated by https://quicktype.io

export interface Status {
  sucesso: boolean;
}
export interface WapProductsShowcasePage {
  vitrine: Vitrine;
  produtos: WapProduto[];
}

export interface Vitrine {
  id: number;
  nivel: string;
  titulo: string;
  tagTitulo: string;
}

export interface WapProductsListPage {
  estrutura: Estrutura;
  conteudo: Conteudo;
  info: Info;
}
export interface WapProductDatailsPage {
  estrutura: Estrutura;
  conteudo: WapProductDatiled;
  info: Info;
}

export interface Conteudo {
  busca: Busca;
  layoutPersonalizado: LayoutPersonalizado;
  produtos: WapProduto[];
  detalhes: Detalhes;
}

export interface Busca {
  texto: string;
  sugestao?: unknown[];
}

export interface Detalhes {
  categorias: Categorias;
  marcas: MarcaElement[];
  filtros: SiteElement[];
  filtrosPreco: FiltrosPreco[];
  filtrosDescontoPrecoPor: FiltroDescontoPrecoPor;
  selos: Selo[];
  atributos: Atributo[];
  ordenacao: Ordenacao[];
}

export interface Atributo {
  id: number;
  nome: string;
  tipo: string;
  valores: AtributoValores[];
  dominio?: string;
}

export interface AtributoValores {
  id: number;
  label: string;
  imagem: string;
  imagemOriginal: string;
  ordem: number;
  ativo: boolean;
  rota: PurpleRota;
  url: string;
}

export interface PurpleRota {
  name: string;
  params?: unknown[];
  query: Query;
}

export interface Categorias {
  niveisAnteriores?: unknown[];
  atual?: unknown[];
  irmas?: unknown[];
  filhas?: unknown[];
}

export interface SiteElement {
  id: number;
  nome: string;
  tipo: string;
  valores: FiltroValores[];
  dominio?: string;
}

export interface FiltroValores {
  id: number;
  label: string;
  imagem: string;
  imagemOriginal: string;
  ordem: number;
  ativo: boolean;
  rota: FluffyRota;
  url: string;
}

export interface FluffyRota {
  name: string;
  params?: unknown[];
  query: Query;
}

export interface FiltroDescontoPrecoPor {
  [s: string]: FiltroDescontoPrecoPorItem;
}

export interface FiltroDescontoPrecoPorItem {
  de: number;
  ate: number;
  ativo: boolean;
  rota: The50_Rota;
  url: string;
}

export interface The50_Rota {
  name: string;
  params?: unknown[];
  query: Query;
}

export interface FiltrosPreco {
  de: number;
  ate: number;
  ativo: boolean;
  rota: FiltrosPrecoRota;
  url: string;
}

export interface FiltrosPrecoRota {
  name: string;
  params?: unknown[];
  query: Query;
}

export interface MarcaElement {
  id: number;
  nome: string;
  imagem: string;
  imagemOriginal: string;
  ativo: boolean;
  rota: TentacledRota;
  url: string;
}

export interface TentacledRota {
  name: string;
  params?: unknown[];
  query: Query;
}

export interface Ordenacao {
  label: string;
  title: string;
  atual: boolean;
  rota: OrdenacaoRota;
  url: string;
}

export interface OrdenacaoRota {
  name: string;
  params?: unknown[];
  query: Query;
}

export interface LayoutPersonalizado {
  layout: string;
  codigoCss: string;
}

export interface WapProduto {
  id: number;
  sku: string;
  nome: string;
  estoque: number;
  estoqueMarketplace: number;
  status: "disponivel" | "indisponivel" | "sobConsulta";
  descricoes: Record<string, string>;
  marca: ProdutoMarca;
  avaliacao: Avaliacao;
  precos: Precos;
  pontos?: Pontos[];
  atributos?: unknown[];
  listaPresente?: unknown[];
  personalizacoes: Personalizacao[];
  predefinicoes?: unknown[];
  conjunto?: unknown[];
  carrinho?: unknown[];
  rota: ProdutoRota;
  url: string;
  sites: SiteElement[];
  canaisVenda: Atributo[];
  caracteristicas?: Caracteristica[];
  filtros: PurpleFiltro[];
  selos: Selo[];
  midias: Midias;
  instancia: Instancia;
}

export interface Pontos {
  quantidade: number;
  valorEmMoeda: number;
  regra: RegraPontos;
}

export interface RegraPontos {
  id: number;
  titulo: string;
  valorBase: number;
  valorMinimo: number;
  dataInicio: string;
  dataFim: string;
  fimIndeterminado: string;
}

export interface Personalizacao {
  id: number;
  nome: string;
  descricao: string;
  valorMinimo: number;
  valorMaximo: number;
  tipo: "select" | "checkbox" | "text" | "upload";
  obrigatorio: "s" | "n";
  limitarValores: "s" | "n";
  preco: number;
  multiplicarPreco: "s" | "n";
  valores: Array<{
    id: number;
    valor: number;
    preco: number;
    precoDefault: "s" | "n";
    segmentacao?: unknown[];
    selecionado: boolean;
    quantidade: number;
  }>;
  configuracaoUpload: Array<{
    id: number;
    arquivosValidos: string;
    tamanho: string;
    largura: number;
    altura: number;
  }>;
}

export interface Avaliacao {
  media: number;
  quantidade: number;
  avaliacoes?: AvaliacaoItem[];
}

export interface PurpleFiltro {
  idFiltro: number;
  idValor: number;
  nome: string;
  label: string;
  imagem: string;
  imagemOriginal: string;
}

export interface Instancia {
  ordemIndisponivel: string;
  rankBuscaFullText: string;
  idLandingPage: number;
  status: string;
  hashPromocional: null;
  urlPromocional: string;
}

export interface ProdutoMarca {
  id: number;
  nome: string;
  imagem: string;
  imagemOriginal: string;
  rota: StickyRota;
  url: string;

  ativo: boolean;
}

export interface StickyRota {
  name: string;
  route: string;
  path: string;
  params: PurpleParams;
  query: Query[];
}

export interface PurpleParams {
  marca: string;
}

export interface Midias {
  imagens: Imagen[];
}

export interface Imagen {
  id: number;
  idAtributoValor: number;
  descricao: string;
  label: string;
  arquivos: Arquivos;
  arquivosOriginais: Arquivos;
}

export interface Arquivos {
  zoom: string;
  big: string;
  medium: string;
  small: string;
}

export interface Precos {
  de: number;
  por: number;
  vista: number;
  descontoVista: number;
  editavel: boolean;
  parcelamento: Parcelamento[];
  regrasAtacado?: unknown[];
}

export interface Parcelamento {
  parcelas: number;
  valorParcela: number;
  valorTotal: number;
  taxa: number;
  exibirTaxa: boolean;
}

export interface ProdutoRota {
  name: string;
  route: string;
  path: string;
  params: FluffyParams;
  query: Query[];
}

export interface FluffyParams {
  produto: string;
}

export interface Estrutura {
  nivel: string;
  seo: SEO;
  breadcrumb: Breadcrumb[];
  dadosEstruturados?: unknown[];
}

export interface Breadcrumb {
  label: string;
  atual: boolean;
  rota: BreadcrumbRota;
  url: string;
}

export interface Filtros {
  busca: string;
}

export interface SEO {
  title: string;
  description: string;
  titleSocial: string;
  descriptionSocial: string;
  keywords: string;
  canonical: string;
  indexar: boolean;
}

export interface Info {
  filtros: Filtros;
  prev: string;
  self: string;
  next: string;
  offset: number;
  limit: number;
  exibindo: number;
  total: number;
}

// Generated by https://quicktype.io

export interface WapProductDatails {
  estrutura: Estrutura;
  conteudo: WapProductDatiled;
  info: Info;
}

export interface WapProductDatiled {
  id: number;
  sku: string;
  ean: string;
  mpn: string;
  nome: string;
  tipo: string;
  estoque: number;
  estoqueMarketplace: number;
  prevenda?: Prevenda;
  status: "disponivel" | "indisponivel" | "sobConsulta";
  layoutPersonalizado: LayoutPersonalizado;
  descricoes: Descricoes;
  video: Video;
  avaliacao: Avaliacao;
  marca: Marca;
  categoria: Categoria;
  precos: Precos;
  AgendamentoPreco: AgendamentoPreco;
  pontos: Pontos;
  atributos: Atributos;
  listaPresente?: unknown[];
  personalizacoes: Record<string, unknown>;
  predefinicoes?: unknown[];
  conjunto: Record<string, unknown>;
  assinatura: boolean;
  carrinho: Carrinho;
  rota: ValorRota;
  url: string;
  sites: CanaisVenda[];
  canaisVenda: CanaisVenda[];
  caracteristicas?: Caracteristica[];
  filtros: Filtro[];
  selos: Selo[];
  midias: ConteudoMidias;
  combinacoes?: Combinacoes[];
  perguntas: Pergunta[];
  produtosLista?: unknown[];
}

export interface Prevenda {
  dataEncerramento: string;
}

export interface Combinacoes {
  id: number;
  tipoDesconto: "valor" | "porcentagem";
  desconto: number;
  produto: WapProduto;
}

export interface Caracteristica {
  nome: string;
  visivelSite: boolean;
  itens: Array<{
    id: number;
    label: string;
    valor: string;
  }>;
}

export interface Pergunta {
  id: number;
  nome: string;
  email: string;
  contato: string;
  pergunta: string;
  respostas: Resposta[];
  data: string;
}

export interface Resposta {
  id: number;
  nome: string;
  email: string;
  contato: string;
  administrador: boolean;
  resposta: string;
  data: string;
}

export interface Video {
  plataforma: "youtube" | "vimeo";
  url: string;
}

export interface Selo {
  id: number;
  nome: string;
  tipo: "texto" | "imagem";
  label: string;
  imagem: string;
  imagemOriginal: string;
  proporcaoDetalheProduto: number;
  proporcaoVitrineProduto: number;
  cores: {
    texto: string;
    selo: string;
    posicao: {
      x: "left" | "center" | "right";
      y: "top" | "middle" | "bottom";
    };
  };
}

export interface Atributos {
  unico: Unico;
  simples: Simples;
}

export interface Unico {
  id: string;
  nome: string;
  tipo: "texto" | "imagem";
  valores: ValorUnico[];
}

export interface ValorUnico {
  idAtributoValor: number;
  label: string;
  imagem: string;
  imagemOriginal: string;
  produto: Produto;
  rota: ValorRota;
  url: string;
  selecionado: boolean;
}
// Generated by https://quicktype.io

export interface Simples {
  id: string;
  nome: string;
  tipo: "texto" | "imagem";
  valores: ValorSimples[];
}

export interface ValorSimples {
  idAtributoValor: number;
  sku: string;
  label: string;
  imagem: string;
  imagemOriginal: string;
  estoque: number;
  estoqueMarketplace: number;
  descontoAdicional: number;
  precos: Precos;
  pontos: Pontos;
  AgendamentoPreco?: AgendamentoPreco;
  carrinho: Carrinho;
  selecionado: boolean;
  listaPresente?: number[];
}

export interface AgendamentoPreco {
  aplicado?: AgendamentoPrecoItem;
  geral?: AgendamentoPrecoItem[];
}

export interface AgendamentoPrecoItem {
  nome: string;
  precoDe: number;
  precoPor: number;
  descontoVista: number;
  dataInicial: string;
  dataFinal: string;
}

export interface Carrinho {
  hash: string;
  url: string;
  tipo: string;
  itens: Item[];
}

export interface Item {
  idProduto: string;
  idAtributoSimples: string;
  idUnidadeVenda: string;
  idArmazem: string;
  quantidade: string;
  adicional: string;
  parametros: string;
}

export interface Precos {
  de: number;
  por: number;
  vista: number;
  descontoVista: number;
  parcelamento: Parcelamento[];
  regrasAtacado?: unknown[];
}

export interface Parcelamento {
  parcelas: number;
  valorParcela: number;
  valorTotal: number;
  taxa: number;
  exibirTaxa: boolean;
}

export interface Produto {
  id: number;
  estoque: number;
  estoqueMarketplace: number;
  status: "disponivel" | "indisponivel" | "sobConsulta";
  midias: ProdutoMidias;
  atributoSimples: Record<string, unknown>;
}

export interface ProdutoMidias {
  imagens: Imagen[];
}

export interface Imagen {
  id: number;
  idAtributoValor: number;
  descricao: string;
  label: string;
  arquivos: Arquivos;
  arquivosOriginais: Arquivos;
}

export interface Arquivos {
  zoom: string;
  big: string;
  medium: string;
  small: string;
}

export interface ValorRota {
  name: string;
  route: string;
  path: string;
  params: PurpleParams;
  query: Query[];
}

export interface PurpleParams {
  produto: string;
}

export interface Avaliacao {
  media: number;
  quantidade: number;
  avaliacoes?: AvaliacaoItem[];
}

export interface AvaliacaoItem {
  id: number;
  nome: string;
  email: string;
  nota: number;
  comentario: string;
  recomenda: boolean;
  data: string;
  produto: {
    id: number;
    nome: string;
  };
  anexos?: unknown[];
}

export interface CanaisVenda {
  id: number;
  nome: string;
  tipo: string;
  dominio: string;
}

export interface Carrinho {
  hash: string;
  url: string;
  tipo: string;
  itens: Item[];
}

export interface Item {
  idProduto: string;
  idAtributoSimples: string;
  idUnidadeVenda: string;
  idArmazem: string;
  quantidade: string;
  adicional: string;
  parametros: string;
}

export interface Categoria {
  id: number;
  nome: string;
  nivel: number;
  taxonomia: Taxonomia[];
}

export interface Taxonomia {
  id: number;
  nome: string;
}

export interface Descricoes {
  curta: string;
  longa: string;
  simples: string;
  opcional1: string;
  opcional2: string;
  opcional3: string;
  tabelaMedida: string;
}

export interface Filtro {
  idFiltro: number;
  idValor: number;
  nome: string;
  label: string;
  imagem: string;
  imagemOriginal: string;
}

export interface LayoutPersonalizado {
  layout: string;
  layout2: string;
  layout3: string;
  codigoCss: string;
  codigoJs: string;
}

export interface Marca {
  id: number;
  nome: string;
  imagem: string;
  imagemOriginal: string;
  rota: MarcaRota;
  url: string;
  ativo: boolean;
}

export interface MarcaRota {
  name: string;
  route: string;
  path: string;
  params: FluffyParams;
  query: Query[];
}

export interface FluffyParams {
  marca: string;
}

export interface ConteudoMidias {
  imagens: Imagen[];
  imagensFull?: unknown[];
  imagensConjunto?: Imagen[];
  imagensRotativas?: FileObject[];
  arquivos: FileObject[];
  manuais: FileObject[];
}

export interface FileObject {
  id: number;
  idAtributoValor: number;
  descricao: string;
  label: string;
  arquivo: string;
}

export interface Regra {
  id: number;
  titulo: string;
  valorBase: number;
  valorMinimo: number;
  dataInicio: string;
  dataFim: string;
  fimIndeterminado: string;
}

export interface Precos {
  de: number;
  por: number;
  vista: number;
  descontoVista: number;
  editavel: boolean;
  parcelamento: Parcelamento[];
  regrasAtacado?: unknown[];
}

export interface Parcelamento {
  parcelas: number;
  valorParcela: number;
  valorTotal: number;
  taxa: number;
  exibirTaxa: boolean;
}

export interface Breadcrumb {
  label: string;
  atual: boolean;
  rota: BreadcrumbRota;
  url: string;
}

export interface BreadcrumbRota {
  name: string;
  params: Record<string, string>[] | ParamsParams;
  query: Query[];
  route?: string;
  path?: string;
}

export interface ParamsParams {
  categoriaNivel2?: string;
  categoriaNivel3?: string;
  produto?: string;
}

export interface SEO {
  title: string;
  description: string;
  titleSocial: string;
  descriptionSocial: string;
  openGraphUrlImagem: string;
  twitterUrlImagem: string;
  keywords: string;
  canonical: string;
  indexar: boolean;
}

export interface Query {
  atributo?: string;
  filtro?: string;
  descontoPrecoPor?: string;
  order?: string;
  marca?: string;
  busca?: string;
  preco?: string;
  predefination?: string;
  predefinationType?: string;
}

export interface Cart {
  quantidadeItens: number;
  quantidadeTotal: number;
  quantidadePontos: number;
  mensagens?: CartMessage[];
  itens: CartItem[];
  subtotal: Subtotal;
}

export interface CartMessage {
  tipo: string;
  mensagem: string;
}

export interface CartItem {
  nome: string;
  sku: string;
  tipo: "produto" | "lista";
  conjunto: boolean;
  quantidade: number;
  precos: CartPrecos;
  imagem: string;
  atributos: CartItemAtributos;
  upsell?: Upsell;
  hash: Hash;
  personalizacao?: unknown[];
}

export interface Upsell {
  id: number;
  localOfeta:
    | "carrinho"
    | "carrinhoLateral"
    | "pagamento"
    | "pagamentoBox"
    | "endereco";
  quantidadeMaxima: number;
}

export interface CartItemAtributos {
  unico: CartItemAtributosAtributo;
  simples: CartItemAtributosAtributo;
}

export interface CartItemAtributosAtributo {
  atributo: Atributo;
  atributoValor: AtributoValor;
}

export interface Atributo {
  id: number;
  label: string;
  tipo: string;
}

export interface AtributoValor {
  id: number;
  label: string;
  imagem: string;
}

export interface Hash {
  idProduto: number;
  idAtributoSimples: number;
  idUnidadeVenda: number;
  idArmazem: number;
  quantidade: number;
  adicional: string;
}

export interface CartPrecos {
  precoDe: number;
  precoPor: number;
  descontoVista: number;
  total: number;
  tipo: string;
}

export interface Subtotal {
  valor: number;
  descontoVista: DescontoVista;
  parcelamento: Parcelamento[];
}

export interface DescontoVista {
  valor: number;
  porcentagem: number;
  desconto: number;
}

export interface Parcelamento {
  parcelas: number;
  valorParcela: number;
  valorTotal: number;
  taxa: number;
  exibirTaxa: boolean;
}

// Generated by https://quicktype.io

export interface User {
  id: number;
  nomeRazao: string;
  nomeFantasia: string;
  celular: string;
  telefone: string;
  email: string;
  pessoa: string;
  sexo: "m" | "f" | "o" | "i";
  nascimento: string;
  revendedor: boolean;
  logado: boolean;
  loginFacilitado: boolean;
  primeiraCompra: boolean;
  optin: boolean;
  ativo: boolean;
  representantes: Representante[];
  vendaInterna: VendaInterna;
  endereco: Endereco;
  pontos: UserPontos;
  userHash: UserHash;
  perfilMultiplo?: perfilMultiploItem[];
  listaPresente?: {
    tipoAcesso: "presenteado" | "visitante";
  };
}

export interface perfilMultiploItem {
  id: number;
  nomeRazao: string;
  nomeFantasia: string;
  email: string;
  cpfCnpj: string;
}

export interface UserPontos {
  valorTotal: {
    quantidade: number;
    valorEmMoeda: number;
  };
  valorPorCanal: {
    id: number;
    nome: string;
    dominio: string;
    tipo: string;
    quantidade: number;
    valorEmMoeda: number;
  };
}

export interface Endereco {
  cep: string;
  principal: Principal;
}

export interface Principal {
  cep: string;
  cidade: string;
  uf: string;
  pais: string;
}

export interface UserHash {
  id: string;
  nome: string;
  sobrenome: string;
  nomeRazao: string;
  nomeFantasia: string;
  celular: string;
  telefone: string;
  email: string;
  pessoa: string;
  sexo: string;
  nascimento: string;
  revendedor: string;
  logado: string;
  loginFacilitado: string;
  primeiraCompra: string;
  optin: string;
  ativo: string;
  endereco: Endereco;
}

export interface Representante {
  id?: number;
  nome?: string;
  celular?: string;
  email?: string;
  canais: Array<{
    id?: number;
    codigo?: string;
    nome?: string;
    dominio?: string;
    principal?: boolean;
    canalPai?: {
      id?: number;
      nome?: string;
    };
  }>;
}

export interface VendaInterna {
  id: number;
  usuario: {
    id: number;
    nome: string;
  };
  data: string;
  canais: Array<{
    id?: number;
    codigo?: string;
    nome?: string;
    dominio?: string;
    principal?: boolean;
    canalPai?: {
      id?: number;
      nome?: string;
    };
  }>;
}