// Danh sách thiết bị ban đầu
let devices = [
  { id: "DEV_001", name: "Đèn trần", room: "Phòng khách", power: 40, status: true },
  { id: "DEV_002", name: "Máy lạnh", room: "Phòng ngủ", power: 1200, status: false }
];

// 1. Thêm thiết bị mới
const createDevice = (list, newDev) => {
  if (!newDev.name) return "Thiếu tên thiết bị";
  if (!newDev.room) return "Thiếu tên phòng";
  if (newDev.power <= 0) return "Công suất phải lớn hơn 0";

  let nextId = "DEV_00" + (list.length + 1);

  let deviceToAdd = {
    id: nextId,
    name: newDev.name,
    room: newDev.room,
    power: newDev.power,
    status: newDev.status
  };

  list.push(deviceToAdd);
  return deviceToAdd;
};
// Kiểm tra từng điều kiện đầu vào xem có thiếu hay sai không
// Tự tạo mã mới bằng cách lấy độ dài mảng + 1 rồi nối với chữ DEV_00
// Gom thông tin thành 1 object rõ ràng rồi push vào cuối mảng

// 2. Lọc thiết bị theo phòng
const readDevicesByRoom = (list, roomName) => {
  return list.filter(item => item.room === roomName);
};
// Dùng filter duyệt mảng, cái nào có tên phòng trùng với roomName thì gom lại thành mảng mới

// 3. Cập nhật thiết bị
const updateDevice = (list, id, updateData) => {
  let dev = list.find(item => item.id === id);
  if (!dev) return null;

  if (updateData.name !== undefined) dev.name = updateData.name;
  if (updateData.power !== undefined) dev.power = updateData.power;
  if (updateData.status !== undefined) dev.status = updateData.status;

  return dev;
};
// Dùng find tìm đúng thiết bị theo id, không có thì dừng trả về null
// Kiểm tra !== undefined để khi người dùng tắt máystatus sẽ  là false, code vẫn nhận và cập nhật bình thường

// 4. Xóa thiết bị
const deleteDevice = (list, id) => {
  let index = list.findIndex(item => item.id === id);
  if (index === -1) return false;

  list.splice(index, 1);
  return true;
};
// findIndex tìm vị trí index của thiết bị trong mảng, không thấy thì trả về -1
// Có vị trí rồi thì dùng splice xóa đúng 1 phần tử tại vị trí đó

// Chạy thử kiểm tra kết quả 
console.log("Thêm mới:", createDevice(devices, { name: "Quạt bàn", room: "Phòng ngủ", power: 45, status: true }));
console.log("Tìm phòng ngủ:", readDevicesByRoom(devices, "Phòng ngủ"));
console.log("Tắt đèn DEV_001:", updateDevice(devices, "DEV_001", { status: false }));
console.log("Xóa máy lạnh DEV_002:", deleteDevice(devices, "DEV_002"));

console.table(devices);
