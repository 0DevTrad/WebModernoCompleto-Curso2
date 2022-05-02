export default function gerarNumero(req, res) {
  res.status(200).json({
    codigo: Math.random(),
  });
}
