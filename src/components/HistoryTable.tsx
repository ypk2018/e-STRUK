import React, { useState } from 'react';
import {
  History,
  Trash2,
  Search,
  RotateCcw,
  Download,
  FileSpreadsheet,
  CheckCircle2,
  Zap,
  Globe,
  Droplets,
} from 'lucide-react';
import { HistoryRecord, ReceiptData } from '../types';
import { formatRupiah } from '../data/constants';

interface HistoryTableProps {
  records: HistoryRecord[];
  onLoadRecord: (data: ReceiptData) => void;
  onDeleteRecord: (id: string) => void;
  onClearAll: () => void;
}

export const HistoryTable: React.FC<HistoryTableProps> = ({
  records,
  onLoadRecord,
  onDeleteRecord,
  onClearAll,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const filteredRecords = records.filter((r) => {
    const matchesSearch =
      r.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.noMeter.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      filterType === 'all' ||
      (filterType === 'elektrik' && r.type.toLowerCase().includes('pln')) ||
      (filterType === 'internet' && r.type.toLowerCase().includes('internet')) ||
      (filterType === 'pdam' && r.type.toLowerCase().includes('pdam'));
    return matchesSearch && matchesType;
  });

  const totalOmzet = records.reduce((acc, curr) => acc + (curr.total || 0), 0);

  const handleExportCSV = () => {
    if (records.length === 0) return;
    const headers = 'ID,Tanggal,Jenis,No Meter/IDPEL,Nama Pelanggan,Total Bayar,Token Stroom\n';
    const rows = records
      .map(
        (r) =>
          `"${r.id}","${r.date}","${r.type}","${r.noMeter}","${r.nama}","${r.total}","${
            r.token || '-'
          }"`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Riwayat_Struk_JayaMart_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-8">
      {/* Header & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <h3 className="font-bold text-slate-800 text-base sm:text-lg flex items-center gap-2">
            <History className="w-5 h-5 text-sky-600" />
            <span>Riwayat Struk & Pembayaran</span>
          </h3>
          <p className="text-xs text-slate-500">
            Daftar struk yang telah dicetak dari loket kasir Jaya Mart Sentani
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[11px] text-slate-400 block font-medium">Total Akumulasi:</span>
            <span className="text-sm sm:text-base font-extrabold text-emerald-700 font-mono">
              Rp {formatRupiah(totalOmzet)}
            </span>
          </div>

          <div className="flex items-center gap-1 border-l border-slate-200 pl-3">
            <button
              type="button"
              onClick={handleExportCSV}
              title="Unduh Laporan CSV"
              className="p-2 text-slate-600 hover:text-sky-700 hover:bg-sky-50 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span className="hidden md:inline">Export CSV</span>
            </button>
            <button
              type="button"
              onClick={onClearAll}
              title="Hapus Semua Riwayat"
              className="p-2 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden md:inline">Bersihkan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="my-4 flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Cari No Meter / Nama Pelanggan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500 focus:bg-white"
          />
        </div>

        <div className="flex items-center gap-1 text-xs">
          <button
            type="button"
            onClick={() => setFilterType('all')}
            className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
              filterType === 'all'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Semua ({records.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterType('elektrik')}
            className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
              filterType === 'elektrik'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            PLN
          </button>
          <button
            type="button"
            onClick={() => setFilterType('internet')}
            className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
              filterType === 'internet'
                ? 'bg-sky-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Internet
          </button>
          <button
            type="button"
            onClick={() => setFilterType('pdam')}
            className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
              filterType === 'pdam'
                ? 'bg-teal-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            PDAM
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-700 text-[11px] uppercase font-bold border-b border-slate-200 tracking-wider">
            <tr>
              <th className="py-2.5 px-3">Tanggal & Waktu</th>
              <th className="py-2.5 px-3">Layanan</th>
              <th className="py-2.5 px-3">No Meter / IDPEL</th>
              <th className="py-2.5 px-3">Nama Pelanggan</th>
              <th className="py-2.5 px-3">Token Stroom (Bila Ada)</th>
              <th className="py-2.5 px-3 text-right">Total Bayar</th>
              <th className="py-2.5 px-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-mono text-xs">
            {filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-6 text-slate-400 italic">
                  Tidak ada data riwayat struk yang cocok.
                </td>
              </tr>
            ) : (
              filteredRecords.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-3 text-slate-500 whitespace-nowrap">{row.date}</td>
                  <td className="py-2.5 px-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-sans font-semibold inline-flex items-center gap-1 ${
                        row.type.includes('PLN')
                          ? 'bg-amber-100 text-amber-800'
                          : row.type.includes('Internet')
                          ? 'bg-sky-100 text-sky-800'
                          : 'bg-teal-100 text-teal-800'
                      }`}
                    >
                      {row.type.includes('PLN') ? (
                        <Zap className="w-3 h-3 text-amber-600" />
                      ) : row.type.includes('Internet') ? (
                        <Globe className="w-3 h-3 text-sky-600" />
                      ) : (
                        <Droplets className="w-3 h-3 text-teal-600" />
                      )}
                      {row.type}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">{row.noMeter}</td>
                  <td className="py-2.5 px-3 font-sans uppercase font-medium text-slate-800 truncate max-w-[160px]">
                    {row.nama}
                  </td>
                  <td className="py-2.5 px-3 text-slate-700 text-[11px]">
                    {row.token ? (
                      <span className="bg-slate-100 px-1.5 py-0.5 rounded font-bold text-slate-900">
                        {row.token}
                      </span>
                    ) : (
                      <span className="text-slate-400">-</span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 text-right font-bold text-slate-900 whitespace-nowrap">
                    Rp {formatRupiah(row.total)}
                  </td>
                  <td className="py-2.5 px-3 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-1.5 font-sans">
                      <button
                        type="button"
                        onClick={() => onLoadRecord(row.details)}
                        title="Tampilkan ke Form & Struk"
                        className="px-2.5 py-1 bg-sky-100 hover:bg-sky-200 text-sky-800 rounded font-semibold text-[11px] transition-colors cursor-pointer"
                      >
                        Muat
                      </button>
                      <button
                        type="button"
                        onClick={() => onDeleteRecord(row.id)}
                        title="Hapus baris ini"
                        className="p-1 text-slate-400 hover:text-rose-600 rounded transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
