import { useState } from "react";

export default function Mahasiswa() {
  const [data, setData] = useState([
    { nim: "20211001", nama: "Andi" },
    { nim: "20211002", nama: "Budi" },
    { nim: "20211003", nama: "Citra" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newMahasiswa, setNewMahasiswa] = useState({ nim: "", nama: "" });

  const handleAdd = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    setData([...data, newMahasiswa]);
    setShowModal(false);
    setNewMahasiswa({ nim: "", nama: "" });
  };

  const handleDelete = (nim) => {
    setData(data.filter((m) => m.nim !== nim));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Mahasiswa</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        onClick={handleAdd}
      >
        + Tambah Mahasiswa
      </button>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">NIM</th>
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((mhs, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{mhs.nim}</td>
              <td className="border px-4 py-2">{mhs.nama}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(mhs.nim)}
                  className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h2 className="text-xl font-bold mb-4">Tambah Mahasiswa</h2>
            <input
              type="text"
              placeholder="NIM"
              className="w-full border p-2 mb-2"
              value={newMahasiswa.nim}
              onChange={(e) =>
                setNewMahasiswa({ ...newMahasiswa, nim: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Nama"
              className="w-full border p-2 mb-4"
              value={newMahasiswa.nama}
              onChange={(e) =>
                setNewMahasiswa({ ...newMahasiswa, nama: e.target.value })
              }
            />
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-3 py-1 rounded mr-2"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
