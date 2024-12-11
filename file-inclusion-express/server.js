const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Configuración del almacenamiento con Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directorio donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// Middleware para servir archivos estáticos
app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Endpoint para subir archivos
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    res.status(200).json({
      message: 'Archivo subido con éxito',
      file: req.file,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error al subir el archivo',
      error: err.message,
    });
  }
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:3000`)
});
