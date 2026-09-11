export type BillType = 'elektrik' | 'internet' | 'pdam';
export type PrintModel = 'dual' | 'single';
export type ReceiptTemplate = 'bri_edc' | 'brilink_telkom' | 'muamalat_dual';

export interface ReceiptData {
  id: string;
  type: BillType;
  printModel: PrintModel;
  template: ReceiptTemplate; // 'bri_edc' (Struk Listrik PLN) | 'brilink_telkom' (Struk IndiHome Agen Brilink Jaya Mart) | 'muamalat_dual'
  agenName?: string; // e.g. "** DANDI **" or "JAYA MART"
  cuCode?: string; // e.g. "(CU)"
  merchantId?: string; // e.g. "12101917"
  outletId?: string; // e.g. "12130743"
  refNo1?: string; // e.g. "608A"
  catatan?: string;
  statusBayar?: string; // e.g. "Sukses"
  transaksiName?: string; // e.g. "Pembayaran Telkom"
  merchantAddress?: string;
  noMeter: string;
  idpel: string;
  namaPelanggan: string;
  bankName: string;
  tarifDaya: string;
  noReff: string;
  nominal: number;
  adminBank: number;
  meterai: number;
  ppn: number;
  ppj: number;
  ppnPpjText?: string; // e.g. "RP. 0,00/4.762,00"
  rpTokenText?: string; // e.g. "RP. 95.238,00"
  showBriRibbon?: boolean; // Tampilkan pita samping BRI biru khas kertas roll ATM/EDC
  showBriHeaderLogo?: boolean; // Tampilkan logo & kode resmi Bank BRI di bagian atas struk
  angsuran: number;
  jmlKwh: string;
  tokenStroom: string;
  blnThn: string;
  noPelanggan: string;
  noJatel: string;
  periodeTagihan: string;
  noRefIndihome: string;
  serialCode: string;
  tanggalWaktu: string;
  terminalCode: string;
  showStamp: boolean;
  showBorder?: boolean; // Garis bingkai di sekeliling struk agar rapi saat dicetak
  borderStyle?: 'solid' | 'dashed' | 'double'; // Gaya garis bingkai (solid, putus-putus, ganda)
  paperWidth: '80mm' | '58mm';
  notes: string;
}

export interface HistoryRecord {
  id: string;
  date: string;
  type: string;
  noMeter: string;
  nama: string;
  total: number;
  token?: string;
  details: ReceiptData;
}
