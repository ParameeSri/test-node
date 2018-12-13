var users = [
  {
    'id': 1,
    'username': 'goldroger',
    'name': 'Gol D. Roger',
    'position': 'Pirate King'
  },
  {
    'id': 2,
    'username': 'mrzero',
    'name': 'Sir Crocodile',
    'position': 'Former-Shichibukai'
  },
  {
    'id': 3,
    'username': 'luffy',
    'name': 'Monkey D. Luffy',
    'position': 'Captain'
  },
  {
    'id': 4,
    'username': 'kuzan',
    'name': 'Aokiji',
    'position': 'Former Marine Admiral'
  },
  {
    'id': 5,
    'username': 'shanks',
    'name': 'Red-Haired Shanks',
    'position': 'The 4 Emperors'
  }
]

/* สร้างฟังก์ชัน สำหรับหา user ทั้งหมดในระบบ ในส่วนนี้จะให้ส่งค่า users ทั้งหมดกลับไป */
exports.findAll = () => {
  return users
}

/* ฟังก์ชั่นเพื่อหา user จาก id */
exports.findById = (id) => {
  return users.filter(row => row.id === parseInt(id))
}
