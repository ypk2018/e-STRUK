import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ReceiptForm } from './components/ReceiptForm';
import { ThermalReceipt } from './components/ThermalReceipt';
import { HistoryTable } from './components/HistoryTable';
import { HelpModal } from './components/HelpModal';
import { ReceiptData, HistoryRecord } from './types';
import {
  INITIAL_RECEIPT_DATA,
  BRI_EDC_PRESET,
  BRILINK_TELKOM_PRESET,
  DUAL_MUAMALAT_PRESET,
  getCurrentFormattedDateTime,
  generateToken,
  generateReff,
} from './data/constants';

const STORAGE_KEY = 'jaya_mart_history_v1';

export default function App() {
  const [receiptData, setReceiptData] = useState<ReceiptData>(() => {
    const saved = localStorage.getItem('jaya_mart_current_receipt');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.template) {
          parsed.template = 'brilink_telkom';
        }
        return parsed;
      } catch {
        return BRILINK_TELKOM_PRESET;
      }
    }
    return BRILINK_TELKOM_PRESET;
  });

  const [history, setHistory] = useState<HistoryRecord[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    // Default initial records: IndiHome Agen BRILink, PLN BRI, and Dual Muamalat
    return [
      {
        id: 'HIST-TELKOM-1',
        date: '21-08-2026 08:48:37',
        type: 'Internet IndiHome (BRILink)',
        noMeter: '0967005192164',
        nama: 'SMP NEGERI 7 SENTANI',
        total: 780000,
        details: BRILINK_TELKOM_PRESET,
      },
      {
        id: 'HIST-BRI-1',
        date: '20/08/2026 07:07:50 (CU)',
        type: 'PLN Prabayar BRI',
        noMeter: '45023643864',
        nama: 'PAUL WALLI',
        total: 102500,
        token: '3391-7090-3257 2062-7225',
        details: BRI_EDC_PRESET,
      },
      {
        id: 'HIST-1',
        date: '25-04-2026 19:58:50',
        type: 'PLN Prabayar Muamalat',
        noMeter: '86241706661',
        nama: 'SMP NEGERI 7',
        total: 1010000,
        token: '8762 1633 9773 7744 3898',
        details: DUAL_MUAMALAT_PRESET,
      },
    ];
  });

  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync current form state to localStorage
  useEffect(() => {
    localStorage.setItem('jaya_mart_current_receipt', JSON.stringify(receiptData));
  }, [receiptData]);

  // Sync history to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const saveToHistory = (dataToSave: ReceiptData) => {
    const total = (dataToSave.nominal || 0) + (dataToSave.adminBank || 0);
    const newRecord: HistoryRecord = {
      id: 'TX-' + Date.now(),
      date: dataToSave.tanggalWaktu || getCurrentFormattedDateTime(),
      type:
        dataToSave.type === 'elektrik'
          ? 'PLN Prabayar'
          : dataToSave.type === 'internet'
          ? 'Internet IndiHome'
          : 'Air PDAM',
      noMeter: dataToSave.type === 'elektrik' ? dataToSave.noMeter : dataToSave.noPelanggan,
      nama: dataToSave.namaPelanggan,
      total: total,
      token: dataToSave.type === 'elektrik' ? dataToSave.tokenStroom : undefined,
      details: { ...dataToSave },
    };

    setHistory((prev) => [newRecord, ...prev.slice(0, 49)]); // Keep last 50 transactions
  };

  const handlePrint = () => {
    const updatedData = {
      ...receiptData,
      tanggalWaktu: getCurrentFormattedDateTime(),
    };
    setReceiptData(updatedData);
    saveToHistory(updatedData);
    showToast('Membuka dialog printer thermal...');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePrint();
  };

  const handleResetForm = () => {
    const resetData: ReceiptData = {
      ...INITIAL_RECEIPT_DATA,
      id: 'RCP-' + Date.now(),
      tokenStroom: generateToken(),
      noReff: generateReff(),
      tanggalWaktu: getCurrentFormattedDateTime(),
    };
    setReceiptData(resetData);
    showToast('Formulir kasir telah di-reset');
  };

  const handleLoadRecord = (recordDetails: ReceiptData) => {
    setReceiptData({
      ...recordDetails,
      tanggalWaktu: getCurrentFormattedDateTime(), // Refresh time on load
    });
    showToast(`Data ${recordDetails.namaPelanggan} berhasil dimuat ke formulir`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteRecord = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
    showToast('Riwayat transaksi telah dihapus');
  };

  const handleClearAllHistory = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus seluruh riwayat transaksi kasir?')) {
      setHistory([]);
      localStorage.removeItem(STORAGE_KEY);
      showToast('Semua riwayat transaksi telah dibersihkan');
    }
  };

  const handleRefreshTime = () => {
    setReceiptData((prev) => ({
      ...prev,
      tanggalWaktu: getCurrentFormattedDateTime(),
    }));
    showToast('Waktu struk diperbarui ke saat ini');
  };

  return (
    <div className="min-h-screen bg-[#eef2f5] flex flex-col">
      {/* App Header */}
      <Header
        onPrint={handlePrint}
        onOpenHelp={() => setIsHelpOpen(true)}
        historyCount={history.length}
      />

      {/* Main Container: POS Form & Thermal Preview */}
      <div className="pos-main-container">
        <ReceiptForm
          data={receiptData}
          onChange={setReceiptData}
          onSubmit={handleFormSubmit}
          onReset={handleResetForm}
        />

        <ThermalReceipt
          data={receiptData}
          onTriggerPrint={handlePrint}
          onRefreshTime={handleRefreshTime}
          onToggleBorder={() => {
            setReceiptData((prev) => {
              if (prev.showBorder === false) {
                showToast('Bingkai Garis Struk: Solid');
                return { ...prev, showBorder: true, borderStyle: 'solid' };
              } else if (prev.borderStyle === 'solid' || !prev.borderStyle) {
                showToast('Bingkai Garis Struk: Putus-putus');
                return { ...prev, showBorder: true, borderStyle: 'dashed' };
              } else if (prev.borderStyle === 'dashed') {
                showToast('Bingkai Garis Struk: Ganda');
                return { ...prev, showBorder: true, borderStyle: 'double' };
              } else {
                showToast('Bingkai Garis Struk: Dimatikan');
                return { ...prev, showBorder: false };
              }
            });
          }}
          onToggleTemplate={(tpl) => {
            if (tpl === 'brilink_telkom') {
              setReceiptData((prev) => ({
                ...prev,
                ...BRILINK_TELKOM_PRESET,
                id: prev.id,
              }));
              showToast('Beralih ke Model IndiHome Agen BRILink (Sesuai Foto)');
            } else if (tpl === 'bri_edc') {
              setReceiptData((prev) => ({
                ...prev,
                ...BRI_EDC_PRESET,
                id: prev.id,
              }));
              showToast('Beralih ke Model Listrik PLN BRI (Sesuai Foto)');
            } else {
              setReceiptData((prev) => ({
                ...prev,
                ...DUAL_MUAMALAT_PRESET,
                id: prev.id,
              }));
              showToast('Beralih ke Model Dual 2 Kolom');
            }
          }}
        />
      </div>

      {/* Transaction History Section */}
      <div className="history-section px-5 pb-6 max-w-7xl w-full mx-auto">
        <HistoryTable
          records={history}
          onLoadRecord={handleLoadRecord}
          onDeleteRecord={handleDeleteRecord}
          onClearAll={handleClearAllHistory}
        />
      </div>

      {/* Footer Info */}
      <footer className="w-full text-center py-4 text-xs text-slate-500 border-t border-slate-300 mt-auto no-print">
        <p className="font-semibold text-slate-700">
          Aplikasi Cetak Struk - LISTRIK & INDIHOME • JAYA MART Sentani
        </p>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Mendukung Model IndiHome (Agen BRILink Jaya Mart), Model Listrik PLN (BRI), dan Model Dual 2 Kolom
        </p>
      </footer>

      {/* Help Modal */}
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-4 py-2.5 rounded-lg shadow-xl text-xs font-medium border border-slate-700 flex items-center gap-2 z-50 animate-bounce no-print">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
