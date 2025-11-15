import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Spinner,
} from "@heroui/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Admin {
  id: number;
  nama: string;
  username: string;
  role: string;
  created_at: string;
}

const AdminManageAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [dataadmin, setDataAdmin] = useState<Admin[]>([]);
  const [loadingTable, setLoadingTable] = useState(false);

  // State form
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Ambil token dari cookie
  const getToken = () => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    return token;
  };

  const filteredAdmins = dataadmin.filter((item) => item.role !== "SuperAdmin");

  // Format tanggal
  const formatDate = (dateString: any) => {
    const d = new Date(dateString);
    return d.toLocaleDateString("id-ID"); // dd/mm/yyyy
  };

  // GET admin list
  const fetchAdmins = async () => {
    setLoadingTable(true);
    try {
      const res = await fetch(
        "https://lorembe-cedvhgckgdesh6ht.southeastasia-01.azurewebsites.net/api/auth/admins",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      const data = await res.json();
      setDataAdmin(data.admins || []);
    } catch (error) {
      console.log("Error fetch admins:", error);
    }
    setLoadingTable(false);
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  // ADD Admin
  const handleAddAdmin = async () => {
    if (!nama || !username || !password) {
      alert("Semua field wajib diisi!");
      return;
    }

    try {
      const res = await fetch(
        "https://lorembe-cedvhgckgdesh6ht.southeastasia-01.azurewebsites.net/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify({
            nama,
            username,
            password,
            role: "Admin", // role otomatis
          }),
        }
      );

      const result = await res.json();
      alert(result.message || "Admin berhasil ditambahkan!");

      onClose();
      fetchAdmins();
    } catch (error) {
      console.log("Error add admin:", error);
    }
  };

  // DELETE admin
  const handleDelete = async (id: any) => {
    if (!confirm("Yakin ingin menghapus admin ini?")) return;

    try {
      const res = await fetch(
        `https://lorembe-cedvhgckgdesh6ht.southeastasia-01.azurewebsites.net/api/auth/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      const data = await res.json();
      alert(data.message);
      fetchAdmins();
    } catch (error) {
      console.log("Error delete:", error);
    }
  };

  return (
    <div className="flex flex-col p-5">
      <div className="container-content flex flex-col gap-4">
        {/* Header */}
        <div className="header-container flex flex-row items-center justify-between mt-5">
          <h2 className="font-semibold text-[25px] text-[#122C93]">
            Manage Admin
          </h2>
          <Button
            variant="solid"
            onPress={() => onOpen()}
            className="bg-[#122C93] text-white font-semibold w-30 h-12 text-[16px]"
          >
            Tambah +
          </Button>
        </div>

        {/* MODAL ADD */}
        <Modal backdrop={"opaque"} isOpen={isOpen} onClose={onClose} size="4xl">
          <ModalContent>
            <ModalBody>
              <div className="form-input flex flex-col gap-8 p-3">
                <Input
                  type="text"
                  variant="underlined"
                  size="lg"
                  label="Nama"
                  placeholder="Masukan nama"
                  labelPlacement="outside-top"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
                <Input
                  type="text"
                  variant="underlined"
                  size="lg"
                  label="Username"
                  placeholder="Masukan Username"
                  labelPlacement="outside-top"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  type="password"
                  variant="underlined"
                  size="lg"
                  label="Password"
                  placeholder="Masukan Password"
                  labelPlacement="outside-top"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </ModalBody>

            <ModalFooter className="flex justify-center gap-5">
              <Button color="danger" variant="light" onPress={onClose}>
                Batal -
              </Button>
              <Button
                variant="solid"
                className="bg-[#122C93] text-white"
                onPress={handleAddAdmin}
              >
                Simpan +
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* TABLE */}
        <div className="table-section-container mt-6">
          {loadingTable ? (
            <div className="flex justify-center py-10">
              <Spinner label="Memuat data..." />
            </div>
          ) : (
            <Table
              aria-label="Tabel Data Admin"
              shadow="none"
              isStriped
              className="rounded-xl border border-gray-200"
            >
              <TableHeader>
                <TableColumn>No</TableColumn>
                <TableColumn>Nama Pengguna</TableColumn>
                <TableColumn>Username</TableColumn>
                <TableColumn>Created At</TableColumn>
                <TableColumn className="text-center">Action</TableColumn>
              </TableHeader>

              <TableBody>
                {filteredAdmins
                  .filter((item) => item.role !== "SuperAdmin")
                  .map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.nama}</TableCell>
                      <TableCell>{item.username}</TableCell>
                      <TableCell>{formatDate(item.created_at)}</TableCell>
                      <TableCell>
                        <div className="flex justify-center">
                          <Button
                            size="sm"
                            className="bg-[#A70202] text-white font-semibold"
                            startContent={<FaTrash />}
                            onPress={() => handleDelete(item.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminManageAdmin;
