export interface Country {
  flags: Flags;
  name: Name;
  tld: string[];
  cca2: string;
  currencies: Currencies;
  capital: string[];
  region: string;
  subregion: string;
  languages: Languages;
  population: number;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  ita?: Ita;
  lat?: Lat;
  deu?: Deu;
  fra?: Fra;
  nld?: Nld;
  ara?: Ara;
  zdj?: Zdj;
  eng?: Eng;
  spa?: Spa;
  nor?: Nor;
  swa?: Swa;
  mkd?: Mkd;
  slk?: Slk;
  kor?: Kor;
  sag?: Sag;
  jam?: Jam;
  fil?: Fil;
  cnr?: Cnr;
  hye?: Hye;
  urd?: Urd;
  smo?: Smo;
  tkl?: Tkl;
  nfr?: Nfr;
  hun?: Hun;
  rus?: Rus;
  uzb?: Uzb;
  tir?: Tir;
  dzo?: Dzo;
  ell?: Ell;
  tur?: Tur;
  pol?: Pol;
  bar?: Bar;
  khm?: Khm;
  hin?: Hin;
  tam?: Tam;
  por?: Por;
  dan?: Dan;
  swe?: Swe;
  pap?: Pap;
  lao?: Lao;
  ben?: Ben;
  tvl?: Tvl;
  sqi?: Sqi;
  ssw?: Ssw;
  kin?: Kin;
  kon?: Kon;
  lin?: Lin;
  lua?: Lua;
  ukr?: Ukr;
  lit?: Lit;
  zho?: Zho;
  heb?: Heb;
  ron?: Ron;
  cha?: Cha;
  ton?: Ton;
  pih?: Pih;
  arc?: Arc;
  ckb?: Ckb;
  mri?: Mri;
  nzs?: Nzs;
  amh?: Amh;
  mlt?: Mlt;
  mlg?: Mlg;
  bos?: Bos;
  hrv?: Hrv;
  srp?: Srp;
  kat?: Kat;
  est?: Est;
  prs?: Prs;
  pus?: Pus;
  tuk?: Tuk;
  hat?: Hat;
  afr?: Afr;
  her?: Her;
  hgm?: Hgm;
  kwn?: Kwn;
  loz?: Loz;
  ndo?: Ndo;
  tsn?: Tsn;
  pov?: Pov;
  tha?: Tha;
  kaz?: Kaz;
  mon?: Mon;
  lav?: Lav;
  nrf?: Nrf;
  aym?: Aym;
  que?: Que;
  ind?: Ind;
  msa?: Msa;
  div?: Div;
  tet?: Tet;
  som?: Som;
  aze?: Aze;
  glv?: Glv;
  bul?: Bul;
  ltz?: Ltz;
  ber?: Ber;
  mey?: Mey;
  bjz?: Bjz;
  niu?: Niu;
  gle?: Gle;
  grn?: Grn;
  bis?: Bis;
  mfe?: Mfe;
  bel?: Bel;
  ces?: Ces;
  sin?: Sin;
  pau?: Pau;
  kir?: Kir;
  gil?: Gil;
  fij?: Fij;
  hif?: Hif;
  cat?: Cat;
  mah?: Mah;
  crs?: Crs;
  nbl?: Nbl;
  nso?: Nso;
  sot?: Sot;
  tso?: Tso;
  ven?: Ven;
  xho?: Xho;
  zul?: Zul;
  rar?: Rar;
  kal?: Kal;
  hmo?: Hmo;
  tpi?: Tpi;
  nno?: Nno;
  nob?: Nob;
  smi?: Smi;
  gsw?: Gsw;
  roh?: Roh;
  bwg?: Bwg;
  kck?: Kck;
  khi?: Khi;
  ndc?: Ndc;
  nde?: Nde;
  nya?: Nya;
  sna?: Sna;
  toi?: Toi;
  zib?: Zib;
  slv?: Slv;
  fao?: Fao;
  run?: Run;
  fin?: Fin;
  tgk?: Tgk;
  mya?: Mya;
  jpn?: Jpn;
  vie?: Vie;
  fas?: Fas;
  nau?: Nau;
  cal?: Cal;
  isl?: Isl;
  nep?: Nep;
}

export interface Ita {
  official: string;
  common: string;
}

export interface Lat {
  official: string;
  common: string;
}

export interface Deu {
  official: string;
  common: string;
}

export interface Fra {
  official: string;
  common: string;
}

export interface Nld {
  official: string;
  common: string;
}

export interface Ara {
  official: string;
  common: string;
}

export interface Zdj {
  official: string;
  common: string;
}

export interface Eng {
  official: string;
  common: string;
}

export interface Spa {
  official: string;
  common: string;
}

export interface Nor {
  official: string;
  common: string;
}

export interface Swa {
  official: string;
  common: string;
}

export interface Mkd {
  official: string;
  common: string;
}

export interface Slk {
  official: string;
  common: string;
}

export interface Kor {
  official: string;
  common: string;
}

export interface Sag {
  official: string;
  common: string;
}

export interface Jam {
  official: string;
  common: string;
}

export interface Fil {
  official: string;
  common: string;
}

export interface Cnr {
  official: string;
  common: string;
}

export interface Hye {
  official: string;
  common: string;
}

export interface Urd {
  official: string;
  common: string;
}

export interface Smo {
  official: string;
  common: string;
}

export interface Tkl {
  official: string;
  common: string;
}

export interface Nfr {
  official: string;
  common: string;
}

export interface Hun {
  official: string;
  common: string;
}

export interface Rus {
  official: string;
  common: string;
}

export interface Uzb {
  official: string;
  common: string;
}

export interface Tir {
  official: string;
  common: string;
}

export interface Dzo {
  official: string;
  common: string;
}

export interface Ell {
  official: string;
  common: string;
}

export interface Tur {
  official: string;
  common: string;
}

export interface Pol {
  official: string;
  common: string;
}

export interface Bar {
  official: string;
  common: string;
}

export interface Khm {
  official: string;
  common: string;
}

export interface Hin {
  official: string;
  common: string;
}

export interface Tam {
  official: string;
  common: string;
}

export interface Por {
  official: string;
  common: string;
}

export interface Dan {
  official: string;
  common: string;
}

export interface Swe {
  official: string;
  common: string;
}

export interface Pap {
  official: string;
  common: string;
}

export interface Lao {
  official: string;
  common: string;
}

export interface Ben {
  official: string;
  common: string;
}

export interface Tvl {
  official: string;
  common: string;
}

export interface Sqi {
  official: string;
  common: string;
}

export interface Ssw {
  official: string;
  common: string;
}

export interface Kin {
  official: string;
  common: string;
}

export interface Kon {
  official: string;
  common: string;
}

export interface Lin {
  official: string;
  common: string;
}

export interface Lua {
  official: string;
  common: string;
}

export interface Ukr {
  official: string;
  common: string;
}

export interface Lit {
  official: string;
  common: string;
}

export interface Zho {
  official: string;
  common: string;
}

export interface Heb {
  official: string;
  common: string;
}

export interface Ron {
  official: string;
  common: string;
}

export interface Cha {
  official: string;
  common: string;
}

export interface Ton {
  official: string;
  common: string;
}

export interface Pih {
  official: string;
  common: string;
}

export interface Arc {
  official: string;
  common: string;
}

export interface Ckb {
  official: string;
  common: string;
}

export interface Mri {
  official: string;
  common: string;
}

export interface Nzs {
  official: string;
  common: string;
}

export interface Amh {
  official: string;
  common: string;
}

export interface Mlt {
  official: string;
  common: string;
}

export interface Mlg {
  official: string;
  common: string;
}

export interface Bos {
  official: string;
  common: string;
}

export interface Hrv {
  official: string;
  common: string;
}

export interface Srp {
  official: string;
  common: string;
}

export interface Kat {
  official: string;
  common: string;
}

export interface Est {
  official: string;
  common: string;
}

export interface Prs {
  official: string;
  common: string;
}

export interface Pus {
  official: string;
  common: string;
}

export interface Tuk {
  official: string;
  common: string;
}

export interface Hat {
  official: string;
  common: string;
}

export interface Afr {
  official: string;
  common: string;
}

export interface Her {
  official: string;
  common: string;
}

export interface Hgm {
  official: string;
  common: string;
}

export interface Kwn {
  official: string;
  common: string;
}

export interface Loz {
  official: string;
  common: string;
}

export interface Ndo {
  official: string;
  common: string;
}

export interface Tsn {
  official: string;
  common: string;
}

export interface Pov {
  official: string;
  common: string;
}

export interface Tha {
  official: string;
  common: string;
}

export interface Kaz {
  official: string;
  common: string;
}

export interface Mon {
  official: string;
  common: string;
}

export interface Lav {
  official: string;
  common: string;
}

export interface Nrf {
  official: string;
  common: string;
}

export interface Aym {
  official: string;
  common: string;
}

export interface Que {
  official: string;
  common: string;
}

export interface Ind {
  official: string;
  common: string;
}

export interface Msa {
  official: string;
  common: string;
}

export interface Div {
  official: string;
  common: string;
}

export interface Tet {
  official: string;
  common: string;
}

export interface Som {
  official: string;
  common: string;
}

export interface Aze {
  official: string;
  common: string;
}

export interface Glv {
  official: string;
  common: string;
}

export interface Bul {
  official: string;
  common: string;
}

export interface Ltz {
  official: string;
  common: string;
}

export interface Ber {
  official: string;
  common: string;
}

export interface Mey {
  official: string;
  common: string;
}

export interface Bjz {
  official: string;
  common: string;
}

export interface Niu {
  official: string;
  common: string;
}

export interface Gle {
  official: string;
  common: string;
}

export interface Grn {
  official: string;
  common: string;
}

export interface Bis {
  official: string;
  common: string;
}

export interface Mfe {
  official: string;
  common: string;
}

export interface Bel {
  official: string;
  common: string;
}

export interface Ces {
  official: string;
  common: string;
}

export interface Sin {
  official: string;
  common: string;
}

export interface Pau {
  official: string;
  common: string;
}

export interface Kir {
  official: string;
  common: string;
}

export interface Gil {
  official: string;
  common: string;
}

export interface Fij {
  official: string;
  common: string;
}

export interface Hif {
  official: string;
  common: string;
}

export interface Cat {
  official: string;
  common: string;
}

export interface Mah {
  official: string;
  common: string;
}

export interface Crs {
  official: string;
  common: string;
}

export interface Nbl {
  official: string;
  common: string;
}

export interface Nso {
  official: string;
  common: string;
}

export interface Sot {
  official: string;
  common: string;
}

export interface Tso {
  official: string;
  common: string;
}

export interface Ven {
  official: string;
  common: string;
}

export interface Xho {
  official: string;
  common: string;
}

export interface Zul {
  official: string;
  common: string;
}

export interface Rar {
  official: string;
  common: string;
}

export interface Kal {
  official: string;
  common: string;
}

export interface Hmo {
  official: string;
  common: string;
}

export interface Tpi {
  official: string;
  common: string;
}

export interface Nno {
  official: string;
  common: string;
}

export interface Nob {
  official: string;
  common: string;
}

export interface Smi {
  official: string;
  common: string;
}

export interface Gsw {
  official: string;
  common: string;
}

export interface Roh {
  official: string;
  common: string;
}

export interface Bwg {
  official: string;
  common: string;
}

export interface Kck {
  official: string;
  common: string;
}

export interface Khi {
  official: string;
  common: string;
}

export interface Ndc {
  official: string;
  common: string;
}

export interface Nde {
  official: string;
  common: string;
}

export interface Nya {
  official: string;
  common: string;
}

export interface Sna {
  official: string;
  common: string;
}

export interface Toi {
  official: string;
  common: string;
}

export interface Zib {
  official: string;
  common: string;
}

export interface Slv {
  official: string;
  common: string;
}

export interface Fao {
  official: string;
  common: string;
}

export interface Run {
  official: string;
  common: string;
}

export interface Fin {
  official: string;
  common: string;
}

export interface Tgk {
  official: string;
  common: string;
}

export interface Mya {
  official: string;
  common: string;
}

export interface Jpn {
  official: string;
  common: string;
}

export interface Vie {
  official: string;
  common: string;
}

export interface Fas {
  official: string;
  common: string;
}

export interface Nau {
  official: string;
  common: string;
}

export interface Cal {
  official: string;
  common: string;
}

export interface Isl {
  official: string;
  common: string;
}

export interface Nep {
  official: string;
  common: string;
}

export interface Currencies {
  EUR?: Eur;
  KMF?: Kmf;
  USD?: Usd;
  TZS?: Tzs;
  MKD?: Mkd2;
  SAR?: Sar;
  AUD?: Aud;
  KPW?: Kpw;
  NOK?: Nok;
  XAF?: Xaf;
  ZMW?: Zmw;
  JMD?: Jmd;
  PHP?: Php;
  CLP?: Clp;
  OMR?: Omr;
  AMD?: Amd;
  PKR?: Pkr;
  NZD?: Nzd;
  XOF?: Xof;
  CRC?: Crc;
  GBP?: Gbp;
  GGP?: Ggp;
  SRD?: Srd;
  HUF?: Huf;
  UZS?: Uzs;
  ERN?: Ern;
  SLE?: Sle;
  KWD?: Kwd;
  BTN?: Btn;
  INR?: Inr;
  BMD?: Bmd;
  PLN?: Pln;
  CHF?: Chf;
  KHR?: Khr;
  XCD?: Xcd;
  GNF?: Gnf;
  SDG?: Sdg;
  DJF?: Djf;
  DKK?: Dkk;
  SEK?: Sek;
  VES?: Ves;
  LYD?: Lyd;
  GTQ?: Gtq;
  AED?: Aed;
  LAK?: Lak;
  BDT?: Bdt;
  TVD?: Tvd;
  ALL?: All;
  SZL?: Szl;
  ZAR?: Zar;
  YER?: Yer;
  AOA?: Aoa;
  RWF?: Rwf;
  CDF?: Cdf;
  TTD?: Ttd;
  UAH?: Uah;
  BHD?: Bhd;
  HKD?: Hkd;
  BBD?: Bbd;
  ILS?: Ils;
  STN?: Stn;
  RON?: Ron2;
  TOP?: Top;
  GMD?: Gmd;
  TWD?: Twd;
  IQD?: Iqd;
  CUC?: Cuc;
  CUP?: Cup;
  ETB?: Etb;
  MGA?: Mga;
  BAM?: Bam;
  GEL?: Gel;
  XPF?: Xpf;
  HNL?: Hnl;
  AFN?: Afn;
  ANG?: Ang;
  HTG?: Htg;
  NAD?: Nad;
  THB?: Thb;
  KZT?: Kzt;
  UYU?: Uyu;
  BRL?: Brl;
  MNT?: Mnt;
  GYD?: Gyd;
  PAB?: Pab;
  JEP?: Jep;
  PEN?: Pen;
  IDR?: Idr;
  MDL?: Mdl;
  SYP?: Syp;
  SGD?: Sgd;
  KYD?: Kyd;
  EGP?: Egp;
  MVR?: Mvr;
  JOD?: Jod;
  SOS?: Sos;
  AZN?: Azn;
  MZN?: Mzn;
  CVE?: Cve;
  CAD?: Cad;
  IMP?: Imp;
  GIP?: Gip;
  KRW?: Krw;
  NIO?: Nio;
  BGN?: Bgn;
  COP?: Cop;
  DZD?: Dzd;
  MAD?: Mad;
  MRU?: Mru;
  SHP?: Shp;
  TRY?: Try;
  BZD?: Bzd;
  GHS?: Ghs;
  UGX?: Ugx;
  RSD?: Rsd;
  MYR?: Myr;
  FKP?: Fkp;
  DOP?: Dop;
  ARS?: Ars;
  RUB?: Rub;
  VUV?: Vuv;
  MXN?: Mxn;
  BND?: Bnd;
  MUR?: Mur;
  BYN?: Byn;
  TMT?: Tmt;
  PYG?: Pyg;
  CZK?: Czk;
  LKR?: Lkr;
  NGN?: Ngn;
  KGS?: Kgs;
  TND?: Tnd;
  KID?: Kid;
  FJD?: Fjd;
  CNY?: Cny;
  SCR?: Scr;
  CKD?: Ckd;
  PGK?: Pgk;
  ZWL?: Zwl;
  FOK?: Fok;
  LSL?: Lsl;
  AWG?: Awg;
  BIF?: Bif;
  TJS?: Tjs;
  MMK?: Mmk;
  JPY?: Jpy;
  SSP?: Ssp;
  LRD?: Lrd;
  BOB?: Bob;
  WST?: Wst;
  VND?: Vnd;
  IRR?: Irr;
  LBP?: Lbp;
  MOP?: Mop;
  SBD?: Sbd;
  MWK?: Mwk;
  QAR?: Qar;
  BWP?: Bwp;
  ISK?: Isk;
  KES?: Kes;
  BSD?: Bsd;
  NPR?: Npr;
}

export interface Eur {
  name: string;
  symbol: string;
}

export interface Kmf {
  name: string;
  symbol: string;
}

export interface Usd {
  name: string;
  symbol: string;
}

export interface Tzs {
  name: string;
  symbol: string;
}

export interface Mkd2 {
  name: string;
  symbol: string;
}

export interface Sar {
  name: string;
  symbol: string;
}

export interface Aud {
  name: string;
  symbol: string;
}

export interface Kpw {
  name: string;
  symbol: string;
}

export interface Nok {
  name: string;
  symbol: string;
}

export interface Xaf {
  name: string;
  symbol: string;
}

export interface Zmw {
  name: string;
  symbol: string;
}

export interface Jmd {
  name: string;
  symbol: string;
}

export interface Php {
  name: string;
  symbol: string;
}

export interface Clp {
  name: string;
  symbol: string;
}

export interface Omr {
  name: string;
  symbol: string;
}

export interface Amd {
  name: string;
  symbol: string;
}

export interface Pkr {
  name: string;
  symbol: string;
}

export interface Nzd {
  name: string;
  symbol: string;
}

export interface Xof {
  name: string;
  symbol: string;
}

export interface Crc {
  name: string;
  symbol: string;
}

export interface Gbp {
  name: string;
  symbol: string;
}

export interface Ggp {
  name: string;
  symbol: string;
}

export interface Srd {
  name: string;
  symbol: string;
}

export interface Huf {
  name: string;
  symbol: string;
}

export interface Uzs {
  name: string;
  symbol: string;
}

export interface Ern {
  name: string;
  symbol: string;
}

export interface Sle {
  name: string;
  symbol: string;
}

export interface Kwd {
  name: string;
  symbol: string;
}

export interface Btn {
  name: string;
  symbol: string;
}

export interface Inr {
  name: string;
  symbol: string;
}

export interface Bmd {
  name: string;
  symbol: string;
}

export interface Pln {
  name: string;
  symbol: string;
}

export interface Chf {
  name: string;
  symbol: string;
}

export interface Khr {
  name: string;
  symbol: string;
}

export interface Xcd {
  name: string;
  symbol: string;
}

export interface Gnf {
  name: string;
  symbol: string;
}

export interface Sdg {
  name: string;
  symbol: string;
}

export interface Djf {
  name: string;
  symbol: string;
}

export interface Dkk {
  name: string;
  symbol: string;
}

export interface Sek {
  name: string;
  symbol: string;
}

export interface Ves {
  name: string;
  symbol: string;
}

export interface Lyd {
  name: string;
  symbol: string;
}

export interface Gtq {
  name: string;
  symbol: string;
}

export interface Aed {
  name: string;
  symbol: string;
}

export interface Lak {
  name: string;
  symbol: string;
}

export interface Bdt {
  name: string;
  symbol: string;
}

export interface Tvd {
  name: string;
  symbol: string;
}

export interface All {
  name: string;
  symbol: string;
}

export interface Szl {
  name: string;
  symbol: string;
}

export interface Zar {
  name: string;
  symbol: string;
}

export interface Yer {
  name: string;
  symbol: string;
}

export interface Aoa {
  name: string;
  symbol: string;
}

export interface Rwf {
  name: string;
  symbol: string;
}

export interface Cdf {
  name: string;
  symbol: string;
}

export interface Ttd {
  name: string;
  symbol: string;
}

export interface Uah {
  name: string;
  symbol: string;
}

export interface Bhd {
  name: string;
  symbol: string;
}

export interface Hkd {
  name: string;
  symbol: string;
}

export interface Bbd {
  name: string;
  symbol: string;
}

export interface Ils {
  name: string;
  symbol: string;
}

export interface Stn {
  name: string;
  symbol: string;
}

export interface Ron2 {
  name: string;
  symbol: string;
}

export interface Top {
  name: string;
  symbol: string;
}

export interface Gmd {
  name: string;
  symbol: string;
}

export interface Twd {
  name: string;
  symbol: string;
}

export interface Iqd {
  name: string;
  symbol: string;
}

export interface Cuc {
  name: string;
  symbol: string;
}

export interface Cup {
  name: string;
  symbol: string;
}

export interface Etb {
  name: string;
  symbol: string;
}

export interface Mga {
  name: string;
  symbol: string;
}

export interface Bam {
  name: string;
  symbol: string;
}

export interface Gel {
  name: string;
  symbol: string;
}

export interface Xpf {
  name: string;
  symbol: string;
}

export interface Hnl {
  name: string;
  symbol: string;
}

export interface Afn {
  name: string;
  symbol: string;
}

export interface Ang {
  name: string;
  symbol: string;
}

export interface Htg {
  name: string;
  symbol: string;
}

export interface Nad {
  name: string;
  symbol: string;
}

export interface Thb {
  name: string;
  symbol: string;
}

export interface Kzt {
  name: string;
  symbol: string;
}

export interface Uyu {
  name: string;
  symbol: string;
}

export interface Brl {
  name: string;
  symbol: string;
}

export interface Mnt {
  name: string;
  symbol: string;
}

export interface Gyd {
  name: string;
  symbol: string;
}

export interface Pab {
  name: string;
  symbol: string;
}

export interface Jep {
  name: string;
  symbol: string;
}

export interface Pen {
  name: string;
  symbol: string;
}

export interface Idr {
  name: string;
  symbol: string;
}

export interface Mdl {
  name: string;
  symbol: string;
}

export interface Syp {
  name: string;
  symbol: string;
}

export interface Sgd {
  name: string;
  symbol: string;
}

export interface Kyd {
  name: string;
  symbol: string;
}

export interface Egp {
  name: string;
  symbol: string;
}

export interface Mvr {
  name: string;
  symbol: string;
}

export interface Jod {
  name: string;
  symbol: string;
}

export interface Sos {
  name: string;
  symbol: string;
}

export interface Azn {
  name: string;
  symbol: string;
}

export interface Mzn {
  name: string;
  symbol: string;
}

export interface Cve {
  name: string;
  symbol: string;
}

export interface Cad {
  name: string;
  symbol: string;
}

export interface Imp {
  name: string;
  symbol: string;
}

export interface Gip {
  name: string;
  symbol: string;
}

export interface Krw {
  name: string;
  symbol: string;
}

export interface Nio {
  name: string;
  symbol: string;
}

export interface Bgn {
  name: string;
  symbol: string;
}

export interface Cop {
  name: string;
  symbol: string;
}

export interface Dzd {
  name: string;
  symbol: string;
}

export interface Mad {
  name: string;
  symbol: string;
}

export interface Mru {
  name: string;
  symbol: string;
}

export interface Shp {
  name: string;
  symbol: string;
}

export interface Try {
  name: string;
  symbol: string;
}

export interface Bzd {
  name: string;
  symbol: string;
}

export interface Ghs {
  name: string;
  symbol: string;
}

export interface Ugx {
  name: string;
  symbol: string;
}

export interface Rsd {
  name: string;
  symbol: string;
}

export interface Myr {
  name: string;
  symbol: string;
}

export interface Fkp {
  name: string;
  symbol: string;
}

export interface Dop {
  name: string;
  symbol: string;
}

export interface Ars {
  name: string;
  symbol: string;
}

export interface Rub {
  name: string;
  symbol: string;
}

export interface Vuv {
  name: string;
  symbol: string;
}

export interface Mxn {
  name: string;
  symbol: string;
}

export interface Bnd {
  name: string;
  symbol: string;
}

export interface Mur {
  name: string;
  symbol: string;
}

export interface Byn {
  name: string;
  symbol: string;
}

export interface Tmt {
  name: string;
  symbol: string;
}

export interface Pyg {
  name: string;
  symbol: string;
}

export interface Czk {
  name: string;
  symbol: string;
}

export interface Lkr {
  name: string;
  symbol: string;
}

export interface Ngn {
  name: string;
  symbol: string;
}

export interface Kgs {
  name: string;
  symbol: string;
}

export interface Tnd {
  name: string;
  symbol: string;
}

export interface Kid {
  name: string;
  symbol: string;
}

export interface Fjd {
  name: string;
  symbol: string;
}

export interface Cny {
  name: string;
  symbol: string;
}

export interface Scr {
  name: string;
  symbol: string;
}

export interface Ckd {
  name: string;
  symbol: string;
}

export interface Pgk {
  name: string;
  symbol: string;
}

export interface Zwl {
  name: string;
  symbol: string;
}

export interface Fok {
  name: string;
  symbol: string;
}

export interface Lsl {
  name: string;
  symbol: string;
}

export interface Awg {
  name: string;
  symbol: string;
}

export interface Bif {
  name: string;
  symbol: string;
}

export interface Tjs {
  name: string;
  symbol: string;
}

export interface Mmk {
  name: string;
  symbol: string;
}

export interface Jpy {
  name: string;
  symbol: string;
}

export interface Ssp {
  name: string;
  symbol: string;
}

export interface Lrd {
  name: string;
  symbol: string;
}

export interface Bob {
  name: string;
  symbol: string;
}

export interface Wst {
  name: string;
  symbol: string;
}

export interface Vnd {
  name: string;
  symbol: string;
}

export interface Irr {
  name: string;
  symbol: string;
}

export interface Lbp {
  name: string;
  symbol: string;
}

export interface Mop {
  name: string;
  symbol: string;
}

export interface Sbd {
  name: string;
  symbol: string;
}

export interface Mwk {
  name: string;
  symbol: string;
}

export interface Qar {
  name: string;
  symbol: string;
}

export interface Bwp {
  name: string;
  symbol: string;
}

export interface Isk {
  name: string;
  symbol: string;
}

export interface Kes {
  name: string;
  symbol: string;
}

export interface Bsd {
  name: string;
  symbol: string;
}

export interface Npr {
  name: string;
  symbol: string;
}

export interface Languages {
  ita?: string;
  lat?: string;
  deu?: string;
  fra?: string;
  nld?: string;
  ara?: string;
  zdj?: string;
  eng?: string;
  spa?: string;
  nor?: string;
  swa?: string;
  mkd?: string;
  slk?: string;
  kor?: string;
  sag?: string;
  jam?: string;
  fil?: string;
  cnr?: string;
  hye?: string;
  urd?: string;
  smo?: string;
  tkl?: string;
  nfr?: string;
  hun?: string;
  rus?: string;
  uzb?: string;
  tir?: string;
  dzo?: string;
  ell?: string;
  tur?: string;
  pol?: string;
  khm?: string;
  hin?: string;
  tam?: string;
  por?: string;
  dan?: string;
  swe?: string;
  pap?: string;
  lao?: string;
  ben?: string;
  tvl?: string;
  sqi?: string;
  ssw?: string;
  kin?: string;
  kon?: string;
  lin?: string;
  lua?: string;
  ukr?: string;
  lit?: string;
  zho?: string;
  heb?: string;
  ron?: string;
  cha?: string;
  ton?: string;
  pih?: string;
  arc?: string;
  ckb?: string;
  mri?: string;
  nzs?: string;
  amh?: string;
  mlt?: string;
  mlg?: string;
  bos?: string;
  hrv?: string;
  srp?: string;
  kat?: string;
  est?: string;
  prs?: string;
  pus?: string;
  tuk?: string;
  hat?: string;
  afr?: string;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  tsn?: string;
  pov?: string;
  tha?: string;
  kaz?: string;
  mon?: string;
  lav?: string;
  nrf?: string;
  aym?: string;
  que?: string;
  ind?: string;
  msa?: string;
  div?: string;
  tet?: string;
  som?: string;
  aze?: string;
  glv?: string;
  bul?: string;
  ltz?: string;
  ber?: string;
  mey?: string;
  bjz?: string;
  niu?: string;
  gle?: string;
  grn?: string;
  bis?: string;
  mfe?: string;
  bel?: string;
  ces?: string;
  sin?: string;
  pau?: string;
  kir?: string;
  gil?: string;
  fij?: string;
  hif?: string;
  cat?: string;
  mah?: string;
  crs?: string;
  nbl?: string;
  nso?: string;
  sot?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zul?: string;
  rar?: string;
  eus?: string;
  glc?: string;
  kal?: string;
  hmo?: string;
  tpi?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  gsw?: string;
  roh?: string;
  bwg?: string;
  kck?: string;
  khi?: string;
  ndc?: string;
  nde?: string;
  nya?: string;
  sna?: string;
  toi?: string;
  zib?: string;
  slv?: string;
  fao?: string;
  run?: string;
  fin?: string;
  tgk?: string;
  mya?: string;
  jpn?: string;
  vie?: string;
  fas?: string;
  nau?: string;
  cal?: string;
  isl?: string;
  nep?: string;
}
