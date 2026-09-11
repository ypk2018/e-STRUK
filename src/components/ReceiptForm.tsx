import React from 'react';
import { ReceiptData } from '../types';
import {
  generateToken,
  generateReff,
  getCurrentFormattedDateTime,
  BRI_EDC_PRESET,
  BRILINK_TELKOM_PRESET,
  DUAL_MUAMALAT_PRESET,
} from '../data/constants';

interface ReceiptFormProps {
  data: ReceiptData;
  onChange: (data: ReceiptData) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
}

export const ReceiptForm: React.FC<ReceiptFormProps> = ({
  data,
  onChange,
  onSubmit,
  onReset,
}) => {
  const isBriPln = data.template === 'bri_edc';
  const isBrilinkTelkom = data.template === 'brilink_telkom';
  const isPln = data.type === 'elektrik';

  const selectBriModel = () => {
    onChange({
      ...data,
      ...BRI_EDC_PRESET,
      id: 'RCP-BRI-' + Date.now(),
      tanggalWaktu: '20/08/2026 07:07:50 (CU)',
    });
  };

  const selectIndihomeModel = () => {
    onChange({
      ...data,
      ...BRILINK_TELKOM_PRESET,
      id: 'RCP-TELKOM-' + Date.now(),
    });
  };

  const selectDualPlnModel = () => {
    onChange({
      ...data,
      ...DUAL_MUAMALAT_PRESET,
      id: 'RCP-DUAL-' + Date.now(),
    });
  };

  const handleRandomToken = () => {
    if (isBriPln) {
      const raw = generateToken().replace(/\s+/g, '');
      const line1 = `${raw.slice(0, 4)}-${raw.slice(4, 8)}-${raw.slice(8, 12)}`;
      const line2 = `${raw.slice(12, 16)}-${raw.slice(16, 20)}`;
      onChange({
        ...data,
        tokenStroom: `${line1} ${line2}`,
        noReff: `${generateReff().slice(0, 19)} ${generateReff().slice(0, 13)}`,
      });
    } else {
      onChange({
        ...data,
        tokenStroom: generateToken(),
        noReff: generateReff(),
      });
    }
  };

  const handleSetCurrentTime = () => {
    const timeStr = getCurrentFormattedDateTime();
    onChange({
      ...data,
      tanggalWaktu: isBriPln ? `${timeStr} (CU)` : timeStr,
    });
  };

  return (
    <div className="pos-card">
      <form onSubmit={onSubmit}>
        {/* Pilihan Model Template Struk */}
        <div className="pos-form-group mb-3">
          <label>Pilihan Model</label>
          <span className="colon">:</span>
          <div className="category-selector">
            <div
              id="btnIndihomeModel"
              className={`cat-btn ${isBrilinkTelkom ? 'active' : ''}`}
              onClick={selectIndihomeModel}
              role="button"
              tabIndex={0}
              title="Model Struk Pembayaran Telkom / IndiHome Agen BRILink Jaya Mart (Sesuai Foto WhatsApp)"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span>IndiHome (Foto Baru)</span>
            </div>

            <div
              id="btnBriModel"
              className={`cat-btn ${isBriPln ? 'active' : ''}`}
              onClick={selectBriModel}
              role="button"
              tabIndex={0}
              title="Model Struk Pembelian Listrik Prabayar BRI Roll (Sesuai Foto Struk Listrik.jpg)"
            >
              <svg viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
              </svg>
              <span>Listrik PLN (Foto)</span>
            </div>

            <div
              id="btnDualModel"
              className={`cat-btn ${!isBriPln && !isBrilinkTelkom ? 'active' : ''}`}
              onClick={selectDualPlnModel}
              role="button"
              tabIndex={0}
              title="Model Dual 2 Kolom Bank Muamalat / Jaya Mart Sentani"
            >
              <svg viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H6v-2h5v2zm0-4H6v-2h5v2zm0-4H6V7h5v2zm7 8h-5v-2h5v2zm0-4h-5v-2h5v2zm0-4h-5V7h5v2z" />
              </svg>
              <span>Dual 2 Kolom</span>
            </div>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200 flex-wrap">
          <span className="text-[11px] font-medium text-slate-500">Preset Cepat:</span>
          <button
            type="button"
            onClick={selectIndihomeModel}
            className="text-[11px] px-2 py-0.5 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 rounded cursor-pointer transition-colors font-medium"
          >
            📸 IndiHome (SMP 7 Telkom)
          </button>
          <button
            type="button"
            onClick={selectBriModel}
            className="text-[11px] px-2 py-0.5 bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 rounded cursor-pointer transition-colors"
          >
            📸 Paul Walli (Listrik PLN)
          </button>
          <button
            type="button"
            onClick={selectDualPlnModel}
            className="text-[11px] px-2 py-0.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded cursor-pointer transition-colors"
          >
            🏫 Dual Bank Muamalat
          </button>
        </div>

        {/* Khusus Model IndiHome BRILink Jaya Mart (Sesuai Foto Baru) */}
        {isBrilinkTelkom ? (
          <>
            <div className="pos-form-group">
              <label>Nama Agen / Loket</label>
              <span className="colon">:</span>
              <input
                type="text"
                id="agenName"
                value={data.agenName || 'JAYA MART'}
                onChange={(e) => onChange({ ...data, agenName: e.target.value })}
                placeholder="JAYA MART"
              />
            </div>

            <div className="pos-form-group">
              <label>ID Merchant (Kode BRI)</label>
              <span className="colon">:</span>
              <input
                type="text"
                id="merchantId"
                value={data.merchantId || '12101917'}
                onChange={(e) => onChange({ ...data, merchantId: e.target.value })}
                placeholder="12101917"
              />
            </div>

            <div className="pos-form-group">
              <label>ID Outlet (Kode BRI)</label>
              <span className="colon">:</span>
              <input
                type="text"
                id="outletId"
                value={data.outletId || '12130743'}
                onChange={(e) => onChange({ ...data, outletId: e.target.value })}
                placeholder="12130743"
              />
            </div>

            <div className="pos-form-group">
              <label>No Ref (Kode BRI)</label>
              <span className="colon">:</span>
              <input
                type="text"
                id="noRef"
                value={data.noReff || '533472671704'}
                onChange={(e) => onChange({ ...data, noReff: e.target.value, noRefIndihome: e.target.value })}
                placeholder="533472671704"
              />
            </div>

            <div className="pos-form-group">
              <label>Transaksi</label>
              <span className="colon">:</span>
              <input
                type="text"
                id="transaksiName"
                value={data.transaksiName || 'Pembayaran Telkom'}
                onChange={(e) => onChange({ ...data, transaksiName: e.target.value })}
              />
            </div>

            <div className="pos-form-group">
              <label>Nomor Telp / Jastel</label>
              <span className="colon">:</span>
              <input
                type="text"
                id="noTelp"
                value={data.noPelanggan || data.noJatel || data.noMeter}
                onChange={(e) =>
                  onChange({
                    ...data,
                    noPelanggan: e.target.value,
                    noJatel: e.target.value,
                    noMeter: e.target.value,
                  })
                }
              />
            </div>

            <div className="pos-form-group">
              <label>Nama Pelanggan</label>
              <span className="colon">:</span>
              <input
                type="text"
                id="nama"
                value={data.namaPelanggan}
                onChange={(e) => onChange({ ...data, namaPelanggan: e.target.value })}
              />
            </div>

            <div className="pos-form-group">
              <label>Ref. No 1</label>
              <span className="colon">:</span>
              <input
                type="text"
                id="refNo1"
                value={data.refNo1 || '608A'}
                onChange={(e) => onChange({ ...data, refNo1: e.target.value })}
              />
            </div>

            <div className="pos-form-group">
              <label>Tagihan 1 (Rp)</label>
              <span className="colon">:</span>
              <input
                type="number"
                id="nominal"
                value={data.nominal}
                onChange={(e) => onChange({ ...data, nominal: parseFloat(e.target.value) || 0 })}
              />
            </div>

            <div className="pos-form-group">
              <label>Admin Bank (Rp)</label>
              <span className="colon">:</span>
              <input
                type="number"
                id="adminBank"
                value={data.adminBank}
                onChange={(e) => onChange({ ...data, adminBank: parseFloat(e.target.value) || 0 })}
              />
            </div>

            <div className="pos-form-group">
              <label>Status</label>
              <span className="colon">:</span>
              <input
                type="text"
                id="statusBayar"
                value={data.statusBayar || 'Sukses'}
                onChange={(e) => onChange({ ...data, statusBayar: e.target.value })}
              />
            </div>
          </>
        ) : (
          /* Form untuk Model Listrik BRI & Dual Muamalat */
          <>
            {isBriPln && (
              <div className="pos-form-group">
                <label>Nama Loket / Agen</label>
                <span className="colon">:</span>
                <input
                  type="text"
                  id="agenName"
                  value={data.agenName || '** DANDI **'}
                  onChange={(e) => onChange({ ...data, agenName: e.target.value })}
                  placeholder="** DANDI **"
                />
              </div>
            )}

            <div className="pos-form-group">
              <label id="lblNoMeter">{isPln ? (isBriPln ? 'IDPEL' : 'No Meter/IDPEL') : 'No Jastel'}</label>
              <span className="colon">:</span>
              <input
                type="text"
                id="noMeter"
                value={isPln ? (data.idpel || data.noMeter) : (data.noJatel || data.noPelanggan || data.noMeter)}
                onChange={(e) =>
                  onChange({
                    ...data,
                    noMeter: e.target.value,
                    idpel: e.target.value,
                    noPelanggan: e.target.value,
                    noJatel: e.target.value,
                  })
                }
              />
            </div>

            <div className="pos-form-group">
              <label>Nama Pelanggan</label>
              <span className="colon">:</span>
              <input
                type="text"
                id="nama"
                value={data.namaPelanggan}
                onChange={(e) => onChange({ ...data, namaPelanggan: e.target.value })}
              />
            </div>

            {isPln && (
              <div id="plnFields">
                {!isBriPln && (
                  <div className="pos-form-group">
                    <label>No. Meter</label>
                    <span className="colon">:</span>
                    <input
                      type="text"
                      id="noMeterDual"
                      value={data.noMeter}
                      onChange={(e) => onChange({ ...data, noMeter: e.target.value })}
                    />
                  </div>
                )}
                <div className="pos-form-group">
                  <label>Tarif / Daya</label>
                  <span className="colon">:</span>
                  <input
                    type="text"
                    id="tarifDaya"
                    value={data.tarifDaya}
                    onChange={(e) => onChange({ ...data, tarifDaya: e.target.value })}
                  />
                </div>
                <div className="pos-form-group">
                  <label>JML KWH</label>
                  <span className="colon">:</span>
                  <input
                    type="text"
                    id="jmlKwh"
                    value={data.jmlKwh}
                    onChange={(e) => onChange({ ...data, jmlKwh: e.target.value })}
                  />
                </div>
                <div className="pos-form-group">
                  <label>Nomor Token</label>
                  <span className="colon">:</span>
                  <div className="flex-1 flex gap-1.5">
                    <input
                      type="text"
                      id="stroomToken"
                      className="w-full"
                      value={data.tokenStroom}
                      onChange={(e) => onChange({ ...data, tokenStroom: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={handleRandomToken}
                      title="Acak Token 20 Digit"
                      className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded cursor-pointer text-slate-700 whitespace-nowrap font-medium"
                    >
                      Acak
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="pos-form-group">
              <label>{isPln ? (isBriPln ? 'Nominal (Rp)' : 'Rp Stroom') : 'Jumlah Tagihan'}</label>
              <span className="colon">:</span>
              <input
                type="number"
                id="nominal"
                value={data.nominal}
                onChange={(e) => onChange({ ...data, nominal: parseFloat(e.target.value) || 0 })}
              />
            </div>

            <div className="pos-form-group">
              <label>Biaya Adm / Bank</label>
              <span className="colon">:</span>
              <input
                type="number"
                id="adminBank"
                value={data.adminBank}
                onChange={(e) => onChange({ ...data, adminBank: parseFloat(e.target.value) || 0 })}
              />
            </div>

            {isBriPln && (
              <>
                <div className="pos-form-group">
                  <label>PPN/PPJ</label>
                  <span className="colon">:</span>
                  <input
                    type="text"
                    id="ppnPpjText"
                    value={data.ppnPpjText || 'RP. 0,00/4.762,00'}
                    onChange={(e) => onChange({ ...data, ppnPpjText: e.target.value })}
                  />
                </div>
                <div className="pos-form-group">
                  <label>RP TOKEN</label>
                  <span className="colon">:</span>
                  <input
                    type="text"
                    id="rpTokenText"
                    value={data.rpTokenText || 'RP. 95.238,00'}
                    onChange={(e) => onChange({ ...data, rpTokenText: e.target.value })}
                  />
                </div>
              </>
            )}

            <div className="pos-form-group">
              <label>PLN REFF / No. Ref</label>
              <span className="colon">:</span>
              <input
                type="text"
                id="noRef"
                value={isPln ? data.noReff : (data.noRefIndihome || data.noReff)}
                onChange={(e) =>
                  onChange({
                    ...data,
                    noReff: e.target.value,
                    noRefIndihome: e.target.value,
                  })
                }
              />
            </div>
          </>
        )}

        {/* Tanggal Pembayaran */}
        <div className="pos-form-group">
          <label>Tanggal / Jam</label>
          <span className="colon">:</span>
          <div className="flex-1 flex gap-1.5">
            <input
              type="text"
              id="tglBayar"
              className="w-full"
              value={data.tanggalWaktu}
              onChange={(e) => onChange({ ...data, tanggalWaktu: e.target.value })}
            />
            <button
              type="button"
              onClick={handleSetCurrentTime}
              title="Set ke Waktu Sekarang"
              className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded cursor-pointer text-slate-700 whitespace-nowrap font-medium"
            >
              Sekarang
            </button>
          </div>
        </div>

        {/* Opsi Tampilan (Bingkai Cetak, Pita Biru BRI / Stempel Jaya Mart) */}
        <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 mb-4 space-y-2.5">
          {/* Opsi Garis Bingkai Cetak */}
          <div className="bg-slate-50 p-2.5 rounded border border-slate-200 space-y-2">
            <label className="flex items-center gap-2 cursor-pointer select-none font-medium text-slate-800">
              <input
                type="checkbox"
                id="chkShowBorder"
                checked={data.showBorder !== false}
                onChange={(e) => onChange({ ...data, showBorder: e.target.checked })}
                className="rounded text-[#0078d4] focus:ring-sky-500"
              />
              <span>Garis Bingkai Struk (Rapi & Teratur Saat Cetak / Print)</span>
            </label>

            {data.showBorder !== false && (
              <div className="flex items-center gap-2 pl-6 text-[11px] flex-wrap">
                <span className="text-slate-500 font-medium">Bentuk Garis:</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => onChange({ ...data, borderStyle: 'solid' })}
                    className={`px-2 py-0.5 rounded border cursor-pointer transition-colors ${
                      (data.borderStyle || 'solid') === 'solid'
                        ? 'bg-[#0078d4] text-white border-[#0078d4] font-medium shadow-xs'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    Solid (Lurus)
                  </button>
                  <button
                    type="button"
                    onClick={() => onChange({ ...data, borderStyle: 'dashed' })}
                    className={`px-2 py-0.5 rounded border cursor-pointer transition-colors ${
                      data.borderStyle === 'dashed'
                        ? 'bg-[#0078d4] text-white border-[#0078d4] font-medium shadow-xs'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    Putus-putus
                  </button>
                  <button
                    type="button"
                    onClick={() => onChange({ ...data, borderStyle: 'double' })}
                    className={`px-2 py-0.5 rounded border cursor-pointer transition-colors ${
                      data.borderStyle === 'double'
                        ? 'bg-[#0078d4] text-white border-[#0078d4] font-medium shadow-xs'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    Ganda (Double)
                  </button>
                </div>
              </div>
            )}
          </div>

          {(isBriPln || isBrilinkTelkom) && (
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                id="toggleBriHeaderLogo"
                checked={data.showBriHeaderLogo !== false}
                onChange={(e) => onChange({ ...data, showBriHeaderLogo: e.target.checked })}
                className="rounded text-[#0078d4] focus:ring-sky-500"
              />
              <span className="font-medium text-slate-800">
                Tampilkan Logo BRI di Atas Struk (Sesuai Data Asli)
              </span>
            </label>
          )}

          {isBriPln ? (
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={data.showBriRibbon !== false}
                onChange={(e) => onChange({ ...data, showBriRibbon: e.target.checked })}
                className="rounded text-[#0078d4] focus:ring-sky-500"
              />
              <span>Tampilkan Pita Samping Biru Khas Kertas Roll BRI (EXP 010128/5716)</span>
            </label>
          ) : !isBrilinkTelkom ? (
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={data.showStamp}
                onChange={(e) => onChange({ ...data, showStamp: e.target.checked })}
                className="rounded text-[#0078d4] focus:ring-sky-500"
              />
              <span>Tampilkan Stempel JAYA MART SENTANI</span>
            </label>
          ) : null}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onReset}
              className="text-slate-500 hover:text-rose-600 underline cursor-pointer text-xs"
            >
              Reset Formulir
            </button>
          </div>
        </div>

        {/* Tombol Cetak Struk */}
        <div className="flex justify-end">
          <button type="submit" className="btn-print">
            Cetak Struk
          </button>
        </div>
      </form>
    </div>
  );
};
