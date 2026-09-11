import { ReceiptData } from '../types';

export const BANK_OPTIONS = [
  'BANK MUAMALAT',
  'BANK MANDIRI',
  'BANK BCA',
  'BANK BRI',
  'BANK PAPUA',
  'BANK BNI',
  'BANK BSI',
];

export const TARIF_DAYA_OPTIONS = [
  'S2 /0000002200 VA',
  'S2 /000000200 VA',
  'R1 /000000450 VA',
  'R1 /000000900 VA',
  'R1M /000000900 VA',
  'R1 /000001300 VA',
  'R1 /000002200 VA',
  'R2 /000003500 VA',
  'R2 /000005500 VA',
  'B1 /000004400 VA',
  'I1 /000014000 VA',
];

export const NOMINAL_PRESETS = [
  20000, 50000, 100000, 200000, 500000, 1000000, 1005000, 2000000
];

export function generateToken(): string {
  const chunks: string[] = [];
  for (let i = 0; i < 5; i++) {
    const chunk = Math.floor(1000 + Math.random() * 9000).toString();
    chunks.push(chunk);
  }
  return chunks.join(' ');
}

export function generateReff(): string {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 20; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function formatRupiah(num: number): string {
  return new Intl.NumberFormat('id-ID').format(num);
}

export function getCurrentFormattedDateTime(): string {
  const now = new Date();
  const d = String(now.getDate()).padStart(2, '0');
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const y = now.getFullYear();
  const h = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const sec = String(now.getSeconds()).padStart(2, '0');
  return `${d}-${m}-${y} ${h}:${min}:${sec}`;
}

export function getCurrentBlnThn(): string {
  const now = new Date();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const y = now.getFullYear();
  return `${m}${y}`;
}

export function calculateEstimatedKwh(nominal: number, tarif: string): string {
  // Approximate PLN calculation: tariff rates typically ~1444 - 1700 / kWh
  // S2 social has subsidized rates
  let ratePerKwh = 1444.70;
  if (tarif.startsWith('S2') || tarif.startsWith('R1 /000000450')) {
    ratePerKwh = 765.00;
  } else if (tarif.startsWith('R1 /000000900')) {
    ratePerKwh = 1352.00;
  }
  const kwh = nominal / ratePerKwh;
  return kwh.toFixed(1).replace('.', ',');
}

export const BRI_EDC_PRESET: ReceiptData = {
  id: 'RCP-BRI-1',
  type: 'elektrik',
  printModel: 'single',
  template: 'bri_edc', // Struk Pembelian Listrik Prabayar BRI (Struk Listrik.jpg)
  agenName: '** DANDI **',
  cuCode: '(CU)',
  noMeter: '45023643864',
  idpel: '45023643864',
  namaPelanggan: 'PAUL WALLI',
  bankName: 'BANK BRI',
  tarifDaya: 'R1/1300VA',
  noReff: '8D88E3BB0CA24F14B66 DE30F9721AF34',
  nominal: 100000,
  adminBank: 2500,
  meterai: 0,
  ppn: 0,
  ppj: 4762,
  ppnPpjText: 'RP. 0,00/4.762,00',
  rpTokenText: 'RP. 95.238,00',
  angsuran: 0,
  jmlKwh: '66,0',
  tokenStroom: '3391-7090-3257 2062-7225',
  blnThn: '082026',
  noPelanggan: '45023643864',
  noJatel: '',
  periodeTagihan: 'Agu 2026',
  noRefIndihome: '',
  serialCode: 'EXP 010128/5716',
  tanggalWaktu: '20/08/2026 07:07:50 (CU)',
  terminalCode: 'EDC-BRI-CU',
  showBriRibbon: true,
  showBriHeaderLogo: true,
  showStamp: false,
  showBorder: true,
  borderStyle: 'solid',
  paperWidth: '58mm',
  notes: 'Info Hubungi Call Center 123 Atau Hubungi PLN Terdekat',
};

export const BRILINK_TELKOM_PRESET: ReceiptData = {
  id: 'RCP-TELKOM-1',
  type: 'internet',
  printModel: 'single',
  template: 'brilink_telkom', // Struk Pembayaran Telkom / IndiHome Agen BRILink Jaya Mart (sesuai foto WhatsApp)
  agenName: 'JAYA MART',
  merchantAddress: 'Jl Raya Kemiri Depan Yonif 751 Raider, P A P U A, JAYAPURA, SENT 99352',
  merchantId: '12101917',
  outletId: '12130743',
  noReff: '533472671704',
  transaksiName: 'Pembayaran Telkom',
  noMeter: '0967005192164',
  idpel: '0967005192164',
  noPelanggan: '0967005192164',
  noJatel: '0967005192164',
  namaPelanggan: 'SMP NEGERI 7 SENTANI',
  tarifDaya: '-',
  refNo1: '608A',
  nominal: 777200,
  adminBank: 2800,
  meterai: 0,
  ppn: 0,
  ppj: 0,
  angsuran: 0,
  jmlKwh: '',
  tokenStroom: '',
  blnThn: '082026',
  periodeTagihan: 'Agu 2026',
  noRefIndihome: '533472671704',
  serialCode: '533472671704',
  tanggalWaktu: '21-08-2026 08:48:37',
  terminalCode: 'BRILINK-JM',
  statusBayar: 'Sukses',
  catatan: '',
  bankName: 'BANK BRI',
  showBriRibbon: false,
  showBriHeaderLogo: true,
  showStamp: false,
  showBorder: true,
  borderStyle: 'solid',
  paperWidth: '58mm',
  notes: 'Informasi lebih lanjut, Hubungi 08001014017(bebas pulsa) Terima kasih',
};

export const DUAL_MUAMALAT_PRESET: ReceiptData = {
  id: 'RCP-DUAL-1',
  type: 'elektrik',
  printModel: 'dual',
  template: 'muamalat_dual',
  agenName: 'JAYA MART SENTANI',
  noMeter: '86241706661',
  idpel: '421200130379',
  namaPelanggan: 'SMP NEGERI 7',
  bankName: 'BANK MUAMALAT',
  tarifDaya: 'S2 /0000002200 VA',
  noReff: '767834578268209P33YY',
  nominal: 1005000,
  adminBank: 5000,
  meterai: 0,
  ppn: 0,
  ppj: 0,
  angsuran: 0,
  jmlKwh: '1315,8',
  tokenStroom: '8762 1633 9773 7744 3898',
  blnThn: '042026',
  noPelanggan: '0967005192164',
  noJatel: '0967005192164',
  periodeTagihan: 'Apr 2026',
  noRefIndihome: '23639967387488',
  serialCode: '159796',
  tanggalWaktu: '25-04-2026 19:58:50',
  terminalCode: 'MU421BANG01 / ASLI',
  showStamp: true,
  showBriRibbon: false,
  showBorder: true,
  borderStyle: 'solid',
  paperWidth: '80mm',
  notes: 'Informasi Hubungi Call Center 123 Atau hubungi PLN Terdekat',
};

export const INITIAL_RECEIPT_DATA: ReceiptData = {
  ...BRI_EDC_PRESET,
};
