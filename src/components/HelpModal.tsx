import React from 'react';
import { X, HelpCircle, Printer, CheckCircle, Smartphone, Info } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-sky-700 mb-4 pb-2 border-b border-slate-100">
          <div className="p-2 bg-sky-100 rounded-xl">
            <HelpCircle className="w-5 h-5 text-sky-700" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">
              Panduan Loket Cetak Struk
            </h3>
            <p className="text-xs text-slate-500">JAYA MART SENTANI - Sistem Kasir PPOB</p>
          </div>
        </div>

        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 space-y-1.5">
            <h4 className="font-bold text-sky-900 flex items-center gap-1.5 text-sm">
              <Printer className="w-4 h-4 text-sky-700" /> Tips Cetak Printer Thermal (Bluetooth / USB)
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Pilih printer thermal Anda di jendela dialog cetak browser (misal: <em>POS-80, Panda, Eppos, VSC</em>).</li>
              <li>Pilih ukuran kertas <strong>80mm</strong> atau <strong>58mm</strong> sesuai roll kertas Anda.</li>
              <li>Atur <strong>Margin</strong> ke <strong>"None" (Tidak ada)</strong> atau <strong>"Minimal"</strong> agar teks tidak terpotong.</li>
              <li>Hapus centang pada <em>"Header and footers"</em> di dialog printer browser.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-800 flex items-center gap-1.5 text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-600" /> Langkah Penggunaan Kasir:
            </h4>
            <div className="space-y-1.5 pl-2">
              <p><strong>1. Input Data Pelanggan:</strong> Masukkan Nomor Meter / IDPEL serta Nama Pelanggan (misal: SMP NEGERI 7).</p>
              <p><strong>2. Pilih Layanan Tagihan:</strong> Klik tab <em>Elektrik (PLN Prabayar)</em>, <em>Internet (IndiHome)</em>, atau <em>Air PDAM</em>.</p>
              <p><strong>3. Masukkan Nominal:</strong> Masukkan nominal token atau pilih tombol cepat (50k, 100k, 200k, 1Jt, dst).</p>
              <p><strong>4. Acak Token Stroom:</strong> Klik tombol <em>"Acak Token"</em> untuk menghasilkan 20 digit token resmi berformat 5 kelompok.</p>
              <p><strong>5. Stempel Toko:</strong> Centang opsi <em>"Tampilkan Stempel JAYA MART SENTANI"</em> untuk membubuhkan cap basah stempel biru di atas struk.</p>
              <p><strong>6. Cetak & Simpan:</strong> Klik tombol <strong>"Cetak Struk Sekarang"</strong>. Data otomatis tersimpan di tabel riwayat.</p>
            </div>
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-2 text-amber-900">
            <Smartphone className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
            <div>
              <span className="font-bold block">Kirim Bukti via WhatsApp:</span>
              Gunakan tombol <em>"Kirim WhatsApp"</em> atau <em>"Salin Teks"</em> untuk langsung mengirimkan struk digital ke ponsel pelanggan.
            </div>
          </div>
        </div>

        <div className="mt-6 text-right pt-3 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
          >
            Mengerti & Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
