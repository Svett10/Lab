export default {
  getStudents() {
    return fetch("/getStudents").then(res => res.json);
  }
};
