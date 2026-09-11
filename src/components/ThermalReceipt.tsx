import React, { useState } from 'react';
import {
  Printer,
  Copy,
  Check,
  Download,
  RefreshCw,
  Square,
} from 'lucide-react';
import { ReceiptData, ReceiptTemplate } from '../types';

// Logo Resmi Bank BRI (Vektor Asli Bank BRI: Lambang + Tipografi BRI)
export const BriOfficialLogo: React.FC<{ className?: string; color?: string }> = ({
  className = 'h-7 w-auto',
  color = '#000000',
}) => (
  <svg
    viewBox="0 0 512 192"
    fill={color}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M487.85 16.904a2.376 2.376 0 0 0-2.375 2.379v152.566c0 1.32 1.055 2.39 2.376 2.39h21.787c.29 0 .58-.068.765-.172a2.31 2.31 0 0 0 1.597-2.218V19.283a2.37 2.37 0 0 0-2.362-2.379zM357.188 16.904a2.386 2.386 0 0 0-2.378 2.379v152.566c0 1.32 1.07 2.39 2.378 2.39h21.177a2.39 2.39 0 0 0 2.391-2.39v-55.441a2.345 2.345 0 0 1 2.364-2.364h17.125c.754 0 1.479.37 1.914.99l40.906 58.187c.462.621 1.16 1.018 1.94 1.018h24.375c1.915 0 3.035-2.165 1.926-3.75l-38.5-54.796c-.95-1.347-.251-3.248 1.359-3.67 6.18-1.624 11.66-4.04 16.267-7.182 4.622-3.156 8.516-6.88 11.58-11.039 3.063-4.132 5.361-8.806 6.813-13.823a56.7 56.7 0 0 0 2.23-15.66c0-6.919-1.174-13.349-3.432-19.172-2.271-5.73-5.677-10.734-10.153-14.854-4.529-4.159-10.299-7.473-17.125-9.823-6.919-2.364-15.026-3.566-24.124-3.566zm25.932 23.04h33.337c1.954 0 3.843.12 5.784.358 5.981.911 10.907 3.076 14.67 6.47 5.189 4.687 7.83 10.512 7.83 17.325 0 3.314-.555 6.614-1.638 9.77a22.8 22.8 0 0 1-5.255 8.595c-2.376 2.456-5.453 4.462-9.11 5.967S420.67 90.7 415.613 90.7H383.12c-1.32 0-2.364-1.07-2.364-2.39v-46a2.345 2.345 0 0 1 2.364-2.365M233.388 16.904a2.384 2.384 0 0 0-2.375 2.379v152.566c0 1.32 1.068 2.39 2.375 2.39h60.09c9.084 0 17.099-1.254 23.846-3.684 6.668-2.43 12.267-5.796 16.624-10.008 4.37-4.212 7.645-9.176 9.745-14.775 2.125-5.624 3.207-11.778 3.207-18.248 0-8.635-1.993-16.412-5.928-23.12-3.974-6.76-8.635-12.026-13.903-15.683-1.215-.845-1.36-2.59-.317-3.633 1.03-1.03 2.284-2.39 3.697-4.04 1.373-1.57 2.681-3.46 3.91-5.65 1.24-2.153 2.284-4.623 3.156-7.304.845-2.6 1.264-5.437 1.264-8.408 0-5.995-1.028-11.66-3.062-16.85-2.02-5.11-5.162-9.652-9.348-13.468-4.225-3.855-9.585-6.93-15.962-9.123-6.43-2.205-14.076-3.34-22.725-3.34zm25.352 23.04h28.031c5.453 0 10.1.688 13.824 2.061h.01c2.496.964 4.61 2.232 6.22 3.79 4.16 3.987 6.271 8.821 6.271 14.393 0 4.82-.858 8.911-2.574 12.172-1.637 3.116-3.34 5.558-5.03 7.262l-.7.7h-46.055a2.386 2.386 0 0 1-2.376-2.39l.004-35.623a2.38 2.38 0 0 1 2.376-2.364zm0 63.67h36.337c8.833 0 15.5 2.377 19.897 7.091 4.12 4.634 6.206 10.126 6.206 16.345 0 6.47-2.391 12.083-7.052 16.678-4.687 4.581-12.264 6.918-22.55 6.918H258.74a2.386 2.386 0 0 1-2.377-2.378V105.99c0-1.32 1.07-2.376 2.377-2.376M28.217 0C12.623 0 0 12.622 0 28.229v135.35c0 15.608 12.623 28.244 28.217 28.244H163.58c15.593 0 28.243-12.636 28.243-28.243V28.229C191.823 12.622 179.173 0 163.58 0Zm0 22.002h18.352v.095a22.3 22.3 0 0 1 15.395 5.558c.343.304.688.648 1.005.965 8.635 8.622 8.516 21.652-.238 31.766L33.828 92.143c-1.94 2.126-1.94 5.387 0 7.5l28.705 31.53.277.329c8.833 9.625 8.913 22.933.159 31.661-.317.343-.662.65-1.005.953-4.238 3.776-9.691 5.742-15.395 5.584v.095H28.217a6.215 6.215 0 0 1-6.222-6.22V28.22a6.213 6.213 0 0 1 6.222-6.217zm57.276.006h20.282v.095a22.32 22.32 0 0 1 15.409 5.56c.343.304.686.646 1.003.963 8.635 8.622 8.516 21.655-.238 31.768L93.377 92.466a5.605 5.605 0 0 0 .077 7.526l65.27 69.807h-73.23c9.836-16.623 7.618-38-6.668-53.409v-.004L60.18 95.908l18.435-20.28.394-.411c14.062-15.898 16.188-36.823 6.483-53.209Zm59.206.004h18.88a6.22 6.22 0 0 1 6.222 6.217v120.84l-50.083-53.526 18.102-19.911.382-.41c14.062-15.896 16.215-36.824 6.497-53.21" />
  </svg>
);

// Lambang Kotak Bank BRI (untuk pita samping kertas roll)
export const BriEmblemOnly: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-full h-full',
  color = '#ffffff',
}) => (
  <svg viewBox="0 0 192 192" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M28.217 0C12.623 0 0 12.622 0 28.229v135.35c0 15.608 12.623 28.244 28.217 28.244H163.58c15.593 0 28.243-12.636 28.243-28.243V28.229C191.823 12.622 179.173 0 163.58 0Zm0 22.002h18.352v.095a22.3 22.3 0 0 1 15.395 5.558c.343.304.688.648 1.005.965 8.635 8.622 8.516 21.652-.238 31.766L33.828 92.143c-1.94 2.126-1.94 5.387 0 7.5l28.705 31.53.277.329c8.833 9.625 8.913 22.933.159 31.661-.317.343-.662.65-1.005.953-4.238 3.776-9.691 5.742-15.395 5.584v.095H28.217a6.215 6.215 0 0 1-6.222-6.22V28.22a6.213 6.213 0 0 1 6.222-6.217zm57.276.006h20.282v.095a22.32 22.32 0 0 1 15.409 5.56c.343.304.686.646 1.003.963 8.635 8.622 8.516 21.655-.238 31.768L93.377 92.466a5.605 5.605 0 0 0 .077 7.526l65.27 69.807h-73.23c9.836-16.623 7.618-38-6.668-53.409v-.004L60.18 95.908l18.435-20.28.394-.411c14.062-15.898 16.188-36.823 6.483-53.209Zm59.206.004h18.88a6.22 6.22 0 0 1 6.222 6.217v120.84l-50.083-53.526 18.102-19.911.382-.41c14.062-15.896 16.215-36.824 6.497-53.21" />
  </svg>
);

interface ThermalReceiptProps {
  data: ReceiptData;
  onTriggerPrint: () => void;
  onRefreshTime: () => void;
  onToggleTemplate?: (tpl: ReceiptTemplate) => void;
  onToggleBorder?: () => void;
}

export const ThermalReceipt: React.FC<ThermalReceiptProps> = ({
  data,
  onTriggerPrint,
  onRefreshTime,
  onToggleTemplate,
  onToggleBorder,
}) => {
  const [copied, setCopied] = useState(false);

  const getFrameClass = () => {
    if (data.showBorder === false) return '';
    const style = data.borderStyle || 'solid';
    return `receipt-framed-${style}`;
  };

  const formatRp = (num: number) => {
    return new Intl.NumberFormat('id-ID').format(num);
  };

  const nominal = Number(data.nominal) || 0;
  const admin = Number(data.adminBank) || 0;
  const total = nominal + admin;
  const noMeter = data.type === 'elektrik' ? data.noMeter : (data.noJatel || data.noPelanggan || data.noMeter);
  const nama = data.namaPelanggan;
  const noRef = data.type === 'elektrik' ? data.noReff : (data.noRefIndihome || data.noReff || '533472671704');
  const tglBayar = data.tanggalWaktu;
  const bankName = data.bankName || 'BANK MUAMALAT';

  const isBriPln = data.template === 'bri_edc';
  const isBrilinkTelkom = data.template === 'brilink_telkom';
  const isDualModel = data.template === 'muamalat_dual';

  // Helper to format PLN REFF into 2 lines if long
  const formatPlnReff = (refString: string): { part1: string; part2?: string } => {
    if (!refString) return { part1: '' };
    if (refString.includes(' ')) {
      const parts = refString.split(' ');
      return { part1: parts[0], part2: parts.slice(1).join(' ') };
    }
    if (refString.length > 19) {
      return { part1: refString.slice(0, 19), part2: refString.slice(19) };
    }
    return { part1: refString };
  };

  // Helper to format Token into 2 lines for BRI receipt (line 1: 3 groups, line 2: 2 groups)
  const formatBriTokenDigits = (tokenStr: string): { line1: string; line2: string } => {
    const raw = (tokenStr || '').replace(/\D/g, '');
    if (raw.length >= 20) {
      const g1 = raw.slice(0, 4);
      const g2 = raw.slice(4, 8);
      const g3 = raw.slice(8, 12);
      const g4 = raw.slice(12, 16);
      const g5 = raw.slice(16, 20);
      return {
        line1: `${g1}-${g2}-${g3}`,
        line2: `${g4}-${g5}`,
      };
    }
    const parts = (tokenStr || '').split(/[\s-]+/).filter(Boolean);
    if (parts.length >= 5) {
      return {
        line1: `${parts[0]}-${parts[1]}-${parts[2]}`,
        line2: `${parts[3]}-${parts[4]}`,
      };
    }
    if (parts.length >= 2) {
      return {
        line1: parts.slice(0, Math.ceil(parts.length / 2)).join('-'),
        line2: parts.slice(Math.ceil(parts.length / 2)).join('-'),
      };
    }
    return { line1: tokenStr || '3391-7090-3257', line2: '2062-7225' };
  };

  const reffBri = formatPlnReff(data.noReff);
  const briToken = formatBriTokenDigits(data.tokenStroom);

  // Plain text generator for copy / TXT
  const generateReceiptPlainText = () => {
    // 1. Model IndiHome Agen BRILink Jaya Mart (Sesuai Foto Baru)
    if (isBrilinkTelkom) {
      return `========================================
                 BRI
     Bukti Transaksi Agen Brilink
              JAYA MART
    Jl Raya Kemiri Depan Yonif 751
    Raider, P A P U A, JAYAPURA,
                SENT
               99352

${data.tanggalWaktu || '21-08-2026 08:48:37'}
ID Merchant : ${data.merchantId || '12101917'}
ID Outlet   : ${data.outletId || '12130743'}
No Ref      : ${data.noReff || '533472671704'}

Transaksi   : ${data.transaksiName || 'Pembayaran Telkom'}
Nomor Telp  : ${data.noPelanggan || data.noJatel || data.noMeter}
Nama        : ${data.namaPelanggan}
Ref. No 1   : ${data.refNo1 || '608A'}
Tagihan 1   : Rp${formatRp(nominal)}
Catatan     : ${data.catatan || ''}
Jumlah Bayar: Rp${formatRp(nominal)}
Admin Bank  : Rp${formatRp(admin)}
Total       : Rp${formatRp(total)}
Status      : ${data.statusBayar || 'Sukses'}

         Informasi lebih lanjut,
       Hubungi 08001014017(bebas
                 pulsa)
              Terima kasih

        Silakan simpan resi ini
                sebagai
       bukti pembayaran yang sah
========================================`;
    }

    // 2. Model Listrik Prabayar BRI (Sesuai Foto Struk Listrik.jpg)
    if (isBriPln) {
      return `========================================
** ${data.agenName || 'DANDI'} **
${tglBayar}

STRUK PEMBELIAN LISTRIK
PRABAYAR

IDPEL       : ${data.idpel || noMeter}
NAMA        : ${nama}
TRF/DAYA    : ${data.tarifDaya}
PLN REFF    : ${reffBri.part1}
${reffBri.part2 ? `              ${reffBri.part2}\n` : ''}NOMINAL     : RP. ${formatRp(nominal)},00
PPN/PPJ     : ${data.ppnPpjText || 'RP. 0,00/4.762,00'}
RP TOKEN    : ${data.rpTokenText || `RP. ${formatRp(nominal - (data.ppj || 4762))},00`}
JML KWH     : ${data.jmlKwh}
BIAYA ADM   : RP. ${formatRp(admin)},00
TOTAL BAYAR : RP. ${formatRp(total)},00

-- TOKEN --
${briToken.line1}
${briToken.line2}

Info Hubungi Call Center 123
Atau-Hubungi PLN Terdekat
========================================`;
    }

    // 3. Model Dual Kolom (Muamalat)
    if (data.type === 'elektrik') {
      return `========================================
${bankName}
STRUK PENERIMAAN
========================================
NO. METER     : ${noMeter}
NAMA          : ${nama}
TARIF/DAYA    : ${data.tarifDaya}
TGL BAYAR     : ${tglBayar}
TOTAL BAYAR   : IDR ${formatRp(total)}
MU421BANGO1 / ASLI

----------------------------------------
${bankName}
STRUK PEMBELIAN LISTRIK PRABAYAR
----------------------------------------
NO METER         : ${noMeter}
NO IDPEL         : ${data.idpel}
NAMA             : ${nama}
TARIF/DAYA       : ${data.tarifDaya}
NO REF           : ${noRef}
METERAI          : IDR 0.00
PPN              : IDR 0.00
PPJ              : IDR 0.00
ANGSURAN         : IDR 0.00
RP STROOM/TOKEN  : IDR ${formatRp(nominal)},00
JML KWH          : ${data.jmlKwh}
ADMIN BANK       : IDR ${formatRp(admin)},00

( ★ JAYA MART - SENTANI ★ )

TOKEN:
( ${data.tokenStroom} )

Informasi Hubungi Call Center 123 Atau hubungi PLN Terdekat
MU421BANGO1 / ASLI / ${tglBayar}
========================================`;
    } else {
      return `========================================
${bankName}
STRUK PENERIMAAN INDIHOME
========================================
NAMA        : ${nama}
NO JASTEL   : ${noMeter}
TOT TAGIHAN : Rp. ${formatRp(nominal)}
B. ADMIN    : Rp. ${formatRp(admin)}
TOT BAYAR   : Rp. ${formatRp(total)}
NO REF      : ${noRef}
TGL BAYAR   : ${tglBayar}
MU421BANGO1/ASLI

----------------------------------------
${bankName}
STRUK PEMBAYARAN TAGIHAN INDIHOME
----------------------------------------
NAMA         : ${nama}
NO JASTEL    : ${noMeter}
REFF         : ${noRef}
TOT TAGIHAN  : ${data.periodeTagihan || 'Apr 2026'} Rp. ${formatRp(nominal)}
ADMIN        : Rp. ${formatRp(admin)}
TOTAL BAYAR  : Rp. ${formatRp(total)}

( ★ JAYA MART - SENTANI ★ )

INDIHOME MENYATAKAN STRUK INI SEBAGAI BUKTI PEMBAYARAN YANG SAH
MU421BANGO1 / ASLI / ${tglBayar}
========================================`;
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(generateReceiptPlainText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadTxt = () => {
    const text = generateReceiptPlainText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const prefix = isBrilinkTelkom ? 'Struk-IndiHome-BRILink' : isBriPln ? 'Struk-PLN-BRI' : `Struk-${data.type.toUpperCase()}`;
    link.download = `${prefix}-${data.namaPelanggan.replace(/\s+/g, '_')}-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Baris struk dengan titik dua rata tengah (Dual model)
  const ReceiptRow = ({
    label,
    value,
    bold,
  }: {
    label: string;
    value: React.ReactNode;
    bold?: boolean;
  }) => (
    <div className={`receipt-row ${bold ? 'bold' : ''}`}>
      <span className="r-label">{label}</span>
      <span className="r-colon">:</span>
      <span className="r-value">{value}</span>
    </div>
  );

  // Baris struk BRI Listrik dengan titik dua rata tengah
  const BriRow = ({
    label,
    value,
    bold,
  }: {
    label: string;
    value: React.ReactNode;
    bold?: boolean;
  }) => (
    <div className={`bri-row ${bold ? 'bold' : ''}`}>
      <span className="b-label">{label}</span>
      <span className="b-colon">:</span>
      <span className="b-value">{value}</span>
    </div>
  );

  // Baris struk Agen BRILink Telkom / IndiHome dengan titik dua rata tengah
  const BrilinkRow = ({
    label,
    value,
    bold,
  }: {
    label: string;
    value: React.ReactNode;
    bold?: boolean;
  }) => (
    <div className={`brilink-row ${bold ? 'font-bold' : ''}`}>
      <span className="bl-label">{label}</span>
      <span className="bl-colon">:</span>
      <span className="bl-value">{value}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full">
      {/* Action Toolbar on top of thermal preview */}
      <div className="w-full max-w-[560px] flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-slate-200/90 rounded-t-lg border-b border-slate-300 no-print">
        <div className="flex items-center gap-1 flex-wrap">
          <button
            type="button"
            onClick={() => onToggleTemplate && onToggleTemplate('brilink_telkom')}
            className={`px-2 py-1 text-xs rounded font-semibold cursor-pointer transition-colors ${
              isBrilinkTelkom
                ? 'bg-[#0078d4] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
            }`}
            title="Model Struk Pembayaran Telkom / IndiHome Agen BRILink Jaya Mart (Sesuai Foto Baru)"
          >
            🌐 IndiHome (BRILink)
          </button>
          <button
            type="button"
            onClick={() => onToggleTemplate && onToggleTemplate('bri_edc')}
            className={`px-2 py-1 text-xs rounded font-semibold cursor-pointer transition-colors ${
              isBriPln
                ? 'bg-[#0078d4] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
            }`}
            title="Model Struk Pembelian Listrik Prabayar BRI (Sesuai Foto Struk Listrik.jpg)"
          >
            ⚡ Listrik (BRI)
          </button>
          <button
            type="button"
            onClick={() => onToggleTemplate && onToggleTemplate('muamalat_dual')}
            className={`px-2 py-1 text-xs rounded font-semibold cursor-pointer transition-colors ${
              isDualModel
                ? 'bg-[#0078d4] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
            }`}
            title="Model Struk Dual 2 Kolom Bank Muamalat"
          >
            📑 Dual 2 Kolom
          </button>
        </div>

        <div className="flex items-center gap-1.5 ml-auto">
          {onToggleBorder && (
            <button
              type="button"
              onClick={onToggleBorder}
              title="Ganti / Matikan Bingkai Garis Struk (Agar Rapi Saat Dicetak)"
              className="p-1.5 text-slate-700 hover:text-sky-700 bg-white hover:bg-slate-50 rounded border border-slate-300 transition-colors cursor-pointer text-xs flex items-center gap-1"
            >
              <Square className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {data.showBorder === false
                  ? 'Bingkai: Mati'
                  : data.borderStyle === 'dashed'
                  ? 'Bingkai: Putus'
                  : data.borderStyle === 'double'
                  ? 'Bingkai: Ganda'
                  : 'Bingkai: Solid'}
              </span>
            </button>
          )}
          <button
            type="button"
            onClick={onRefreshTime}
            title="Perbarui Waktu Sekarang"
            className="p-1.5 text-slate-700 hover:text-sky-700 bg-white hover:bg-slate-50 rounded border border-slate-300 transition-colors cursor-pointer text-xs flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Waktu</span>
          </button>
          <button
            type="button"
            onClick={handleCopyText}
            title="Salin Struk Teks"
            className="p-1.5 text-slate-700 hover:text-sky-700 bg-white hover:bg-slate-50 rounded border border-slate-300 transition-colors cursor-pointer text-xs flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Tersalin' : 'Salin'}</span>
          </button>
          <button
            type="button"
            onClick={handleDownloadTxt}
            title="Unduh Struk TXT"
            className="p-1.5 text-slate-700 hover:text-sky-700 bg-white hover:bg-slate-50 rounded border border-slate-300 transition-colors cursor-pointer text-xs flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">TXT</span>
          </button>
          <button
            type="button"
            onClick={onTriggerPrint}
            title="Cetak Sekarang"
            className="px-2.5 py-1 text-white bg-[#0078d4] hover:bg-[#005a9e] rounded font-semibold transition-colors cursor-pointer text-xs flex items-center gap-1 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak</span>
          </button>
        </div>
      </div>

      {/* Preview Area */}
      <div className="preview-area">
        {isBrilinkTelkom ? (
          /* MODEL A: Struk Pembayaran Telkom / IndiHome Agen BRILink Jaya Mart (Sesuai Foto Baru WhatsApp) */
          <div className={`brilink-paper ${getFrameClass()}`} id="paperOutput">
            {/* Header Logo BRI Resmi */}
            {data.showBriHeaderLogo !== false && (
              <div className="brilink-logo-container">
                <BriOfficialLogo className="h-7 w-auto" color="#111" />
              </div>
            )}

            {/* Merchant / Loket Info Centered */}
            <div className="brilink-header-text">
              <div>Bukti Transaksi Agen Brilink</div>
              <div className="font-bold text-[11.5px]">{data.agenName || 'JAYA MART'}</div>
              <div>Jl Raya Kemiri Depan Yonif 751</div>
              <div>Raider, P A P U A, JAYAPURA,</div>
              <div>SENT</div>
              <div>99352</div>
            </div>

            {/* Metadata (Waktu & ID Merchant) */}
            <div className="mb-2 text-[10.8px]">
              <div className="mb-1">{data.tanggalWaktu || '21-08-2026 08:48:37'}</div>
              <BrilinkRow label="ID Merchant" value={data.merchantId || '12101917'} />
              <BrilinkRow label="ID Outlet" value={data.outletId || '12130743'} />
              <BrilinkRow label="No Ref" value={data.noReff || '533472671704'} />
            </div>

            {/* Body Transaksi */}
            <div className="mb-2 text-[10.8px]">
              <BrilinkRow label="Transaksi" value={data.transaksiName || 'Pembayaran Telkom'} />
              <BrilinkRow label="Nomor Telp" value={data.noPelanggan || data.noJatel || data.noMeter || '0967005192164'} />
              <BrilinkRow label="Nama" value={data.namaPelanggan || 'SMP NEGERI 7 SENTANI'} />
              <BrilinkRow label="Ref. No 1" value={data.refNo1 || '608A'} />
              <BrilinkRow label="Tagihan 1" value={`Rp${formatRp(nominal)}`} />
              <BrilinkRow label="Catatan" value={data.catatan || ''} />
              <BrilinkRow label="Jumlah Bayar" value={`Rp${formatRp(nominal)}`} />
              <BrilinkRow label="Admin Bank" value={`Rp${formatRp(admin)}`} />
              <BrilinkRow label="Total" value={`Rp${formatRp(total)}`} />
              <BrilinkRow label="Status" value={data.statusBayar || 'Sukses'} />
            </div>

            {/* Footer Agen BRILink Sesuai Foto Asli */}
            <div className="brilink-footer">
              <div>Informasi lebih lanjut,</div>
              <div>Hubungi 08001014017(bebas</div>
              <div>pulsa)</div>
              <div>Terima kasih</div>
              <div className="my-2.5"></div>
              <div>Silakan simpan resi ini</div>
              <div>sebagai</div>
              <div>bukti pembayaran yang sah</div>
            </div>
          </div>
        ) : isBriPln ? (
          /* MODEL B: Struk Pembelian Listrik Prabayar BRI (Sesuai Gambar Struk Listrik.jpg) */
          <div className={`bri-paper ${getFrameClass()}`} id="paperOutput">
            {/* Pita Samping Khas Kertas Thermal Roll BRI */}
            {data.showBriRibbon !== false && (
              <div className="bri-ribbon">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-[#00529c] rounded-xs flex items-center justify-center p-0.5 shadow-xs">
                    <BriEmblemOnly className="w-full h-full" color="#ffffff" />
                  </div>
                  <span className="text-[7px] font-black text-[#00529c] tracking-tighter mt-0.5">BRI</span>
                </div>
                <div className="bri-ribbon-text">EXP 010128/5716</div>

                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-[#00529c] rounded-xs flex items-center justify-center p-0.5 shadow-xs">
                    <BriEmblemOnly className="w-full h-full" color="#ffffff" />
                  </div>
                  <span className="text-[7px] font-black text-[#00529c] tracking-tighter mt-0.5">BRI</span>
                </div>
                <div className="bri-ribbon-text">EXP 010128/5716</div>

                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-[#00529c] rounded-xs flex items-center justify-center p-0.5 shadow-xs">
                    <BriEmblemOnly className="w-full h-full" color="#ffffff" />
                  </div>
                  <span className="text-[7px] font-black text-[#00529c] tracking-tighter mt-0.5">BRI</span>
                </div>
              </div>
            )}

            {/* Isi Struk Thermal BRI */}
            <div className="bri-content">
              {/* Header Logo Bank BRI Resmi di Atas Struk Sesuai Data */}
              {data.showBriHeaderLogo !== false && (
                <div className="flex flex-col items-center justify-center mb-1.5 pb-1 border-b border-dashed border-slate-300">
                  <BriOfficialLogo className="h-5.5 w-auto mb-0.5" color="#111" />
                  <div className="font-bold text-[9.5px] tracking-widest font-mono text-slate-800">
                    {data.bankName || 'BANK BRI'}
                  </div>
                </div>
              )}

              {/* Header Agen / Loket */}
              <div className="bri-title">{data.agenName || '** DANDI **'}</div>
              <div className="bri-subtitle">{data.tanggalWaktu || '20/08/2026 07:07:50 (CU)'}</div>
              
              <div className="center bold text-[11px] mt-2">STRUK PEMBELIAN LISTRIK</div>
              <div className="center bold text-[11px] mb-2">PRABAYAR</div>

              {/* Rincian dengan Titik Dua Rata Tengah */}
              <div className="mt-1">
                <BriRow label="IDPEL" value={data.idpel || noMeter} />
                <BriRow label="NAMA" value={nama} />
                <BriRow label="TRF/DAYA" value={data.tarifDaya} />
                <BriRow label="PLN REFF" value={reffBri.part1} />
                {reffBri.part2 && (
                  <div className="bri-row">
                    <span className="b-label"></span>
                    <span className="b-colon" style={{ visibility: 'hidden' }}>:</span>
                    <span className="b-value">{reffBri.part2}</span>
                  </div>
                )}
                <BriRow label="NOMINAL" value={`RP. ${formatRp(nominal)},00`} />
                <BriRow label="PPN/PPJ" value={data.ppnPpjText || 'RP. 0,00/4.762,00'} />
                <BriRow label="RP TOKEN" value={data.rpTokenText || `RP. ${formatRp(nominal - (data.ppj || 4762))},00`} />
                <BriRow label="JML KWH" value={data.jmlKwh} />
                <BriRow label="BIAYA ADM" value={`RP. ${formatRp(admin)},00`} />
                <BriRow label="TOTAL BAYAR" value={`RP. ${formatRp(total)},00`} bold />
              </div>

              {/* Blok Token PLN 2 Baris Sesuai Foto */}
              <div className="bri-token-container">
                <div className="bri-token-label">-- TOKEN --</div>
                <div className="bri-token-large font-mono font-black">
                  <div>{briToken.line1}</div>
                  <div>{briToken.line2}</div>
                </div>
              </div>

              {/* Footer Info PLN */}
              <div className="bri-footer">
                <div>Info Hubungi Call Center 123</div>
                <div>Atau-Hubungi PLN Terdekat</div>
              </div>
            </div>
          </div>
        ) : (
          /* MODEL C: Struk Dual 2 Kolom (Bank Muamalat / Jaya Mart Sentani) */
          <div className={`thermal-paper ${getFrameClass()}`} id="paperOutput">
            {data.type === 'elektrik' ? (
              <div className="dual-receipt">
                {/* Kolom Kiri: STRUK PENERIMAAN */}
                <div className="col-left">
                  <div className="center bold">{bankName}</div>
                  <div className="center bold">STRUK PENERIMAAN</div>
                  <br />
                  <ReceiptRow label="NO. METER" value={noMeter} />
                  <ReceiptRow label="NAMA" value={nama} />
                  <ReceiptRow label="TARIF/DAYA" value={data.tarifDaya} />
                  <ReceiptRow label="TGL BAYAR" value={tglBayar} />
                  <ReceiptRow label="TOTAL BAYAR" value={`IDR ${formatRp(total)}`} bold />
                  <br />
                  <br />
                  <br />
                  <div style={{ fontSize: '8px' }}>MU421BANGO1 / ASLI</div>
                </div>

                {/* Kolom Kanan: STRUK PEMBELIAN LISTRIK PRABAYAR */}
                <div className="col-right">
                  <div className="center bold">{bankName}</div>
                  <div className="center bold" style={{ marginBottom: '6px' }}>
                    STRUK PEMBELIAN LISTRIK PRABAYAR
                  </div>
                  <ReceiptRow label="NO METER" value={noMeter} />
                  <ReceiptRow label="NO IDPEL" value={data.idpel} />
                  <ReceiptRow label="NAMA" value={nama} />
                  <ReceiptRow label="TARIF/DAYA" value={data.tarifDaya} />
                  <ReceiptRow label="NO REF" value={noRef} />
                  <ReceiptRow label="METERAI" value="IDR 0.00" />
                  <ReceiptRow label="PPN" value="IDR 0.00" />
                  <ReceiptRow label="PPJ" value="IDR 0.00" />
                  <ReceiptRow label="ANGSURAN" value="IDR 0.00" />
                  <ReceiptRow label="RP STROOM/TOKEN" value={`IDR ${formatRp(nominal)},00`} />
                  <ReceiptRow label="JML KWH" value={data.jmlKwh} />
                  <ReceiptRow label="ADMIN BANK" value={`IDR ${formatRp(admin)},00`} />

                  {/* Stempel Oval JAYA MART SENTANI */}
                  {data.showStamp && (
                    <div className="stempel-oval">
                      <div>★ JAYA MART ★</div>
                      <div>JM</div>
                      <div>SENTANI</div>
                    </div>
                  )}

                  {/* Kotak Oval Token PLN */}
                  <div className="token-box">
                    ( {data.tokenStroom} )
                  </div>

                  <div className="center" style={{ fontSize: '7.5px' }}>
                    Informasi Hubungi Call Center 123 Atau hubungi PLN Terdekat
                  </div>
                  <div className="center" style={{ fontSize: '8px', marginTop: '4px' }}>
                    MU421BANGO1 / ASLI / {tglBayar}
                  </div>
                </div>
              </div>
            ) : (
              <div className="dual-receipt">
                {/* Kolom Kiri: STRUK PENERIMAAN INDIHOME */}
                <div className="col-left">
                  <div className="center bold">{bankName}</div>
                  <div className="center bold">STRUK PENERIMAAN INDIHOME</div>
                  <br />
                  <ReceiptRow label="NAMA" value={nama} />
                  <ReceiptRow label="NO JASTEL" value={noMeter} />
                  <ReceiptRow label="TOT TAGIHAN" value={`Rp. ${formatRp(nominal)}`} />
                  <ReceiptRow label="B. ADMIN" value={`Rp. ${formatRp(admin)}`} />
                  <ReceiptRow label="TOT BAYAR" value={`Rp. ${formatRp(total)}`} bold />
                  <ReceiptRow label="NO REF" value={noRef} />
                  <ReceiptRow label="TGL BAYAR" value={tglBayar} />
                  <br />
                  <br />
                  <div style={{ fontSize: '8px' }}>MU421BANGO1/ASLI</div>
                </div>

                {/* Kolom Kanan: STRUK PEMBAYARAN TAGIHAN INDIHOME */}
                <div className="col-right">
                  <div className="center bold">{bankName}</div>
                  <div className="center bold" style={{ marginBottom: '6px' }}>
                    STRUK PEMBAYARAN TAGIHAN INDIHOME
                  </div>
                  <ReceiptRow label="NAMA" value={nama} />
                  <ReceiptRow label="NO JASTEL" value={noMeter} />
                  <ReceiptRow label="REFF" value={noRef} />
                  <ReceiptRow label="TOT TAGIHAN" value={`${data.periodeTagihan || 'Apr 2026'} Rp. ${formatRp(nominal)}`} />
                  <ReceiptRow label="ADMIN" value={`Rp. ${formatRp(admin)}`} />
                  <ReceiptRow label="TOTAL BAYAR" value={`Rp. ${formatRp(total)}`} bold />

                  {/* Stempel Oval JAYA MART SENTANI */}
                  {data.showStamp && (
                    <div className="stempel-oval">
                      <div>★ JAYA MART ★</div>
                      <div>JM</div>
                      <div>SENTANI</div>
                    </div>
                  )}

                  <div className="center" style={{ fontSize: '7.5px', marginTop: '10px' }}>
                    INDIHOME MENYATAKAN STRUK INI SEBAGAI BUKTI PEMBAYARAN YANG SAH
                  </div>
                  <div className="center" style={{ fontSize: '8px', marginTop: '4px' }}>
                    MU421BANGO1 / ASLI / {tglBayar}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
