import { useEffect, useState } from "react";
import EquipmentForm from "./components/EquipmentForm";
import EquipmentTable from "./components/EquipmentTable";
import Pagination from "./components/Pagination";

import {
  fetchEquipment,
  addEquipment,
  updateEquipment,
  deleteEquipment,
} from "./services/api";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [selected, setSelected] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

    // ✅ PAGINATION LOGIC (ADD HERE)
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = equipment.slice(
    startIndex,
    startIndex + itemsPerPage
  );


  const loadData = async () => {
    const res = await fetchEquipment();
    setEquipment(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (data) => {
    if (selected) {
      await updateEquipment(selected._id, data);
      setSelected(null);
    } else {
      await addEquipment(data);
    }
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteEquipment(id);
    loadData();
  };

  return (
    <div>
      <h2>Equipment Tracker</h2>
      <EquipmentForm onSubmit={handleSubmit} selected={selected} />
     <EquipmentTable
  data={paginatedData}
  onEdit={setSelected}
  onDelete={handleDelete}
/>

<Pagination
  total={equipment.length}
  perPage={itemsPerPage}
  current={currentPage}
  onPageChange={setCurrentPage}
/>

    </div>
  );
}

export default App;
