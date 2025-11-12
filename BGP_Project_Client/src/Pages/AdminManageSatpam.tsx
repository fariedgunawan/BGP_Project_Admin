import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
} from "@heroui/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const AdminManageSatpam = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };
  const dataSatpam = [
    {
      id: 1,
      nama: "Ahmad Fauzi",
      nim: "123456789",
      asalKota: "Bandung",
      noHp: "081234567890",
    },
    {
      id: 2,
      nama: "Rina Setiawan",
      nim: "987654321",
      asalKota: "Jakarta",
      noHp: "089876543210",
    },
    {
      id: 3,
      nama: "Bagus Pratama",
      nim: "192837465",
      asalKota: "Surabaya",
      noHp: "082112223334",
    },
  ];

  return (
    <div className="flex flex-col p-5">
      <div className="container-content flex flex-col gap-4">
        {/* Header Section */}
        <div className="header-container flex flex-row items-center justify-between mt-5">
          <h2 className="font-semibold text-[25px] text-[#122C93]">
            Manage Satpam
          </h2>
          <Button
            variant="solid"
            className="bg-[#122C93] text-white font-semibold w-30 h-12 text-[16px]"
            onPress={() => handleOpen()}
          >
            Tambah +
          </Button>
        </div>

        {/* MODAL UNTUK ADD  */}
        <Modal backdrop={"opaque"} isOpen={isOpen} onClose={onClose} size="4xl">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <div className="form-input flex flex-col gap-8 p-3">
                    <div className="container-form flex flex-row justify-between">
                      <div className="right-section flex flex-col items-start gap-8">
                        <Input
                          type="text"
                          variant="underlined"
                          size="lg"
                          className="w-100"
                          label="Nama"
                          placeholder="Masukan nama"
                          labelPlacement="outside-top"
                        ></Input>
                        <Input
                          type="text"
                          variant="underlined"
                          size="lg"
                          className="w-100"
                          label="Asal Daerah"
                          placeholder="Masukan asal"
                          labelPlacement="outside-top"
                        ></Input>
                      </div>
                      <div className="left-section flex flex-col items-start gap-8">
                        <Input
                          type="number"
                          variant="underlined"
                          size="lg"
                          className="w-100"
                          label="NIP"
                          placeholder="Masukan NIP"
                          labelPlacement="outside-top"
                        ></Input>
                        <Input
                          type="number"
                          variant="underlined"
                          size="lg"
                          className="w-100"
                          label="No Hp"
                          placeholder="Masukan No Hp"
                          labelPlacement="outside-top"
                        ></Input>
                      </div>
                    </div>

                    <div className="upload-file flex flex-row items-center">
                      <div className="upload-section flex flex-row items-center gap-2">
                        <Input
                          variant="underlined"
                          size="lg"
                          type="file"
                          className="w-100"
                          label="Foto Anggota"
                          placeholder="Pilih File"
                          labelPlacement="outside-top"
                        ></Input>
                        <FaTrash className="text-[#A70202]" />
                      </div>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter className="-mt-[60px]">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Batal -
                  </Button>
                  <Button variant="solid" className="bg-[#122C93] text-white" onPress={onClose}>
                    Simpan +
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        {/* Modal UNTUK ADD */}

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
              <TableColumn>Asal Kota</TableColumn>
              <TableColumn>No HP</TableColumn>
              <TableColumn className="text-center">Action</TableColumn>
            </TableHeader>
            <TableBody>
              {dataSatpam.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.nim}</TableCell>
                  <TableCell>{item.asalKota}</TableCell>
                  <TableCell>{item.noHp}</TableCell>
                  <TableCell>
                    <div className="flex justify-center gap-3">
                      <Button
                        size="sm"
                        className="bg-[#02A758] text-white font-semibold"
                        startContent={<FaEdit />}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        className="bg-[#A70202] text-white font-semibold"
                        startContent={<FaTrash />}
                      >
                        Delete
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

export default AdminManageSatpam;
