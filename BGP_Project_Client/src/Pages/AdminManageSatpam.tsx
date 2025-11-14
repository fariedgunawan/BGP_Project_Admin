// AdminManageSatpam.tsx
import React, { useEffect, useState } from "react";
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
  addToast,
} from "@heroui/react";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

import { FaEdit, FaTrash } from "react-icons/fa";

interface Satpam {
  id: number;
  nama: string;
  asal_daerah: string;
  nip: string;
  no_telp: string;
  gambar: string;
  milvus_id?: string;
  created_at?: string;
}

const API_BASE =
  "https://lorembe-cedvhgckgdesh6ht.southeastasia-01.azurewebsites.net";

const AdminManageSatpam: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [dataSatpam, setDataSatpam] = useState<Satpam[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // form state (shared for add & edit)
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formNama, setFormNama] = useState<string>("");
  const [formAsal, setFormAsal] = useState<string>("");
  const [formNip, setFormNip] = useState<string>("");
  const [formNoTelp, setFormNoTelp] = useState<string>("");
  const [formFile, setFormFile] = useState<File | null>(null);

  // ambil token dari cookie
  const getToken = (): string | undefined => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    return token;
  };

  // fetch data
  const fetchSatpam = async () => {
    setLoading(true);
    try {
      const token = getToken();
      const res = await fetch(`${API_BASE}/api/satpam`, {
        method: "GET",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const data = await res.json();
      setDataSatpam(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Fetch satpam error:", error);
      alert("Gagal mengambil data satpam. Cek console untuk detail.");
      setDataSatpam([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSatpam();
  }, []);

  // reset form
  const resetForm = () => {
    setFormNama("");
    setFormAsal("");
    setFormNip("");
    setFormNoTelp("");
    setFormFile(null);
    setIsEditMode(false);
    setEditingId(null);
    setPreviewImage(null);
  };

  // open add modal
  const openAddModal = () => {
    resetForm();
    setIsEditMode(false);
    onOpen();
  };

  // open edit modal and fill form
  const openEditModal = (item: Satpam) => {
    setIsEditMode(true);
    setEditingId(item.id);
    setFormNama(item.nama ?? "");
    setFormAsal(item.asal_daerah ?? "");
    setFormNip(item.nip ?? "");
    setFormNoTelp(item.no_telp ?? "");
    setFormFile(null); // user can choose new file to replace
    setPreviewImage(item.gambar ? `${API_BASE}/${item.gambar}` : null);
    onOpen();
  };

  // submit add (POST)
  const handleAdd = async () => {
    setSubmitting(true);
    try {
      const token = getToken();
      const fd = new FormData();
      fd.append("nama", formNama);
      fd.append("asal_daerah", formAsal);
      fd.append("nip", formNip);
      fd.append("no_telp", formNoTelp);
      if (formFile) {
        fd.append("gambar", formFile);
      }

      const res = await fetch(`${API_BASE}/api/satpam`, {
        method: "POST",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          // DO NOT set Content-Type, browser will set multipart boundary
        },
        body: fd,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Create failed: ${res.status} - ${text}`);
      }

      // sukses
      await fetchSatpam();
      resetForm();
      onClose();
      addToast({
        title: "Berhasil",
        description: "Data satpam berhasil ditambahkan.",
        variant: "flat",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
        color: "success",
      });
    } catch (error) {
      console.error("Add error:", error);
      alert("Gagal menambah satpam. Cek console untuk detail.");
    } finally {
      setSubmitting(false);
    }
  };

  // submit edit (PUT)
  const handleEdit = async () => {
    if (editingId === null) return;
    setSubmitting(true);
    try {
      const token = getToken();
      const fd = new FormData();
      fd.append("nama", formNama);
      fd.append("asal_daerah", formAsal);
      fd.append("nip", formNip);
      fd.append("no_telp", formNoTelp);
      if (formFile) {
        fd.append("gambar", formFile);
      }

      const res = await fetch(`${API_BASE}/api/satpam/${editingId}`, {
        method: "PUT",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: fd,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Update failed: ${res.status} - ${text}`);
      }

      await fetchSatpam();
      resetForm();
      onClose();
      addToast({
        title: "Berhasil",
        description: "Data satpam berhasil diupdate.",
        variant: "flat",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
        color: "success",
      });
    } catch (error) {
      console.error("Edit error:", error);
      alert("Gagal mengupdate satpam. Cek console untuk detail.");
    } finally {
      setSubmitting(false);
    }
  };

  // delete
  const handleDelete = async (id: number) => {
    try {
      const token = getToken();
      const res = await fetch(`${API_BASE}/api/satpam/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Delete failed: ${res.status} - ${text}`);
      }

      // refresh
      await fetchSatpam();
      addToast({
        title: "Berhasil",
        description: "Data satpam berhasil dihapus.",
        variant: "flat",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
        color: "danger",
      });
    } catch (error) {
      console.error("Delete error:", error);
      alert("Gagal menghapus satpam. Cek console untuk detail.");
    }
  };

  // handle submit (add or edit)
  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (isEditMode) {
      await handleEdit();
    } else {
      await handleAdd();
    }
  };

  return (
    <div className="flex flex-col p-5">
      <div className="container-content flex flex-col gap-4">
        {/* HEADER */}
        <div className="header-container flex flex-row items-center justify-between mt-5">
          <h2 className="font-semibold text-[25px] text-[#122C93]">
            Manage Satpam
          </h2>
          <Button
            variant="solid"
            className="bg-[#122C93] text-white font-semibold w-30 h-12 text-[16px]"
            onPress={openAddModal}
          >
            Tambah +
          </Button>
        </div>

        {/* TABLE */}
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
              <TableColumn>Asal Daerah</TableColumn>
              <TableColumn>No Telp</TableColumn>
              <TableColumn className="text-center">Action</TableColumn>
            </TableHeader>

            <TableBody
              items={
                loading ? [] : dataSatpam.map((it, i) => ({ ...it, no: i + 1 }))
              }
              emptyContent={loading ? <Spinner size="lg" /> : "Tidak ada data"}
            >
              {(item: Satpam & { no: number }) => (
                <TableRow key={item.id}>
                  <TableCell>{item.no}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.nip}</TableCell>
                  <TableCell>{item.asal_daerah}</TableCell>
                  <TableCell>{item.no_telp}</TableCell>
                  <TableCell>
                    <div className="flex justify-center gap-3">
                      <Button
                        size="sm"
                        className="bg-[#02A758] text-white font-semibold"
                        startContent={<FaEdit />}
                        onPress={() =>
                          openEditModal({
                            id: item.id,
                            nama: item.nama,
                            asal_daerah: item.asal_daerah,
                            nip: item.nip,
                            no_telp: item.no_telp,
                            gambar: item.gambar,
                            milvus_id: item.milvus_id,
                            created_at: item.created_at,
                          })
                        }
                      >
                        Edit
                      </Button>
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
              )}
            </TableBody>
          </Table>
        </div>

        {/* MODAL ADD/EDIT */}
        <Modal
          backdrop={"opaque"}
          isOpen={isOpen}
          onClose={() => {
            onClose();
            resetForm();
          }}
          size="4xl"
        >
          <ModalContent>
            {() => (
              <>
                <ModalBody>
                  <form
                    onSubmit={handleSubmit}
                    className="form-input flex flex-col gap-6 p-3"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col gap-4">
                        <Input
                          type="text"
                          variant="underlined"
                          size="lg"
                          label="Nama"
                          placeholder="Masukan nama"
                          labelPlacement="outside-top"
                          value={formNama}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFormNama(e.target.value)
                          }
                          required
                        />
                        <Input
                          type="text"
                          variant="underlined"
                          size="lg"
                          label="Asal Daerah"
                          placeholder="Masukan asal"
                          labelPlacement="outside-top"
                          value={formAsal}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFormAsal(e.target.value)
                          }
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-4">
                        <Input
                          type="text"
                          variant="underlined"
                          size="lg"
                          label="NIP"
                          placeholder="Masukan NIP"
                          labelPlacement="outside-top"
                          value={formNip}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFormNip(e.target.value)
                          }
                          required
                        />
                        <Input
                          type="text"
                          variant="underlined"
                          size="lg"
                          label="No Hp"
                          placeholder="Masukan No Hp"
                          labelPlacement="outside-top"
                          value={formNoTelp}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFormNoTelp(e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {previewImage && (
                        <div className="mt-3">
                          <img
                            src={previewImage}
                            alt="Preview"
                            className="w-28 h-28 object-cover rounded-lg border"
                          />
                        </div>
                      )}
                      <Input
                        variant="underlined"
                        size="lg"
                        type="file"
                        label="Foto Anggota (opsional)"
                        placeholder="Pilih File"
                        labelPlacement="outside-top"
                        className="w-[300px]"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const file = e.target.files?.[0] ?? null;
                          setFormFile(file);

                          if (file) {
                            const url = URL.createObjectURL(file);
                            setPreviewImage(url);
                          }
                        }}
                      />
                    </div>
                  </form>
                </ModalBody>

                <ModalFooter className="-mt-[60px]">
                  <Button
                    color="danger"
                    className="font-semibold"
                    variant="light"
                    onPress={() => {
                      onClose();
                      resetForm();
                    }}
                  >
                    Batal -
                  </Button>

                  <Button
                    variant="solid"
                    className="bg-[#122C93] text-white font-semibold"
                    onPress={() => void handleSubmit()}
                    disabled={submitting}
                  >
                    {submitting ? (
                      <div className="flex items-center gap-2">
                        <Spinner size="sm" />
                        <span>
                          {isEditMode ? "Menyimpan..." : "Menyimpan..."}
                        </span>
                      </div>
                    ) : (
                      <span>{isEditMode ? "Update" : "Simpan +"}</span>
                    )}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default AdminManageSatpam;
