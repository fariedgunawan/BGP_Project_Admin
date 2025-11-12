import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

const AdminManageShift = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };
  const dataSatpam = [
    {
      id: 1,
      hari: "Senin",
      sesi: "07:00 - 15:00",
      nama: "Yohanes",
      nip: "12345",
    },
    {
      id: 2,
      hari: "Senin",
      sesi: "07:00 - 15:00",
      nama: "Yohanes",
      nip: "12345",
    },
    {
      id: 3,
      hari: "Senin",
      sesi: "07:00 - 15:00",
      nama: "Yohanes",
      nip: "12345",
    },
  ];
  return (
    <div className="flex flex-col p-5">
      <div className="container-content flex flex-col gap-4">
        {/* Header Section */}
        <div className="header-container flex flex-row items-center justify-between mt-5">
          <h2 className="font-semibold text-[25px] text-[#122C93]">
            Manage Shift
          </h2>
          <Button
            variant="solid"
            onPress={() => handleOpen()}
            className="bg-[#122C93] text-white font-semibold w-30 h-12 text-[16px]"
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
                        <Select
                          className="w-100"
                          label="Hari"
                          size="lg"
                          variant="underlined"
                          placeholder="Masukan hari"
                          labelPlacement="outside"
                        >
                          {animals.map((animal) => (
                            <SelectItem key={animal.key}>
                              {animal.label}
                            </SelectItem>
                          ))}
                        </Select>
                        <Select
                          className="w-100"
                          label="Sesi"
                          size="lg"
                          variant="underlined"
                          placeholder="Masukan Sesi"
                          labelPlacement="outside"
                        >
                          {animals.map((animal) => (
                            <SelectItem key={animal.key}>
                              {animal.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      <div className="left-section flex flex-col items-start gap-8">
                        <Select
                          className="w-100"
                          label="Nama"
                          size="lg"
                          variant="underlined"
                          placeholder="Masukan Nama"
                          labelPlacement="outside"
                        >
                          {animals.map((animal) => (
                            <SelectItem key={animal.key}>
                              {animal.label}
                            </SelectItem>
                          ))}
                        </Select>
                        <Select
                          className="w-100"
                          label="NIP"
                          size="lg"
                          variant="underlined"
                          placeholder="Masukan NIP"
                          labelPlacement="outside"
                        >
                          {animals.map((animal) => (
                            <SelectItem key={animal.key}>
                              {animal.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter className="flex justify-center gap-5">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Batal -
                  </Button>
                  <Button
                    variant="solid"
                    className="bg-[#122C93] text-white"
                    onPress={onClose}
                  >
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
              <TableColumn>Hari</TableColumn>
              <TableColumn>Sesi</TableColumn>
              <TableColumn>Nama</TableColumn>
              <TableColumn>NIP</TableColumn>
              <TableColumn className="text-center">Action</TableColumn>
            </TableHeader>
            <TableBody>
              {dataSatpam.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.hari}</TableCell>
                  <TableCell>{item.sesi}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.nip}</TableCell>
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

export default AdminManageShift;
