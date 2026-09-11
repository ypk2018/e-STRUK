import React from 'react';

interface HeaderProps {
  onPrint: () => void;
  onOpenHelp: () => void;
  historyCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onPrint, onOpenHelp, historyCount }) => {
  return (
    <div className="app-header">
      <div className="flex items-center gap-3">
        <h2>Aplikasi Cetak Struk - LISTRIK & INDIHOME</h2>
        <span className="text-xs bg-sky-800/60 px-2 py-0.5 rounded border border-sky-400/30 text-sky-100 hidden sm:inline">
          Loket Sentani ({historyCount} Transaksi)
        </span>
      </div>
      <div className="header-icons">
        <span onClick={onPrint} title="Cetak Struk" role="button" tabIndex={0}>
          🖨️
        </span>
        <span onClick={onOpenHelp} title="Bantuan / Panduan Kasir" role="button" tabIndex={0}>
          ❓
        </span>
        <span title="Menu Opsi" role="button" tabIndex={0}>
          ⋮
        </span>
      </div>
    </div>
  );
};
