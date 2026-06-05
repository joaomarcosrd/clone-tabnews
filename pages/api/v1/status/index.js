function status(request, response) {
  response.status(200).json({ chave: "Tudo funcionado" });
}
export default status;
