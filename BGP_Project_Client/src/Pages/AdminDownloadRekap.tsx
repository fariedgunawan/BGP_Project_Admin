import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { FaEdit } from "react-icons/fa";

const AdminDownloadRekap = () => {
  const datarekapabsen = [
    {
      id: 1,
      nama: "Ahmad Fauzi",
      nip: "123456789",
      kategori: "Tepat",
      jam_masuk: "08:00",
      jam_keluar: "17:00",
    },
    {
      id: 2,
      nama: "Ahmad Fauzi",
      nip: "123456789",
      kategori: "Tepat",
      jam_masuk: "08:00",
      jam_keluar: "17:00",
    },
    {
      id: 3,
      nama: "Ahmad Fauzi",
      nip: "123456789",
      kategori: "Tepat",
      jam_masuk: "08:00",
      jam_keluar: "17:00",
    },
    {
      id: 4,
      nama: "Ahmad Fauzi",
      nip: "123456789",
      kategori: "Tepat",
      jam_masuk: "08:00",
      jam_keluar: "17:00",
    },
  ];

  const datarekappatroli = [
    {
      id: 1,
      nama: "Ahmad Fauzi",
      nip: "123456789",
      nama_pos: "Pos 1",
      jam: "12:00",
      status: "Kondusif",
      dokumentasi1: "image/1",
      dokumentasi2: "image/1",
      dokumentasi3: "image/1",
      dokumentasi4: "image/1",
    },
    {
      id: 2,
      nama: "Ahmad Fauzi",
      nip: "123456789",
      nama_pos: "Pos 1",
      jam: "12:00",
      status: "Kondusif",
      dokumentasi1: "image/1",
      dokumentasi2: "image/1",
      dokumentasi3: "image/1",
      dokumentasi4: "image/1",
    },
    {
      id: 3,
      nama: "Ahmad Fauzi",
      nip: "123456789",
      nama_pos: "Pos 1",
      jam: "12:00",
      status: "Kondusif",
      dokumentasi1: "image/1",
      dokumentasi2: "image/1",
      dokumentasi3: "image/1",
      dokumentasi4: "image/1",
    },
    {
      id: 4,
      nama: "Ahmad Fauzi",
      nip: "123456789",
      nama_pos: "Pos 1",
      jam: "12:00",
      status: "Kondusif",
      dokumentasi1: "image/1",
      dokumentasi2: "image/1",
      dokumentasi3: "image/1",
      dokumentasi4: "image/1",
    },
  ];
  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="container-content flex flex-col gap-4">
        {/* Header Section */}
        <div className="header-container flex flex-row items-center justify-between mt-5">
          <h2 className="font-semibold text-[25px] text-[#122C93]">
            Rekap Absensi Satpam
          </h2>
          <Button
            variant="solid"
            className="bg-[#122C93] text-white font-semibold w-30 h-12 text-[16px]"
          >
            Download
          </Button>
        </div>

        {/* Table Section */}
        <div className="table-section-container mt-6">
          <Table
            aria-label="Tabel Data Satpam"
            shadow="none"
            isStriped
            className="rounded-xl border border-gray-200"
          >
            <TableHeader>
              <TableColumn>No</TableColumn>
              <TableColumn>Nama</TableColumn>
              <TableColumn>NIP</TableColumn>
              <TableColumn>Kategori</TableColumn>
              <TableColumn>Jam Masuk</TableColumn>
              <TableColumn>Jam Keluar</TableColumn>
              <TableColumn className="text-center">Action</TableColumn>
            </TableHeader>
            <TableBody>
              {datarekapabsen.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.nip}</TableCell>
                  <TableCell>{item.kategori}</TableCell>
                  <TableCell>{item.jam_masuk}</TableCell>
                  <TableCell>{item.jam_keluar}</TableCell>
                  <TableCell>
                    <div className="flex justify-center gap-3">
                      <Button
                        size="sm"
                        className="bg-[#02A758] text-white font-semibold"
                        startContent={<FaEdit />}
                      >
                        Edit
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Sisi bawahnya */}
      <div className="container-content flex flex-col gap-4">
        {/* Header Section */}
        <div className="header-container flex flex-row items-center justify-between mt-5">
          <h2 className="font-semibold text-[25px] text-[#122C93]">
            Rekap Patroli Satpam
          </h2>
          <Button
            variant="solid"
            className="bg-[#122C93] text-white font-semibold w-30 h-12 text-[16px]"
          >
            Download
          </Button>
        </div>

        {/* Table Section */}
        <div className="table-section-container mt-6">
          <Table
            aria-label="Tabel Data Satpam"
            shadow="none"
            isStriped
            className="rounded-xl border border-gray-200"
          >
            <TableHeader>
              <TableColumn>No</TableColumn>
              <TableColumn>Nama</TableColumn>
              <TableColumn>NIP</TableColumn>
              <TableColumn>Jam</TableColumn>
              <TableColumn>Nama Pos</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Dokumentasi 1</TableColumn>
              <TableColumn>Dokumentasi 2</TableColumn>
              <TableColumn>Dokumentasi 3</TableColumn>
              <TableColumn>Dokumentasi 4</TableColumn>
              <TableColumn className="text-center">Action</TableColumn>
            </TableHeader>
            <TableBody>
              {datarekappatroli.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.nip}</TableCell>
                  <TableCell>{item.jam}</TableCell>
                  <TableCell>{item.nama_pos}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.dokumentasi1}</TableCell>
                  <TableCell>{item.dokumentasi2}</TableCell>
                  <TableCell>{item.dokumentasi3}</TableCell>
                  <TableCell>{item.dokumentasi4}</TableCell>
                  <TableCell>
                    <div className="flex justify-center gap-3">
                      <Button
                        size="sm"
                        className="bg-[#02A758] text-white font-semibold"
                        startContent={<FaEdit />}
                      >
                        Edit
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminDownloadRekap;
