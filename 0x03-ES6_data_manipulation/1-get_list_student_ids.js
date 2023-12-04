// Exporting a function as the default export
export default function getListStudentIds(students) {
  // Check if the input is an array using instanceof
  if (students instanceof Array) {
    // If it's an array, use map to extract ids
    return students.map((student) => student.id);
  }
  // If not an array, return an empty array
  return [];
}
