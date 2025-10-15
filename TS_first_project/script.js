"use strict";
const nameInput = document.getElementById("studentName");
const ageInput = document.getElementById("studentAge");
const courseInput = document.getElementById("Course");
// const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const studentTable = document.getElementById("studentTable");
let students = [];
let editId = null;
function addOrUpdateStudent() {
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    const course = courseInput.value.trim();
    if (!name || !age || !course) {
        alert("");
        return;
    }
    if (editId !== null) {
        students = students.map((stu) => stu.id === editId ? Object.assign(Object.assign({}, stu), { name, age, course }) : stu);
        editId = null;
        addBtn.textContent = "Add Student";
    }
    else {
        const newStudent = { id: Date.now(), name, age, course };
        students.push(newStudent);
    }
    renderStudents();
    clearForm();
}
function renderStudents() {
    studentTable.innerHTML = "";
    if (students.length === 0) {
        studentTable.innerHTML = `<tr><td colspan="4" class="text-center py-4 text-white/60">No students found</td></tr>`;
        return;
    }
    students.forEach((stu) => {
        const row = document.createElement("tr");
        row.className = "border-white  border-b";
        row.innerHTML = ` <td class="py-2 px-4">${stu.name}</td>
      <td class="py-2 px-4">${stu.age}</td>
       <td class="py-2 px-4">${stu.course}</td>
        <button class="bg-yellow-500 hover:bg-yellow-400 px-3 py-1 gap-2 text-xs font-semibold" onclick="editStudent(${stu.id})">Update</button>
     
        <button class="bg-red-500 hover:bg-red-600 px-3 py-1  text-xs font-semibold" onclick="deleteStudent(${stu.id})">Delete</button> `;
        studentTable.appendChild(row);
    });
}
function editStudent(id) {
    const student = students.find((stu) => stu.id === id);
    if (!student)
        return;
    nameInput.value = student.name;
    ageInput.value = student.age.toString();
    courseInput.value = student.course;
    editId = id;
    addBtn.textContent = "Update Student";
}
function deleteStudent(id) {
    students = students.filter((stu) => stu.id !== id);
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
