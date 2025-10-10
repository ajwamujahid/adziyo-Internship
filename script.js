var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var nameInput = document.getElementById("studentName");
var ageInput = document.getElementById("studentAge");
var courseInput = document.getElementById("Course");
var addBtn = document.getElementById("addBtn");
var studentTable = document.getElementById("studentTable");
var students = [];
var editId = null;
function addOrUpdateStudent() {
  var name = nameInput.value.trim();
  var age = Number(ageInput.value);
  var course = courseInput.value.trim();
  if (!name || !age || !course) {
    alert("");
    return;
  }
  if (editId !== null) {
    students = students.map(function (stu) {
      return stu.id === editId
        ? __assign(__assign({}, stu), { name: name, age: age, course: course })
        : stu;
    });
    editId = null;
    addBtn.textContent = "Add Student";
  } else {
    var newStudent = { id: Date.now(), name: name, age: age, course: course };
    students.push(newStudent);
  }
  renderStudents();
  clearForm();
}
function renderStudents() {
  studentTable.innerHTML = "";
  if (students.length === 0) {
    studentTable.innerHTML =
      '<tr><td colspan="4" class="text-center py-4 text-white/60">No students found</td></tr>';
    return;
  }
  students.forEach(function (stu) {
    var row = document.createElement("tr");
    row.className = "border-white  border-b";
    row.innerHTML = ' <td class="py-2 px-4">'
      .concat(stu.name, '</td>\n      <td class="py-2 px-4">')
      .concat(stu.age, '</td>\n       <td class="py-2 px-4">')
      .concat(
        stu.course,
        '</td>\n        <button class="bg-yellow-500 hover:bg-yellow-400 px-3 py-1 gap-2 text-xs font-semibold" onclick="editStudent('
      )
      .concat(
        stu.id,
        ')">Update</button>\n     \n        <button class="bg-red-500 hover:bg-red-600 px-3 py-1  text-xs font-semibold" onclick="deleteStudent('
      )
      .concat(stu.id, ')">Delete</button> ');
    studentTable.appendChild(row);
  });
}
function editStudent(id) {
  var student = students.find(function (stu) {
    return stu.id === id;
  });
  if (!student) return;
  nameInput.value = student.name;
  ageInput.value = student.age.toString();
  courseInput.value = student.course;
  editId = id;
  addBtn.textContent = "Update Student";
}
function deleteStudent(id) {
  students = students.filter(function (stu) {
    return stu.id !== id;
  });
  renderStudents();
}
function clearForm() {
  nameInput.value = "";
  ageInput.value = "";
  courseInput.value = "";
}
addBtn.addEventListener("click", addOrUpdateStudent);
window.editStudent = editStudent;
window.deleteStudent = deleteStudent;
